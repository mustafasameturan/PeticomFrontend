export const Modal = (props) => {

      const {
        modal,
        setModal,
        children,
        classes,
        closable
      } = props;
    
      const canClose = typeof closable === "undefined" ? true : false;
    
      const toggleModal = () => {
        setModal(!modal);
      };
    
      if (modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
      return (
        <>
          {modal && (
            <>
              <div onClick={() => canClose && toggleModal} className={`modal-overlay ${classes.overlay ? classes.overlay : ""} `}></div>
              <div className={`modal ${classes.modal ? classes.modal : ""} `}>
                {canClose && (<button onClick={toggleModal} className="modal-close-button"><span className=" opacity-80 hover:opacity-100">X</span></button>)}
                <div className={`modal-content ${classes.content ? classes.content : ""}`}>
                  {children}
                </div>
    
              </div>
            </>
          )}
        </>
      );

}