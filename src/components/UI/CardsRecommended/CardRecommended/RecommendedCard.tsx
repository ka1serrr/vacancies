import React, {FC} from 'react';
import {IRecommendedData} from "@/types/recommended.interface";
import './CardRecommended.scss'
import {useNavigate} from "react-router-dom";

export const RecommendedCard:FC <IRecommendedData> = ({salaryFrom, salaryTo, responsibility, requirement, id, name, area, cityId, url}) => {
  const navigate = useNavigate()

  return (
    <div className='recommended'>
      <span className="recommended__title"><a href={url} onClick={() => navigate('/vacancies/:id')}>{name}</a></span>
    </div>
  );
};

