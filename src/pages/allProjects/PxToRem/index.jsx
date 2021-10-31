import React, { useState } from 'react';


import styles from './styles'
import { calculatePxToRem } from './utils'

const PxToRem = () => {
  const [converted, setConverted] = useState(false)
  const onSubmit = (event) => {
    event.preventDefault()
    
    const result = `${calculatePxToRem(event.target.converter.value)}rem`
    event.target.result.value = result

    navigator.clipboard.writeText(result).then(() => {
      setConverted(true)
      setTimeout(() => setConverted(false), 1000)
    })
  }

  return (
    <div className={styles}>
      <h1>Calculator Px to Rem</h1>
      <form className="__form" onSubmit={onSubmit}>

        <div className="__inputs">
          <input name="converter" type="text" placeholder="Px" />
          <input name="result" disabled placeholder="Rem" />
        </div>
        
        <button type="submit" className={converted ? "--copied" : ""} />
      </form>

      <div className="__footer">
        <button>Alterar valor de rem</button>
      </div>
    </div>
  )

};

export default PxToRem;
