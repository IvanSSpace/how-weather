import Image from 'next/image';

import styles from './weatherInfoSmallTablet.module.scss';

const WeatherInfoSmallTablet = () => {
  return (
    <div className={styles.weatherInfo}>
      <p className='text-xl mb-9'>Weather Details...</p>
      <div>
        
        <p className='text-xl mb-6'>THUNDERSTORM WITH LIGHT DRIZZLE</p>
        <ul className='flex flex-col gap-[30px] mx-11'>
          <li className='flex flex-row justify-between items-center gap-2'>
            <p>Temp max</p>
            <div className='flex items-center justify-between gap-4 w-[70px] '>
              <p>19°C</p>
              <Image
                src='/images/iconsSmall/maxTemperature.svg'
                alt='maxTemperature'
                width={15}
                height={15}
              />
            </div>
          </li>
          <li className='flex flex-row justify-between items-center gap-2'>
            <p>Temp max</p>
            <div className='flex items-center justify-between gap-4 w-[70px]'>
              <p>19°C</p>
              <Image
                src='/images/iconsSmall/maxTemperature.svg'
                alt='maxTemperature'
                width={15}
                height={15}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { WeatherInfoSmallTablet };
