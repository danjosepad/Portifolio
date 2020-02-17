import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './styles.module.css';

export default function AnotacoesJS() {
  const [folders, setFolders] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const [folderName, setFolderName] = useState('');
  const [annotationTitle, setAnnotationTitle] = useState('');
  const [annotationText, setAnnotationText] = useState('');

  const [show, setShow] = useState(false);
  const [showAnnotation, setShowAnnotation] = useState(false);

  const handleModal = () => setShow(!show);
  const handleAnnotation = () => setShowAnnotation(!showAnnotation);

  const addNewFolder = (name) => {
    const newFolder = {
      name,
      id: Math.random(),
    };
    setFolders([...folders, newFolder]);
  };
  const addNewAnnotation = (name = 'Nova Pasta') => {
    const newAnnotation = {
      name,
      text: '',
      id: Math.random(),
      folder: name,
    };
    setAnnotations([...annotations, newAnnotation]);

    setAnnotationTitle('');
    setAnnotationText('');
    handleAnnotation();
  };

  return (
    <div id={styles.container}>
      <div className={styles.menu}>
        <div className={styles.topMenu}>
          <strong>Anotações</strong>
          <button type="button" id={styles.addAnnotation} onClick={() => addNewAnnotation(folderName)}>
            <img
              src="https://image.flaticon.com/icons/svg/2467/2467769.svg"
              alt="By xnimrodx on flaticon"
            />
          </button>
        </div>
        <div className={styles.itemsMenu}>
          {folders.map((folder) => (
            <>
              <button type="button">{folder.name}</button>
            </>
          ))}
          <button type="button" id={styles.addFolder} onClick={handleModal}>Nova Pasta</button>
          <Modal show={show} onHide={handleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Nova Pasta</Modal.Title>
            </Modal.Header>
            <Modal.Body>Digite um nome para sua nova pasta</Modal.Body>
            <Modal.Body>
              <Form.Control
                size="lg"
                name="Folder"
                type="text"
                placeholder="Nome da pasta"
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModal}>
                Fechar
              </Button>
              <Button variant="primary" onClick={() => addNewFolder(folderName)}>
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className={styles.itemsList}>
          {annotations.map((annotation) => (
            <div className={styles.newText} key={annotation.id}>
              <strong>{annotation.name}</strong>
              <p>{annotation.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.annotation}>
        {!handleAnnotation
        && (
          <>
            <button type="button">Salvar</button>
            <input type="text" id="title" placeholder="Digite o titulo aqui" value={annotationTitle} onChange={(e) => setAnnotationTitle(e.target.value)} />
            <textarea placeholder="Digite sua anotação" value={annotationText} onChange={(e) => setAnnotationText(e.target.value)} />
          </>
        )}

      </div>
    </div>
  );
}
