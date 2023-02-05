import React, { useState } from "react"

 

export default function Painel( {setIsBoard, isBoard} ) {

  const [comprimento, setComprimento] = useState(0)
  const [espessura, setEspessura] = useState(0)
  const [largura, setLargura] = useState(0)

  const [frenteTras, setFrenteTras] = useState(0)
  const [esquerdaDireita, setEsquerdaDireita] = useState(0)
  const [cimaBaixo, setCimaBaixo] = useState(0)


 const [rotationX, setRotationX] = useState(0)
  const [rotationY, setRotationY] = useState(0)
  const [rotationZ, setRotationZ] = useState(0)

  const createBoard = (e) => {
    e.preventDefault()
    const board = {
      position: {
        x: frenteTras * 0.01,
        y: cimaBaixo * 0.01,
        z: esquerdaDireita * 0.01
      },
      rotation: {
        x: rotationX,
        y: rotationY,
        z: rotationZ
      },
      scale: {
        x: largura * 0.01,
        y: espessura * 0.005,
        z: comprimento * 0.01,
      }
    }
    

    setIsBoard((old) => [...old, board])
  }


  const calculatorValue = () => {
    
 
    const soma = isBoard.reduce((acumulador, atual) =>   acumulador  + (atual.scale.x * atual.scale.z * 500), 0);
   return soma.toFixed(2).replace('.',',')
    
  }


  return (
    <div class="container">
  <h1>
    Valor : {calculatorValue(isBoard)}
  </h1>
  <h1> 
    Quantidade de Tabua:  {isBoard.length}
  </h1>
  <form class="form-group">
    <label htmlFor="name">Comprimento</label>
    <input type="text"
      onChange= {(e) => {setComprimento(e.target.value)}}
      value= {comprimento}
    />
    <label htmlFor="name">Espessura</label>
    <input type="text"
      onChange= {(e) => {setEspessura(e.target.value)}}
      value= {espessura}
    />
    <label htmlFor="name">Lagura</label>
    <input type="text"
      onChange= {(e) => {setLargura(e.target.value)}}
      value={largura}
    />
  </form>

  <form class="form-group">
    <label htmlFor="name">Frente/Atras</label>
    <input type="text"
      onChange = {(e) => {setFrenteTras(e.target.value)}}
      value = {frenteTras}
    />
    <label htmlFor="name">Esquerda/Direita</label>
    <input type="text"
      onChange = {(e) => {setEsquerdaDireita(e.target.value)}}
      value={esquerdaDireita}
    />
    <label htmlFor="name">Cima/Baixo</label>
    <input type="text"
      onChange = {(e) => {setCimaBaixo(e.target.value)}}
      value = {cimaBaixo}
    />
  </form>

  <form class="form-group">
        <label htmlFor="name">RotacaoX</label>
        <input type="text"
          onChange = {(e) => {setRotationX(e.target.value)}}
          value = {rotationX}

        />
        <label htmlFor="name">RotacaoY</label>
        <input type="text"
          onChange = {(e) => {setRotationY(e.target.value)}}
          value = {rotationY}

        />
        <label htmlFor="name">RotacaoZ</label>
        <input type="text"
          onChange = {(e) => {setRotationZ(e.target.value)}}
          value = {rotationZ}

        />

        <button
          onClick = {(e) =>   createBoard(e)   } >
          Criar
        </button>
      </form>
    </div>
  )
}
