import React, { useState } from 'react';

import styles from './styles.module.css';
/* eslint no-eval: 0 */
export default function CalculadoraJS() {
  const [value, setValue] = useState('');

  const addValue = (val) => {
    setValue(value + val);
    console.log(value);
  };
  const addAction = (action) => {
    const val = value.slice(-2);
    if (val.match(/[()%/*+.-]/g) === null) setValue(value + action);
    else {
      return val.match(/[()%/*+.-]/g).length < 2
        ? setValue(value + action)
        : null;
    }
  };
  const reset = () => {
    setValue('');
  };
  const lastReset = () => {
    setValue(value.substring(0, value.length - 1));
  };

  const execute = () => {
    try {
      setValue(eval(value));
    } catch (e) {
      setValue('Erro ao calcular :(');
    }
  };
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Calculadora JS</h1>
      <div className={styles.shell}>
        <div className={styles.display}>
          <input type="text" value={value} disabled />
        </div>
        <div id={styles.buttons}>
          <aside className={styles.numbers}>
            <button type="button" onClick={() => addAction('(')}>
              (
            </button>
            <button type="button" onClick={() => addAction(')')}>
              )
            </button>
            <button type="button" onClick={() => lastReset()}>
              C
            </button>

            <button type="button" onClick={() => addValue(1)}>
              1
            </button>
            <button type="button" onClick={() => addValue(2)}>
              2
            </button>
            <button type="button" onClick={() => addValue(3)}>
              3
            </button>

            <button type="button" onClick={() => addValue(4)}>
              4
            </button>
            <button type="button" onClick={() => addValue(5)}>
              5
            </button>
            <button type="button" onClick={() => addValue(6)}>
              6
            </button>

            <button type="button" onClick={() => addValue(7)}>
              7
            </button>
            <button type="button" onClick={() => addValue(8)}>
              8
            </button>
            <button type="button" onClick={() => addValue(9)}>
              9
            </button>

            <button type="button" onClick={() => addValue(0)}>
              0
            </button>
            <button type="button" onClick={() => addAction('.')}>
              .
            </button>
            <button type="button" onClick={() => execute()}>
              =
            </button>
          </aside>

          <main className={styles.actions}>
            <button type="button" onClick={() => reset()}>
              CE
            </button>
            <button type="button" onClick={() => addAction('/')}>
              /
            </button>
            <button type="button" onClick={() => addAction('*')}>
              *
            </button>
            <button type="button" onClick={() => addAction('-')}>
              -
            </button>
            <button type="button" onClick={() => addAction('+')}>
              +
            </button>
          </main>
        </div>
      </div>
      <footer className={styles.footer}>
        Site desenvolvido usando ReactJS, por
        {' '}
        <a href="https://www.linkedin.com/in/daniel-padilha-6926b8173/">
          Daniel José Padilha
        </a>
        {' '}
        - ©
        {' '}
        {new Date().getFullYear()}
        {' '}
      </footer>
    </div>
  );
}
