(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{2:function(e,t,a){e.exports={Searchbar:"form_Searchbar__36GYU",SearchForm:"form_SearchForm__1o_Au",SearchFormButton:"form_SearchFormButton__fJ5ze",SearchFormButtonLabel:"form_SearchFormButtonLabel__VZixc",SearchFormInput:"form_SearchFormInput__3LK9C"}},20:function(e,t,a){e.exports={ImageGallery:"imsgeGallery_ImageGallery__1Wgyw"}},22:function(e,t,a){e.exports={Button:"button_Button__PTAFW"}},23:function(e,t,a){e.exports={App:"app_App__2cu_Z"}},26:function(e,t,a){e.exports=a(51)},4:function(e,t,a){e.exports={ImageGalleryItem:"image.GalleryItem_ImageGalleryItem__RNqnH",ImageGalleryItemImage:"image.GalleryItem_ImageGalleryItemImage__3kLSB"}},5:function(e,t,a){e.exports={Overlay:"modal_Overlay__Yz1-G",Modal:"modal_Modal__rRrOQ"}},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),l=a.n(r),c=a(6),i=a(17),m=a(18),u=a(3),s=a(25),g=a(24),d=a(2),h=a.n(d),p=function(e){var t=e.handleChange,a=e.inputValue,n=e.handleSubmit;return o.a.createElement("header",{className:h.a.Searchbar},o.a.createElement("form",{className:h.a.SearchForm,onSubmit:n},o.a.createElement("button",{type:"submit",className:h.a.SearchFormButton},o.a.createElement("span",{className:h.a.SearchFormButtonLabel},"Search")),o.a.createElement("input",{className:h.a.SearchFormInput,type:"text",onChange:t,value:a})))},f=a(19),y=a.n(f),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cat",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return y.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=16056306-b774bb8eb3846f9eca7b7b057&image_type=photo&orientation=horizontal&per_page=12"))},v=a(4),I=a.n(v),b=function(e){var t=e.image,a=e.openModal;return o.a.createElement("li",{className:I.a.ImageGalleryItem},console.log(t),o.a.createElement("a",{href:t.largeImage},o.a.createElement("img",{src:t.webformatURL,onClick:a,"data-largeurl":t.largeImageURL,alt:"photo",className:I.a.ImageGalleryItemImage})))},S=a(20),E=a.n(S),k=function(e){var t=e.images,a=e.openModal;return o.a.createElement("ul",{className:E.a.ImageGallery},t.map((function(e){return o.a.createElement(b,{key:e.id,image:e,openModal:a})})))},M=a(21),C=a.n(M),F=a(22),O=a.n(F),L=function(e){var t=e.handleClick;return o.a.createElement("button",{className:O.a.Button,type:"button",onClick:t},"Load more")},G=L;L.propType={handleClick:C.a.func.isRequired};var N=function(){return o.a.createElement("h1",null,"loading...")},w=a(5),B=a.n(w),x=function(e){var t=e.curentImage,a=e.closeModal;return o.a.createElement("div",{className:B.a.Overlay,onClick:a},o.a.createElement("div",{className:B.a.Modal},o.a.createElement("img",{src:t,alt:"Image"}),console.log(t)))},q=a(23),j=a.n(q),A=function(e){Object(s.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",page:1,images:[],isLoading:!1,isModalOpen:!1,curentImage:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.getImages=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.setState((function(e){return{isLoading:!0,images:1===t?[]:e.images}})),_(e.state.query,e.state.page).then((function(t){return e.setState((function(e){return{images:[].concat(Object(c.a)(e.images),Object(c.a)(t.data.hits))}}))})).then((function(){return e.setState({isLoading:!1})})).finally((function(){return e.setState({isLoading:!1})}))},e.handleSubmit=function(t){t.preventDefault(),e.getImages(e.state.query),e.setState((function(e){return{page:e.page+1}}))},e.handleClick=function(){console.log("click"),e.getImages(e.state.query,e.state.page),e.setState((function(e){return{page:e.page+1}}))},e.openModal=function(t){var a=t.target.dataset.largeurl;e.setState((function(e){return{isModalOpen:!e.isModalOpen,curentImage:a}}))},e.closeModal=function(){e.setState({isModalOpen:!1})},e.escFunction=function(t){console.log(t),27===t.keyCode&&(console.log(Object(u.a)(e)),e.closeModal())},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;_().then((function(t){return e.setState({images:t.data.hits})}))}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunction,!1)}},{key:"componentDidUpdate",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction,!1)}},{key:"render",value:function(){return o.a.createElement("div",{className:j.a.App},o.a.createElement(p,{handleChange:this.handleChange,inputValue:this.state.query,handleSubmit:this.handleSubmit}),this.state.isLoading?o.a.createElement(N,null):o.a.createElement(k,{openModal:this.openModal,images:this.state.images}),o.a.createElement(G,{handleClick:this.handleClick}),this.state.isModalOpen&&o.a.createElement(x,{curentImage:this.state.curentImage,closeModal:this.closeModal}))}}]),a}(n.Component);a(50);l.a.render(o.a.createElement(A,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0717c12a.chunk.js.map