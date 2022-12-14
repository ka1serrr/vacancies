// LIBS
import React from 'react';
import { HTMLReactParserOptions, Element } from 'html-react-parser';
import parse, {domToReact} from 'html-react-parser';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
// STYLES
import './cardItem.scss'
// SELF
import {GetVacancy} from "@/services/GetVacancy";
import {useActions, useItems, useTitle, useSalary} from "@/imports/hooks";
import {heart, heartFav, noImg, checked} from '@/imports/imgs'
import CardRecommended from '@/components/UI/CardRecommended/CardRecommended';

const CardItem = () => {
  const getVacancy = new GetVacancy;
  const {id} = useParams()
  const {data: vacancy, isError , isLoading, error} = useQuery(['products', id], () => getVacancy.getVacancy(id))
  useTitle(`Vacancy ${vacancy?.name}` || '')

  const description = vacancy?.description
  console.log(vacancy?.cityId)
  console.log(vacancy?.id)

  const options: HTMLReactParserOptions = {
    replace: domNode  => {
      if (domNode instanceof Element && domNode.name === 'p') {
        return <p className='card-item__descr-header'>{domToReact(domNode.children, options)}</p>
      }
      if (domNode instanceof Element && domNode.name === 'ul') {
        return <ul className='card-item__descr-list'>{domToReact(domNode.children, options)}</ul>
      }
    }
  }

  const {addToFav, removeFromFav} = useActions()
  const isInFav = useItems(vacancy?.id)

  const isImagineAvaliable = vacancy?.companyLogo ? vacancy?.companyLogo : noImg,
        isCompanyTrusted = vacancy?.companyTrusted && checked;

  const salary = useSalary(vacancy?.salaryFrom, vacancy?.salaryTo)

  return (
    <div className='card-item'>
      <div className="container">

        <div className="card-item__wrapper">

          <div className="card-item__wrapper-left">
            <div className="card-item__wrapper-info">
              <a href={vacancy?.url}>
                <h1 className="card-item__title">{vacancy?.name}</h1>
              </a>
              <div className="card-item__salary">
                {salary}
              </div>
              <div className="card-item__info">
                <p>{vacancy?.employment?.name}. {vacancy?.schedule}</p>
                <p>?????????????????? ???????? ????????????: {vacancy?.experience?.name}</p>
              </div>
              <img
                src={isInFav ? heartFav : heart} alt=""
                onClick={() => isInFav ? removeFromFav(vacancy?.id) : addToFav(vacancy)}
                className="card-item__fav"
              />
              <a href={vacancy?.url}>
                <button className="card-item__btn">
                  ????????????????????????
                </button>
              </a>
            </div>
            <div className="card-item__description">
              {parse(description || '', options)}
            </div>
          </div>

          <div className="card-item__wrapper-right">
            <div
              className="card-item__logo"
              style={{
              backgroundImage: `url(${isImagineAvaliable})`
            }}></div>
            <div className="card-item__company">
              <span className="card-item__company-name"><a href={vacancy?.companyUrl}>{vacancy?.companyName}</a></span>
              <div className="card-item__company-trusted">
                {isCompanyTrusted && <img src={isCompanyTrusted || 'trusted'} alt="checkmark"/>}
              </div>
            </div>
            <span className="card-item__company-city">{vacancy?.city}</span>
            <CardRecommended
              cardId={vacancy?.id}
            />
          </div>
        </div>

      </div>
    </div>);
};

export default CardItem;


