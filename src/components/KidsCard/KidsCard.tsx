import React, { useState } from "react";
import "./KidsCard.css";
import { BsArrowUpRight } from "react-icons/bs";
import Modal from "../Modal/Modal";
import {cards} from "./CardData"

interface CardProps {
  image: string;
  heading: string;
  content: string;
}

const KidsCard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalChildren, setModalChildren] = useState<any>(null);

  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setModalChildren(
      <div className="kids-card modal-card">
        <img src={cards[index].image} alt="card" />
        <h1>{cards[index].heading}</h1>
        <p>{cards[index].content}</p>
      </div>
    );
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="kids-cards">
      {cards.map((card: CardProps, index: number) => (
        <div key={index} className="kids-card">
          <img src={card.image} alt="card" />
          <h1>{card.heading}</h1>
          <p>{card.content}</p>
          <button onClick={() => handleOpenModal(index)}>
            Read Post &nbsp; <BsArrowUpRight />
          </button>
        </div>
      ))}
      {openModal && (
        <Modal
          children={modalChildren}
          handleCloseModal={handleCloseModal}
          modalContainer="modalContainer"
          modalBackground=" parent"
          modalBtn="modal-button"
        />
      )}
    </div>
  );
};

export default KidsCard;
