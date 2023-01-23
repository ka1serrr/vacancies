import React, {FC} from 'react';
import './cardsRecommended.scss'
import {useQuery} from "@tanstack/react-query";
import {GetRecommended} from "@/services/GetRecommended";
import {RecommendedCard} from "@/components/UI/CardsRecommended/CardRecommended/RecommendedCard";

interface IRecommendedProps {
  cardId: string,
  cityId: number
}


const CardsRecommended:FC <IRecommendedProps> = ({cardId, cityId}) => {
  const getRecommended = new GetRecommended()

  const {data: recommended, isError, isLoading, error} = useQuery(['recommended', cardId], () => getRecommended.getData(cardId, 2, cityId), {retry: 5, enabled: !!cardId, refetchOnWindowFocus: false,})

  const errorMessage = error instanceof Error && error.message

  const content = (!isLoading && !isError) && recommended.items.map((rec: any) => (
    <RecommendedCard
      key={rec.id}
      {...rec}/>
  ))


  return (
    <div className='card-recommended'>
      <span className='card-recommended__title'>Похожие вакансии:</span>
      {content}
      <span className="card-recommended-found">Было найдено: {recommended?.found} похожих вакансий</span>
    </div>
  );
};
export default CardsRecommended;