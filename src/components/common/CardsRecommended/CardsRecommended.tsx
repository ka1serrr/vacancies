import React, { FC } from 'react';
import './cardsRecommended.scss';
import { RecommendedCard } from '@/components/common/CardsRecommended/CardRecommended/RecommendedCard';
import { useGetRecommendedQuery } from '@/api/recommendedApiSlice';
import { LoaderSvg } from '@/components/UI/LoaderSvg/LoaderSvg';

interface IRecommendedProps {
  cardId: string;
  cityId: number;
  isCardLoading: boolean;
}

const CardsRecommended: FC<IRecommendedProps> = ({ cardId, cityId, isCardLoading }) => {
  const {
    data: recommended,
    isLoading,
    isError,
    error,
  } = useGetRecommendedQuery({ id: cardId, perPage: 2, page: 1, area: cityId }, { skip: !cardId });

  const errorMessage = error instanceof Error && error.message;
  const loading = isLoading && <LoaderSvg />;
  const content =
    !isLoading && !isError && recommended?.items.map((rec: any) => <RecommendedCard key={rec.id} {...rec} />);
  return (
    <div className='card-recommended'>
      {loading || !cardId ? (
        loading
      ) : (
        <>
          <span className='card-recommended__title'>Похожие вакансии:</span>
          {content}
          <span className='card-recommended-found'>Было найдено: {recommended?.found} похожих вакансий</span>
        </>
      )}
    </div>
  );
};
export default CardsRecommended;
