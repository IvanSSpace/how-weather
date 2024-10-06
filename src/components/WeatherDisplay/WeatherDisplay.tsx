import CloudIcon from '@mui/icons-material/Cloud';

import styles from './weatherDisplay.module.scss';

const WeatherDisplay = () => {
  return (
    <div className={styles.weather}>
      <span className='text-[64px] font-normal'>12</span>
      <p>
        {' '}
        <span className='text-[30px]'>°C</span>
      </p>

      <p className='font-normal text-[30px]'>London</p>
      <CloudIcon style={{ fontSize: '50px' }} />
    </div>
  );
};

export { WeatherDisplay };
