(this["webpackJsonpportafolio-site"]=this["webpackJsonpportafolio-site"]||[]).push([[0],{54:function(e,t,a){e.exports=a.p+"static/media/image1.d14f2783.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/image2.0737fbef.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/image3.b44f9177.jpg"},61:function(e,t,a){e.exports=a(91)},66:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),i=(a(66),a(6)),o=a(10),s=a(8),m=a(7),u=a(27),d=a(20),p=a(14),h=a(28),E=a(60),b=a(52),f=a(18),g=a(16);var v=function(e){return l.a.createElement(b.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-center py-5"},l.a.createElement(g.a,{md:8,sm:12},e.title&&l.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},k=a(24),N=a(41);var y=function(e){var t=Object(N.b)({opacity:1,from:{opacity:0}});return l.a.createElement(N.a.div,{className:"g-card-info",style:t},l.a.createElement("p",{className:"g-card-title"},e.title),l.a.createElement("p",{className:"g-card-sub-title"},e.subTitle),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var S=function(e){return l.a.createElement("div",{className:"d-inline-block g-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"g-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(y,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},C=a(54),j=a.n(C),x=a(55),O=a.n(x),T=a(56),w=a.n(T),M=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(k.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return l.a.createElement(S,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"Dev",subTitle:"The developers",imgSrc:O.a,selected:!1},{id:1,title:"Mauro",subTitle:"Development",imgSrc:w.a,selected:!1},{id:2,title:"Note",subTitle:"A social network for developers",imgSrc:j.a,link:"https://github.com/mauro-pixel",selected:!1}]},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var A=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(M,null))};var L=function(e){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(f.a,{className:"justify-content-center"},l.a.createElement(g.a,{md:8},e.children)))};var B=function(e){return l.a.createElement("div",null,l.a.createElement(v,{title:e.title}),l.a.createElement(L,null,l.a.createElement("p",null,"Hola, me llamo Mauro. Soy un desarrollador completo con experiencia en  Angular, Express, Node JS, SQL, MYSQL, MongoDB y React."),l.a.createElement("p",null,"Mi sue\xf1o es alg\xfan d\xeda comenzar mi propio negocio y convertirme en emprendedor (actualmente trabajando en algunas ideas)."),l.a.createElement("p",null,"Estoy constantemente aprendiendo cosas nuevas. actualmente esas cosas incluyen ganar m\xe1s experiencia con MongoDB, React, Express JS y Node JS")))},D=a(23),J=a(13),H=a(38),z=a(57),F=a.n(z),G=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,l=t.name;n.setState(Object(D.a)({},l,a))},n.handleSubmit=function(e){e.preventDefault(),console.log(e.target),n.setState({disabled:!0}),F.a.post("http://localhost:3030/api/email",n.state).then((function(e){e.data.success?n.setState({disabled:!1,emailSent:!0}):n.setState({disabled:!1,emailSent:!1})})).catch((function(e){console.log(e),n.setState({disabled:!1,emailSent:!1})}))},n.state={name:"",email:"",message:"",disabled:!1,emailSent:null},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,{title:this.props.title}),l.a.createElement(L,null,l.a.createElement(J.a,{onSubmit:this.handleSubmit},l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,{htmlFor:"full-name"},"Nombre completo"),l.a.createElement(J.a.Control,{id:"full-name",name:"name",type:"text",value:this.state.name,onChange:this.handleChange})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,{htmlFor:"email"},"correo electr\xf3nico"),l.a.createElement(J.a.Control,{id:"email",name:"email",type:"email",value:this.state.email,onChange:this.handleChange})),l.a.createElement(J.a.Group,null,l.a.createElement(J.a.Label,{htmlFor:"message"},"Mensaje"),l.a.createElement(J.a.Control,{id:"message",name:"message",as:"textarea",rows:"3",value:this.state.message,onChange:this.handleChange})),l.a.createElement(H.a,{className:"d-inline-block",variant:"primary",type:"submit",disabled:this.state.disabled,size:"lg",block:!0},"Enviar"),l.a.createElement(H.a,{className:"d-inline-block",variant:"danger",type:"reset",size:"lg",block:!0},"Cancelar"),!0===this.state.emailSent&&l.a.createElement("p",{className:"d-inline success-msg"},"Correo electr\xf3nico enviado"),!1===this.state.emailSent&&l.a.createElement("p",{className:"d-inline err-msg"},"Correo electr\xf3nico no enviado"))))}}]),a}(l.a.Component);var I=function(){return l.a.createElement("footer",{className:"mt-5"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(f.a,{className:"border-top justify-content-between p-3"},l.a.createElement(g.a,{className:"p-0",md:3,sm:12},"Mauro Espinal"),l.a.createElement(g.a,{className:"p-0 d-flex justify-content-end",md:3},"Este sitio fue hecho por Mauro."))))},R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"Mauro Espinal V",headerLinks:[{title:"Home",path:"/"},{title:"Acerca",path:"/about"},{title:"Contacto",path:"/contact"}],home:{title:"Ser implacable",subTitle:"Proyectos que marcan la diferencia",text:"Mira mis proyectos a continuaci\xf3n"},about:{title:"Sobre m\xed"},contact:{title:"Hablemos"}},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"p-0",fluid:!0},l.a.createElement(h.a,{className:"border-bottom",bg:"transparent",expand:"lg"},l.a.createElement(h.a.Brand,null,"Mauro Espinal"),l.a.createElement(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(h.a.Collapse,{id:"navbar-toggle"},l.a.createElement(E.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"HOME"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"ACERCA"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"CONTACTO")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(A,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(B,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(G,{title:e.state.contact.title})}}),l.a.createElement(I,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(90);c.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.a4885394.chunk.js.map