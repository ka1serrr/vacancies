// LIBS
import React, {FC, useEffect, useRef, useState} from 'react';
import {Link} from "react-router-dom";
import cn from 'clsx';
// STYLES
import './card.scss'
// SELF
import {heart, heartFav, noImg} from '@/imports/imgs'
import {IData} from "@/types/vacancies.interface";
import {useActions, useTypedSelector, useItems, useSalary} from "@/imports/hooks";

export const Card: FC<IData> = ({id, name, address, company, companyImg, web, form, salaryFrom, responsibility, requirement, item, salaryTo}) => {


  const [ulHeight, setUlHeight] = useState<number>();
  const [isMore, setIsMore] = useState(true)
  const height = useRef<HTMLUListElement | null>(null);

  const showMore = () => {
    setIsMore(!isMore)
  }

  useEffect(() => {
    window.addEventListener("resize", getUlResize);
  }, []);

  const getUlResize = () => {
    if (null !== height.current) {
      setUlHeight(height?.current?.clientHeight)
    }
  }

  useEffect(() => {
    getUlResize()
  }, [ulHeight])

  const isImagineAvaliable = !companyImg ? noImg : companyImg

  const {addToFav, removeFromFav} = useActions()
  const {items} = useTypedSelector(state => state.fav)

  const isInFav = useItems(id)

  const salary = useSalary(salaryFrom, salaryTo)

  return (
    <div className={cn('card', {
      card_active: isMore === false
    })}>

      <div className="card__wrap">
        <div className="card__wrap-left">
          <div style={{
            backgroundImage: `url(${isImagineAvaliable})`
          }} className="card__img">
          </div>
          <div className="card__info">
            <ul className='card__list'>
              <li className='card__list-item'><span>Form: </span>{form}</li>
              <li className='card__list-item'><span>Company: </span>{company}</li>
              <li className='card__list-item'><span>Web: </span><a href={web}>{web}</a></li>
              {/*@ts-ignore*/}
              <li className='card__list-item'><span>Address: </span>{!address ? 'Город не указан' : address}</li>
            </ul>
          </div>
        </div>
        <div className="card__wrap-right">
          <Link to={`/vacancies/${id}`}>
            <h2 className='card__title'>{name}</h2>
          </Link>
          <p className='card__salary'>{salary}</p>
          <h3 className='card__snapshot-title'>Success Snapshot:</h3>
          <div className={cn('card__snapshots', {
            card__snapshots_active: isMore === false
          })}>
            <ul ref={height} className="card__snapshots-list">
              <li className="card__snapshots-list-item">{responsibility}</li>
              {!requirement ? null : <li className="card__snapshots-list-item">{requirement}</li>}
            </ul>
          </div>
          {ulHeight! <= 120 ? null :
            <button onClick={showMore} className='card__more'>{isMore ? 'more details' : 'close'}</button>
          }
          <img className='card__fav' src={isInFav ? heartFav : heart} alt=""
               onClick={() => isInFav ? removeFromFav(id) : addToFav(item)}
          />
        </div>
      </div>
    </div>);
};

