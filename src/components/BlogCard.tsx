
import React from 'react';
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  id: string;
  className?: string;
}

const BlogCard = ({ title, excerpt, imageUrl, date, id, className }: BlogCardProps) => {
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <a href={`#${id}`} className="block">
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <img 
            src={imageUrl} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <p className="mb-2 text-sm font-medium text-primary/60">{date}</p>
          <h3 className="mb-3 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">{title}</h3>
          <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
        </div>
      </a>
    </div>
  );
};

export default BlogCard;
