import Image from 'next/image';

const HeaderSmall = () => {
  return (
    <header className='flex items-center justify-between'>
      <Image src='/images/logo.svg' alt='logo123' width={100} height={100} />
    </header>
  );
};

export { HeaderSmall };
