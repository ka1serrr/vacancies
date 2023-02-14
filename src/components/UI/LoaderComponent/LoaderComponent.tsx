import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';
import './loaderComponent.scss';

interface ILoader {
  title?: string;
}

export const LoaderComponent: FC<ILoader> = ({ title }) => {
  return (
    <div className='loader'>
      <div className='container'>
        <h2 className='title'>{title}</h2>
        <div className='loader__wrapper'>
          <ContentLoader
            speed={2}
            width={1196}
            height={331}
            viewBox='0 0 1196 331'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
          >
            <rect x='0' y='0' rx='0' ry='0' width='446' height='126' />
            <rect x='464' y='1' rx='0' ry='0' width='689' height='290' />
            <rect x='0' y='154' rx='0' ry='0' width='253' height='16' />
            <rect x='0' y='190' rx='0' ry='0' width='252' height='14' />
            <rect x='0' y='233' rx='0' ry='0' width='252' height='15' />
            <rect x='0' y='272' rx='0' ry='0' width='251' height='12' />
          </ContentLoader>
        </div>
      </div>
    </div>
  );
};
