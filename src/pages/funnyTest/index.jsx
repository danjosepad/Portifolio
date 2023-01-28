// first of all, this is a joke between one of my friends, you should not take this as a serious project or something like that haha

import React from 'react';

import { Helmet } from 'react-helmet';
import useInterval from '../../hooks/useInterval'
import { Howl } from 'howler'

import Ramon1 from './images/Ramon1.jpg'
import Ramon2 from './images/Ramon2.jpg'
import Ramon3 from './images/Ramon3.jpg'
import Ramon4 from './images/Ramon4.jpg'
import Ramon5 from './images/Ramon5.jpeg'
import Ramon6 from './images/Ramon6.jpeg'
import Ramon7 from './images/Ramon7.jpeg'
import Ramon8 from './images/Ramon8.jpeg'
import Ramon9 from './images/Ramon9.jpeg'
import Ramon10 from './images/Ramon10.jpeg'
import Ramon11 from './images/Ramon11.jpeg'
import Ramon12 from './images/Ramon12.jpeg'
import Ramon13 from './images/Ramon13.jpeg'
import Ramon14 from './images/Ramon14.jpeg'
import Ramon15 from './images/Ramon15.jpeg'
import Ramon16 from './images/Ramon16.jpeg'
import Ramon17 from './images/Ramon17.jpeg'

import voice1 from './sound/voice.mp3'
import voice2 from './sound/voice2.mp3'


const images = [
  Ramon1, 
  Ramon2, 
  Ramon3, 
  Ramon4, 
  Ramon5, 
  Ramon6, 
  Ramon7, 
  Ramon8,
  Ramon9,
  Ramon10,
  Ramon11,
  Ramon12,
  Ramon13,
  Ramon14,
  Ramon15,
  Ramon16,
  Ramon17
];

const getRandomNumber = (min, max) => `${Math.floor(Math.random() * (max - min) + min)}px`

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

export default function FunnyTest() {
  const [index, setIndex] = React.useState(0);
  const [delay, setDelay] = React.useState(3000);
  const [voiceList, setVoiceList] = React.useState()
  const [loading, setLoading] = React.useState(true)

  const getRandomVoice = () => voiceList[Math.floor(Math.random() * voiceList.length)];

  const playSound = (soundFile) => {
    soundFile.play()
  }

  const renderPopupDiv = (index) => {
    playSound(getRandomVoice())

    let div = document.createElement('div');
    
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
    if (!loading) {
      renderPopupDiv(index)
      setIndex(index + 1)
      if (delay > 1000) setDelay(delay -500)
    }
  }, delay)

  const allowAudio = () => {
    const howlVoice1 = new Howl({ src: voice1 })
    const howlVoice2 = new Howl({ src: voice2 })

    setVoiceList([howlVoice1, howlVoice2])
    setLoading(false)
  }

  if (loading) return <button onClick={allowAudio}>Permitir áudio</button>

  return (
    <div>
      <Helmet>
        <title >Ô Brunnão</title>
      </Helmet>

    
    </div>
  );
}
