import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return(
    <section className='notFound'>
      <div className='NotFound__text'>
        <h1 className='notFound__head'>404</h1>
        <p className='notFound__desc'>Страница не найдена</p>
      </div>
      <Link className='notFound__link' to='/'>&#8920; Назад</Link>

    </section>
  )
}

export default NotFound;
