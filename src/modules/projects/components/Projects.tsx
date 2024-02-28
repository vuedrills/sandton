import { motion } from 'framer-motion';
import InfiniteScroll from 'react-infinite-scroll-component';

import EmptyState from '@/common/components/elements/EmptyState';
import { ProjectItemProps, ProjectsProps } from '@/common/types/projects';

import ProjectCard from './ProjectCard';

interface ProjectsComponentProps {
  projects: ProjectsProps['projects'];
  loadMore: () => void;
  hasMore: boolean;
}

const Projects = () => {
  //const filteredProjects = projects.filter((project) => project?.is_show);

  const data1: ProjectItemProps = {

    slug: "default",
    updated_at:'2024-02-07T08:10:00Z',
    
    
    
    image: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
    title: 
       "We go further",
    
    
    description:
      "We operate as teams of experts with world-class resources dedicated to maintaining the highest standards of medical care.",
    
    
    link_demo: "default",
    link_github: "default",
    stacks: "true",
    content: "default",
    is_show: true,
    is_featured: true,
    
    }
    
    const data2: ProjectItemProps = {
    
      slug: "default",
      updated_at:'2024-02-07T08:10:00Z',
      
      
      
      image: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
      title: 
         "We go further",
      
      
      description:
        "We operate as teams of experts with world-class resources dedicated to maintaining the highest standards of medical care.",
      
      
      link_demo: "default",
      link_github: "default",
      stacks: "true",
      content: "default",
      is_show: true,
      is_featured: true,
      
      }
    
    
      const data3: ProjectItemProps = {
    
        slug: "default",
        updated_at:'2024-02-07T08:10:00Z',
        
        
        
        image: "https://images.unsplash.com/photo-1471128466710-c26ff0d26143",
        title: 
           "We go further",
        
        
        description:
          "We operate as teams of experts with world-class resources dedicated to maintaining the highest standards of medical care.",
        
        
        link_demo: "default",
        link_github: "default",
        stacks: "true",
        content: "default",
        is_show: true,
        is_featured: true,
        
        }
    
    
        const filteredProjects = [data1, data2, data3,]
  

  if (filteredProjects.length === 0) {
    return <EmptyState message='No Data' />;
  }

  return (
  
      <div className='grid sm:grid-cols-2 gap-5 pt-2 px-1'>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
  
  );
};

export default Projects;
