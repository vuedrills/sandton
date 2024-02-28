export interface ProjectItemProps {
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string;
  link_github?: string;
  stacks: string;
  content?: string;
  is_show: boolean;
  is_featured: boolean;
  updated_at: string;
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}

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


    const blogData: ProjectsProps ={ projects: [data1, data2, data3,]}