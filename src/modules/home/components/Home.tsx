import Breakline from '@/common/components/elements/Breakline';

import BlogPreview from './BlogPreview';
import Introduction from './Introduction';
import Services from './Services';
import Skills from '@/modules/about/components/Skills';
import SkillsA from '@/modules/about/components/SkillsA';
import BlogCarousel from './BlogCarousel';
import BlogFeaturedHero from '@/modules/blog/components/BlogFeaturedHero';
import BlogFeaturedSection from '@/modules/blog/components/BlogFeaturedSection';
import BookingBtns from '@/modules/contact/components/BookingBtns';
import CareerList from '@/modules/about/components/CareerList';
import EducationList from '@/modules/about/components/EducationList';

const Home = () => {
  return (
    <>
    
      <Introduction />
      <Breakline className='mt-4 mb-4' />
     
      <BlogFeaturedSection />
      <BookingBtns/>
{/*       
      <Breakline className='mt-8 mb-7' /> */}
      {/* <Skills /> */}

      <Breakline className='my-8' />

      <SkillsA />
      <Breakline className='my-8' />
      <CareerList />
    
      <Breakline className='my-8' />
      <Services />
      <Breakline className='my-8' />
      <EducationList />
    </>
  );
};

export default Home;
