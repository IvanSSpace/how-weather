import * as React from 'react';

import styles from './index.module.scss';
import Layout from '@/components/layout/Layout';
import { MainDesktop } from '@/components/MainDesktop';
import { MainSmallTablet } from '@/components/MainSmallTablet/MainSmallTablet';

//  * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo /> */}
      <main>
        <section className={styles.mainContainer}>
          <MainSmallTablet />
          <MainDesktop />
        </section>
      </main>
    </Layout>
  );
}
