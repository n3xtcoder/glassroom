import React from 'react';
import ReactMarkdown from 'react-markdown';
import {TopImage} from '../components/TopImage.js';
import {Blockquote} from '../components/Blockquote.js';
import {Content} from '../components/Content.js';
import {ExhibitItem} from '../components/ExhibitItem.js';
import styles from './exhibit.module.css';

export default ({ data }) => {

  const {title, topImage, blockquote, contentPart1 } = data.exhibit.frontmatter
  const exhibits = data.exhibitItems.frontmatter.exhibits

    return (
        <div>
          <h1>{title}</h1>
          <TopImage image={topImage}/>
          <Blockquote quote={<ReactMarkdown source={blockquote}/>}/>
          <Content content={contentPart1}/>

          <div className={styles.greyBackground}>

            {exhibits.map((n,i)=>{
              return (
                <div key={i}>
                  <h1>{n.title}</h1>
                  <p>{n.text}</p>

                  {n.items.map((n,i)=>(
                    <ExhibitItem key={i} image={n.image} title={n.title} text={n.text}/>
                  ))}
                </div>
              )
            })}
          </div>

          <Content content={data.exhibit.html}/>
        </div>
    );
};

export const exhibitQuery = graphql`
  query exhibitQuery ($path: String!) {
    exhibit: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        topImage
        blockquote
        contentPart1
      }
      html
    }
    exhibitItems: markdownRemark(fileAbsolutePath: {regex: "/content/exhibits/"}) {
      frontmatter {
        exhibits{
          title
          text
          items {
            image
            title
            text
          }
        }
      }
    }
   }
`;
