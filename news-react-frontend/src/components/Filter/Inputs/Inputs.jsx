// import React, { useState } from 'react'
import styles from './Inputs.module.css'

export function DropDown({name, idInput, listOptions, handleChangeDrop}) {
    // const [opcaoSelecionada, setOpcaoSelecionada] = useState('')
    // const changeOpcao = (novaOpcao) => {
    //     setOpcaoSelecionada(novaOpcao)
    // }
    
    return (
        <div className={styles.inputDrop}>
            <label htmlFor={`select-${idInput}`}>{name}</label>
            <select 
                id={`${idInput}`} 
                name={idInput} 
                // value={opcaoSelecionada} 
                onChange={handleChangeDrop} 
                >
                <option value="">{`Selecione uma opção para ${name}`}</option>
                {listOptions.map((opcao, index) => (
                    <option key={index} value={opcao.value}>{opcao.name}</option>
                ) )}
            </select>
        </div>
    )
}

export function TextInput({name}){
    function handleDefault(e) {
        e.preventDefault()
    }
    return (
        <div className={styles.inputDivText}>
            <input 
                id= "text-search" 
                type="text" 
                onChange={handleDefault} 
                className={styles.textInput}
                placeholder='Encontrar uma notícia'
            />
        </div>
    )
}

export function ButtonSaberMais(){}