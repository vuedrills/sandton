import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
  SiAlchemy,
  SiAngular,
  SiApollographql,
  SiCaffeine,
  SiCoil,
  SiCss3,
  SiDedge,
  SiExpress,
  SiFirebase,
  SiGatsby,
  SiGraphql,
  SiHal,
  SiJavascript,
  SiJest,
  SiJetbrains,
  SiJquery,
  SiKaios,
  SiLaravel,
  SiLeroymerlin,
  SiMoscowmetro,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPantheon,
  SiPhp,
  SiPrisma,
  SiPwa,
  SiReact,
  SiRedux,
  SiRemix,
  SiRenpy,
  SiSocketdotio,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
  SiWordpress,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  Physics: <SiMoscowmetro size={iconSize} className='text-blue-500' />,
  Chemistry: <SiCoil size={iconSize} className='text-yellow-400' />,
  Mathematics: <SiHal size={iconSize} className='text-blue-400' />,
  'English': <SiLeroymerlin size={iconSize} />,
  'Biology': <SiRenpy size={iconSize} className='text-sky-500' />,
  'Combined Science': <SiPantheon size={iconSize} className='text-yellow-400' />,
  Programming: <SiDedge size={iconSize} className='text-cyan-300' />,
 
  
};

export const STACKSA: stacksProps = {
  Physics: <SiMoscowmetro size={iconSize} className='text-blue-500' />,
  Chemistry: <SiCoil size={iconSize} className='text-yellow-400' />,
  'Pure Mathematics': <SiHal size={iconSize} className='text-blue-400' />,
  Statistics: <SiHal size={iconSize} className='text-blue-400' />,
  'Mechanical Maths': <SiHal size={iconSize} className='text-blue-400' />,
  Programming: <SiJetbrains size={iconSize} className='text-cyan-300' />,
};
