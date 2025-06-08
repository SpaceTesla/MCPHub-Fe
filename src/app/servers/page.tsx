'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ServerCard } from '@/components/server-card';
import { Search } from 'lucide-react';

const servers = [
  {
    id: '@openai/context-manager',
    name: 'Context Manager',
    description: 'A server for managing models in a specific context.',
    logoUrl: '/file.svg',
    tag: '@openai/context-manager',
    downloads: 12540,
  },
  {
    id: '@smithery-ai/model-gateway',
    name: 'Model Gateway',
    description: 'Another server for handling different model contexts.',
    logoUrl: '/globe.svg',
    tag: '@smithery-ai/model-gateway',
    downloads: 8320,
  },
  {
    id: '@anthropic/inference-hub',
    name: 'Inference Hub',
    description: 'A server focused on a particular type of model.',
    logoUrl: '/window.svg',
    tag: '@anthropic/inference-hub',
    downloads: 3645,
  },
  {
    id: '@vercel/token-router',
    name: 'Token Router',
    description: 'A server with advanced features for model management.',
    logoUrl: '/vercel.svg',
    tag: '@vercel/token-router',
    downloads: 9852,
  },
  {
    id: '@cohere/embeddings-api',
    name: 'Embeddings API',
    description: 'A server designed for scalability and performance.',
    logoUrl: '/next.svg',
    tag: '@cohere/embeddings-api',
    downloads: 7456,
  },
  {
    id: '@huggingface/model-trainer',
    name: 'Model Trainer',
    description: 'A server with a user-friendly interface.',
    logoUrl: '/file.svg',
    tag: '@huggingface/model-trainer',
    downloads: 4231,
  },
  {
    id: '@meta/context-store',
    name: 'Context Store',
    description: 'A server for specialized model contexts.',
    logoUrl: '/globe.svg',
    tag: '@meta/context-store',
    downloads: 1850,
  },
  {
    id: '@google/llm-gateway',
    name: 'LLM Gateway',
    description: 'A server with a large community of users.',
    logoUrl: '/window.svg',
    tag: '@google/llm-gateway',
    downloads: 15230,
  },
  {
    id: 'i',
    name: 'Server I',
    description: 'A server that integrates with other tools.',
  },
  {
    id: 'j',
    name: 'Server J',
    description: 'A server for experimental model contexts.',
  },
  {
    id: 'k',
    name: 'Server K',
    description: 'A server with a focus on security.',
  },
  {
    id: 'l',
    name: 'Server L',
    description: 'A server for managing large-scale models.',
  },
];

export default function ServersPage() {
  const [filter, setFilter] = useState('all');

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

      <h2 className='text-xl font-bold mb-4'>Servers</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {servers.map((server) => (
          <ServerCard
            key={server.id}
            id={server.id}
            name={server.name}
            description={server.description}
            imageUrl={`/placeholder.svg?height=200&width=200&text=${server.name.charAt(
              server.name.length - 1
            )}`}
            logoUrl={server.logoUrl}
            tag={server.tag}
            downloads={server.downloads}
          />
        ))}
      </div>

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
