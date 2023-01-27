// first of all, this is a joke between one of my friends, you should not take this as a serious project or something like that haha

import React from 'react';

import { Helmet } from 'react-helmet';
import useInterval from '../../hooks/useInterval'

import Ramon1 from './images/Ramon1.jpg'
import Ramon2 from './images/Ramon2.jpg'
import Ramon3 from './images/Ramon3.jpg'
import Ramon4 from './images/Ramon4.jpg'
import voice from './sound/voice.mp3'

const images = [Ramon1, Ramon2, Ramon3, Ramon4];

const getRandomNumber = (min, max) => `${Math.floor(Math.random() * (max - min) + min)}px`

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

export default function FunnyTest() {
  const [index, setIndex] = React.useState(0);
  const [delay, setDelay] = React.useState(3000)

  const playSound = (soundfile) => {
    new Audio(soundfile).play()
  } 

  const renderPopupDiv = (index) => {
    let div = document.createElement('div');
    playSound(voice)
    div.setAttribute('id', index)

    div.style.position = 'absolute'
    div.style.zIndex = index
    div.style.top = getRandomNumber(0, window.innerHeight - 400);
    div.style.left = getRandomNumber(0, window.innerWidth - 400);

    div.innerHTML = `
      <div style="border-radius: 8px;box-shadow: -1px 12px 5px -5px rgba(0,0,0,0.75); padding:32px 8px 8px; border: 1px solid gray; background: white; position: relative">
        <img src='${getRandomImage()}' style="height: 360px; width: 360px" />
        <button style="position: absolute; top: 6px; border:none; right: 6px; border-radius: 50%; color: red; background: white; width: 24px; height: 24px; font-size: 14px">X</button>
      </div>`

    document.body.appendChild(div)
  }

  useInterval(() => {
    renderPopupDiv(index)
    setIndex(index + 1)
    if (delay > 1000) setDelay(delay -500)
  }, delay)

  return (
    <div>
      <Helmet>
        <title >Ô Brunnão</title>
      </Helmet>

    </div>
  );
}
