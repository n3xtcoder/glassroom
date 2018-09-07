import React from 'react';
import {Blockquote} from '../components/Blockquote.js';
import {Content} from '../components/Content.js';
import styles from './about.module.css';

export default ({ data }) => {

  const {blockquote, imageRow } = data.about.frontmatter

    return (
        <div>
          <div className={styles.videoWrapper}>
            <iframe className={styles.video} src="https://player.vimeo.com/video/237822352" width="1170" height="658" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
          </div>
          <Blockquote quote={blockquote}/>
          <div className={styles.imageRow}>
            {imageRow.map((n,i)=>(
                <div className={styles.imageWrapper}><div key={i} className={styles.rowImage} style={{ backgroundImage: `url(${n})` }}></div></div>
            ))}
          </div>
          <Content content={data.about.html }/>
        </div>
    );

};

export const aboutQuery = graphql`
  query aboutQuery ($path: String!) {
    about: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        blockquote
        imageRow
      }
      html
    }
   }
`;
