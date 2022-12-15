import React, {FC} from 'react';
import './cardRecommended.scss'
import {useQuery} from "@tanstack/react-query";
import {GetRecommended} from "@/services/GetRecommended";
import {RecommendedCards} from "@/components/UI/CardRecommended/RecommendedCards";

interface IRecommendedProps {
  cardId: any,
}


const CardsRecommended:FC <IRecommendedProps> = ({cardId}) => {
  const getRecommended = new GetRecommended()

  const {data: recommended, isError, isLoading, error} = useQuery(['recommended', cardId], () => getRecommended.getData(cardId, 10), {retry: 5})

  const errorMessage = error instanceof Error && error.message

  const content = (!isLoading && !isError) && recommended.items.map((rec: any) => (
    <RecommendedCards {...rec}/>
  ))

  return (
    <div className='card-recommended'>

    </div>
  );
};
export default CardsRecommended;