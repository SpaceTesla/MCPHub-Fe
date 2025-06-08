'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ServerCard } from '@/components/server-card';
import { Search, Loader2 } from 'lucide-react';

interface Repository {
  type: string;
  url: string;
}

interface RunConfig {
  command: string;
  args: string[];
  port: number;
}

interface Server {
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
  keywords: string[];
  repository: Repository;
  run: RunConfig;
  object_key: string;
  overview: string;
  tools: string;
  created_at: string;
}

interface ServersResponse {
  servers: Server[];
}

const API_BASE_URL = 'http://localhost:8080';

async function fetchServers(): Promise<Server[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/servers`, {
      headers: {
        'Content-Type': 'application/json',
      },
      // Add timeout and other fetch options
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ServersResponse = await response.json();
    return data.servers || [];
  } catch (error) {
    console.error('Error fetching servers:', error);
    
    // If fetch fails, could provide fallback data or just throw
    if (error instanceof Error && error.name === 'TimeoutError') {
      throw new Error('Request timed out - please check if the server is running');
    }
    
    throw error;
  }
}

export default function ServersPage() {
  const [filter, setFilter] = useState('all');
  const [servers, setServers] = useState<Server[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadServers = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedServers = await fetchServers();
        setServers(fetchedServers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load servers');
      } finally {
        setLoading(false);
      }
    };

    loadServers();
  }, []);

  // Filter servers based on search term and filter
  const filteredServers = servers.filter((server) => {
    const matchesSearch = 
      server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      server.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      server.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    // For now, return all servers that match search since we don't have
    // popularity/trending data from backend
    return matchesSearch;
  });

  if (loading) {
    return (
      <div className='container mx-auto py-8 md:px-6 md:py-12'>
        <div className='flex items-center justify-center min-h-[400px]'>
          <Loader2 className='h-8 w-8 animate-spin' />
          <span className='ml-2'>Loading servers...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='container mx-auto py-8 md:px-6 md:py-12'>
        <div className='flex items-center justify-center min-h-[400px]'>
          <div className='text-center'>
            <p className='text-red-500 mb-4'>Error loading servers: {error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              variant="outline"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto py-8 md:px-6 md:py-12'>
      <h1 className='text-3xl font-bold mb-2'>MCP Servers</h1>
      <p className='text-muted-foreground mb-6'>
        Explore and discover MCP servers
      </p>

      <div className='relative mb-6'>
        <Search className='absolute left-3 top-3 h-5 w-5 text-muted-foreground' />
        <Input
          type='search'
          placeholder='Search servers'
          className='pl-10 h-12 bg-background border-border'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='flex gap-2 mb-8 overflow-x-auto pb-2'>
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          onClick={() => setFilter('all')}
          className={
            filter === 'all'
              ? 'bg-primary hover:bg-primary/90'
              : 'border-border bg-background'
          }
        >
          All
        </Button>
        <Button
          variant={filter === 'popular' ? 'default' : 'outline'}
          onClick={() => setFilter('popular')}
          className={
            filter === 'popular'
              ? 'bg-primary hover:bg-primary/90'
              : 'border-border bg-background'
          }
        >
          Popular
        </Button>
        <Button
          variant={filter === 'newest' ? 'default' : 'outline'}
          onClick={() => setFilter('newest')}
          className={
            filter === 'newest'
              ? 'bg-primary hover:bg-primary/90'
              : 'border-border bg-background'
          }
        >
          Newest
        </Button>
        <Button
          variant={filter === 'trending' ? 'default' : 'outline'}
          onClick={() => setFilter('trending')}
          className={
            filter === 'trending'
              ? 'bg-primary hover:bg-primary/90'
              : 'border-border bg-background'
          }
        >
          Trending
        </Button>
      </div>

      <h2 className='text-xl font-bold mb-4'>Servers ({filteredServers.length})</h2>
      {filteredServers.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-muted-foreground'>
            {searchTerm ? `No servers found matching "${searchTerm}"` : 'No servers available'}
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {filteredServers.map((server) => (
            <ServerCard
              key={server.name}
              id={server.name}
              name={server.name}
              description={server.description}
              imageUrl={`/placeholder.svg?height=200&width=200&text=${server.name.charAt(0)}`}
              logoUrl={server.repository?.url ? '/globe.svg' : '/file.svg'}
              tag={`v${server.version}`}
              downloads={Math.floor(Math.random() * 10000)} // Placeholder since downloads aren't in backend data
            />
          ))}
        </div>
      )}

      <div className='flex justify-center mt-12 gap-2'>
        <Button
          variant='outline'
          className='border-border bg-background'
          disabled
        >
          Previous
        </Button>
        <Button
          variant='outline'
          className='border-border bg-primary hover:bg-primary/90 text-primary-foreground'
        >
          1
        </Button>
        <Button variant='outline' className='border-border bg-background'>
          2
        </Button>
        <Button variant='outline' className='border-border bg-background'>
          3
        </Button>
        <Button
          variant='outline'
          className='border-border bg-background'
          disabled
        >
          ...
        </Button>
        <Button variant='outline' className='border-border bg-background'>
          10
        </Button>
        <Button variant='outline' className='border-border bg-background'>
          Next
        </Button>
      </div>
    </div>
  );
}
