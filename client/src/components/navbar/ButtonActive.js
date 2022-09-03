import Points from "../../assets/Icons/points.svg";

const ButtonActive = ({ modal }) => {
  return (
    <>
      <label for={modal} className="btn bg-second-blue hover:bg-main-blue border-2 border-white hover:border-white h-6 mx-2 my-2 md:my-0 rounded-2xl">
        <img src={Points} alt="Menu" className="w-12 mb-6" />
      </label>
      <input type="checkbox" id={modal} className="modal-toggle" />

    </>
  );
};

export default ButtonActive