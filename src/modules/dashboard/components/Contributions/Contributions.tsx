import Link from 'next/link';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import useSWR from 'swr';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { fetcher } from '@/services/fetcher';

import Calendar from './Calendar';
import Overview from './Overview';

type ContributionsProps = {
  username: string;
  type: string;
  endpoint: string;
};

const Contributions = () => {
 

 

  return (
    <section className='flex flex-col gap-y-2'>
      {/* <SectionHeading
        title='Contributions'
        icon={<GithubIcon className='mr-1' />}
      /> */}
      <SectionSubHeading>
        <p className='dark:text-neutral-400'>
          My lesson and students results statistics.
        </p>
        <Link
          href={`https://github.com/`}
          target='_blank'
          passHref
          className='text-sm font-code text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 hover:dark:text-neutral-400'
        >
          "Ben"        </Link>
      </SectionSubHeading>

   

      
        <div className='space-y-3'>
          <Overview />
         
        </div>
      
    </section>
  );
};

export default Contributions;
