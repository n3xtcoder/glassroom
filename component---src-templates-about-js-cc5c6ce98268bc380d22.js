webpackJsonp([32239989425883],{87:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ImageRow=void 0;var r=a(1),u=l(r),c=a(116),d=l(c);t.ImageRow=function(e){return u.default.createElement("div",{className:d.default.imageRow},e.images.map(function(e,t){return u.default.createElement("div",{className:d.default.imageWrapper},u.default.createElement("div",{key:t,className:d.default.rowImage,style:{backgroundImage:"url("+e+")"}}))}))}},116:function(e,t){e.exports={imageRow:"src-components----imageRow-module---imageRow---OiIt9",imageWrapper:"src-components----imageRow-module---imageWrapper---3PSB4",rowImage:"src-components----imageRow-module---rowImage---tBCMm"}},238:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.aboutQuery=void 0;var r=a(1),u=l(r),c=a(19),d=l(c),m=a(45),o=a(87),n=a(46),s=a(345),f=l(s);t.default=function(e){var t=e.data,a=t.about.frontmatter,l=a.title,r=a.blockquote,c=a.imageRow,s=a.curators,p=a.partners,i=a.contact,g=a.support;return u.default.createElement("div",null,u.default.createElement("h1",null,l),u.default.createElement("div",{className:f.default.videoWrapper},u.default.createElement("iframe",{className:f.default.video,src:"https://player.vimeo.com/video/237822352",width:"1170",height:"658",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0})),u.default.createElement(m.Blockquote,{quote:r}),u.default.createElement(o.ImageRow,{images:c}),u.default.createElement(n.Content,{content:t.about.html}),u.default.createElement("div",{className:f.default.greyBackground},u.default.createElement("div",{className:f.default.card},u.default.createElement("h2",null,"Curators"),u.default.createElement("div",{className:f.default.flexWrapper},u.default.createElement("div",{className:f.default.curatorImage,style:{backgroundImage:"url("+s.image+")"}}),u.default.createElement(d.default,{source:s.text}))),u.default.createElement("div",{className:f.default.card},u.default.createElement("h2",null,"Partners"),u.default.createElement("div",{className:f.default.flexWrapper},p.map(function(e,t){return u.default.createElement("div",{key:t,className:f.default.partnerWrapper},u.default.createElement("img",{src:e.image}),u.default.createElement(d.default,{source:e.text}))}))),u.default.createElement("div",{className:f.default.card},u.default.createElement("h2",null,"Contact"),u.default.createElement(m.Blockquote,{quote:u.default.createElement(d.default,{source:i})})),u.default.createElement("div",{className:f.default.card},u.default.createElement("h2",null,"With Support from Tactical Tech Funders"),u.default.createElement("div",{className:f.default.flexWrapper},g.map(function(e,t){return u.default.createElement("div",{key:t,className:f.default.supportWrapper},u.default.createElement("img",{src:e}))})))))};t.aboutQuery="** extracted graphql fragment **"},345:function(e,t){e.exports={videoWrapper:"src-templates----about-module---videoWrapper---3duB0",video:"src-templates----about-module---video---yP8RZ",greyBackground:"src-templates----about-module---greyBackground---1J-SO",card:"src-templates----about-module---card---3Dn4C",flexWrapper:"src-templates----about-module---flexWrapper---1gi1o",curatorImage:"src-templates----about-module---curatorImage---3QZHO",partnerWrapper:"src-templates----about-module---partnerWrapper---1OPLI",supportWrapper:"src-templates----about-module---supportWrapper---XqibE"}}});
//# sourceMappingURL=component---src-templates-about-js-cc5c6ce98268bc380d22.js.map