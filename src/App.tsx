// import Head from "next/head";
// import {Image} from "react";
// import { Inter } from "next/font/google";
import * as S from './styles.ts'
import Logo from "../assets/icons/pigz_white.svg"
import MobileHand from "../assets/images/hand-mobile-removebg-preview.png"
import React, { useRef } from "react";
import { toPng } from 'html-to-image'

// const inter = Inter({ subsets: ["latin"] });

export default function App() {

  const [mainText, setMainText] = React.useState<string>()
  const [text1, setText1] = React.useState<string>('ei, psiu:')
  const [text2, setText2] = React.useState<string>('tô no Pigz.')
  const [url, setUrl] = React.useState<string>('pigz.com.br/')
  const [slug, setSlug] = React.useState<string>('dudalicious')
  const [dimension, setDimensions] = React.useState<{ width: number, height: number }>()
  const [width, setWidth] = React.useState<number>(300)
  const [height, setHeight] = React.useState<number>(500)
  const ref = useRef(null)
  const [uploadedImage, setUploadedImage] = React.useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const convertToImage = () => {
    toPng(ref.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

return (
    <S.Container>
      <S.Wrapper bannerWidth={width} bannerHeight={height} id="banner" ref={ref}>
        <div className="flex-row">
          <img className="image" alt="image" src={MobileHand} />
          {uploadedImage && (
              <img className="upload-image" src={uploadedImage} alt="Imagem Carregada" />
          )}
          <p className="main-text">{text1}<br />{text2}</p>
          <div className="url">{url} <br /> {slug}</div>

          <div className="download">
            <p>baixe o app </p>
          </div>
        </div>

        <div >
          <img className="logo" alt="logo" src={Logo} />
        </div>
      </S.Wrapper>

      <S.Editor>
        <p className="title">Editor</p>

        <form>
          <div className="form-row">
            <label>Texto 1</label>
            <input value={text1} onChange={(e) => setText1(e.target.value)} type="text" />
          </div>
          <div className="form-row">
            <label>Texto 2</label>
            <input value={text2} onChange={(e) => setText2(e.target.value)} type="text" />
          </div>
          <div className="form-row">
            <label>URL</label>
            <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" />
          </div>
          <div className="form-row">
            <label>Slug</label>
            <input value={slug} onChange={(e) => setSlug(e.target.value)} type="text" />
          </div>
          <div className="form-row">
            <label>Dimensões</label>
            <div className="flex-row">
              <input className="number-input" value={width} onChange={(e) => setWidth(e.target.value)} type="number" /><label>x</label>
              <input className="number-input" value={height} onChange={(e) => setHeight(e.target.value)} type="number" />
            </div>

            <input min={0} max={1820} value={width} onChange={(e) => setWidth(e.target.value)} type="range" />
            <input min={0} max={2000} value={height} onChange={(e) => setHeight(e.target.value)} type="range" />
          </div>

          <div className="form-row">
            <label>Upload de Imagem</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>

     

          <button type="button" onClick={convertToImage}>Baixar PNG</button>
        </form>
      </S.Editor>
    </S.Container>
  );
}
