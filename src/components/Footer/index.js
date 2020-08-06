import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/desorientado-dev-logo.png';

function Footer() {
  return (
    <FooterBase>
      <p>
        <a href="https:/www.desorientado.dev" target="_blank">
          <img src={Logo} alt="Logo Desorientado.Dev" />
        </a>
      </p>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" target="_blank">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
