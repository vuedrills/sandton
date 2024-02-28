import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useDebounce } from 'usehooks-ts';

import EmptyState from '@/common/components/elements/EmptyState';
import Pagination from '@/common/components/elements/Pagination';
import SearchBar from '@/common/components/elements/SearchBar';
import { BlogItemProps } from '@/common/types/blog';
import { fetcher } from '@/services/fetcher';

import BlogCardNew from './BlogCardNew';
import BlogFeaturedSection from './BlogFeaturedSection';

const BlogListNew = () => {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // const { data, error, mutate, isValidating } = useSWR(
  //   `/api/blog?page=${page}&per_page=6&search=${debouncedSearchTerm}`,
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


  const  totalPages = 1;
 const total_posts = blogData.length;

 


  const handlePageChange = async (newPage: number) => {
    // await mutate();
    router.push(
      {
        pathname: '/blog',
        query: { page: newPage, search: debouncedSearchTerm },
      },
      undefined,
      { shallow: true }
    );
    setPage(newPage);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event?.target?.value;
    setSearchTerm(searchValue);
    setPage(1);

    router.push(
      {
        pathname: '/blog',
        query: searchValue ? { page: 1, search: searchValue } : { page: 1 },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setPage(1);

    router.push(
      {
        pathname: '/blog',
        query: { page: 1 },
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    const queryPage = Number(router.query.page);
    if (!isNaN(queryPage) && queryPage !== page) {
      setPage(queryPage);
    }
  }, [page, router.query.page, searchTerm]);

  const renderEmptyState = () =>
    
    (blogData.length === 0) && (
      <EmptyState message={'No Post Found.'} />
    );

  return (
    <div className='space-y-10'>
      <BlogFeaturedSection />

      <div className='space-y-5'>
        <div className='flex flex-col sm:flex-row gap-3 justify-between items-center mb-6'>
          <div className='flex items-center gap-2 text-xl font-sora font-medium px-1'>
            {searchTerm ? (
              <div>
                <span className='text-neutral-600 dark:text-neutral-400 mr-2'>
                  Search:
                </span>
                <span className='italic'>{searchTerm}</span>
              </div>
            ) : (
              <h4 className='text-neutral-800 dark:text-neutral-200'>
                Latest Articles
              </h4>
            )}
            <span className='rounded-full py-1 px-2 bg-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50 text-xs font-sora'>
              {total_posts}
            </span>
          </div>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearch}
            onClearSearch={handleClearSearch}
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
          
            <>
              {blogData.map((item: BlogItemProps, index: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <BlogCardNew {...item} />
                </motion.div>
              ))}
            </>
          
        </div>

       
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        

        {renderEmptyState()}
      </div>
    </div>
  );
};

export default BlogListNew;
