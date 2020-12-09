import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>INSTITUCIONAL</h2>
            <Link to="//www.dt3sports.com.br" target="_blank">
              Sobre nós
            </Link>
            <Link to="//www.dt3sports.com.br" target="_blank">
              Revendas
            </Link>
            <Link to="//www.dt3sports.com.br" target="_blank">
              Contato
            </Link>
            <Link to="//www.dt3sports.com.br" target="_blank">
              FAQ
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>DÚVIDAS</h2>
            <Link to="//www.dt3sports.com.br" target="_blank">
              Prazos e entregas
            </Link>
            <Link to="//www.dt3sports.com.br" target="_blank">
              Garantia
            </Link>
            <Link to="//www.dt3sports.com.br" target="_blank">
              Guia comparativo
            </Link>
            <Link to="//www.dt3sports.com.br" target="_blank">
              Guia de compra
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>CONTATO</h2>
            <Link to="/">(21) 2018-0792</Link>
            <Link to="/">atendimento@dt3.com</Link>
          </div>
          <div className="footer-link-items">
            <h2>SOCIAL MEDIA</h2>
            <Link to="//www.instagram.com/dt3sports/" target="_blank">
              Instagram
            </Link>
            <Link to="//www.facebook.com/dt3sports/" target="_blank">
              Facebook
            </Link>
            <Link to="//www.youtube.com/dt3sports/" target="_blank">
              Youtube
            </Link>
            <Link to="//www.twitter.com/dt3sports/" target="_blank">
              Twitter
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">DT3sports 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="//www.facebook.com/dt3sports/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="///www.instagram.com/dt3sports/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={'//www.youtube.com/dt3sports/'}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="///www.twitter.com/dt3sports/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="//www.linkedin.com/company/dt3sports/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
