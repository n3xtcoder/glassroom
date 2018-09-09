import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './exhibitItem.module.css'


export const ExhibitItem = (props) => (
  <div className={styles.exhibit}>
      <div className={styles.exhibitImage} style={{ backgroundImage: `url(${props.image})` }}></div>
      <div>
        <h2><ReactMarkdown source={props.title} escapeHtml={false}/></h2>
        <ReactMarkdown source={props.text} escapeHtml={false}/>
      </div>
  </div>
)
