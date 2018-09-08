import React from 'react';
import {Blockquote} from '../components/Blockquote.js';
import {Content} from '../components/Content.js';
import styles from './experience.module.css';

export default ({ data }) => {

  const {topImage, blockquote, imageRow } = data.experience.frontmatter

    return (
        <div>
          <div className={styles.topImage} style={{ backgroundImage: `url(${topImage})` }}></div>
          <Blockquote quote={blockquote}/>
          <div className={styles.imageRow}>
            {imageRow.map((n,i)=>(
                <div className={styles.imageWrapper}><div key={i} className={styles.rowImage} style={{ backgroundImage: `url(${n})` }}></div></div>
            ))}
          </div>
          <Content content={data.experience.html}/>
        </div>
    );

};

export const experienceQuery = graphql`
  query experienceQuery ($path: String!) {
    experience: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        topImage
        blockquote
        imageRow
      }
      html
    }
   }
`;
