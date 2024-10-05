import * as React from 'react';

import Layout from '@/components/layout/Layout';
import { MainDesktop } from '@/components/MainDesktop';
import { MainSmallTablet } from '@/components/MainSmallTablet/MainSmallTablet';

//  * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo /> */}
      <main>
        <section className='h-full w-full bg-slate-400'>
          <MainSmallTablet />
          <MainDesktop />
        </section>
      </main>
    </Layout>
  );
}
