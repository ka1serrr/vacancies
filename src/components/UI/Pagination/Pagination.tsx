import { FC, useState } from 'react';
import { useTypedSelector } from '@/imports/hooks';

interface IPagination {
  onPageChange: unknown;
}

export const Pagination: FC<IPagination> = ({ onPageChange }): any => {
  const { totalPages, perPage, currentPage } = useTypedSelector((state) => state.pagination);

  const lastPageIndex = currentPage * perPage;
  const firstPageIndex = lastPageIndex - perPage;

  return (
    <div className='pages'>
      <span className='pages__page'>{totalPages}</span>
    </div>
  );
};
