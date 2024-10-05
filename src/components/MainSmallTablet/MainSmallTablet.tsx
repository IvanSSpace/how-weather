import Image from 'next/image';

import styles from './mainSmallTablet.module.scss';
import { TextField } from '@mui/material';

const MainSmallTablet = () => {
  return (
    <div className='lg:hidden'>
      <div className={styles.mainContainer}>
        <header className={styles.header}>
          <Image src='/images/logo.svg' width={70} height={50} alt='logo' />
          <TextField id='standard-basic' label='Write your city' variant='standard' />
        </header>
      </div>
    </div>
  );
};

export { MainSmallTablet };
