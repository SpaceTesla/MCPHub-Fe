import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

interface ServerCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tag?: string;
  downloads?: number;
  logoUrl?: string;
}

export function ServerCard({
  id,
  name,
  description,
  imageUrl,
  tag,
  downloads = 0,
  logoUrl,
}: ServerCardProps) {
  return (
    <Link
      href={`/servers/${encodeURIComponent(id)}`}
      className='block w-full h-full'
    >
      <Card className='overflow-hidden bg-card border-border hover:border-muted-foreground transition-colors h-full'>
        <CardContent className='h-full justify-between flex flex-col'>
          <div className='flex items-center gap-3 mb-1.5'>
            <div className='w-8 h-8 rounded-md bg-muted flex items-center justify-center overflow-hidden flex-shrink-0'>
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={`${name} logo`}
                  width={32}
                  height={32}
                  className='object-contain p-1'
                />
              ) : (
                <div className='w-5 h-5 bg-primary/30' />
              )}
            </div>
            <div className='flex-1 min-w-0'>
              <h3 className='font-bold text-lg leading-tight truncate'>
                {name}
              </h3>
              {tag && (
                <div className='text-xs text-muted-foreground truncate mt-0.5'>
                  {tag}
                </div>
              )}
            </div>
          </div>
          <p className='text-sm text-muted-foreground mb-3'>{description}</p>
          <div className='flex items-center justify-end text-xs text-muted-foreground'>
            <span>{downloads.toLocaleString()} downloads</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
