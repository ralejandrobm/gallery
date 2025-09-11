import foto1 from "../assets/invierno.jpg";
import foto2 from "../assets/otonio.jpg";
import foto4 from "../assets/verano.jpg";
import foto3 from "../assets/primavera.jpg";
import Rate from "./rate";
import Envia from "./envia";
import { useState } from "react";

function MainSection() {
  const [images, setImages] = useState([
    { src: foto1, rate: 0, id: 1 },
    { src: foto2, rate: 0, id: 2 },
    { src: foto3, rate: 0, id: 3 },
    { src: foto4, rate: 0, id: 4 },
  ]);

 
  const [promedio, setPromedio] = useState(0);

  const actualizaRate = (index, valor) => {
    const newImages = [...images];
    newImages[index].rate = valor;
    setImages(newImages.sort((a, b) => b.rate - a.rate));
  };

  const sacaPromedio = () => {
    const prom =
    images.reduce((acum, img) => (acum += img.rate), 0) / images.length;
    console.log(`el promedio es ${prom}`);
    setPromedio(prom)
  };

  

  

  return (
    <>
      <div className="mainSection">
        {images.map((img) => (
          <div key={img.id} className="scoreCard">
            <img src={img.src} alt="imagen" />
            <Rate conoceRate={actualizaRate} index={images.indexOf(img)} />
          </div>
        ))}
        <Envia
          onClick={sacaPromedio}        
        >
          Calcula promedio
        </Envia>
        
      </div>
    </>
  );
}

export default MainSection;
