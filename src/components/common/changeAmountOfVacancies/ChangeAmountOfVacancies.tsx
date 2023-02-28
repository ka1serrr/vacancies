import './changeAmountOfVacancies.scss';
import { Button } from '@/components/UI/Button/Button';
import { useActions } from '@/imports/hooks';
import { useState } from 'react';
import cn from 'clsx';

export const ChangeAmountOfVacancies = () => {
  const { setAmountOfPages } = useActions();

  const [activeBtn, setActiveBtn] = useState('5 вакансий');

  const handleClick = (amountOfPages: number, btnTitle: string) => {
    setActiveBtn(btnTitle);
    setAmountOfPages(amountOfPages);
  };

  const btns = [
    { title: '5 вакансий', amount: 5 },
    { title: '10 вакансий', amount: 10 },
  ];

  return (
    <div className='amount'>
      {btns.map((btn) => (
        <Button
          key={btn.title}
          title={btn.title}
          className={cn('amount__btn', {
            amount__btn_active: activeBtn === btn.title,
          })}
          onClick={() => handleClick(btn.amount, btn.title)}
        />
      ))}
    </div>
  );
};
