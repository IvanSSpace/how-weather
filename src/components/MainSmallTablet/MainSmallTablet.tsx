import Image from 'next/image';

import styles from './mainSmallTablet.module.scss';

import { HeaderSmallTablet } from '@/components/MainSmallTablet/HeaderSmallTablet/HeaderSmallTablet';
import { WeatherDisplay } from '@/components/WeatherDisplay/WeatherDisplay';
import { WeatherInfoSmallTablet } from '@/components/MainSmallTablet/WeatherInfoSmallTablet/WeatherInfoSmallTablet';

const MainSmallTablet = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerTop}>
        <HeaderSmallTablet />
        <WeatherDisplay />
      </div>
      <div className={styles.containerBottom}>
        <WeatherInfoSmallTablet />
      </div>
    </div>
  );
};

export { MainSmallTablet };
