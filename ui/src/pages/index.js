import React from 'react';
import ImageGallery from 'react-image-gallery';
import sliderStyles from "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import {Blockquote} from '../components/Blockquote.js';
import {Content} from '../components/Content.js';
import {CircleLinks} from '../components/CircleLinks';
import styles from './index.module.css';

export default ({ data }) => {


    const images = data.page.frontmatter.sliderImages
    const quote = data.page.frontmatter.quote
    const imageNav = data.nav.frontmatter.imageNav

    return (
        <div>
          <div className={styles.sliderWrapper}>
            <ImageGallery
              items={images}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              showBullets={true}
              autoPlay={true}
              slideDuration={600}
              slideInterval={4000}
            />
          </div>
          <Blockquote quote={quote}/>
          <Content content={data.page.html}/>
          <CircleLinks nav={imageNav}/>
        </div>
    );

};

export const indexQuery = graphql`
  query indexQuery ($path: String!) {
    page: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        sliderImages{
          original
        }
        quote
      }
      html
    }
    nav: markdownRemark(fileAbsolutePath: {regex: "/content/navigation/"}) {
      frontmatter {
        imageNav{
          image
          label
          url
        }
      }
      html
    }
   }
`;
