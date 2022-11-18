import React, {FC, useEffect, useRef, useState} from 'react';
import {IData} from "../../../types/vacancies.interface";
import cn from 'clsx';
import noImage from './resources/noImg.png'
import heart from './resources/heart.svg'
import heartFav from './resources/heartFav.svg'
import './card.scss'
import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

export const Card: FC <IData> = ({id, name, address, company, companyImg, web, form, salaryFrom, responsibility, requirement, item}) => {


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

    const isImagineAvaliable = !companyImg ? noImage : companyImg

    const {addToFav, removeFromFav} = useActions()
    const {items} = useTypedSelector(state => state.fav)

    const isInFav = items.some(item => item.id === id)

    return (
        <div className={cn('card', {
            card_active: isMore === false
        })}>

            <div className="card__wrap">
                <div className="card__wrap-left">
                    <div style={
                        {
                            backgroundImage: `url(${isImagineAvaliable})`

                        }} className="card__img">
                    </div>
                    <div className="card__info">
                        <ul className='card__list'>
                            <li className='card__list-item'><span>Form: </span>{form}</li>
                            <li className='card__list-item'><span>Company: </span>{company}</li>
                            <li className='card__list-item'><span>Web: </span>{web}</li>
                            {/*@ts-ignore*/}
                            <li className='card__list-item'><span>Address: </span>{!address ? 'Город не указан' : address}</li>
                        </ul>
                    </div>
                </div>
                <div className="card__wrap-right">
                    <h2 className='card__title'>{name}</h2>
                    <p className='card__salary'>{salaryFrom ? `Зарплата: от ${salaryFrom} рублей` : 'Зарплата не указана'}</p>
                    <h3 className='card__snapshot-title'>Success Snapshot:</h3>
                    <div className={cn ('card__snapshots', {
                        card__snapshots_active: isMore === false
                    })}>
                        <ul ref={height} className="card__snapshots-list" >
                            <li className="card__snapshots-list-item">{responsibility}</li>
                            {!requirement ? null :
                                <li className="card__snapshots-list-item">{requirement}</li>
                            }
                            <li className="card__snapshots-list-item">{responsibility}</li>
                            {!requirement ? null :
                                <li className="card__snapshots-list-item">{requirement}</li>
                            }
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
        </div>
    );
};

