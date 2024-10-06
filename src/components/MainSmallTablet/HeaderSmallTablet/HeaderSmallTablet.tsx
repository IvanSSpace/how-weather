import SearchIcon from '@mui/icons-material/Search';
import { FormControl, Input, InputAdornment } from '@mui/material';
import Image from 'next/image';

import styles from './headerSmallTablet.module.scss';

const HeaderSmallTablet = () => {
  return (
    <header className={styles.header}>
      <Image src='/images/logo.svg' width={70} height={50} alt='logo' />
      <div>
        <FormControl variant='standard' sx={{ m: 1, mt: 2, width: '25ch' }}>
          <Input
            id='standard-adornment-weight'
            endAdornment={
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </header>
  );
};

export { HeaderSmallTablet };
