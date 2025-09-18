import foto1 from "../assets/invierno.jpg";
import foto2 from "../assets/otonio.jpg";
import foto4 from "../assets/verano.jpg";
import foto3 from "../assets/primavera.jpg";
import Rate from "./rate";
import Envia from "./button";
import Modal from "./modal";
import { useState  } from "react";

function MainSection() {

  const [images, setImages] = useState([
    { src: foto1, rate: 0, id: 1 },
    { src: foto2, rate: 0, id: 2 },
    { src: foto3, rate: 0, id: 3 },
    { src: foto4, rate: 0, id: 4 },
  ]);

  const [modal, setModal] = useState(false);
  const [promedio, setPromedio] = useState(false);

  const actualizaRate = (index, valor) => {
    const newImages = [...images];
    newImages[index].rate = valor;
    setImages(newImages.sort((a, b) => b.rate - a.rate));
  };

  const sacaPromedio = () => {
    const prom =
    images.reduce((acum, img) => (acum += img.rate), 0) / images.length;
    console.log(`el promedio es ${prom}`);
    setModal(true)
    setPromedio(prom)
  };

  const reinicia = () => {
    const newImages = [...images];
    newImages.map((img) => (img.rate = 0));
    setImages(newImages);
   
  };

  

  return (
    <>
      <div className="mainSection">
        {images.map((img) => (
          <div key={img.id} className="scoreCard">
            <img src={img.src} alt="imagen" />
            <Rate ref={img.ref} conoceRate={actualizaRate} index={images.indexOf(img)} />
          </div>
        ))}
        <Envia
          onClick={sacaPromedio}        
        >
          Calcula promedio
        </Envia>
        <Modal
          isOpen={modal}
          onClose={() => setModal(false)} 
          reinicia ={reinicia}       
        >
          <h2>Calificación de la galería</h2>
          <p>El promedio de la calificaion es: {promedio}</p>
        </Modal>
      </div>
    </>
  );
}

export default MainSection;
