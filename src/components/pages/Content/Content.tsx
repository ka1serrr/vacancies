import React, { FC, useEffect } from 'react';

import { useGetVacanciesQuery } from '@/api/vacanciesApiSlice';

import { Card } from '@/components/UI/Card/Card';
import { IData } from '@/types/vacancies.interface';
import { LoaderComponent } from '@/components/UI/LoaderComponent/LoaderComponent';
import { useActions, useTitle, useTypedSelector } from '@/imports/hooks';
import { ErrorMessage } from '@/components/UI/ErrorMessage/ErrorMessage';
import { Pagination } from '@/components/UI/Pagination/Pagination';
import { ChangeAmountOfVacancies } from '@/components/common/changeAmountOfVacancies/ChangeAmountOfVacancies';

const Content: FC = () => {
  useTitle('All vacancies');

  const { setCurrentPage, setTotalPages } = useActions();
  const { currentPage, perPage } = useTypedSelector((state) => state.pagination);

  const {
    data,
    isLoading,
    isError,
    error: fetchError,
    isSuccess,
  } = useGetVacanciesQuery({ page: currentPage, perPage });

  useEffect(() => {
    if (isSuccess) {
      setTotalPages(data?.found);
    }
  }, [isSuccess, data?.found]);

  const loading = isLoading && [...Array(perPage)].map((item, i) => <LoaderComponent key={i} />);

  // @ts-ignore
  const error = !isLoading && isError ? <ErrorMessage message={fetchError.message} /> : null;

  const content =
    !isLoading && !isError && data?.data.map((item: IData) => <Card key={item.id} {...item} item={item} />);

  return (
    <div className='content'>
      <div className='container'>
        <h1 className='title'>List of vacancies</h1>
        <ChangeAmountOfVacancies />
        {loading}
        {error}
        {content}
      </div>
    </div>
  );
};
export default Content;
