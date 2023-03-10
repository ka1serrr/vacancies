import React, { FC, PropsWithChildren } from 'react';
import './layout.scss';
import { Link } from 'react-router-dom';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='app'>
      <div className='layout'>
        <div className='container'>
          <div className='layout__wrapper'>
            <div className='layout__wrapper-left'>
              <Link to={'/'}>
                <h2 className='layout__title'>List of vacancies</h2>
              </Link>
            </div>
            <div className='layout__wrapper-right'>
              <ul className='layout__links'>
                <li className='layout__link'>
                  <Link to={'/favourites'}>Favourites</Link>
                </li>
                {/*<li className="wrapper__link"></li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
