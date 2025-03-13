
import React from 'react';
import { cn } from "@/lib/utils";

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  id: string;
  className?: string;
}

const FeaturedArticle = ({ title, excerpt, imageUrl, date, id, className }: FeaturedArticleProps) => {
  return (
    <section 
      id="featured"
      className={cn(
        "relative overflow-hidden py-28 md:py-36",
        className
      )}
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>
      
      <div className="relative z-10 container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-sm font-medium text-primary/60 animate-fade-in">{date}</p>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            {title}
          </h1>
          <p className="mb-8 text-xl text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            {excerpt}
          </p>
          <a 
            href={`#${id}`}
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:bg-primary/90 animate-fade-in opacity-0 shadow-lg hover:shadow-xl"
            style={{ animationDelay: '900ms' }}
          >
            Read Article
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
