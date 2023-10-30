'use client';

import Link from 'next/link';
import Button from './components/Button';
import { Divider } from '@nextui-org/react';

export default function Home () {
  return (
    <main className='max-w-screen-sm mx-auto h-screen flex flex-col justify-center items-center overflow-y-hidden'>
      <h1 className='font-bold text-5xl text-center'>Notas de Fe</h1>
      <h2 className='font-semibold text-2xl text-center'>
        Cancionero de la Pastoral La Salle
      </h2>
      <Divider className='my-5 h-[1px] bg-black' />
      <p className='text-base pb-5 text-center'>
        Canciones que guían la labor de la Pastoral de La Salle. Estas
        canciones, llenas de significado, están pensadas para alumnos, Hermanos
        de La Salle, profesores y catequistas.
      </p>
      <div className='flex justify-center w-full'>
        <Link href='/library'>
          <Button typeStyle='primary'>
            Explorar canciones
          </Button>
        </Link>
      </div>
    </main>
  );
}
