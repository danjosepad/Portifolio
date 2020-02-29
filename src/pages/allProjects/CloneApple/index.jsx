import React from 'react';

import styles from './styles.module.css';

import appleLogo from '../../../assets/cloneApple/logoApple.png';
import storeLogo from '../../../assets/cloneApple/logoStore.png';
import searchLogo from '../../../assets/cloneApple/searchIcon.png';
import listIcon from '../../../assets/cloneApple/listIcon.png';

export default function CloneApple() {
  return (
    <div id={styles.container}>
      <div className={styles.header} id={styles.headerTop}>
        <a href="# " className={styles.icon}>
          <img src={listIcon} alt="list" />
        </a>
        <a href="# ">
          <img src={appleLogo} alt="apple" />
        </a>
        <a href="# ">Mac</a>
        <a href="# ">iPad</a>
        <a href="# ">iPhone</a>
        <a href="# ">Watch</a>
        <a href="# ">TV</a>
        <a href="# ">Music</a>
        <a href="# ">Suporte</a>
        <a href="# ">
          <img src={searchLogo} alt="search" />
        </a>
        <a href="# ">
          <img src={storeLogo} alt="store" />
        </a>
      </div>
      <section id={styles.iPhone11Pro}>
        <strong>Câmera Pro. Tela Pro. Desempenho Pro.</strong>
        <div className={styles.mediaLinks}>
          <a href="# ">Saiba Mais</a>
          <a href="# ">Comprar</a>
        </div>
      </section>
      <section id={styles.iPhone11}>
        <strong>Tudo. Na medida certa.</strong>
        <div className={styles.mediaLinks}>
          <a href="# ">Saiba Mais</a>
          <a href="# ">Comprar</a>
        </div>
      </section>
      <section id={styles.watchSeries5}>
        <strong>Com a nova tela Retina Sempre Ativa.</strong>
        <strong>Um relógio como você nunca viu.</strong>
        <div className={styles.mediaLinks}>
          <a href="# ">Saiba Mais</a>
          <a href="# ">Comprar</a>
        </div>
      </section>
      <div className={styles.sectionGrid}>
        <section id={styles.beats}>
          <h2>Comprou um Mac ou</h2>
          <h2>iPad para a faculdade,</h2>
          <h2>ganhou um Beats.</h2>
          <div className={styles.mediaLinks}>
            <a href="# ">Comprar</a>
          </div>
        </section>
        <section id={styles.carnaval}>
          <h2>Neste carnaval, só </h2>
          <h2>tem grupo especial.</h2>
          <small>Entre em todos os ritmos com</small>
          <small>as playlists do Apple Music.</small>
          <div className={styles.mediaLinks}>
            <a href="# ">Comprar</a>
          </div>
        </section>
        <section id={styles.airPods}>
          <h2>AirPods Pro</h2>
          <small>Magia como você nunca ouviu.</small>
          <div className={styles.mediaLinks}>
            <a href="# ">Saiba Mais</a>
            <a href="# ">Comprar</a>
          </div>
        </section>
        <section id={styles.iPad}>
          <h2>iPad</h2>
          <small>É como um computador.</small>
          <small>Diferente de qualquer computador.</small>
          <div className={styles.mediaLinks}>
            <a href="# ">Saiba Mais</a>
            <a href="# ">Comprar</a>
          </div>
        </section>
        <section id={styles.appleTV}>
          {' '}
          <div className={styles.mediaLinks}>
            <a href="# ">Assista agora no app Apple TV</a>
          </div>
        </section>
        <section id={styles.Arcade}>
          {' '}
          <div className={styles.mediaLinks}>
            <a href="# ">Saiba Mais</a>
            <a href="# ">Teste Gratuito*</a>
          </div>
        </section>
      </div>
      <div id={styles.info}>
        <p>
          * R$ 9,90 por mês após o período de teste gratuito. Sem compromisso.
          Após o período de teste, a assinatura é renovada automaticamente até
          que seja cancelada.
        </p>
        <p>
          O Apple TV+ custa R$ 9,90 por mês após o período de teste gratuito.
          Uma assinatura por grupo de Compartilhamento Familiar. Oferta válida
          por três meses a partir da data de ativação do aparelho qualificado.A
          assinatura é renovada automaticamente até seu cancelamento. Aplicam-se
          outros termos e restrições.
        </p>
        <p>
          As marcas da NHL e dos times da NHL pertencem à NHL e seus times.
          Todos os direitos reservados.
        </p>
        <p>
          Produto oficialmente licenciado da United States Women’s National Team
          Players Association © 2019.
        </p>
        <p>Produto oficialmente licenciado da NFL Players Inc. © 2019.</p>
        <hr />
        <div id={styles.infoLinks}>
          <div className={styles.findAndBuy}>
            <strong>Descobrir e comprar</strong>
            <small>Mac</small>
            <small>iPad</small>
            <small>iPhone</small>
            <small>Watch</small>
            <small>TV</small>
            <small>Music</small>
            <small>AirPods</small>
            <small>iPod touch</small>
            <small>Acessórios</small>
            <small>Cartão da App Store</small>
          </div>
          <div className={styles.services}>
            <strong>Serviços</strong>
            <small>Apple Music</small>
            <small>Apple TV+</small>
            <small>Apple Arcade</small>
            <small>iCloud</small>
          </div>
          <div className={styles.yourAccount}>
            <strong>Sua conta</strong>
            <small>Gerenciar seu ID Apple</small>
            <small>Conta da Apple Store</small>
            <small>Icloud.com</small>
          </div>
          <div className={styles.appleStore}>
            <strong>Apple Store</strong>
            <small>Encontre uma loja</small>
            <small>Genius Bar</small>
            <small>Today at Apple</small>
            <small>Apple Camp</small>
            <small>Visita</small>
            <small>App Apple Store</small>
            <small>Financiamento</small>
            <small>Programa de Reciclagem da Apple</small>
            <small>Status do seu pedido</small>
            <small>Ajuda para comprar</small>
          </div>
          <div className={styles.forCompanies}>
            <strong>Para Empresas</strong>
            <small>Apple e os negócios</small>
            <small>Comprar para a sua empresa</small>
          </div>
          <div className={styles.forEducation}>
            <strong>Para a Educação</strong>
            <small>Apple e a Educação</small>
            <small>Comprar para a faculdade</small>
          </div>
          <div className={styles.forHealth}>
            <strong>Para a Saúde</strong>
            <small>Apple e a Saúde</small>
          </div>
          <div className={styles.appleValues}>
            <strong>Valores da Apple</strong>
            <small>Acessibilidade</small>
            <small>Meio ambiente</small>
            <small>Privacidade</small>
            <small>Responsabilidades dos fornecedores</small>
          </div>
          <div className={styles.aboutApple}>
            <strong>Sobre a Apple</strong>
            <small>Newsroom</small>
            <small>Liderança da Apple</small>
            <small>Oportunidades de trabalho</small>
            <small>Investidores</small>
            <small>Eventos</small>
            <small>Contato</small>
          </div>
        </div>
        <hr />
        <p>
          Esse site é um clone do site principal da Apple, portanto, todos as
          imagens e informações apresentadas são de total direito da mesma. O
          intuito dessa replica é apresentar os conhecimentos como forma de
          divulgação de trabalho, sem qualquer fim comercial.
        </p>
      </div>
    </div>
  );
}
