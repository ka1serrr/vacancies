import React, { FC, useEffect } from 'react';

import { useGetVacanciesQuery } from '@/api/vacanciesApiSlice';

import { Card, ICard } from '@/components/UI/Card/Card';
import { IData } from '@/types/vacancies.interface';
import { LoaderComponent } from '@/components/UI/LoaderComponent/LoaderComponent';
import { useActions, useTitle, useTypedSelector } from '@/imports/hooks';
import { ErrorMessage } from '@/components/UI/ErrorMessage/ErrorMessage';
import { Pagination } from '@/components/UI/Pagination/Pagination';
import { ChangeAmountOfVacancies } from '@/components/common/changeAmountOfVacancies/ChangeAmountOfVacancies';

const Content: FC = () => {
  useTitle('All vacancies');

  const { setTotalPages } = useActions();
  const { currentPage, perPage } = useTypedSelector((state) => state.pagination);

  const {
    data,
    isError,
    isFetching,
    error: fetchError,
    isSuccess,
  } = useGetVacanciesQuery({ page: currentPage, perPage });

  useEffect(() => {
    if (isSuccess) {
      setTotalPages(data?.found);
    }
  }, [isSuccess, data?.found]);

  const loading = isFetching && [...Array(perPage)].map((item, i) => <LoaderComponent key={i} />);

  // @ts-ignore
  const error = !isFetching && isError ? <ErrorMessage message={fetchError.message} /> : null;

  const content =
    !isFetching && !isError && data?.data.map((item: any) => <Card key={item.id} {...item} item={item} />);

  return (
    <div className='content'>
      <div className='container'>
        <h1 className='title'>List of vacancies</h1>
        <ChangeAmountOfVacancies />
        {loading}
        {error}
        {content}
        <Pagination />
      </div>
    </div>
  );
};
export default Content;
