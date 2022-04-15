import "./Home/Home.scss";

export default function ModalBackBtn({ handleClose }) {
  return (
    <button className="modal-back-btn" onClick={handleClose}>
      Back
    </button>
  );
}
