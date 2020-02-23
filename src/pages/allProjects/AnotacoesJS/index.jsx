import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./styles.module.css";

export default function AnotacoesJS() {
  const [folders, setFolders] = useState([]);
  const [annotations, setAnnotations] = useState([]);

  const [folderName, setFolderName] = useState("");
  const [folderId, setFolderId] = useState(0);

  const [annotationTitle, setAnnotationTitle] = useState("");
  const [annotationText, setAnnotationText] = useState("");
  const [annotationId, setAnnotationId] = useState(0);

  const [show, setShow] = useState(false);
  const [showAnnotation, setShowAnnotation] = useState(false);

  const [annotationBtn, setAnnotationBtn] = useState(true);

  const handleModal = () => setShow(!show);

  const addNewFolder = name => {
    const newFolder = {
      name,
      id: Math.random()
    };

    setFolders([...folders, newFolder]);
    setFolderId(newFolder.id);
    setAnnotationBtn(false);
    handleModal();
  };

  const addNewAnnotation = id => {
    const newAnnotation = {
      name: "Rascunho",
      text: "",
      id: Math.random(),
      folder_id: id
    };

    setAnnotations([...annotations, newAnnotation]);

    setAnnotationTitle("");
    setAnnotationText("");
    setAnnotationBtn(false);
  };

  const manageAnnotation = id => {
    setShowAnnotation(true);
    setAnnotationId(id);
  };

  const saveAnnotation = id => {
    const index = annotations.findIndex(Annotation => Annotation.id === id);

    const values = [...annotations];
    annotations[index].name = annotationTitle;
    annotations[index].text = annotationText;

    setAnnotations(values);
  };

  // eslint-disable-next-line prefer-const
  let listAnnotations = annotations.filter(
    annotation => annotation.folder_id === folderId
  );

  return (
    <div id={styles.container}>
      <div className={styles.menu}>
        <div className={styles.topMenu}>
          <strong>Anotações</strong>
          <button
            type="button"
            id={styles.addAnnotation}
            onClick={() => addNewAnnotation(folderId)}
            disabled={annotationBtn}
          >
            <img
              src="https://image.flaticon.com/icons/svg/2467/2467817.svg"
              alt="By xnimrodx on flaticon"
            />
          </button>
        </div>
        <div className={styles.itemsMenu}>
          {folders.map(folder => (
            <>
              <button type="button" onClick={() => setFolderId(folder.id)}>
                {folder.name}
              </button>
            </>
          ))}

          <button type="button" id={styles.addFolder} onClick={handleModal}>
            Nova Pasta
          </button>

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
                onChange={e => setFolderName(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModal}>
                Fechar
              </Button>
              <Button
                variant="primary"
                onClick={() => addNewFolder(folderName)}
              >
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className={styles.itemsList}>
          {listAnnotations.map(annotation => (
            <div className={styles.newText} key={annotation.id}>
              <strong
                role="button"
                onKeyUp={() => manageAnnotation(annotation.id)}
                onClick={() => manageAnnotation(annotation.id)}
              >
                {annotation.name}
              </strong>
              <p>{annotation.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.annotation}>
        {showAnnotation && (
          <>
            <button type="button" onClick={() => saveAnnotation(annotationId)}>
              Salvar
            </button>
            <input
              type="text"
              placeholder="Digite o titulo aqui"
              value={annotationTitle}
              onChange={e => setAnnotationTitle(e.target.value)}
            />
            <textarea
              placeholder="Digite sua anotação"
              value={annotationText}
              onChange={e => setAnnotationText(e.target.value)}
            />
          </>
        )}
      </div>
    </div>
  );
}
