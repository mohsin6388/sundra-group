import{c as r,j as e,L as s}from"./index-CV8Qs6Ml.js";/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=r("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);function d({product:t}){return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .product-card{
          display:flex;
          flex-direction:column;
          text-decoration:none;
          background:#fff;
          border-radius:20px;
          overflow:hidden;
          box-shadow:0 5px 20px rgba(0,0,0,0.08);
          transition:0.3s;
          color:#222;
        }

        .product-card:hover{
          transform:translateY(-5px);
        }

        .product-image{
          position:relative;
          height:280px;
          overflow:hidden;
        }

        @media (min-width: 768px) {
          .product-image {
            height: 360px;
          }
        }

        .product-image img{
          width:100%;
          height:auto;
          object-fit: contain; 
          object-position: center;
          transition:0.6s;
        }

        .product-card:hover .product-image img{
          transform:scale(1.05);
        }

        .product-tag{
          position:absolute;
          top:15px;
          left:15px;
          padding:6px 12px;
          border-radius:20px;
          color:#fff;
          font-size:11px;
          font-weight:600;
          text-transform:uppercase;
        }

        .product-content{
          padding:16px;
        }

        .product-header{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:8px;
        }

        .product-title{
          font-size:20px;
          font-weight:700;
          margin:0;
          line-height:1.2;
        }

        .product-title-hi{
          color:#1f4d2c;
          margin-top:2px;
          font-size:13px;
        }

        .product-summary{
          margin-top:10px;
          line-height:1.5;
          color:#666;
          font-size:14px;

          display:-webkit-box;
          -webkit-line-clamp:2;
          -webkit-box-orient:vertical;
          overflow:hidden;
        }

        .product-specs{
          margin-top:14px;
          padding-top:14px;
          border-top:1px solid #ddd;
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:10px;
        }

        .spec-label{
          font-size:10px;
          text-transform:uppercase;
          color:#888;
          margin-bottom:2px;
        }

        .spec-value{
          font-size:13px;
          font-weight:700;
          word-break: break-word;
        }
       
      `}),e.jsxs(s,{to:`/products/${t.slug}`,className:"product-card",children:[e.jsxs("div",{className:"product-image",style:{background:`linear-gradient(140deg, ${t.accent}20, transparent 80%)`},children:[e.jsx("img",{src:t.image,alt:t.name,loading:"lazy"}),e.jsx("span",{className:"product-tag",style:{background:t.accent},children:t.tag})]}),e.jsxs("div",{className:"product-content",children:[e.jsxs("div",{className:"product-header",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"product-title",children:t.name}),e.jsx("div",{className:"product-title-hi",children:t.nameHi})]}),e.jsx(o,{size:22,style:{flexShrink:0}})]}),e.jsx("p",{className:"product-summary",children:t.summary}),e.jsxs("div",{className:"product-specs",children:[e.jsx(i,{label:"Yield",value:t.yield}),e.jsx(i,{label:"Protein",value:t.protein}),e.jsx(i,{label:"Fat",value:t.fat})]})]})]})]})}function i({label:t,value:a}){return e.jsxs("div",{children:[e.jsx("div",{className:"spec-label",children:t}),e.jsx("div",{className:"spec-value",children:a})]})}export{d as P};
