import React, { FC, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useGetVacanciesQuery } from '@/api/vacanciesApiSlice';

import { Card } from '@/components/UI/Card/Card';
import { IData } from '@/types/vacancies.interface';
import { LoaderComponent } from '@/components/UI/LoaderComponent/LoaderComponent';
import { useTitle } from '@/imports/hooks';
import { ErrorMessage } from '@/components/UI/ErrorMessage/ErrorMessage';

const Content: FC = () => {
  useTitle('All vacancies');

  const {data, isLoading, isError, error: fetchError} = useGetVacanciesQuery(198);

  const loading = isLoading && [...Array(5)].map((item, i) => <LoaderComponent key={i} />);

  // @ts-ignore
  const error = !isLoading && isError ? <ErrorMessage message={fetchError.message}/> : null


  const content = !isLoading && !isError && data?.map((item: IData) => (
    <Card key={item.id}
          {...item}
          item={item}
    />
  ));

  return (
    <div className='content'>
      <div className='container'>
        <h1 className='title'>List of vacancies</h1>
        {loading}
        {error}
        {content}
      </div>
    </div>
  );
};
export default Content;
