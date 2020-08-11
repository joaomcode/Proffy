import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/56600657?s=460&u=46c8359adb0ba0540efcf0443e83fb60fdeef673&v=4" alt="joaomcode" />
        <div>
          <strong>joaomcode</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de Física avançada
      <br /> <br />
      Apaixonado por física clássica newtoniana e Física moderna. Experimentar é conhecer e aprender, venha conhecer a física de modo didático e descontraído por meio de experiências.
    </p>

      <footer>
        <p>
          Preço/Hora
        <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
      </footer>
    </article>
  )
}

export default TeacherItem;