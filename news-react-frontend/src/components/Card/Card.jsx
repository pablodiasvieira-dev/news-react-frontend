import React from 'react'
import styles from './Card.module.css'


function Card({newsBody}) {

  return (
    <div className={styles.cardNews} onClick={() => window.location.href = newsBody.url} target="_blank">
      <div className={styles.tituloNews}>
        {/* <h3> {newsBody.tituloNews} </h3> */}
        <h3> {newsBody.title} </h3>
        </div>
      <div className={styles.imgNews}>
        {/* <img src={newsBody.urlImgNews} alt={newsBody.tituloNews} /> */}

        <img src={newsBody.urlToImage ? newsBody.urlToImage : require('../../assets/img-04.jpg') } alt={newsBody.tituloNews} />
      </div>
      <div className={styles.previaNews}>
        {/* <p>{newsBody.previaNews}</p> */}
        <p>{newsBody.description}</p>
      </div>
      <div className={styles.btnSaberMais}>Saber mais...</div>
    </div>
  )
}

export default Card