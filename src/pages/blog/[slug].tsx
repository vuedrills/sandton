import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import { formatExcerpt } from '@/common/helpers';
import { BlogDetailProps, BlogItemProps } from '@/common/types/blog';
import BlogDetail from '@/modules/blog/components/BlogDetail';

const GiscusComment = dynamic(
  () => import('@/modules/blog/components/GiscusComment')
);


const BlogDetailPage: NextPage<BlogItemProps> = (blog) => {
  const blogData = blog || {};
  console.log(blog);

  const slug = `blog/${blogData?.slug}?id=${blogData?.id}`;
  const canonicalUrl = `https://aulianza.id/${slug}`;
  const description = blog.status;




  return (
    <>
      <NextSeo
        title={`${blogData?.title?.rendered} - Blog Tapiwa Benhura`}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: blogData?.date,
            modifiedTime: blogData?.date,
            authors: ['Tapiwa Benhura', 'aulianza'],
          },
          url: canonicalUrl,
          images: [
            {
              url: blogData?.featured_image_url,
            },
          ],
          siteName: 'aulianza blog',
        }}
      />
      <Container data-aos='fade-up'>
        <BackButton url='/blog' />
        <BlogDetail {...blogData} />
        <section id='comments'>
          <GiscusComment isEnableReaction={false} />
        </section>
      </Container>
    </>
  );
};

export default BlogDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const blogId = context.query?.id as string;

  if (!blogId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }



  const data1: BlogItemProps = {
    id: 1,
  date: '2024-02-07T08:10:00Z',
  modified: "2024-02-07T08:10:00Z",
  slug: "default",
  status: "default",
  link: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
  title: {
    rendered: "We go further",
  },
  content: {
    rendered: "The London Clinic has been a registered charity since 1935. We proudly demonstrate our commitment to our charitable status through reinvesting any surplus income back into the hospital. ",
    markdown: "default",
    protected: true,
  },
  excerpt: {
    rendered: "We operate as teams of experts with world-class resources dedicated to maintaining the highest standards of medical care.",
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
  featured_image_url:  "/images/f1.jpg",
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
    rendered: "We personalise care",
  },
  content: {
    rendered: "Exceptional patient care is a way of life for us.",
    markdown: "Exceptional patient care is a way of life for us.",
    protected: true,
  },
  excerpt: {
    rendered: "Exceptional patient care is a way of life for us.",
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
  featured_image_url:  "/images/f2.jpg",
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
    rendered: "We work as one",
  },
  content: {
    rendered: "We work together as one to guide you through each step of your experience",
    markdown: "We work together as one to guide you through each step of your experience",
    protected: true,
  },
  excerpt: {
    rendered: "We work together as one to guide you through each step of your experience",
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
  featured_image_url:  "/images/f3.jpg",
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
    rendered: "Excellence in one place",
  },
  content: {
    rendered: "We proudly demonstrate our commitment to our charitable status",
    markdown: "We proudly demonstrate our commitment to our charitable status",
    protected: true,
  },
  excerpt: {
    rendered: "We proudly demonstrate our commitment to our charitable status",
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
  featured_image_url:  "/images/f4.jpg",
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

  const blogData: BlogItemProps[] = [data1, data2, data3, data4, data5]
  const response = blogData[parseInt(blogId)];

  if (blogData.length === 0) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog: response,
    },
  };
};
