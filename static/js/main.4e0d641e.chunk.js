(this.webpackJsonptryunfo=this.webpackJsonptryunfo||[]).push([[0],[,,,,,,,,,function(e,t,a){},,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(10),s=a.n(n),d=(a(9),a(11)),i=a(7),o=a(2),l=a(3),u=a(6),j=a(5),b=a(4),h=a(0),m=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cardName,a=e.cardDescription,r=e.cardAttr1,c=e.cardAttr2,n=e.cardAttr3,s=e.cardImage,d=e.cardRare,i=e.cardTrunfo,o=e.hasTrunfo,l=e.isSaveButtonDisabled,u=e.onInputChange,j=e.onSaveButtonClick;return Object(h.jsxs)("form",{className:"form",onSubmit:j,children:[Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:"Adicionar nova carta"})}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"name",children:["Nome",Object(h.jsx)("input",{"data-testid":"name-input",className:"large-input has-label",name:"cardName",type:"text",value:t,onChange:u,required:!0})]}),Object(h.jsxs)("label",{htmlFor:"description",children:["Descri\xe7\xe3o",Object(h.jsx)("textarea",{"data-testid":"description-input",className:"text-area has-label",name:"cardDescription",type:"text",value:a,onChange:u,required:!0})]}),Object(h.jsxs)("label",{htmlFor:"attr1",children:["Acelera\xe7\xe3o",Object(h.jsx)("input",{"data-testid":"attr1-input",name:"cardAttr1",type:"number",value:r,onChange:u,required:!0})]}),Object(h.jsxs)("label",{htmlFor:"attr2",children:["Velocidade",Object(h.jsx)("input",{"data-testid":"attr2-input",name:"cardAttr2",type:"number",value:c,onChange:u,required:!0})]}),Object(h.jsxs)("label",{htmlFor:"attr3",children:["Dire\xe7\xe3o",Object(h.jsx)("input",{"data-testid":"attr3-input",name:"cardAttr3",type:"number",value:n,onChange:u,required:!0})]}),Object(h.jsxs)("label",{htmlFor:"imagem",children:["Imagem",Object(h.jsx)("input",{"data-testid":"image-input",className:"has-label",name:"cardImage",type:"text",value:s,onChange:u,required:!0})]}),Object(h.jsxs)("label",{htmlFor:"raridade",children:["Raridade",Object(h.jsxs)("select",{"data-testid":"rare-input",name:"cardRare",className:"large-input has-label",value:d,onChange:u,children:[Object(h.jsx)("option",{children:"normal"}),Object(h.jsx)("option",{children:"raro"}),Object(h.jsx)("option",{children:"muito raro"})]})]}),o?Object(h.jsx)("p",{children:"Voc\xea j\xe1 tem um Super Trunfo em seu baralho"}):Object(h.jsxs)("label",{htmlFor:"trunfo",children:[Object(h.jsx)("input",{"data-testid":"trunfo-input",type:"checkbox",name:"cardTrunfo",checked:i,onChange:u}),"Super Trybe Trunfo"]}),Object(h.jsx)("button",{"data-testid":"save-button",type:"submit",disabled:l,children:"Salvar"})]})]})}}]),a}(c.a.Component),p=m,f=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cardName,a=e.cardDescription,r=e.cardAttr1,c=e.cardAttr2,n=e.cardAttr3,s=e.cardImage,d=e.cardRare,i=e.cardTrunfo;return Object(h.jsxs)("div",{className:"card_area",children:[Object(h.jsx)("div",{className:"card_name_div",children:Object(h.jsx)("h4",{className:"card_name",children:t})}),Object(h.jsx)("div",{className:"card_img_div",children:Object(h.jsx)("img",{className:"card_img",src:s,alt:t})}),Object(h.jsx)("p",{className:"card_decription",children:a}),Object(h.jsxs)("div",{className:"card_att_div",children:[Object(h.jsx)("span",{children:"Acelera\xe7\xe3o: ".concat(r)}),Object(h.jsx)("span",{children:"Velocidade: ".concat(c)}),Object(h.jsx)("span",{children:"Dire\xe7\xe3o: ".concat(n)})]}),Object(h.jsx)("p",{className:"card_rare",children:d}),i?Object(h.jsx)("b",{id:"trunfo",children:"Super Trunfo"}):Object(h.jsx)("b",{})]})}}]),a}(c.a.Component),O=f,x=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cardName,a=e.cardDescription,r=e.cardAttr1,c=e.cardAttr2,n=e.cardAttr3,s=e.cardImage,d=e.cardRare,i=e.cardTrunfo;return Object(h.jsxs)("div",{className:"visualizacao",children:[Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:"Pr\xe9-visualiza\xe7\xe3o"})}),Object(h.jsx)(O,{cardName:t,cardDescription:a,cardAttr1:r,cardAttr2:c,cardAttr3:n,cardImage:s,cardRare:d,cardTrunfo:i})]})}}]),a}(c.a.Component),v=x,g=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={filterInput:""},e.onEraseButtonClick=e.onEraseButtonClick.bind(Object(u.a)(e)),e.handleFilter=e.handleFilter.bind(Object(u.a)(e)),e}return Object(l.a)(a,[{key:"handleFilter",value:function(e){var t=e.target,a=t.value,r=t.name;this.setState(Object(i.a)({},r,a))}},{key:"onEraseButtonClick",value:function(e){var t=e.target,a=t.parentNode,r=this.props.eraseTrunfo;a.querySelector("#trunfo")&&r(),t.parentNode.remove()}},{key:"render",value:function(){var e=this,t=this.props.savedCards,a=this.state.filterInput;return Object(h.jsxs)("div",{className:"all-cards",children:[Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:"Todas as cartas"})}),Object(h.jsxs)("section",{className:"filters-section",children:[Object(h.jsx)("h1",{children:"Filtro de busca"}),Object(h.jsx)("input",{"data-testid":"name-filter",id:"filterInput",name:"filterInput",type:"text",placeholder:"Nome da carta",value:a,onChange:this.handleFilter}),Object(h.jsxs)("select",{"data-testid":"rare-filter",children:[Object(h.jsx)("option",{disabled:!0,selected:!0,hidden:!0,className:"select-exemple",children:"Raridade"}),Object(h.jsx)("option",{value:"todas",children:"todas"}),Object(h.jsx)("option",{value:"normal",children:"normal"}),Object(h.jsx)("option",{value:"raro",children:"raro"}),Object(h.jsx)("option",{value:"muito raro",children:"muito raro"})]}),Object(h.jsxs)("label",{htmlFor:"filter-trunfo",children:[Object(h.jsx)("input",{"data-testid":"trunfo-filter",id:"filter-trunfo",name:"filter-trunfo",type:"checkbox",className:"is-trunfo"}),"Super Trybe Trunfo"]})]}),Object(h.jsx)("main",{className:"cards-display",children:Object(h.jsx)("ul",{className:"card-list",children:t.filter((function(e){return e.name.includes(a)})).map((function(t){return Object(h.jsxs)("div",{className:"card-with-button",children:[Object(h.jsx)(O,{cardName:t.name,cardDescription:t.description,cardAttr1:t.attr1,cardAttr2:t.attr2,cardAttr3:t.attr3,cardImage:t.image,cardRare:t.rare,cardTrunfo:t.trunfo}),Object(h.jsx)("button",{"data-testid":"delete-button",type:"button",className:"erase-btn",onClick:e.onEraseButtonClick,children:"Excluir"})]},t.name)}))})})]})}}]),a}(c.a.Component),N=(a(17),a(18),a(19),a(20),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).checkAttr=function(){var t=e.state,a=t.cardAttr1,r=t.cardAttr2,c=t.cardAttr3,n=Number(a)+Number(r)+Number(c);return!([a,r,c].find((function(e){return e>90||e<0}))||n>210)},e.checkForm=function(){var t=Object.keys(e.state),a=Object(u.a)(e).state;t.find((function(e){return""===a[e]}))?e.setState({isSaveButtonDisabled:!0}):e.checkAttr()?e.setState({isSaveButtonDisabled:!1}):e.setState({isSaveButtonDisabled:!0})},e.onInputChange=function(t){var a=t.target,r=a.name,c=a.value;"checkbox"===t.target.type?e.onCheckboxChange():e.setState(Object(i.a)({},r,c),e.checkForm)},e.onCheckboxChange=function(){e.state.cardTrunfo?e.setState({cardTrunfo:!1}):e.setState({cardTrunfo:!0})},e.addTrunfo=function(){e.setState({hasTrunfo:!0,cardTrunfo:!1})},e.addNewCard=function(t){e.setState((function(e){return{savedCards:[].concat(Object(d.a)(e.savedCards),[t]),cardName:"",cardDescription:"",cardAttr1:"0",cardAttr2:"0",cardAttr3:"0",cardImage:"",cardRare:"normal"}}))},e.onSaveButtonClick=function(t){t.preventDefault();var a=e.state,r=a.cardName,c=a.cardDescription,n=a.cardAttr1,s=a.cardAttr2,d=a.cardAttr3,i=a.cardImage,o=a.cardRare,l=a.cardTrunfo,u={name:r,description:c,attr1:n,attr2:s,attr3:d,image:i,rare:o,trunfo:l};e.addNewCard(u),!0===l&&e.addTrunfo()},e.eraseTrunfo=function(){e.setState({hasTrunfo:!1})},e.state={cardName:"",cardDescription:"",cardAttr1:"",cardAttr2:"",cardAttr3:"",cardImage:"",cardRare:"normal",cardTrunfo:!1,hasTrunfo:!1,isSaveButtonDisabled:!0,savedCards:[]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.cardName,a=e.cardDescription,r=e.cardAttr1,c=e.cardAttr2,n=e.cardAttr3,s=e.cardImage,d=e.cardRare,i=e.cardTrunfo,o=e.hasTrunfo,l=e.isSaveButtonDisabled,u=e.savedCards;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("main",{className:"create-card-section",children:[Object(h.jsx)(p,{cardName:t,cardDescription:a,cardAttr1:r,cardAttr2:c,cardAttr3:n,cardImage:s,cardRare:d,cardTrunfo:i,hasTrunfo:o,isSaveButtonDisabled:l,onInputChange:this.onInputChange,onCheckboxChange:this.onCheckboxChange,onSaveButtonClick:this.onSaveButtonClick}),Object(h.jsx)(v,{cardName:t,cardDescription:a,cardAttr1:r,cardAttr2:c,cardAttr3:n,cardImage:s,cardRare:d,cardTrunfo:i})]}),Object(h.jsx)("section",{className:"all-cards-section",children:Object(h.jsx)(g,{savedCards:u,eraseTrunfo:this.eraseTrunfo})})]})}}]),a}(c.a.Component));s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.4e0d641e.chunk.js.map