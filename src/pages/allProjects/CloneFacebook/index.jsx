import React from 'react';

import styles from './styles.module.css';
import UserImage from '../../../assets/cloneFacebook/userImage.jpg';

import gameIcon1 from '../../../assets/cloneFacebook/gameIcon1.png';
import gameIcon2 from '../../../assets/cloneFacebook/gameIcon2.png';
import gameIcon3 from '../../../assets/cloneFacebook/gameIcon3.png';

import feedIcon from '../../../assets/cloneFacebook/feedIcon.png';
import messengerIcon from '../../../assets/cloneFacebook/messengerIcon.png';
import watchIcon from '../../../assets/cloneFacebook/watchIcon.png';
import marketPlaceIcon from '../../../assets/cloneFacebook/marketPlaceIcon.png';
import savedIcon from '../../../assets/cloneFacebook/savedIcon.png';

import photoIcon from '../../../assets/cloneFacebook/photoIcon.png';
import tagIcon from '../../../assets/cloneFacebook/tagIcon.png';
import feelingIcon from '../../../assets/cloneFacebook/feelingIcon.png';
import pointIcon from '../../../assets/cloneFacebook/pointIcon.png';

export default function Facebook() {
  return (
    <div id={styles.container}>
      <div id={styles.header}>Header</div>
      <div id={styles.gridContainer}>
        <div className={styles.sideMenu}>
          <img src={UserImage} alt="User" />
          <small>Daniel Padilha</small>
          <img src={feedIcon} alt="User" />
          <small>Feed de Noticias</small>
          <img src={messengerIcon} alt="User" />
          <small>Messenger</small>
          <img src={watchIcon} alt="User" />
          <small>Watch</small>
          <img src={marketPlaceIcon} alt="User" />
          <small>Marketplace</small>

          <img src={savedIcon} alt="User" />
          <small>Salvos</small>
        </div>
        <div className={styles.feed}>
          <div className={styles.newPost}>
            <div className={styles.title}>
              <strong>Criar Publicação</strong>
              <hr />
            </div>
            <div className={styles.postContent}>
              <img src={UserImage} alt="icon" />
              <textarea placeholder="No que você está pensando, Daniel?" />
            </div>
            <hr />
            <div className={styles.actions}>
              <div className={styles.actionItem}>
                <img src={photoIcon} alt="icon" />
                <small>Foto/Video</small>
              </div>
              <div className={styles.actionItem}>
                <img src={tagIcon} alt="icon" />
                <small>Marcar amigos</small>
              </div>

              <div className={styles.actionItem}>
                <img src={feelingIcon} alt="icon" />
                <small>Sentimento/a...</small>
              </div>
              <div className={styles.actionItem}>
                <img src={pointIcon} alt="icon" />
              </div>
            </div>
          </div>

          <div className={styles.post}>
            <div className={styles.title}>
              <img src={UserImage} alt="User" />
              <div className={styles.postInfo}>
                <strong>Daniel Padilha</strong>
                <small>Ontem às 15:00</small>
              </div>
            </div>
            <p>Nova foto!</p>
            <img src={UserImage} alt="Post" />
          </div>
        </div>
        <div>
          <div className={styles.sponsors}>
            <h2>Patrocinado</h2>
            <img src={UserImage} alt="Sponsor" />
            <strong>Site Pessoal</strong>
            <a href="https://danielpadilhadev.com">danielpadilhadev.com</a>
            <p>Conheça meu portifólio on-line!</p>
          </div>
        </div>
        <div className={styles.rightMenu}>
          <strong>JOGOS INSTANTÂNEOS</strong>
          <div className={styles.games}>
            <img src={gameIcon1} alt="Game 1" />
            <img src={gameIcon2} alt="Game 2" />
            <img src={gameIcon3} alt="Game 3" />
          </div>
          <hr />
          <strong>SEUS JOGOS</strong>
          <div className={styles.games}>
            <img src={gameIcon1} alt="Game 1" />
            <img src={gameIcon2} alt="Game 2" />
            <img src={gameIcon3} alt="Game 3" />
          </div>
          <hr />
          <strong>CONTATOS</strong>
          <div className={styles.chat}>
            <img src={UserImage} alt="User" />
            <small>Daniel Padilha</small>
            <img src={UserImage} alt="User" />
            <small>Daniel Padilha</small>
            <img src={UserImage} alt="User" />
            <small>Daniel Padilha</small>
            <img src={UserImage} alt="User" />
            <small>Daniel Padilha</small>
          </div>
        </div>
      </div>
    </div>
  );
}
