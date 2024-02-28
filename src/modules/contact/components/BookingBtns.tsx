import clsx from 'clsx';

import Button from '@/common/components/elements/Button';
import { BOOKINGLINKS, SOCIAL_MEDIA } from '@/common/constant/menu';

const BookingBtns = () => {
  const handleAction = (link: string) => window.open(link, '_blank');

  return (
    <div className='space-y-5 pb-2'>
      <h3 className='text-lg font-medium'></h3>
      <div className='flex flex-col md:flex-row justify-between gap-3'>
        {BOOKINGLINKS?.map((item, index: number) => (
          <Button
            className={clsx(
              'w-full flex justify-center items-center hover:scale-105 transition-all duration-300',
              item?.className
            )}
            key={index}
            onClick={() => handleAction(item?.href)}
            icon={item?.icon}
            data-umami-event={item?.eventName}
          >
            {item?.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default BookingBtns;
