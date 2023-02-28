import { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '@/imports/hooks';
import { createPages } from '@/components/UI/Pagination/countPages';

interface IPagination {
  onPageChange: unknown;
}

export const Pagination: FC<IPagination> = ({ onPageChange }): any => {
  const { totalPages, perPage, currentPage } = useTypedSelector((state) => state.pagination);

  const lastPageIndex = currentPage * perPage;
  const firstPageIndex = lastPageIndex - perPage;

  const pages: number[] = [];

  useEffect(() => {
    createPages(pages, totalPages, currentPage);
  }, [totalPages, currentPage]);

  return (
    <div className='pages'>
      <span className='pages__page'>{totalPages}</span>
    </div>
  );
};
