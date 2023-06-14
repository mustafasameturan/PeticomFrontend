import React, { useState } from "react";
import { Modal } from "../../../../components/Modal";
import { CatPhoto, DogPhoto } from "../../../../assets/img";
import PetInformationModal from "./PetInformationModal";

const PetInformationComponent = ({ identity }) => {

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  return (
    <>
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => {
          setModal(true);
          setModalContent({ element: "identity" });
        }}
      >
        <img src={identity.type === 0 ? CatPhoto : DogPhoto} alt="" height={40} className="h-24 rounded-full" />
        <h2 className="font-semibold text-lg">{identity.name}</h2>
      </div>

      {Object.keys(modalContent).length !== 0 && (
        <Modal
          modal={modal}
          setModal={setModal}
          classes={{ modal: "h-[90vh] max-w-[1140px]" }}
        >
          {modalContent.element === "identity" && (
            <PetInformationModal classes="!h-[80vh]" identity={identity} />
          )}
        </Modal>
      )}
    </>
  );
};

export default PetInformationComponent;
