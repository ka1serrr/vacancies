import React, { FC } from 'react';
import parse, { domToReact, Element, HTMLReactParserOptions } from 'html-react-parser';
import { useParams } from 'react-router-dom';
import './cardItem.scss';
import { useActions, useItems, useSalary, useTitle } from '@/imports/hooks';
import { checked, heart, heartFav, noImg } from '@/imports/imgs';
import CardRecommended from '@/components/UI/CardsRecommended/CardsRecommended';
import { useGetVacancyQuery } from '@/api/cardItemApiSlice';

const CardItem: FC = () => {
  const { id } = useParams();

  const { data: vacancy, isError, isLoading, error } = useGetVacancyQuery(id);

  useTitle(`Vacancy ${vacancy?.name}` || '');

  console.log(vacancy?.cityId || '');

  const description = vacancy?.description;

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === 'p') {
        return <p className='card-item__descr-header'>{domToReact(domNode.children, options)}</p>;
      }
      if (domNode instanceof Element && domNode.name === 'ul') {
        return <ul className='card-item__descr-list'>{domToReact(domNode.children, options)}</ul>;
      }
    },
  };

  const { addToFav, removeFromFav } = useActions();
  const isInFav = useItems(vacancy?.id);

  const isImagineAvaliable = vacancy?.companyLogo ? vacancy?.companyLogo : noImg,
    isCompanyTrusted = vacancy?.companyTrusted && checked;

  const salary = useSalary(vacancy?.salaryFrom, vacancy?.salaryTo);

  return (
    <div className='card-item'>
      <div className='container'>
        <div className='card-item__wrapper'>
          <div className='card-item__wrapper-left'>
            <div className='card-item__wrapper-info'>
              <a href={vacancy?.url}>
                <h1 className='card-item__title'>{vacancy?.name}</h1>
              </a>
              <div className='card-item__salary'>{salary}</div>
              <div className='card-item__info'>
                <p>
                  {vacancy?.employment?.name}. {vacancy?.schedule}
                </p>
                <p>Требуемый опыт работы: {vacancy?.experience?.name}</p>
              </div>
              <img
                src={isInFav ? heartFav : heart}
                alt=''
                onClick={() => (isInFav ? removeFromFav(vacancy?.id) : addToFav(vacancy))}
                className='card-item__fav'
              />
              <a className='card-item__link' href={vacancy?.url}>
                <button className='card-item__btn'>Откликнуться</button>
              </a>
            </div>
            <div className='card-item__description'>{parse(description || '', options)}</div>
          </div>

          <div className='card-item__wrapper-right'>
            <div className='card-item__wrapper-right_info'>
              <div
                className='card-item__logo'
                style={{
                  backgroundImage: `url(${isImagineAvaliable})`,
                }}
              ></div>
              <div className='card-item__company'>
                <span className='card-item__company-name'>
                  <a href={vacancy?.companyUrl}>{vacancy?.companyName}</a>
                </span>
                <div className='card-item__company-trusted'>
                  {isCompanyTrusted && <img src={isCompanyTrusted || 'trusted'} alt='checkmark' />}
                </div>
              </div>
              <span className='card-item__company-city'>{vacancy?.city}</span>
            </div>
            <CardRecommended
              cityId={vacancy?.cityId || 0}
              cardId={vacancy?.id || ''}
              isCardLoading={isLoading || false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
