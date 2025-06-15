import React from 'react'

import styles from './Filter.module.css'
import { TextInput, DropDown } from './Inputs/Inputs'

import { setFiltros, getNewsFilterAsync } from '../../redux/newsSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const LIST_PAISES = [
  {value: "ua", name: "Ukraine"},
  {value: "gb", name: "United Kingdom"},
  {value: "us", name: "United States"},
  {value: "ve", name: "Venezuela"},
  {value: "au", name: "Autralia"},
  {value: "br", name: "Brazil"},
  {value: "cn", name: "China"},
  {value: "fr", name: "France"},
  {value: "de", name: "Germany"},
  {value: "it", name: "Italy"},
  {value: "jp", name: "Japan"},
  {value: "pl", name: "Poland"},
  {value: "ru", name: "Russia"},
  {value: "tr", name: "Turkey"},
]
const LIST_CATEGORIAS = [
  {value: "general", name: "General"},
  {value: "health", name: "Health"},
  {value: "science", name: "Science"},
  {value: "sports", name: "Sports"},
  {value: "technology", name: "Technology"},
]
function Filter() {
  const dispatch = useDispatch()
  const [pais, setPais] = useState('')
  const [categoria, setCategoria] = useState('')

  const handleChange = (event, tipo)=>{
    const valor = event.target.value
    if( tipo === 'pais') setPais(valor)
    if( tipo === 'categoria') setCategoria(valor)

    const novoFiltro = {
      pais: tipo === 'pais' ? valor : pais,
      categoria: tipo === 'categoria' ? valor : categoria
    }

    dispatch(setFiltros(novoFiltro))
    dispatch(getNewsFilterAsync(novoFiltro))
  }

  return (
    <form className={styles.contentFilter} >
      <DropDown name='País' idInput="pais" listOptions={LIST_PAISES} handleChangeDrop = { (e) => handleChange(e, 'pais')}/>
      <DropDown name='Categoria' idInput="categoria" listOptions={LIST_CATEGORIAS}  handleChangeDrop = { (e) => handleChange(e, 'categoria')}/>
      <TextInput name='Busca' />
    </form>
  )
}

export default Filter