import { HeaderSmallTablet } from '@/components/MainSmallTablet/HeaderSmallTablet/HeaderSmallTablet';
import { Weather } from '@/components/Weather/Weather';

const MainSmallTablet = () => {
  return (
    <div className='lg:hidden'>
      <HeaderSmallTablet />
      <Weather />
    </div>
  );
};

export { MainSmallTablet };
