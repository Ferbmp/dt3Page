import React from 'react';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from './FooterElements';
const Footer = () => {
  return (
    <>
      <FooterContainer id="footer">
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> INSTITUCIONAL </FooterLinkTitle>
                <FooterLink to="//www.dt3sports.com.br" target="_blank">
                  Sobre nós
                </FooterLink>
                <FooterLink to="//www.dt3sports.com.br" target="_blank">
                  Compra corporativa
                </FooterLink>
                <FooterLink to="//www.dt3sports.com.br" target="_blank">
                  Seja um revendedor
                </FooterLink>
                <FooterLink to="//www.dt3sports.com.br" target="_blank">
                  Contato
                </FooterLink>
                <FooterLink to="//www.dt3sports.com.br" target="_blank">
                  FAQ
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> DÚVIDAS </FooterLinkTitle>
                <FooterLink to="//www.dt3sports.com.br" target="_blank">
                  Prazos e entregas
                </FooterLink>
                <FooterLink to="//www.dt3sports.com.br" target="_blank">
                  Garantia
                </FooterLink>
                <FooterLink to="//www.dt3sports.com.br" target="_blank">
                  Política de privacidade
                </FooterLink>
                <FooterLink to="//www.dt3sports.com.br" target="_blank">
                  Trocas e devoluções
                </FooterLink>
                <FooterLink to="//www.dt3sports.com.br" target="_blank">
                  Guia comparativo
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> CONTATO </FooterLinkTitle>
                <FooterLink>(21) 2018-0792</FooterLink>
                <FooterLink>atendimento@dt3.com.br</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> MIDIAS SOCIAIS</FooterLinkTitle>
                <FooterLink to="//www.instagram.com/dt3sports/" target="_blank">
                  Instagram
                </FooterLink>
                <FooterLink to="//www.facebook.com/DT3sports/" target="_blank">
                  Facebook
                </FooterLink>
                <FooterLink to="//www.youtube.com/DT3sports/" target="_blank">
                  Youtube
                </FooterLink>
                <FooterLink to="//www.twitter.com/DT3sports/" target="_blank">
                  Twitter
                </FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
