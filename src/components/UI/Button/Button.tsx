import React, { ButtonHTMLAttributes, FC } from 'react';
import './btn.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
}

export const Button: FC<IButton> = ({ title, className = 'btn', ...props }) => {
  return (
    <button className={className} {...props}>
      {title}
    </button>
  );
};
