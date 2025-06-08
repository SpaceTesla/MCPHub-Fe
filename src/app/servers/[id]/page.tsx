'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useParams } from 'next/navigation';

interface ServerPageProps {
  params: {
    id: string;
  };
}

export default function ServerPage({ params: serverParams }: ServerPageProps) {
  const [activeTab, setActiveTab] = useState('overview');

  // Use useParams hook instead of directly accessing params
  const params = useParams();
  const id =
    typeof params?.id === 'string'
      ? decodeURIComponent(params.id as string)
      : serverParams.id;

  // Extract organization and repo name from the id parameter
  const idParts = (id || '').split('/');
  const org = idParts[0] || '';
  const repo = idParts[1] || '';
  const organization = org.replace('@', '');

  // This would normally come from an API or database
  const serverData = {
    id: id,
    name: repo || 'Unknown Server',
    description:
      "A brief description of the server's functionality and purpose.",
    version: '1.0.0',
    license: 'MIT',
    author: organization || 'Unknown Author',
    lastUpdated: '2024-01-15',
    readme:
      "This section contains the server's README content, providing detailed information about its features, usage, and configuration. It may include code snippets, examples, and troubleshooting tips.",
    examples:
      'This section showcases practical examples of how to use the server, demonstrating its capabilities and integration with other systems. Examples may include code samples, use cases, and step-by-step guides.',
    apiReference:
      'This section provides a comprehensive API reference for the server, detailing its endpoints, request parameters, response formats, and authentication requirements. It serves as a technical guide for developers integrating with the server.',
    tools: [
      {
        id: 1,
        name: 'Data Processing',
        description:
          'This tool processes raw data into a structured format suitable for analysis. Example: To process data, send a POST request to /process with the raw data in the request body.',
      },
      {
        id: 2,
        name: 'Model Training',
        description:
          'This tool trains machine learning models using the processed data. Example: Initiate model training by sending a POST request to /train with training parameters in the request body.',
      },
      {
        id: 3,
        name: 'Prediction',
        description:
          'This tool generates predictions using a trained model. Example: To get predictions, send a POST request to /predict with input data in the request body.',
      },
    ],
    installation:
      'Instructions on how to install and set up the server, including prerequisites, dependencies, and configuration steps. This may involve command-line instructions or links to installation guides.',
  };

  const stats = {
    downloads: '1,234',
    stars: '567',
    forks: '89',
  };

  return (
    <div className='container mx-auto py-8 md:px-6 md:py-12'>
      {/* Breadcrumb */}
      <div className='flex items-center gap-1 text-sm text-muted-foreground mb-6'>
        <Link href='/servers' className='hover:text-foreground'>
          Servers
        </Link>
        <ChevronRight className='h-4 w-4' />
        <span className='text-foreground'>{serverData.name}</span>
      </div>

      {/* Server Header */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold mb-2'>{serverData.name}</h1>
        <div className='text-sm text-muted-foreground mb-2'>
          {serverData.id}
        </div>
        <p className='text-muted-foreground'>{serverData.description}</p>
      </div>

      <div className='grid lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          {/* Tabs */}
          <Tabs
            defaultValue='overview'
            className='mb-8'
            onValueChange={setActiveTab}
          >
            <TabsList className='bg-muted border-b border-border w-full justify-start rounded-none h-auto p-0'>
              <TabsTrigger
                value='overview'
                className={`rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                  activeTab === 'overview' ? 'border-foreground' : ''
                }`}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value='tools'
                className={`rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                  activeTab === 'tools' ? 'border-foreground' : ''
                }`}
              >
                Tools/Functions
              </TabsTrigger>
              <TabsTrigger
                value='api'
                className={`rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                  activeTab === 'api' ? 'border-foreground' : ''
                }`}
              >
                API Documentation
              </TabsTrigger>
              <TabsTrigger
                value='installation'
                className={`rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none ${
                  activeTab === 'installation' ? 'border-foreground' : ''
                }`}
              >
                Installation
              </TabsTrigger>
            </TabsList>

            <TabsContent value='overview' className='mt-6'>
              <div className='space-y-8'>
                <div>
                  <h2 className='text-xl font-bold mb-4'>README</h2>
                  <p className='text-muted-foreground leading-relaxed'>
                    {serverData.readme}
                  </p>
                </div>

                <div>
                  <h2 className='text-xl font-bold mb-4'>Examples</h2>
                  <p className='text-muted-foreground leading-relaxed'>
                    {serverData.examples}
                  </p>
                </div>

                <div>
                  <h2 className='text-xl font-bold mb-4'>API Reference</h2>
                  <p className='text-muted-foreground leading-relaxed'>
                    {serverData.apiReference}
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value='tools' className='mt-6'>
              <div className='space-y-8'>
                <div>
                  <h2 className='text-xl font-bold mb-4'>Tools/Functions</h2>
                  <p className='text-muted-foreground mb-6'>
                    This section lists the available tools and functions
                    provided by the server, along with descriptions and usage
                    examples. Each tool/function is accompanied by a brief
                    explanation of its purpose and how to use it effectively.
                  </p>

                  {serverData.tools.map((tool) => (
                    <div key={tool.id} className='mb-8'>
                      <h3 className='text-lg font-bold mb-2'>
                        Tool {tool.id}: {tool.name}
                      </h3>
                      <p className='text-muted-foreground leading-relaxed'>
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value='api' className='mt-6'>
              <div>
                <h2 className='text-xl font-bold mb-4'>API Documentation</h2>
                <p className='text-muted-foreground leading-relaxed'>
                  {serverData.apiReference}
                </p>
              </div>
            </TabsContent>

            <TabsContent value='installation' className='mt-6'>
              <div>
                <h2 className='text-xl font-bold mb-4'>Installation</h2>
                <p className='text-muted-foreground leading-relaxed'>
                  {serverData.installation}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          {/* Metadata */}
          <div className='bg-card border border-border rounded-lg p-6'>
            <h2 className='text-xl font-bold mb-6'>Metadata</h2>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <h3 className='text-sm text-muted-foreground mb-1'>Version</h3>
                <p>{serverData.version}</p>
              </div>
              <div>
                <h3 className='text-sm text-muted-foreground mb-1'>License</h3>
                <p>{serverData.license}</p>
              </div>
            </div>

            <Separator className='my-6' />

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <h3 className='text-sm text-muted-foreground mb-1'>
                  Organization
                </h3>
                <p>{organization || 'Unknown'}</p>
              </div>
              <div>
                <h3 className='text-sm text-muted-foreground mb-1'>
                  Repository
                </h3>
                <p>{repo || 'Unknown'}</p>
              </div>
            </div>

            <Separator className='my-6' />

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <h3 className='text-sm text-muted-foreground mb-1'>Author</h3>
                <p>{serverData.author}</p>
              </div>
              <div>
                <h3 className='text-sm text-muted-foreground mb-1'>
                  Last Updated
                </h3>
                <p>{serverData.lastUpdated}</p>
              </div>
            </div>

            <Separator className='my-6' />

            <h2 className='text-xl font-bold mb-6'>Installation</h2>
            <div className='bg-muted p-4 rounded-md font-mono text-sm mb-4 overflow-x-auto'>
              <pre>npm install {serverData.id}</pre>
            </div>
            <p className='text-muted-foreground mb-6'>
              Instructions on how to install and set up the server, including
              prerequisites, dependencies, and configuration steps. This may
              involve command-line instructions or links to installation guides.
            </p>

            <Separator className='my-6' />

            <h2 className='text-xl font-bold mb-6'>Stats</h2>

            <div className='space-y-6'>
              <div>
                <h3 className='text-sm text-muted-foreground mb-1'>
                  Downloads
                </h3>
                <p className='text-2xl font-bold'>{stats.downloads}</p>
              </div>

              <div>
                <h3 className='text-sm text-text-400 mb-1'>Stars</h3>
                <p className='text-2xl font-bold'>{stats.stars}</p>
              </div>

              <div>
                <h3 className='text-sm text-text-400 mb-1'>Forks</h3>
                <p className='text-2xl font-bold'>{stats.forks}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
