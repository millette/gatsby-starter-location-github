(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(e,t,n){"use strict";n.r(t),n(107),n(108);var a=n(16),r=n.n(a),l=n(22),i=n.n(l),o=(n(258),n(60),n(0)),c=n.n(o),s=n(200),u=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),d=n(265),f="object"==typeof self&&self&&self.Object===Object&&self,m=(d.a||f||Function("return this")()).Symbol,g=Array.isArray,b=Object.prototype,h=b.hasOwnProperty,v=b.toString,p=m?m.toStringTag:void 0,E=Object.prototype.toString,y=m?m.toStringTag:void 0,k=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":y&&y in Object(e)?function(e){var t=h.call(e,p),n=e[p];try{e[p]=void 0;var a=!0}catch(e){}var r=v.call(e);return a&&(t?e[p]=n:delete e[p]),r}(e):function(e){return E.call(e)}(e)},O=m?m.prototype:void 0,C=O?O.toString:void 0,x=function e(t){if("string"==typeof t)return t;if(g(t))return function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}(t,e)+"";if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==k(e)}(t))return C?C.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},A=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,j=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),N=function(e){return(e=function(e){return null==e?"":x(e)}(e))&&e.replace(A,u).replace(j,"")},S=n(207),L=n(202);n.d(t,"query",function(){return J});var U={location:"UNDEFINED"};try{U=Object.assign({},U,n(214))}catch(e){}var w="repoLanguages",R=12,I={whiteSpace:"nowrap",paddingBottom:"1rem",overflowX:"scroll"},D=function(e){return N((e||"").trim()).toLowerCase()},F={joined:function(e,t){var n=e.createdAt,a=t.createdAt;return n>a?1:n<a?-1:0},name:function(e,t){return(e.name||e.login).localeCompare(t.name||t.login)},nRepos:function(e,t){var n=e.repositoriesContributedToCount,a=t.repositoriesContributedToCount;return n>a?1:n<a?-1:0}},T=function(e){function t(t){var n;n=e.call(this,t)||this;var a={};return t.data.allSparksJson.edges.map(function(e){return e.node}).forEach(function(e){var t=e.login,n=e.output,r=e.sum2,l=e.lastContribDate;a[t]={output:n.reverse(),sum2:r,lastContribDate:l}}),n.allLanguageColors={},t.data.allLanguageColorsJson.edges.map(function(e){return e.node}).forEach(function(e){var t=e.name,a=e.fg,r=e.bg;n.allLanguageColors[t]={bg:r,fg:a}}),n.allUsers=t.data.allDataJson.edges[0].node.users.map(function(e){return Object.assign({},e,{sparks:a[e.login],languages:e[w]&&e[w].map(function(e){var t=e.name,a={name:t,count:e.count};if(n.allLanguageColors[t]){var r=n.allLanguageColors[t],l=r.bg,i=r.fg;a.style={background:l,color:i}}else a.style={background:"#fff",color:"#000"};return a})})}).map(function(e){return Object.assign({},e,{deburredName:D(e.name)+" "+D(e.login),deburredLocation:D(e.location)})}),n.state={filter:!1,onlyAvailable:!1,last:R,location:"",deburredLocation:"",name:"",deburredName:"",sort:"joined",reverse:!0},n.click=n.click.bind(i()(i()(n))),n.clickMore=n.clickMore.bind(i()(i()(n))),n.clickAvailable=n.clickAvailable.bind(i()(i()(n))),n.locationFilter=n.locationFilter.bind(i()(i()(n))),n.nameFilter=n.nameFilter.bind(i()(i()(n))),n.filtering=n.filtering.bind(i()(i()(n))),n.filtering2=n.filtering2.bind(i()(i()(n))),n.filtering3=n.filtering3.bind(i()(i()(n))),n.filtering4=n.filtering4.bind(i()(i()(n))),n.changeOrder=n.changeOrder.bind(i()(i()(n))),n.changeOrderReverse=n.changeOrderReverse.bind(i()(i()(n))),n}r()(t,e);var n=t.prototype;return n.changeOrder=function(e){var t=e.target.value;t!==this.state.sort&&this.setState({sort:t,reverse:"nRepos"===t||"joined"===t})},n.changeOrderReverse=function(e){var t=e.target.checked;this.setState({reverse:t})},n.nameFilter=function(e){var t=e.target.value;this.setState({name:t,deburredName:D(t)})},n.locationFilter=function(e){var t=e.target.value;this.setState({location:t,deburredLocation:D(t)})},n.clickMore=function(){this.setState({last:this.state.last+R})},n.clickAvailable=function(){this.setState({onlyAvailable:!this.state.onlyAvailable})},n.click=function(e){var t=e.target.dataset;(this.state.filter||t.key)&&this.setState({last:R,filter:t&&t.key!==this.state.filter&&t.key})},n.filtering=function(e){var t=this;if(!this.state.filter)return!0;var n=!1;return!!e[w]&&(e[w].forEach(function(e){e.name===t.state.filter&&(n=!0)}),n)},n.filtering2=function(e){return!this.state.onlyAvailable||e.isHireable},n.filtering3=function(e){return!this.state.deburredLocation||-1!==e.deburredLocation.indexOf(this.state.deburredLocation)},n.filtering4=function(e){return!this.state.deburredName||-1!==e.deburredName.indexOf(this.state.deburredName)},n.render=function(){var e=this,t=this.props.data.allDataJson.edges[0].node[w],n=this.allUsers.filter(this.filtering).filter(this.filtering2).filter(this.filtering3).filter(this.filtering4).sort(F[this.state.sort]),a=this.state.reverse?n.reverse().slice(0,this.state.last):n.slice(0,this.state.last);return c.a.createElement(S.e,{header:!0,messages:this.props.messages},c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.clickAvailable},c.a.createElement(s.c,{id:this.state.onlyAvailable?"index.available.on":"index.available.off"}))),c.a.createElement("label",null,c.a.createElement(s.c,{id:"index.order"}),":"," ",c.a.createElement("select",{onChange:this.changeOrder},c.a.createElement(s.c,{id:"index.order.joined"},function(e){return c.a.createElement("option",{value:"joined"},e)}),c.a.createElement(s.c,{id:"index.order.name"},function(e){return c.a.createElement("option",{value:"name"},e)}),c.a.createElement(s.c,{id:"index.order.nRepos"},function(e){return c.a.createElement("option",{value:"nRepos"},e)})))," ",c.a.createElement("label",null,c.a.createElement(s.c,{id:"index.order.reverse"})," ",c.a.createElement("input",{type:"checkbox",checked:this.state.reverse,onChange:this.changeOrderReverse})),c.a.createElement("ul",{className:"list-inline",style:I},c.a.createElement("li",{className:"list-inline-item"},c.a.createElement("button",{className:"btn badge badge-primary"+(this.state.filter?" badge-pill":" active"),type:"button",onClick:this.click},c.a.createElement(s.c,{id:"index.allLanguages"}))),t.map(function(t){return c.a.createElement("li",{key:t.name,className:"list-inline-item"},c.a.createElement("button",{style:e.allLanguageColors[t.name]?{background:e.allLanguageColors[t.name].bg,color:e.allLanguageColors[t.name].fg}:{background:"#fff",color:"#000"},className:"btn badge"+(e.state.filter===t.name?" active":" badge-pill"),type:"button","data-key":t.name,onClick:e.click},t.name))})),c.a.createElement("label",null,c.a.createElement(s.c,{id:"index.search.name"}),":"," ",c.a.createElement("input",{type:"text",value:this.state.name,onChange:this.nameFilter})),c.a.createElement("br",null),c.a.createElement("label",null,c.a.createElement(s.c,{id:"index.search.location"}),":"," ",c.a.createElement("input",{type:"text",value:this.state.location,onChange:this.locationFilter})),c.a.createElement("h4",null,c.a.createElement(s.c,{id:"index.resultsSummary",values:{nDisplayed:a.length,nSelected:n.length,nTotal:this.allUsers.length,location:U.location}})),a.length?c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"row"},a.map(function(t){return c.a.createElement("div",{key:t.databaseId,className:"col-sm-6 col-md-6 col-lg-4"},c.a.createElement(S.b,Object.assign({},t,{onlyAvailable:e.state.onlyAvailable})))})),n.length>this.state.last&&c.a.createElement("button",{onClick:this.clickMore,className:"mt-4 w-100 btn btn-info",type:"button"},c.a.createElement(s.c,{id:"index.more"})),c.a.createElement("h4",null,c.a.createElement(s.c,{id:"index.resultsSummary",values:{nDisplayed:a.length,nSelected:n.length,nTotal:this.allUsers.length,location:U.location}}))):c.a.createElement("p",null,c.a.createElement(s.c,{id:"index.noResults"})))),c.a.createElement(S.a,null,c.a.createElement("p",{className:"card-text"},"Marvoulous")))},t}(o.Component),J="1623889604";t.default=Object(L.c)(T)},265:function(e,t,n){"use strict";(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.a=n}).call(this,n(98))}}]);
//# sourceMappingURL=component---src-pages-index-js-7e8e48388153223822dc.js.map