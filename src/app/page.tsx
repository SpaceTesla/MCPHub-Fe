import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { ServerCard } from '@/components/server-card';
import { StatCard } from '@/components/stat-card';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <section className='relative w-full py-12 md:py-24 bg-background'>
        <div className='container mx-auto md:px-6 text-center'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6'>
            Discover and Share MCP Servers
          </h1>
          <p className='max-w-3xl mx-auto text-muted-foreground md:text-xl mb-8'>
            Explore a comprehensive registry of Model Context Protocol servers,
            enabling seamless integration and collaboration in AI model
            development.
          </p>
          <div className='max-w-md mx-auto relative'>
            <Search className='absolute left-3 top-3 h-5 w-5 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search for servers'
              className='pl-10 h-12 bg-card border-input'
            />
            <Button className='absolute right-1 top-1 h-10 bg-primary hover:bg-primary/90 text-primary-foreground'>
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Servers */}
      <section className='w-full py-12 md:py-16 bg-card'>
        <div className='container mx-auto md:px-6'>
          <h2 className='text-2xl font-bold tracking-tight mb-8 text-card-foreground'>
            Trending Servers
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <ServerCard
              id='@openai/context-manager'
              name='Context Manager'
              description='Advanced features for managing model contexts with extensive customization options'
              imageUrl='/placeholder.svg?height=200&width=200'
              logoUrl='/file.svg'
              tag='@openai/context-manager'
              downloads={12540}
            />
            <ServerCard
              id='@smithery-ai/model-gateway'
              name='Model Gateway'
              description='Handles different model contexts with real-time processing and advanced routing'
              imageUrl='/placeholder.svg?height=200&width=200'
              logoUrl='/globe.svg'
              tag='@smithery-ai/model-gateway'
              downloads={8320}
            />
            <ServerCard
              id='@anthropic/inference-hub'
              name='Inference Hub'
              description='Focused on optimizing model inference with specialized hardware acceleration'
              imageUrl='/placeholder.svg?height=200&width=200'
              logoUrl='/window.svg'
              tag='@anthropic/inference-hub'
              downloads={3645}
            />
          </div>
        </div>
      </section>

      {/* Registry Stats */}
      <section className='w-full py-12 md:py-16 bg-muted'>
        <div className='container mx-auto md:px-6'>
          <h2 className='text-2xl font-bold tracking-tight mb-8 text-foreground'>
            Registry Stats
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <StatCard title='Total Servers' value='1,200+' />
            <StatCard title='Active Users' value='500+' />
            <StatCard title='Daily Interactions' value='10,000+' />
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className='w-full py-12 md:py-16 bg-card'>
        <div className='container mx-auto md:px-6'>
          <h2 className='text-2xl font-bold tracking-tight mb-8 text-card-foreground'>
            Getting Started
          </h2>
          <div className='grid md:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-xl font-bold mb-4 text-foreground'>
                Integrate Your Server
              </h3>
              <p className='text-muted-foreground mb-6'>
                Learn how to integrate your MCP server with the registry and
                make it discoverable to the community.
              </p>
              <Button
                asChild
                className='bg-primary hover:bg-primary/90 text-primary-foreground'
              >
                <Link href='/docs/getting-started'>Get Started</Link>
              </Button>
            </div>
            <div className='relative h-[300px] bg-background-100 dark:bg-background-800 rounded-lg overflow-hidden'>
              <Image
                src='/placeholder.svg?height=300&width=500'
                alt='Getting started illustration'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
