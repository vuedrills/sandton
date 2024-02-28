import OverviewItem from './OverviewItem';

interface OverviewProps {
  data: {
    totalContributions?: number;
    weeks?: {
      contributionDays: {
        contributionCount: number;
      }[];
    }[];
  };
}

const Overview = () => {
  const totalContributions = 1145


  const totalThisWeekContribution = 23
   

  const bestContribution = 33
  const averageContribution = 15

  return (
    <div className='grid grid-cols-2 gap-3 py-2 sm:grid-cols-4'>
      <OverviewItem label='Total lessons' value={totalContributions} />
      <OverviewItem label='Lessons this Month' value={totalThisWeekContribution} />
      <OverviewItem label='Online Lessons' value={bestContribution} />
      <OverviewItem label='Average lessons' value={averageContribution} unit='/ day' />
    </div>
  );
};

export default Overview;
