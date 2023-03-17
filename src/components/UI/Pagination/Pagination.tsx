import { FC, useEffect, useState } from 'react';
import { useActions, useTypedSelector } from '@/imports/hooks';
import { createPages } from '@/components/UI/Pagination/countPages';
import './pagination.scss';
import cn from 'clsx';
interface IPagination {
  onPageChange?: unknown;
}

export const Pagination: FC<IPagination> = ({ onPageChange }): any => {
  const { totalPages, perPage, currentPage } = useTypedSelector((state) => state.pagination);
  const { setCurrentPage } = useActions();

  const pagesCount = Math.ceil(totalPages / perPage);
  const pages: number[] = [1];
  createPages(pages, pagesCount, currentPage);

  // useEffect(() => {}, [totalPages, currentPage]);

  return (
    <div className='pages'>
      {pages.map((page, index) => (
        <span
          key={index}
          className={cn('page', {
            page_active: currentPage === page,
          })}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </span>
      ))}
    </div>
  );
};
