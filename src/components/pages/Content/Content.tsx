import React, { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useGetVacanciesQuery } from '@/api/vacanciesApiSlice';

import { Card } from '@/components/UI/Card/Card';
import { IData } from '@/types/vacancies.interface';
import { LoaderComponent } from '@/components/UI/LoaderComponent/LoaderComponent';
import { useTitle } from '@/imports/hooks';

const Content: FC = () => {
  useTitle('All vacancies');

  const {data, isLoading} = useGetVacanciesQuery(198);

  const loading = isLoading && [...Array(5)].map((item, i) => <LoaderComponent key={i} />);

  const content = !isLoading && data?.map((item: IData) => (
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
        {content}
      </div>
    </div>
  );
};
export default Content;
