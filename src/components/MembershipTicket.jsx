import React from 'react';
import '../css/membershipTicket.css'

const MembershipTicket = () => {
  return (
    <div className='membership__ticket'>
      <h2> Подати заявку на членство </h2>
      <form action="post" className='membership__form'>
        <input type="text" placeholder='Введіть ім`я' />
        <input type="text" placeholder='Ведіть прізвище' />
        <input type="text" placeholder='Ведіть номер телефону' />
        <input type="email" placeholder='Ведіть пошту' />
        <button className='membership__form__button' type="submit">Долучитися до клубу <br /> <strong>Української Асоціації Лобіювання</strong></button>
      </form>
    </div>
  );
};

export default MembershipTicket;
