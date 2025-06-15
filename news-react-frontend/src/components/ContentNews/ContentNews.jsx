import React, { useEffect } from 'react'
import styles from './ContentNews.module.css'
import  Card  from '../Card/Card'

import { useSelector, useDispatch } from "react-redux";
import { getNewsAsync } from '../../redux/newsSlice';


function ContentNews() {

  const noticiasRedux = useSelector( (state) => {
    // console.log(state.everything);
    return state.everything.noticias
  } )

  const dispatch = useDispatch()

  useEffect(  () =>{
    dispatch(getNewsAsync(undefined))
  }
    , [dispatch])

    if (!noticiasRedux?.articles) {
      return <p>Carregando...</p>
    }
  return (
    <div className={styles.contentNews} >
      {noticiasRedux.articles.length === 0 ? (
        <p>Nenhuma correspondência encontrada</p>
      ) : (
        noticiasRedux.articles.map( (news, index) => (
          <Card key={index} newsBody={news}/>
        ))
      )}
      {/* {jsonNoticias.map( (news, index) => (
        <Card key={index} newsBody={news}/>
      ))} */}
    </div>
  )
}

export default ContentNews