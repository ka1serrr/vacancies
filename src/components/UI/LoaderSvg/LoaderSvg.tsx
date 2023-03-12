import spinner from './loaderPic.svg';
import { FC } from 'react';
interface ILoaderSvg {
  className?: string;
}
export const LoaderSvg: FC<ILoaderSvg> = ({ className }) => {
  return (
    <div>
      <img src={spinner} alt='spinner' className={className} />
    </div>
  );
};
