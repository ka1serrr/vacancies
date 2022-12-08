// LIBS
import React from 'react';
import { HTMLReactParserOptions, Element } from 'html-react-parser';
import parse, {domToReact} from 'html-react-parser';
import {useTitle} from 'react-use';
// STYLES
import './cardItem.scss'
// Functions
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {GetVacancy} from "@/services/GetVacancy";
import heart from '@/resources/heart.svg';
import heartFav from '@/resources/heartFav.svg';
import noImg from '@/resources/noImg.png';
import checked from '@/resources/check-mark.svg';
import {useActions} from "@/hooks/useActions";
import {useItems} from "@/hooks/useItems";

export const CardItem = () => {
  const getVacancy = new GetVacancy;
  const {id} = useParams()
  const {data: vacancy, isError, isLoading, error} = useQuery(['products', id], () => getVacancy.getVacancy(id))
  useTitle(vacancy?.name || '')


  console.log(vacancy)

  const description = vacancy?.description

  const options: HTMLReactParserOptions = {
    replace: domNode  => {
      if (domNode instanceof Element && domNode.name === 'p') {
        return <h2 className='h2'>{domToReact(domNode.children, options)}</h2>
      }
    }
  }

  const {addToFav, removeFromFav} = useActions()
  const isInFav = useItems(vacancy?.id)

  const isImagineAvaliable = vacancy?.companyLogo ? vacancy?.companyLogo : noImg,
        isCompanyTrusted = vacancy?.companyTrusted && checked;

  const salary = vacancy?.salaryFrom && vacancy?.salaryTo ? `з/п от ${vacancy?.salaryFrom} до ${vacancy?.salaryTo}` : vacancy?.salaryFrom && vacancy?.salaryTo == undefined ? `з/п от ${vacancy?.salaryFrom}` : vacancy?.salaryFrom == undefined && vacancy?.salaryTo ? `з/п до ${vacancy?.salaryTo}` : 'з/п не указана'

  return (
    <div className='card-item'>
      <div className="container">
        {/*{parse(description || '', options)}*/}

        <div className="card-item__wrapper">
          <div className="card-item__wrapper-left">
            <a href={vacancy?.url}>
              <h1 className="card-item__title">{vacancy?.name}</h1>
            </a>
            <div className="card-item__salary">
              {salary}
            </div>
            <div className="card-item__info">
              <p>{vacancy?.employment?.name}. {vacancy?.schedule}</p>
              <p>Требуемый опыт работы: {vacancy?.experience?.name}</p>
            </div>
            <img
              src={isInFav ? heartFav : heart} alt=""
              onClick={() => isInFav ? removeFromFav(vacancy?.id) : addToFav(vacancy)}
              className="card-item__fav"
            />
            <a href={vacancy?.url}>
              <button className="card-item__btn">
                Откликнуться
              </button>
            </a>
          </div>
          <div className="card-item__wrapper-right">
            <div
              className="card-item__logo"
              style={{
              backgroundImage: `url(${isImagineAvaliable})`
            }}></div>
            <span className="card-item__company-name">{vacancy?.companyName}</span>
            <div className="card-item__company-trusted" style={{backgroundImage: `url(${checked})`}}></div>
          </div>
        </div>


      </div>
    </div>);
};


