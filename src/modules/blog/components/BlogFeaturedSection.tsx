import React, { useMemo } from 'react';
import useSWR from 'swr';


import { BlogItemProps } from '@/common/types/blog';
import { fetcher } from '@/services/fetcher';

import BlogFeaturedHero from './BlogFeaturedHero';

const BlogFeaturedSection = () => {
  // const { data, isLoading } = useSWR(
  //   `/api/blog?page=1&per_page=4&categories=11`,
  //   fetcher,
  //   {
  //     revalidateOnFocus: false,
  //     refreshInterval: 0,
  //   }
  // );

    
  const data1: BlogItemProps = {
    id: 1,
  date: '2024-02-07T08:10:00Z',
  modified: "2024-02-07T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "Continuous improvement",
  },
  content: {
    rendered: "The London Clinic has been a registered charity since 1935. We proudly demonstrate our commitment to our charitable status through reinvesting any surplus income back into the hospital. ",
    markdown: "default",
    protected: true,
  },
  excerpt: {
    rendered: " Test questions are embedded throughout my lessons",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url:  "/images/f1.avif",
  total_views_count: 2,  
  }


  const data2: BlogItemProps = {
    id: 2,
    date: '2024-02-07T08:10:00Z',
  modified: "2024-02-07T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "Many ways to learn",
  },
  content: {
    rendered: "Exceptional patient care is a way of life for us.",
    markdown: "Exceptional patient care is a way of life for us.",
    protected: true,
  },
  excerpt: {
    rendered: "Learning experiences like interactive stories and podcasts.",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url:  "/images/f2.avif",
  total_views_count: 2,  
  }

  const data3: BlogItemProps = {
    id: 3,
    date: '2024-02-07T08:10:00Z',
  modified: "2024-02-07T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "Personalization",
  },
  content: {
    rendered: "We work together as one to guide you through each step of your experience",
    markdown: "We work together as one to guide you through each step of your experience",
    protected: true,
  },
  excerpt: {
    rendered: "Learning material at just the right difficulty level for each learner.",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url:  "/images/f3.avif",
  total_views_count: 2,  
  }

  const data4: BlogItemProps = {
    id: 4,
    date: '2024-02-07T08:10:00Z',
  modified: "2024-02-07T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "A balanced approach",
  },
  content: {
    rendered: "We proudly demonstrate our commitment to our charitable status",
    markdown: "We proudly demonstrate our commitment to our charitable status",
    protected: true,
  },
  excerpt: {
    rendered: "Implicit learning, is ideal for developing a strong foundational knowledge",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url:  "/images/f4.avif",
  total_views_count: 2,  
  }


  const data5: BlogItemProps = {
    id: 5,
    date: '2024-02-07T08:10:00Z',
  modified: "2019-10-25T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "default",
  },
  content: {
    rendered: "default",
    markdown: "default",
    protected: true,
  },
  excerpt: {
    rendered: "default",
    protected: true,
  },
  author: 2,
  featured_media: 2,
  comment_status: "default",
  ping_status: "default",
  sticky: true,
  template: "default",
  format: "default",
  meta: {
    footnotes: "default",
  },
  categories: [2,],
  tags:[ 2,],
  tags_list: [{
    term_id: 2,
    name: "default",
    slug: "default",
    term_group: 2,
    term_taxonomy_id: 2,
    taxonomy: "default",
    description: "default",
    parent: 2,
    count: 2,
    filter: "default",
  }],
  amp_enabled: true,
  featured_image_url: "https://images.unsplash.com/photo-1565307528294-f70f3c7094e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  total_views_count: 2,  
  }

  const featuredData: BlogItemProps[] = [data1, data2, data3, data4, data5]



  return (
    <>
  
  <BlogFeaturedHero data={featuredData} />
    
      
    </>
  );
};

export default BlogFeaturedSection;
