import React from "react";
import ReactDom from "react-dom";

import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ModalContents = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  z-index: 1;
  padding: 50px;
`;
export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <ModalOverlay onClick={onClose}></ModalOverlay>
      <ModalContents>{children}</ModalContents>
    </>,
    document.getElementById("portal")
  );
}
