import React, { useState } from "react";
import { CatPhoto } from "../../assets/img";
import { PetIdentityModal } from "../Ad/components";
import { Modal } from "../../components/Modal";

const PetInformations = () => {

    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState({});
    return (

        <div>
            <div className="border-b border-gray-200">
                <div className="p-8">
                    <h3 className="font-semibold text-xl"> PET BİLGİLERİ </h3>
                </div>
            </div>
            <div>
                <div className="settingrightsizes">
                    <div className="flex flex-row items-center justify-around pb-4">
                        <div className="flex flex-col items-center cursor-pointer" onClick={() => { setModal(true); setModalContent( { element: "identity" } ); }}> 
                            <img src= { CatPhoto } alt="" className="h-24 rounded-full"/>
                            <h2 className="font-semibold text-lg">Karabaş</h2>
                        </div>
                        <div className="flex flex-col items-center cursor-pointer" onClick={() => { setModal(true); setModalContent( { element: "identity" } ); }}> 
                            <img src= { CatPhoto } alt="" className="h-24 rounded-full"/>
                            <h2 className="font-semibold text-lg">Karabaş</h2>
                        </div>
                    </div>
                </div>
            </div>
            {(Object.keys(modalContent).length !== 0) && (
        <Modal modal={modal} setModal={setModal} classes={ {modal: 'h-[90vh] max-w-[1140px]'} }>
            {modalContent.element === "identity" && <PetIdentityModal classes="!h-[80vh]" /> }

        </Modal>
      )}
        </div>
    )
}

export default PetInformations