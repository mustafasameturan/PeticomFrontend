import React, { useState } from "react";
import { CatPhoto, DogPhoto } from "../../../assets/img";
import { Modal } from "../../../components/Modal";
import PetInformationModal from "../../Setting/components/PetInformations/PetInformationModal";

const PetPictureComponent = ({ identity }) => {

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  return (
    <>
      <div className="group relative">
        <img
            src={identity.type === 0 ? CatPhoto : DogPhoto}
            alt=""
            className="cursor-pointer"
            onClick={() => {
                setModal(true);
                setModalContent({ element: "identity" });
            }}
        />
        <div className="tooltip-top">
            <p>{identity.name}</p>
        </div>
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

export default PetPictureComponent;
