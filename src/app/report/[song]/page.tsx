'use client';

import React from 'react';
import Link from 'next/link';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@/app/components/Button';

import { songList } from '@/app/library/[song]/utils/constants';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const ReportPage = ({ params }: { params: { song: string } }) => {
  const currentSong = songList.find((song) => song.url === params.song);

  const schema = yup.object().shape({
    description: yup.string().required('* La descripción es obligatoria')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: { description: string }) => console.log(data);

  return (
    <main className='max-w-screen-sm mx-auto'>
      <Link
        className='flex align-middle items-center my-4 text-sm  hover:text-lightPurple-500'
        href='/library'
      >
        <AiOutlineArrowLeft className='mr-2' /> Volver a la lista de canciones
      </Link>

      <h1 className='font-bold text-3xl text-center mt-14 mb-8'>
        Reportar un error
      </h1>
      <div className='flex mt-6 items-center'>
        <span className='text-base font-semibold mr-2'>Canción:</span>
        <span className='text-base'>{currentSong?.title}</span>
      </div>
      <div className='flex flex-col mt-3'>
        <span className='text-base font-semibold mr-2'>Descripción del error:</span>
        <textarea
          {...register('description')}
          className='mt-1 border rounded-lg p-2 text-sm resize-none h-[150px] outline-lightPurple-200 outline-1'
          placeholder='Por favor escribe una descripción del error que encontraste en la canción'
        />
        {errors.description && (
          <span className='text-sm text-red-500'>
            {errors.description.message}
          </span>
        )}
        <Button
          className='mt-6 w-fit mx-auto' typeStyle='primary'
          onClick={handleSubmit(onSubmit)}
        >
          Enviar reporte
        </Button>
      </div>
    </main>
  );
};

export default ReportPage;
