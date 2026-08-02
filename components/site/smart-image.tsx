'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  priority = false,
  sizes = '100vw',
  fill = false,
}: SmartImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className={cn(
          'absolute inset-0 bg-secondary transition-opacity duration-700',
          loaded ? 'opacity-0' : 'opacity-100'
        )}
        aria-hidden
      />
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        sizes={sizes}
        className={cn(
          'image-cover transition-all duration-700 ease-out',
          loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md',
          fill ? 'h-full w-full' : 'h-full w-full',
          imgClassName
        )}
      />
    </div>
  );
}
