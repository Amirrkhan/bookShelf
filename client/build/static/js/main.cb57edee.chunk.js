(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(81)},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(37),l=a.n(o),i=a(7),s=a(10),c=a(16),u=a(42),m=a.n(u),p=a(43),d=a.n(p),b=a(2),v=a(3),h=a(5),f=a(4),E=a(6),g=a(15),y=a.n(g),k=a(44),O=a.n(k);var _=Object(s.b)(function(e){return{user:e.user}})(function(e){var t=function(e,t){return r.a.createElement(i.b,{to:e.link,key:t,className:e.type},r.a.createElement(y.a,{name:e.icon}),e.text," ")};return e.user.login?e.navItems.map(function(a,n){return e.user.login.isAuth?a.exclude?null:t(a,n):a.restricted?null:t(a,n)}):null}),j=function(e){return r.a.createElement(O.a,{showNav:e.showNav,onHideNav:e.onHideNav,navStyle:{background:"#242424",maxWidth:"220px"}},r.a.createElement(_,{navItems:e.sideNavItems}))},x=[{type:"navItem",text:"Home",icon:"home",link:"/",restricted:!1},{type:"navItem",text:"My Profile",icon:"user",link:"/user",restricted:!0},{type:"navItem",text:"Add Admins",icon:"plus",link:"/user/register",restricted:!0},{type:"navItem",text:"Login",icon:"sign-in",link:"/login",restricted:!1,exclude:!0},{type:"navItem",text:"My reviews",icon:"comments",link:"/user/user-reviews",restricted:!0},{type:"navItem",text:"Add a review",icon:"plus",link:"/user/add",restricted:!0},{type:"navItem",text:"Registration",icon:"plus",link:"/registration",restricted:!1,exclude:!0},{type:"navItem",text:"Logout",icon:"sign-out",link:"/user/logout",restricted:!0}],w=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={showNav:!1},a.toggleNavigation=function(){a.setState({showNav:!0})},a.onHideNav=function(){a.setState({showNav:!1})},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"open_nav"},r.a.createElement(y.a,{name:"bars",style:{color:"#ffffff",padding:"10px",cursor:"pointer"},onClick:this.toggleNavigation})),r.a.createElement(j,{showNav:this.state.showNav,onHideNav:this.onHideNav,sideNavItems:x}),r.a.createElement(i.b,{to:"/",className:"logo"},"The Book Shelf"))}}]),t}(n.Component),N=function(e){return r.a.createElement("div",null,r.a.createElement(w,null),e.children)},T=a(20),S=a(13),D=a.n(S);function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return{type:"GET_BOOKS",payload:D.a.get("/books?limit=".concat(e,"&skip=").concat(t,"&order=").concat(a)).then(function(e){return n?[].concat(Object(T.a)(n),Object(T.a)(e.data)):e.data})}}function F(e){var t=D.a.get("/user_posts?user=".concat(e)).then(function(e){return e.data});return console.log(t),{type:"USER_BOOKS",payload:t}}function B(e){return{type:"DELETE_BOOK",payload:D.a.delete("/book_delete?id=".concat(e)).then(function(e){return e.data})}}function C(e){var t=e.email,a=e.password;return{type:"USER_LOGIN",payload:D.a.post("/login",{email:t,password:a}).then(function(e){return e.data})}}function A(){return{type:"GET_ALL_USERS",payload:D.a.get("/users").then(function(e){return e.data})}}function M(e,t){if(t){var a=D.a.post("/register",e);return function(e){a.then(function(a){var n=a.data,r=n.success?[].concat(Object(T.a)(t),[n.user]):t,o={success:n.success,users:r};e({type:"ADD_NEW_USER",payload:o})})}}return{type:"USER_REGISTER",payload:D.a.post("/register",e).then(function(e){return e.data})}}var I=function(e){return r.a.createElement(i.b,{to:"/books/".concat(e._id),className:"book_item"},r.a.createElement("div",{className:"book_header"},r.a.createElement("h2",null,e.name)),r.a.createElement("div",{className:"book_items"},r.a.createElement("div",{className:"book_author"},e.author),r.a.createElement("div",{className:"book_bubble"},r.a.createElement("strong",null,"Price")," $",e.price),r.a.createElement("div",{className:"book_bubble"},r.a.createElement("strong",null,"Pages")," ",e.pages),r.a.createElement("div",{className:"book_bubble rating"},r.a.createElement("strong",null,"Rating")," ",e.rating)))},V=function(e){return r.a.createElement("div",{className:"button loadmore",onClick:e.onclickFunc},e.buttonText)},L=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).renderItems=function(e){return e.list?e.list.map(function(e,t){return r.a.createElement(I,Object.assign({key:t},e))}):null},a.loadMore=function(){var e=a.props.books.list.length;a.props.dispatch(R(1,e,"asc",a.props.books.list))},a.props.dispatch(R(1,0,"asc")),a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return console.log(this.props.books),r.a.createElement("div",null,this.props.books.list?this.renderItems(this.props.books):null,r.a.createElement(V,{onclickFunc:this.loadMore,buttonText:"loadmore"}))}}]),t}(n.Component);var U=Object(s.b)(function(e){return{books:e.books}})(L),W=function(){return r.a.createElement("div",null,r.a.createElement(U,null))},P=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).renderBook=function(e){return e.book?r.a.createElement("div",{className:"br_container"},r.a.createElement("div",{className:"br_header"},r.a.createElement("h2",null,e.book.name),r.a.createElement("h5",null,e.book.authors),r.a.createElement("div",{className:"br_reviewer"},r.a.createElement("span",null,"Review by:")," ",e.reviewer.name," ",e.reviewer.lastname)),r.a.createElement("div",{className:"br_review"},e.book.reviews),r.a.createElement("div",{className:"br_box"},r.a.createElement("div",{className:"left"},r.a.createElement("div",null,r.a.createElement("span",null,"Pages:")," ",e.book.pages),r.a.createElement("div",null,r.a.createElement("span",null,"Price:")," $",e.book.price)),r.a.createElement("div",{className:"right"},r.a.createElement("span",null,"Rating"),r.a.createElement("div",null,e.book.rating,"/5 ")))):null},a.props.dispatch(function(e){var t=D.a.get("/getBook?id=".concat(e));return function(e){t.then(function(t){var a=t.data;D.a.get("/getReviewer?id=".concat(a.ownerId)).then(function(t){var n=t.data;e({type:"GET_BOOK_WITH_REVIEWER",payload:{book:a,reviewer:n}})})})}}(a.props.id)),a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK_W_R",payload:{book:{},reviewer:{}}})}},{key:"render",value:function(){var e=this.props.books;return r.a.createElement("div",null,this.renderBook(e))}}]),t}(n.Component);var q=Object(s.b)(function(e){return{books:e.books}})(P),H=function(e){return r.a.createElement("div",null,r.a.createElement(q,{id:e.match.params.id}))},K=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",error:"",success:""},a.submitForm=function(e){e.preventDefault(),a.props.dispatch(C(a.state))},a.onChange=function(e){"email"===e.target.type?a.setState({email:e.target.value}):"password"===e.target.type&&a.setState({password:e.target.value})},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.user.login.isAuth&&this.props.history.push("/user")}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"rl_container"},r.a.createElement("form",{action:"",onSubmit:this.submitForm},r.a.createElement("h2",null,"Log in here"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"email",placeholder:"Enter your mail",value:this.state.email,onChange:this.onChange})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"password",placeholder:"Enter your password",value:this.state.password,onChange:this.onChange})),r.a.createElement("button",{type:"submit"}," Log in "),r.a.createElement("div",{className:"error"},e.login?r.a.createElement("div",null,e.login.message):null)))}}]),t}(n.Component);var G=Object(s.b)(function(e){return{user:e.user}})(K),z=function(e){function t(e){var a,n;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).props.dispatch((n=e,{type:"USER_LOGOUT",payload:D.a.get("/logout").then(function(e){return setTimeout(function(){n.history.push("/")},2e3),e.date})})),a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"logout_container"},r.a.createElement("h1",null,"Sorry to see you go..."))}}]),t}(n.Component);var $=Object(s.b)(function(e){return{user:e.user}})(z),Y=function(e,t){var a=function(a){function n(e){var t;return Object(b.a)(this,n),(t=Object(h.a)(this,Object(f.a)(n).call(this,e))).props.dispatch({type:"USER_AUTH",payload:D.a.get("/auth").then(function(e){return e.data})}),t.state={loading:!0},t}return Object(E.a)(n,a),Object(v.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({loading:!1}),e.user.login.isAuth?!1===t&&this.props.history.push("/user"):t&&this.props.history.push("/login")}},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"loader"},"Loading..."):r.a.createElement(e,Object.assign({},this.props,{user:this.props.user}))}}]),n}(n.Component);return Object(s.b)(function(e){return{user:e.user}})(a)},J=function(e){var t=e.user.login;return r.a.createElement("div",{className:"user_container"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:"/images/avatar.png",alt:"avatar"})),r.a.createElement("div",{className:"nfo"},r.a.createElement("div",null,r.a.createElement("span",null,"Name:")," ",t.name),r.a.createElement("div",null,r.a.createElement("span",null,"Lastname:")," ",t.lastname),r.a.createElement("div",null,r.a.createElement("span",null,"Email:")," ",t.email)))},Z=a(11),Q=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).renderField=function(){var e=a.props.formData,t=a.state.inputValue;switch(e.element){case"input":return r.a.createElement("div",{className:"form__field"},e.label?r.a.createElement("label",{htmlFor:""},e.labelText,e.validation.required?r.a.createElement("span",{style:{color:"red",marginLeft:"3px"}},"*"):null):null," ",r.a.createElement("input",Object.assign({type:e.config.type?null:"text",onChange:function(e){return a.changeHandler(e,!1)},value:t,onBlur:function(e){return a.changeHandler(e,!0)}},e.config)),a.validationMessageTemplate());case"textArea":return r.a.createElement("div",{className:"form__field"},e.label?r.a.createElement("label",{htmlFor:""},e.labelText,e.validation.required?r.a.createElement("span",{style:{color:"red",marginLeft:"3px"}},"*"):null):null,r.a.createElement("textarea",Object.assign({type:e.config.type?null:"text",onChange:function(e){return a.changeHandler(e,!1)},value:t,onBlur:function(e){return a.changeHandler(e,!0)}},e.config)),a.validationMessageTemplate());default:return null}},a.checkBeforeSendingInputValues=function(){var e=a.state,t=e.valid,n=e.inputValue,r=e.existingInputValue,o=a.props.formData.config.name;a.props.formData?a.props.formData.value&&(a.props.takeDataFromInputs(!0,r,o),a.setState({isDataLoaded:!1})):a.props.takeDataFromInputs(t,n,o)},a.changeHandler=function(e,t){var n=a.state,r=n.inputValue,o=n.valid;a.inputValidation(e.target.value);var l=a.props.formData.config.name;a.setState({inputValue:e.target.value,touched:t}),a.props.takeDataFromInputs(o,r,l)},a.validationMessageTemplate=function(){var e=a.state,t=e.valid,n=e.touched,o=e.inputValue,l=a.props.formData.validationMessage,i=null;return n&&(t||(i=o?r.a.createElement("span",{className:"form__invalid--message"},l):r.a.createElement("span",{className:"form__invalid--message"},"Field is required"))),i},a.checkTypeOfValidation=function(e){var t;switch(e){case"number":t=/^\d+$/;break;case"text":t=/[a-z0-9 ]$/i;break;case"name":t=/[a-z ]+$/i;break;case"email":t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;break;case"password":t=/[a-z0-9 ]$/i}return t},a.inputValidation=function(e){var t,n=a.props.formData.validation,r=n.regexTemplate;n.required&&(e&&(t=a.checkTypeOfValidation(n.type)),a.checkingInputForValid(t,r,e))},a.checkingInputForValid=function(e,t,n){n?a.regMessageCheck(t)?e.test(n)&&t.test(n)?a.setState({valid:!0}):a.setState({valid:!1}):e.test(n)?a.setState({valid:!0}):a.setState({valid:!1}):a.setState({valid:!1})},a.regMessageCheck=function(e){var t=/(?:)/;return(e=e&&""!==e?new RegExp(e.source):t).toString()===t.toString()&&(console.log("Regex expression is not valid"),!1),e.toString()!==t.toString()},a.state={inputValue:"",existingInputValue:"",valid:!1,touched:!1,isDataLoaded:!1},a.checkBeforeSendingInputValues(),a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(){this.state.isDataLoaded&&this.checkBeforeSendingInputValues()}},{key:"render",value:function(){return this.renderField()}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(e.formData.value!==t.existingInputValue){var a=e.formData.value;return{existingInputValue:a,inputValue:a,isDataLoaded:!0}}return null}}]),t}(n.Component),X=(a(80),function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).takeDataFromInputs=function(e,t,n){var r=a.state.formFieldWithNoValidation,o=r;r[n]&&(o[n]={isValid:e,inputValue:t},a.setState({formFieldWithNoValidation:o})),o[n]={isValid:e,inputValue:t},a.setState({formFieldWithNoValidation:o})},a.renderFields=function(){var e=[],t=a.props.formData;if(Object.keys(t).length)for(var n in t){var o=t[n];e.push(r.a.createElement(Q,{takeDataFromInputs:function(e,t,n){return a.takeDataFromInputs(e,t,n)},key:n,formData:o}))}return e},a.checkBeforeSubmit=function(){var e=a.state.formFieldWithNoValidation,t={};if(Object.keys(e).length)for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];if(!r.isValid)break;t[n]=r.inputValue}return Object.keys(t).length===Object.keys(e).length?t:null},a.submitForm=function(e){e.preventDefault(),a.setState({errorMessage:""});var t=a.checkBeforeSubmit();null!==t?Object.keys(t).length?a.props.submitFormFunction(t):a.setState({errorMessage:"You should fill all requierd fields"}):a.setState({errorMessage:"One of the fields is not correct"})},a.state={formFieldWithNoValidation:{},errorMessage:!1},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.submitButtonConfig,t=this.state,a=t.errorMessage;t.clearForm;return r.a.createElement("div",{className:"form"},this.props.formCaption,this.renderFields(),r.a.createElement("button",Object.assign({type:"submit",onClick:this.submitForm},e.attr),e.text),a?r.a.createElement("div",{style:{marginTop:"10px",color:"red"}},a):null)}}]),t}(n.Component)),ee={name:{element:"input",value:"",label:!0,labelText:"Name",config:{name:"name",placeholder:"Enter your name"},validation:{required:!0,type:"name",regexTemplate:"a"},valid:!1,validationMessage:""},authors:{element:"input",value:"",label:!0,labelText:"Authors",config:{name:"authors",placeholder:"Enter authors"},validation:{required:!0,type:"name",regexTemplate:"a"},valid:!1,validationMessage:"Authors field is not correct"},rating:{element:"input",value:"",label:!0,labelText:"Rating",config:{name:"rating",placeholder:"Rate this book by number"},validation:{required:!0,type:"number",regexTemplate:"a"},valid:!1,validationMessage:"Must be a number"},price:{element:"input",value:"",label:!0,labelText:"Price",config:{name:"price",placeholder:"Enter the price of book"},validation:{required:!0,type:"number",regexTemplate:""},valid:!1,validationMessage:"Must be a number"},pages:{element:"input",value:"",label:!0,labelText:"Books pages",config:{name:"pages",placeholder:"Enter number of pages"},validation:{required:!0,type:"number",regexTemplate:"a"},valid:!1,validationMessage:"Must be a number"},reviews:{element:"textArea",value:"",label:!0,labelText:"Review",config:{name:"reviews",cols:10,rows:4,placeholder:"Enter review for this book"},validation:{required:!0,type:"text",regexTemplate:/[a-z]{3}/},valid:!1,validationMessage:"Review is not correct"}},te={text:"submit",attr:{className:"button",type:"Add review"}},ae=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={formData:{name:"",authors:"",rating:""},isSubmited:!1},a.redirectToNewBook=function(e){return e.post?r.a.createElement("div",{className:"conf_link"},"Cool!!!",r.a.createElement(i.b,{to:"/books/".concat(e.bookId)},"Click here to see the new book")):null},a.submitForm=function(e){var t=a.props.user.login.id;a.props.dispatch(function(e){return{type:"CREATE_N_BOOK",payload:D.a.post("/book",e).then(function(e){return e.data})}}(Object(Z.a)({},e,{ownerId:t}))),a.setState({isSubmited:!0})},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"REMOVE_N_BOOK_FROM_PROPS",payload:{}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"rl_container article",style:{marginBottom:"40px"}},r.a.createElement(X,{formData:ee,submitButtonConfig:te,formCaption:r.a.createElement("h2",null,"Add a review"),submitFormFunction:function(t){return e.submitForm(t)}}),this.props.books.newbook?this.redirectToNewBook(this.props.books.newbook):null)}}]),t}(n.Component);var ne=Object(s.b)(function(e){return console.log(e),{books:e.books}})(ae),re=a(45),oe=a.n(re),le=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).postDelete=function(e){a.props.dispatch(B(e)),a.props.dispatch(F(a.props.user.login.id))},a.showUserPosts=function(e){return e.books?e.books.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.authors),r.a.createElement("td",null,oe()(e.createdAt).format("MM/DD/YY")),r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement(i.b,{to:"/user/edit-post/".concat(e._id)},r.a.createElement(y.a,{name:"edit"})),r.a.createElement("button",{className:"button",style:{cursor:"pointer",textAlign:"center",marginLeft:"20px"},onClick:function(){return a.postDelete(e._id)}},r.a.createElement(y.a,{name:"remove"}))))}):null},a.state={postDeleted:!1},a.props.dispatch(F(a.props.user.login.id)),a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_STORE_WITH_DELETED_POST",payload:{postDeleted:!1,updatedBook:!1,book:null}})}},{key:"render",value:function(){var e=this.props.books;return console.log(e),r.a.createElement("div",{className:"user_posts"},r.a.createElement("h4",null,"Your reviews"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.showUserPosts(e))))}}]),t}(n.Component);var ie=Object(s.b)(function(e){return{books:e.books}})(le),se={name:{element:"input",value:"",label:!0,labelText:"Name",config:{name:"name",placeholder:"Enter your name"},validation:{required:!0,type:"name",regexTemplate:"a"},valid:!1,validationMessage:""},authors:{element:"input",value:"",label:!0,labelText:"Authors",config:{name:"authors",placeholder:"Enter authors"},validation:{required:!0,type:"name",regexTemplate:"a"},valid:!1,validationMessage:"Authors field is not correct"},rating:{element:"input",value:"",label:!0,labelText:"Rating",config:{name:"rating",placeholder:"Rate this book by number"},validation:{required:!0,type:"number",regexTemplate:"a"},valid:!1,validationMessage:"Must be a number"},price:{element:"input",value:"",label:!0,labelText:"Price",config:{name:"price",placeholder:"Enter the price of book"},validation:{required:!0,type:"number",regexTemplate:""},valid:!1,validationMessage:"Must be a number"},pages:{element:"input",value:"",label:!0,labelText:"Books pages",config:{name:"pages",placeholder:"Enter number of pages"},validation:{required:!0,type:"number",regexTemplate:"a"},valid:!1,validationMessage:"Must be a number"},reviews:{element:"textArea",value:"",label:!0,labelText:"Review",config:{name:"reviews",cols:10,rows:4,placeholder:"Enter review for this book"},validation:{required:!0,type:"text",regexTemplate:/[a-z]{3}/},valid:!1,validationMessage:"Review is not correct"}},ce={text:"Edit review",attr:{className:"button",type:"submit"}},ue=function(e){function t(e){var a,n;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).transformBookToForm=function(e){if(e){var t=se;for(var n in e){var r=e[n];se[n]&&(t[n].value=r)}a.setState({formDataWithValues:t})}},a.deleteReview=function(){var e=a.props.books.book._id;a.props.dispatch(B(e))},a.redirectUser=function(){setTimeout(function(){a.props.history.push("/user/user-reviews")},1e3)},a.submitFormFunction=function(e){var t=a.props.books.book._id;a.props.dispatch(function(e){return{type:"UPDATE_BOOK",payload:D.a.post("/book_update",e).then(function(e){return e.data})}}(Object(Z.a)({_id:t},e)))},a.props.dispatch((n=a.props.match.params.id,{type:"GET_BOOK",payload:D.a.get("/getBook?id=".concat(n)).then(function(e){return e.data})})),a.state={formDataWithValues:{},isData:!1},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(){Object.keys(this.state.formDataWithValues).length||this.transformBookToForm(this.props.books.book)}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_STORE_WITH_DELETED_POST",payload:{postDeleted:!1,updatedBook:!1,book:null}})}},{key:"render",value:function(){var e=this,t=this.props.books;return r.a.createElement("div",{className:"rl_container article",style:{marginBottom:"40px"}},t.updatedBook?r.a.createElement("div",{className:"edit_confirm"},"post updated,"," ",r.a.createElement(i.b,{to:"/books/".concat(t.book._id)},"click here to see updated post"," ")):null,t.postDeleted?r.a.createElement("div",{className:"red_tag"},"Post deleted ",this.redirectUser()):null,r.a.createElement(X,{formCaption:r.a.createElement("h2",null,"Edit review"),formData:Object.keys(this.state.formDataWithValues).length?this.state.formDataWithValues:se,submitButtonConfig:ce,submitFormFunction:function(t){return e.submitFormFunction(t)}}),r.a.createElement("div",{className:"delete_post",style:{width:"65%",margin:"20px auto"},onClick:this.deleteReview},r.a.createElement("div",{className:"button"},"Delete Review")))}}]),t}(n.Component);var me=Object(s.b)(function(e){return{books:e.books}})(ue),pe={name:{element:"input",value:"",label:!0,labelText:"Name",config:{name:"name",placeholder:"Enter your name"},validation:{required:!0,type:"name",regexTemplate:"a"},valid:!1,validationMessage:""},lastname:{element:"input",value:"",label:!0,labelText:"Lastname",config:{name:"lastname",placeholder:"Enter lastname"},validation:{required:!0,type:"text",regexTemplate:"a"},valid:!1,validationMessage:"Lastname field is not correct"},email:{element:"input",value:"",label:!0,labelText:"Email",config:{name:"email",placeholder:"Enter your email"},validation:{required:!0,type:"email",regexTemplate:"a"},valid:!1,validationMessage:"Must be an email"},password:{element:"input",value:"",label:!0,labelText:"Password",config:{name:"password",placeholder:"Enter your password",type:"password"},validation:{required:!0,type:"password",regexTemplate:/[a-z]{3}/},valid:!1,validationMessage:"Must be a password"}},de={text:"submit",attr:{className:"button",type:"Add review"}},be=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).submitFormFunction=function(e){var t=e.email,n=e.password;a.props.submitForm?a.props.submitForm(e):(a.props.dispatch(M(e)),a.setState({email:t,password:n}))},a.state={users:"",email:"",password:""},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.state,t=e.email,a=e.password;this.props.user.register&&!this.props.submitForm&&this.props.dispatch(C({email:t,password:a}))}},{key:"render",value:function(){var e=this;return console.log(this.props),r.a.createElement("div",{className:"rl_container"},r.a.createElement(X,{formCaption:r.a.createElement("h2",null,"Add a user"),formData:pe,submitButtonConfig:de,submitFormFunction:function(t){return e.submitFormFunction(t)}}))}}]),t}(n.Component);var ve=Object(s.b)(function(e){return{user:e.user}})(be),he=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).tableOfUsersRender=function(){return a.state.users&&a.state.users!=={}?r.a.createElement("div",{className:"current_users",style:{marginBottom:"100px"}},r.a.createElement("h4",null,"Current users"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Lastname"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,a.state.users.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.lastname),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement("div",{className:"button",style:{cursor:"pointer",textAlign:"center",marginLeft:"20px"},onClick:function(){return a.userDelete(e._id)}},r.a.createElement(y.a,{name:"remove"}))))})))):null},a.userDelete=function(e){var t;a.props.dispatch((t=e,console.log(t),{type:"USER_DELETE",payload:D.a.delete("/user_delete",{data:{id:t}}).then(function(e){return e.data})})),a.props.dispatch(A())},a.registerStatusCheck=function(){return void 0!==a.props.user.register?a.props.user.register?r.a.createElement("div",{className:"form__success"},"Successufully registered"):r.a.createElement("div",{className:"form__error"},"Error: Email is already exist"):null},a.submitFormFunction=function(e){a.props.dispatch(M(e,a.props.user.users)),a.state.users&&a.setState({users:""})},a.state={users:""},a.props.dispatch(A()),a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"rl_container"},r.a.createElement(ve,{submitForm:function(t){return e.submitFormFunction(t)}}),this.registerStatusCheck(),this.tableOfUsersRender())}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.user.users;return e.user.login.isAuth&&a!==t.users?{users:a}:null}}]),t}(n.Component);var fe=Object(s.b)(function(e){return{user:e.user}})(he),Ee=function(){return r.a.createElement(N,null,r.a.createElement(i.d,null,r.a.createElement(i.c,{path:"/",exact:!0,component:Y(W,null)}),r.a.createElement(i.c,{path:"/books/:id",exact:!0,component:Y(H)}),r.a.createElement(i.c,{path:"/login",exact:!0,component:Y(G,!1)}),r.a.createElement(i.c,{path:"/user",exact:!0,component:Y(J,!0)}),r.a.createElement(i.c,{path:"/user/logout",exact:!0,component:$}),r.a.createElement(i.c,{path:"/user/add",exact:!0,component:Y(ne,!0)}),r.a.createElement(i.c,{path:"/user/user-reviews",exact:!0,component:Y(ie,!0)}),r.a.createElement(i.c,{path:"/user/edit-post/:id",exact:!0,component:Y(me,!0)}),r.a.createElement(i.c,{path:"/user/register",exact:!0,component:Y(fe,!0)}),r.a.createElement(i.c,{path:"/registration",exact:!0,component:Y(ve,!1)})))},ge=Object(c.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOK":return Object(Z.a)({},e,{book:t.payload});case"GET_BOOKS":return Object(Z.a)({},e,{list:t.payload});case"GET_BOOK_WITH_REVIEWER":case"CLEAR_BOOK_W_R":return Object(Z.a)({},e,{book:t.payload.book,reviewer:t.payload.reviewer});case"CREATE_N_BOOK":case"REMOVE_N_BOOK_FROM_PROPS":return Object(Z.a)({},e,{newbook:t.payload});case"USER_BOOKS":return Object(Z.a)({},e,{books:t.payload});case"UPDATE_BOOK":return Object(Z.a)({},e,{updatedBook:t.payload});case"DELETE_BOOK":return Object(Z.a)({},e,{postDeleted:t.payload});case"CLEAR_STORE_WITH_DELETED_POST":return Object(Z.a)({},e,{postDeleted:t.payload.postDeleted,updatedBook:t.payload.updatedBook,book:t.payload.books});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":case"USER_AUTH":case"USER_LOGOUT":return Object(Z.a)({},e,{login:t.payload});case"GET_ALL_USERS":return Object(Z.a)({},e,{users:t.payload});case"ADD_NEW_USER":return Object(Z.a)({},e,{register:t.payload.success,users:t.payload.users});case"USER_REGISTER":return Object(Z.a)({},e,{register:t.payload.success});case"USER_DELETE":return Object(Z.a)({},e,{deleted:t.payload});default:return e}}}),ye=Object(c.a)(m.a,d.a)(c.d);l.a.render(r.a.createElement(s.a,{store:ye(ge)},r.a.createElement(i.a,null,r.a.createElement(Ee,null))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.cb57edee.chunk.js.map