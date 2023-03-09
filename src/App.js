import  React, { useState, useEffect } from 'react';

export default function App() {

  const [picChosen, setPicChosen] = useState("nigeria");
  const [flagChosen, setFlagChosen] = useState("Nigeria");
  const [dataPicArray, setDataPicArray] = useState([]);
  const [dataPicArrayCap, setDataPicArrayCap] = useState([]);

  const changePicChosen = (e) => {
    setPicChosen(prevPicChosen => e.target.dataset.pic)
    let flag = e.target.dataset.pic;
    let flagCap = flag.charAt(0).toUpperCase() + flag.slice(1);
    setFlagChosen(prevFlagChosen => flagCap)
  };

  useEffect(() => {
    const imgElements = document.querySelectorAll('img[data-pic]');
    const dpArray = Array.from(imgElements, (img) => img.getAttribute('data-pic'));
    setDataPicArray(dpArray);

    const dpArrayCap = dpArray.map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    setDataPicArrayCap(dpArrayCap);

  }, []);

  const backwardPicChosen = () => {
    let index = dataPicArray.indexOf(picChosen);
    setPicChosen(prevPicChosen => dataPicArray[(index - 1 + dataPicArray.length) % dataPicArray.length]);

    let indexx = dataPicArrayCap.indexOf(flagChosen);
    setFlagChosen(prevFlagChosen => dataPicArrayCap[(indexx - 1 + dataPicArrayCap.length) % dataPicArrayCap.length]);
  };

  const forwardPicChosen = (e) => {
    let index = dataPicArray.indexOf(picChosen);
    setPicChosen(prevPicChosen => dataPicArray[(index + 1) % dataPicArray.length]);

    let indexx = dataPicArrayCap.indexOf(flagChosen);
    setFlagChosen(prevFlagChosen => dataPicArrayCap[(indexx + 1) % dataPicArrayCap.length]);
  };
  
    return (
      <main>
      <section>
          <button>
            <img src="./images/backward.png" id="pic-backward" alt="" onClick={backwardPicChosen}/>
            </button>
          <header>
              <article><img src={`./images/${picChosen}.jpg`} id="pic-chosen" alt=""/></article>
              <h1>{flagChosen}</h1>
          </header>
          <button>
            <img src="./images/forward.png" id="pic-forward" alt="" onClick={forwardPicChosen}/>
            </button>
      </section>
      <menu>
          <li>
            <img src="./images/canada.jpg" className="pic-menu" alt="" data-pic="canada" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/china.jpg" className="pic-menu" alt="" data-pic="china" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/england.jpg" className="pic-menu" alt="" data-pic="england" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/germany.jpg" className="pic-menu" alt="" data-pic="germany" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/ghana.jpg" className="pic-menu" alt="" data-pic="ghana" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/jamaica.jpg" className="pic-menu" alt="" data-pic="jamaica" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/japan.jpg" className="pic-menu" alt="" data-pic="japan" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/nigeria.jpg" className="pic-menu" alt="" data-pic="nigeria" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/southafrica.jpg" className="pic-menu" alt="" data-pic="southafrica" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/southkorea.jpg" className="pic-menu" alt="" data-pic="southkorea" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/sweden.jpg" className="pic-menu" alt="" data-pic="sweden" onClick={changePicChosen}/>
            </li>
          <li>
            <img src="./images/unitedstates.jpg" className="pic-menu" alt="" data-pic="unitedstates" onClick={changePicChosen}/></li>
      </menu>

      <footer>
          <h2>Image Slider React</h2>
          <a href="https://github.com/traez/image-slider-react" target="_blank">https://github.com/traez</a>
      </footer>

  </main>
)}

/*
        <section>
*/