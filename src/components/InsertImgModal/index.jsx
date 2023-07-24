import { fileToBase64 } from "@/utils/imgToBase64";
import { useEffect, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { RiCloseCircleLine } from "react-icons/ri";

export default function InsertImgModal({ setOpenModalImg, setUrlImagem }) {
  const [image, setImage] = useState();

  useEffect(() => {
    if (image) {
      fileToBase64(image).then((resp) => setUrlImagem(resp));
    }
  }, [image]);

  return (
    <div className="insert-img-modal-box">
      <div className="insert-img-modal">
        <button
          type="button"
          className="btn-close-modal"
          onClick={() => {
            setOpenModalImg(false);
          }}
        >
          <RiCloseCircleLine />
        </button>
        <label htmlFor="insertImg" className="input-file">
          <LuImagePlus className="f-24px" />
          <span>Inserir imagem</span>
        </label>
        <input
          id="insertImg"
          type="file"
          className="d-none"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
      </div>
    </div>
  );
}
