(function(t){function e(e){for(var r,n,o=e[0],s=e[1],d=e[2],C=0,u=[];C<o.length;C++)n=o[C],a[n]&&u.push(a[n][0]),a[n]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(u.length)u.shift()();return l.push.apply(l,d||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],r=!0,o=1;o<i.length;o++){var s=i[o];0!==a[s]&&(r=!1)}r&&(l.splice(e--,1),t=n(n.s=i[0]))}return t}var r={},a={app:0},l=[];function n(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=r,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/Transcript/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var c=s;l.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var r=i("64a9"),a=i.n(r);a.a},1:function(t,e){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var r=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"p_4 viewport",attrs:{id:"app"}},[i("header",{staticClass:"relative",attrs:{id:"transcript_header"}},[i("h1",{staticClass:"br-b_1 br_primary br_solid font_display lh_0 m_0 relative p-t_4 p-b_2 text_center text_left:md"},[t._v("\n\t\t\tMy Transcript\n\t\t\t"),i("span",{staticClass:"a:_block c_secondary-2 font_n1 inline-block m-b_2 vertical-align_middle w_100"},[t._v("\n\t\t\t\tTotal Credits in Transcript:\n\t\t\t\t"),i("span",[t._v(t._s(t.fullCreditCount))])])]),i("div",{staticClass:"absolute:md t_0 r_0 b_0 text_center text_right:md font_ui"},[i("div",{staticClass:"font_0:md font_n1 m-y_2 c_secondary m-b_3:md",attrs:{id:"dateRange"}},[i("span",{staticClass:"block inline:md m-b_2 m-b_0:md"},[t._v("Date Claimed:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.filterStartDate,expression:"filterStartDate"}],staticClass:"lh_0 p_2 font_0 text_center br_solid br_secondary-3 br_1",attrs:{type:"date",name:"",id:""},domProps:{value:t.filterStartDate},on:{input:function(e){e.target.composing||(t.filterStartDate=e.target.value)}}}),t._v(" -\n\t\t\t\t"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.filterEndDate,expression:"filterEndDate"}],staticClass:"lh_0 p_2 font_0 text_center br_solid br_secondary-3 br_1",attrs:{type:"date",name:"",id:""},domProps:{value:t.filterEndDate},on:{input:function(e){e.target.composing||(t.filterEndDate=e.target.value)}}}),i("i",{staticClass:"bg_secondary-3 br-b_1 br_secondary-3 br_solid fa-calendar far font_n1 p-l_3 p-r_3 p-t_3 p_3 vertical-align_bottom"})]),t._m(0)])]),i("div",{staticClass:"font_ui p-y_4 flex",attrs:{id:"fiterAndSortContainer"}},[i("div",{staticClass:"flex_auto p-r_5",attrs:{id:"Sort"}},[i("span",{staticClass:"uppercase c_secondary font_bold font_n2 m-x_2"},[t._v("Sort")]),i("ul",{staticClass:"flex flex_column flex_row:md font_bold font_n2 font_ui ul_none"},[i("li",{staticClass:"flex_shrink",class:{"is-active":"Date"==t.selectedSort},on:{click:function(e){t.selectedSort="Date"}}},[i("span",{staticClass:"button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"},[t._v("Date")])]),i("li",{staticClass:"flex_shrink",class:{"is-active":"Activity"==t.selectedSort},on:{click:function(e){t.selectedSort="Activity"}}},[i("span",{staticClass:"button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"},[t._v("Activity")])]),i("li",{staticClass:"flex_shrink",class:{"is-active":"Product"==t.selectedSort},on:{click:function(e){t.selectedSort="Product"}}},[i("span",{staticClass:"button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"},[t._v("Product")])]),i("li",{staticClass:"flex_shrink",class:{"is-active":"Type"==t.selectedSort},on:{click:function(e){t.selectedSort="Type"}}},[i("span",{staticClass:"button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"},[t._v("Type")])]),i("li",{staticClass:"flex_shrink",class:{"is-active":"Claimed"==t.selectedSort},on:{click:function(e){t.selectedSort="Claimed"}}},[i("span",{staticClass:"button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white"},[t._v("Claimed")])])])]),i("filterCreditType",{attrs:{creditTypes:t.creditTypes,creditsInList:t.creditsInList},on:{updatefitler:function(e){t.selectedCreditFilter=e}}})],1),i("div",{staticClass:"bg_secondary-5 m-b_4 font_ui m-x_n4 m-x_3:md m-x_0:lg",attrs:{id:"summaryView"}},[i("div",{staticClass:"flex bg_secondary-2 font_n2 font_n1:md c_white p_2 p-x_4 font_bold"},[i("div",{staticClass:"flex_auto uppercase"},[t._v("list summary")]),i("div",{staticClass:"flex_shrink p-x_4"}),i("div",{staticClass:"flex_shrink p-l_4 uppercase"},[i("span",{staticClass:"c_secondary-n3 m-l_3"},[t.selectedCreditFilter.length>1&&"All"!=t.selectedCreditFilter[1]?i("span",[t._v("Credit Type")]):t._e(),t.selectedCreditFilter.length>1&&"All"!=t.selectedCreditFilter[1]&&("1949-01-01"!=t.filterStartDate||""==t.filterEndDate)?i("span",{staticClass:"m-x_3"},[t._v("&")]):t._e(),"1949-01-01"!=t.filterStartDate||""==t.filterEndDate?i("span",{staticClass:"c_secondary-n3"},[t._v("Date")]):t._e()]),i("span",{staticClass:"p-l_3"},[t._v("Filtered by")])])]),i("div",{staticClass:"flex"},[i("div",{staticClass:"flex_auto p-x_4 p-y_3"},[i("ul",{staticClass:"ul_none lh_3"},[i("li",[i("ul",{staticClass:"ul_none flex flex_wrap font_n2 font_n1:md"},[t._m(1),i("transition-group",{staticClass:"flex_shrink ul_none",attrs:{name:"crossfade",tag:"ul"}},t._l(t.creditsFilteredList,function(e,r){return i("li",{key:r+"_credit",staticClass:"inline-block p_1 inline-block m-x_1 p-x_2 p-x_3:md",class:["bg_"+e+"-3 c_"+e+"-n2"]},[t._v(t._s(e))])}),0)],1)]),i("li",{staticClass:"font_n2 font_n1:md m-t_3"},[i("span",{staticClass:"capitalize font_bold c_secondary-1"},[t._v("Date Range")]),"1949-01-01"==t.filterStartDate&&""==t.filterEndDate?i("span",{staticClass:"c_secondary-n3 m-l_3 font_bold font_italic"},[t._v("None")]):i("span",{staticClass:"c_primary font_bold m-l_3"},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.filterStartDate)+" to\n\t\t\t\t\t\t\t"),""==t.filterEndDate?i("span",[t._v("Today")]):t._e(),""!==t.filterEndDate?i("span",[t._v(t._s(t.filterEndDate))]):t._e()])])])]),i("div",{staticClass:"flex_shrink:md p-x_4 p-y_3 bg_primary c_white text_center lh_0"},[i("span",{staticClass:"block font_4"},[t._v(t._s(t.filteredCreditCount))]),i("span",{staticClass:"block font_n2 font_bold c_primary-4 uppercase"},[t._v("Credits")])])])]),i("div",{staticClass:"m-x_n4 m-x_n2:md m-x_0"},[i("transition-group",{attrs:{tag:"div",name:"crossFade"}},t._l(t.transcriptFiltered,function(e){return i("transcriptItem",t._b({key:e.ID+"_activity",attrs:{selectedSort:t.selectedSort,selectedCreditFilter:t.selectedCreditFilter}},"transcriptItem",e,!1))}),1)],1),t._m(2),t._m(3)])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"button bg_primary text_center font_n1:md br_radius p-y_3 m-b_3 p-x_4 block inline-block:md m-t_3 m-t_0:md c_white undecorated h:bg_secondary h:c_white",attrs:{href:""}},[i("i",{staticClass:"fas fa-plus m-r_3"}),t._v(" Add Non ACC Activity\n\t\t\t")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"font_bold flex_shrink m-r_3"},[i("span",{staticClass:"c_secondary-1 capitalize"},[t._v("Credit Types")]),i("span",{staticClass:"c_primary-0 font_n1 h:dotted inline-block m-t_n2 vertical-align_top"},[i("i",{staticClass:"fa-question-circle fas"})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"c_white-8 text_center p-y_3 font_slab br-t_2 br_solid br_primary-1 bg_primary-1 m-x_n4",attrs:{id:"loadMore "}},[t._v("\n\t\tShowing First 20 Results\n\t\t"),i("a",{staticClass:"transition_1 button br_radius font_bold inline-block br_solid br_2 br_white-8 c_white-8 undecorated p-x_4 p-y_3 h:bg_white-8 h:c_primary h:br_white m-x_3",attrs:{href:""}},[t._v("Load All Activities")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bg_secondary-4 p_5 m-x_n4 m-b_n4",attrs:{id:"foooter"}},[i("ol",{staticClass:"font_n2 c_secondary lh_2"},[i("li",[t._v("The American College of Cardiology Foundation (ACCF) is accredited by the Accreditation Council for Continuing Medical Education to provide continuing medical education for physicians.")]),i("li",[t._v("The American College of Cardiology Foundation (ACCF) is accredited as a provider of continuing education by the American Nurses Credentialing Center's Commission on Accreditation.")])])])}],n=(i("8e6e"),i("456d"),i("55dd"),i("c5f6"),i("5df2"),i("ac6a"),i("bd86")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"h:bg_black-1 bg_white",class:{"is-active":t.IsActive},on:{click:function(){t.IsActive=!t.IsActive}}},[i("header",{staticClass:"font_ui p_3 p-x_4 p-b_0 relative"},[i("div",{staticClass:"flex_auto font_n2 absolute t_0 r_0 opacity_5 display_none"},[i("span",{staticClass:"font_bold"},[t._v("Product ID:")]),i("span",{staticClass:"font_italic c_primary font_n2"},[t._v(t._s(t.ID))])]),i("section",{attrs:{id:"label"}},[i("div",[i("div",[i("span",{staticClass:"inline-block c_secondary-3 font_n2:lg font_n1 uppercase font_bold",class:{"bg_warning c_white p-x_3 p-y_2 br_radius br-tr_square br-br_square":t.External}},[t.External?i("span",[t._v("Non ACC  ")]):t._e(),t._v("Activity\n\t\t\t\t\t")]),t.External?i("div",{staticClass:"font_n2:lg font_n1 uppercase font_bold c_secondary-1 inline-block p-x_3 p-y_2 m-x_1"},[t._m(0),t._m(1)]):t._e()])]),"Product"==t.selectedSort?i("div",{staticClass:"font_1 font_0:md font_bold bg_accent-4 c_black p_2 p-x_3 br_radius inline-block m-t_2 m-b_n2 self_baseline m-r_3"},[i("span",[t._v(t._s(t.ProductTitle))])]):t._e(),i("div",{staticClass:"block c_secondary-n4 font_2:md font_1"},[i("span",[t.Course?i("span",[t._v(t._s(t.Course)+" -")]):t._e(),t._v("\n\t\t\t\t\t"+t._s(t.Activity)+"\n\t\t\t\t")])]),"Product"!=t.selectedSort?i("div",{staticClass:"font_n2 font_n1:md font_bold c_accent self_baseline m-r_3"},[i("span",[t._v(t._s(t.ProductTitle))])]):t._e()])]),i("div",{staticClass:"br-b_1 br_primary-3 a:bg_primary-5 br_dotted font_ui p_3 p-x_4 relative flex"},[i("div",{staticClass:"flex_auto"},[i("div",{staticClass:"flex absolute:lg t_4 r_4 font_italic font_n3"},[i("div",{staticClass:"shrink p-x_3:lg p-l_0"},[i("div",{},[i("span",[t._v("Date Claimed:")]),t._v(" \n\t\t\t\t\t\t"),i("span",[t._v(t._s(t.DateClaimed))])])])]),t._m(2)]),i("div",{staticClass:"flex_shrink w-grid_3 w-grid_4:md self_end"},[i("ul",{staticClass:"ul_none flex flex_wrap flex_row-reverse:md flex_column font_n1 font_0:md"},t._l(t.Credits,function(e,r){return i("li",{key:r,staticClass:"br_radius p-y_1 p-x_2 p-y_2:md p-x_3:md block inline-block:md m-x_2 flex_shrink text_center m-b_2 transition_2",class:t.creditDecoration(e.Type)},[i("span",[t._v(t._s(e.Type))]),i("span",{staticClass:"font_bold m-l_3 p-l_3 br-l_1 br_solid br_white"},[t._v(t._s(e.Amount))])])}),0)])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"p-y_2 p-x_3 m-x_1 bg_secondary-3 h:bg_secondary h:c_white"},[i("i",{staticClass:"fas fa-edit"}),i("span",{staticClass:"display_none inline:md"},[t._v(" Edit")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"p-y_2 p-x_3 m-x_1 bg_secondary-3 h:bg_secondary h:c_white"},[i("i",{staticClass:"fas fa-trash"}),i("span",{staticClass:"display_none inline:md"},[t._v(" Edit")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("a",{staticClass:"download font_n2 c_primary",attrs:{href:""}},[i("i",{staticClass:"fas fa-badge-check"}),t._v(" Download Certificate\n\t\t\t\t")])])}],d={props:{ID:{type:Number,default:-1},External:{type:Boolean,default:!1},ProductTitle:{type:String,default:void 0},Course:{type:String,default:void 0},Activity:{type:String,default:"activity"},DateCompleted:{type:String,default:"0/0/00"},DateClaimed:{type:String,default:"1/1/00"},Credits:{type:Array},selectedCreditFilter:{type:Array},selectedSort:{type:String,default:"Date"}},data:function(){return{IsActive:!1}},methods:{creditDecoration:function(t){var e=-1!=this.selectedCreditFilter.indexOf(t)||1==this.selectedCreditFilter.length?"order_0 c_white bg_"+t:"order_last br_secondary-4 bg_secondary-5  c_secondary-3 br_1 br_dashed";return e}}},c=d,C=i("2877"),u=Object(C["a"])(c,o,s,!1,null,"163e0b36",null),m=u.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text_right flex_end flex_auto p-l_5",attrs:{id:"CreditType"}},[t._m(0),i("ul",{staticClass:"flex flex_column flex_row-reverse:md text_left font_bold font_n2 font_ui ul_none"},[i("li",{staticClass:"flex_shrink",class:{"is-active":1==t.selectedFilter.length}},[i("div",{staticClass:"button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 br_1 br_solid br_white-7 block a:bg_primary a:c_white",on:{click:function(e){return t.filterReset()}}},[t._v("All")])]),t._l(t.creditUsed,function(e,r){var a;return i("li",{key:r+"creditFilter",staticClass:"flex_shrink br_1 br_solid br_white-7"},[i("div",{staticClass:"button bg_secondary-3 p-x_3 p-x_4:lg p-y_2 p-y_3:lg undecorated inline-block:md h:bg_secondary h:c_white c_secondary-n3 block a:bg_primary a:c_white",class:(a={},a["c_white bg_"+e.styleCode]=-1!=t.selectedFilter.indexOf(e.styleCode),a),on:{click:function(i){return t.filterClick(e.styleCode)}}},[i("span",{staticClass:"lh_0",domProps:{innerHTML:t._s(e.shortName)}})])])})],2)])},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"uppercase c_secondary font_bold font_n2 m-x_2"},[t._v("\n\t\tFilter Credit Types\n\t\t"),i("i",{staticClass:"fas fa-question-circle"})])}],y={props:{creditTypes:{type:Array,default:function(){return[]}},creditsInList:{type:Array,default:function(){return[]}}},data:function(){return{selectedFilter:["All"]}},methods:{filterClick:function(t){-1==this.selectedFilter.indexOf(t)?this.selectedFilter.push(t):this.selectedFilter.splice(this.selectedFilter.indexOf(t),1),this.emitFilter()},filterReset:function(){this.selectedFilter=["All"],this.emitFilter()},emitFilter:function(){this.$emit("updatefitler",this.selectedFilter)}},computed:{creditUsed:function(){var t=[];for(var e in this.creditTypes)if(this.creditTypes.hasOwnProperty(e)){var i=this.creditTypes[e];-1!=this.creditsInList.indexOf(i.styleCode)&&t.push(i)}return t}}},A=y,D=Object(C["a"])(A,p,_,!1,null,"d392831e",null),f=D.exports,T=i("2f62");function E(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?E(i,!0).forEach(function(e){Object(n["a"])(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):E(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}var x={name:"app",data:function(){return{filterStartDate:"2018-01-01",filterEndDate:"",selectedCreditFilter:["All"],sortType:[],selectedSort:"Date"}},props:{},components:{transcriptItem:m,filterCreditType:f},computed:v({},Object(T["d"])(["transcript","creditTypes"]),{fullCreditCount:function(){var t=0;return this.transcript.forEach(function(e){e.Credits.forEach(function(e){t+=Number.parseFloat(e.Amount)})}),t.toFixed(1)},filteredCreditCount:function(){var t=0;return this.transcriptFiltered.forEach(function(e){e.Credits.forEach(function(e){t+=Number.parseFloat(e.Amount)})}),t.toFixed(1)},creditsInList:function(){var t=["CME"],e=this.transcript;for(var i in e)if(e.hasOwnProperty(i)){var r=e[i]["Credits"];for(var a in r)if(r.hasOwnProperty(a)){var l=r[a]["Type"];-1===t.indexOf(l)&&t.push(l)}}return t},creditsFilteredList:function(){for(var t=this.creditsInList,e=[],i=0;i<t.length;i++){var r=t[i];-1==this.selectedCreditFilter.indexOf(r)&&1!=this.selectedCreditFilter.length||e.push(r)}return e},transcriptFiltered:function(){var t=this,e=[];return this.transcript.forEach(function(i){var r=t.isDateInFilter(i.DateClaimed),a=!1;i.Credits.forEach(function(e){t.isCreditTypeInFilter(e.Type)&&(a=!0)}),r&&a&&e.push(i)}),e.sort(this.compare)}}),methods:v({},Object(T["c"])([]),{},Object(T["b"])([]),{compare:function(t,e){var i=0;switch(this.selectedSort){case"Date":i=new Date(t.DateClaimed)>=new Date(e.DateClaimed)?-1:1;break;case"Activity":i=t.Activity<=e.Activity?-1:1;break;case"Product":i=t.ProductTitle<=e.ProductTitle?-1:1;break;default:break}return i},creditBoolean:function(t){var e=-1!=this.selectedCreditFilter.indexOf(t)||1==this.selectedCreditFilter.length();return e},isCreditTypeInFilter:function(t){return-1!==this.creditsFilteredList.indexOf(t)},isDateInFilter:function(t){var e,i,r;return r=new Date(t),e="invalid date"==new Date(this.filterStartDate)?new Date("1970-01-01"):new Date(this.filterStartDate),i=""==this.filterEndDate?new Date:new Date(this.filterEndDate),e<=r&&r<=i}})},P=x,b=(i("034f"),Object(C["a"])(P,a,l,!1,null,null,null)),h=b.exports,I=i("28dd");r["a"].use(T["a"]);var g=new T["a"].Store({state:{creditTypes:[{shortName:"COP",fullName:"Certificate of Participation",styleCode:"COP"},{shortName:"ABP",fullName:"American Board of Pediatrics",styleCode:"ABP"},{shortName:"CE",fullName:"Continuing Education",styleCode:"CE"},{shortName:"MOC II",fullName:"ABIM MOC Part II",styleCode:"MOCII"},{shortName:"MOC IV",fullName:"ABIM MOC Part IV",styleCode:"MOCIV"},{shortName:"CNE",fullName:"Continuing Nursing Education",styleCode:"CNE"},{shortName:"CNE<sup>rx</sup>",fullName:"CNE<sup>rx</sup>",styleCode:"CNErx"},{shortName:"ECME",fullName:"External Continuing Medical Education",styleCode:"ECME"},{shortName:"CPE",fullName:"Continuing Pharamacy Education",styleCode:"CPE"},{shortName:"CME",fullName:"Continuing Medical Education",styleCode:"CME"}],transcript:[{ID:1,ProductTitle:"Heart Songs",Course:null,Activity:"Stronghold",DateCompleted:"4/4/2018",DateClaimed:"11/25/2018",Credits:[{Type:"CE",Amount:19.2}],External:!1},{ID:2,ProductTitle:"CathSAP",Course:"Span",Activity:"Biodex",DateCompleted:"7/23/2016",DateClaimed:"9/20/2018",Credits:[{Type:"CE",Amount:15.4}],External:!0},{ID:3,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Andalax",DateCompleted:"1/10/2017",DateClaimed:"9/25/2017",Credits:[{Type:"MOCII",Amount:6.1}],External:!1},{ID:4,ProductTitle:null,Course:null,Activity:"Alpha",DateCompleted:"2/2/2016",DateClaimed:"7/5/2019",Credits:[{Type:"CNE",Amount:17.3}],External:!1},{ID:5,ProductTitle:"Heart Songs",Course:null,Activity:"Sonsing",DateCompleted:"10/18/2018",DateClaimed:"11/24/2017",Credits:[{Type:"CE",Amount:20.1},{Type:"CPE",Amount:12.4}],External:!0},{ID:6,ProductTitle:"CathSAP",Course:null,Activity:"Bigtax",DateCompleted:"2/3/2016",DateClaimed:"8/15/2016",Credits:[{Type:"ECME",Amount:12.3},{Type:"CME",Amount:21.7}],External:!0},{ID:7,ProductTitle:"Heart Songs",Course:"Temp",Activity:"Gembucket",DateCompleted:"9/26/2018",DateClaimed:"8/16/2015",Credits:[{Type:"CME",Amount:21.3}],External:!1},{ID:8,ProductTitle:"Heart Songs",Course:"Home Ing",Activity:"Rank",DateCompleted:"8/3/2017",DateClaimed:"3/2/2017",Credits:[{Type:"CNE",Amount:6.8},{Type:"CPE",Amount:7.9}],External:!0},{ID:9,ProductTitle:"ACCSAP",Course:"Solarbreeze",Activity:"Namfix",DateCompleted:"1/6/2019",DateClaimed:"5/1/2016",Credits:[{Type:"CNErx",Amount:7},{Type:"CPE",Amount:5.8}],External:!1},{ID:10,ProductTitle:null,Course:"Bitwolf",Activity:"Bigtax",DateCompleted:"10/14/2015",DateClaimed:"2/23/2016",Credits:[{Type:"ECME",Amount:11.5}],External:!1},{ID:11,ProductTitle:"ACCSAP",Course:"Bamity",Activity:"Kanlam",DateCompleted:"9/12/2017",DateClaimed:"9/24/2015",Credits:[{Type:"CNErx",Amount:8.3},{Type:"COP",Amount:19.7}],External:!1},{ID:12,ProductTitle:"CathSAP",Course:null,Activity:"Mat Lam Tam",DateCompleted:"3/17/2019",DateClaimed:"6/19/2018",Credits:[{Type:"CME",Amount:17},{Type:"CNErx",Amount:11.1}],External:!1},{ID:13,ProductTitle:"Heart Songs",Course:null,Activity:"Toughjoyfax",DateCompleted:"9/19/2018",DateClaimed:"4/12/2019",Credits:[{Type:"CE",Amount:1.7}],External:!1},{ID:14,ProductTitle:"CathSAP",Course:null,Activity:"Aerified",DateCompleted:"8/16/2015",DateClaimed:"8/8/2016",Credits:[{Type:"ECME",Amount:4.6},{Type:"CNErx",Amount:20}],External:!0},{ID:15,ProductTitle:"Cardiosourse Plus",Course:"Domainer",Activity:"Tres-Zap",DateCompleted:"3/18/2019",DateClaimed:"4/15/2018",Credits:[{Type:"MOCII",Amount:22.2}],External:!1},{ID:16,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Tempsoft",DateCompleted:"2/22/2016",DateClaimed:"3/8/2018",Credits:[{Type:"COP",Amount:14.7},{Type:"CNE",Amount:18.6}],External:!1},{ID:17,ProductTitle:"Heart Songs",Course:null,Activity:"Regrant",DateCompleted:"7/27/2019",DateClaimed:"2/6/2017",Credits:[{Type:"CNErx",Amount:10},{Type:"CME",Amount:22.4}],External:!1},{ID:18,ProductTitle:"Cardiosourse Plus",Course:"Opela",Activity:"It",DateCompleted:"5/30/2018",DateClaimed:"4/25/2019",Credits:[{Type:"CE",Amount:6.5},{Type:"MOCII",Amount:13.1}],External:!1},{ID:19,ProductTitle:"ACCSAP",Course:null,Activity:"Hatity",DateCompleted:"2/26/2017",DateClaimed:"3/26/2016",Credits:[{Type:"ECME",Amount:7.5}],External:!0},{ID:20,ProductTitle:"Cardiosourse Plus",Course:"Otcom",Activity:"It",DateCompleted:"12/24/2017",DateClaimed:"2/6/2016",Credits:[{Type:"MOCII",Amount:23.6}],External:!0},{ID:21,ProductTitle:"Heart Songs",Course:"Vagram",Activity:"Job",DateCompleted:"11/11/2018",DateClaimed:"3/27/2019",Credits:[{Type:"CPE",Amount:10.8}],External:!0},{ID:22,ProductTitle:"ACCSAP",Course:null,Activity:"Flexidy",DateCompleted:"1/12/2018",DateClaimed:"6/28/2018",Credits:[{Type:"MOCIV",Amount:17.2},{Type:"CE",Amount:10.6}],External:!0},{ID:23,ProductTitle:"ACCSAP",Course:null,Activity:"Asoka",DateCompleted:"1/12/2018",DateClaimed:"4/23/2018",Credits:[{Type:"CNErx",Amount:18.5},{Type:"CE",Amount:6.2}],External:!0},{ID:24,ProductTitle:null,Course:null,Activity:"Ventosanzap",DateCompleted:"5/11/2019",DateClaimed:"7/12/2018",Credits:[{Type:"CME",Amount:12.4}],External:!1},{ID:25,ProductTitle:"Heart Songs",Course:"Veribet",Activity:"Tresom",DateCompleted:"4/23/2019",DateClaimed:"2/7/2019",Credits:[{Type:"CPE",Amount:1.6}],External:!1},{ID:26,ProductTitle:"Heart Songs",Course:null,Activity:"Prodder",DateCompleted:"11/8/2015",DateClaimed:"9/30/2017",Credits:[{Type:"MOCII",Amount:20.6},{Type:"ECME",Amount:22.5}],External:!0},{ID:27,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Voyatouch",DateCompleted:"11/9/2016",DateClaimed:"1/20/2017",Credits:[{Type:"COP",Amount:24.4},{Type:"CNErx",Amount:18.7}],External:!1},{ID:28,ProductTitle:"CathSAP",Course:null,Activity:"Zontrax",DateCompleted:"10/22/2016",DateClaimed:"2/22/2016",Credits:[{Type:"ECME",Amount:18.4}],External:!1},{ID:29,ProductTitle:"CathSAP",Course:null,Activity:"Fintone",DateCompleted:"5/3/2018",DateClaimed:"7/6/2016",Credits:[{Type:"ECME",Amount:10.4}],External:!0},{ID:30,ProductTitle:null,Course:null,Activity:"Y-find",DateCompleted:"9/22/2017",DateClaimed:"1/4/2017",Credits:[{Type:"CNE",Amount:2.5}],External:!1},{ID:31,ProductTitle:"CathSAP",Course:null,Activity:"Wrapsafe",DateCompleted:"1/25/2016",DateClaimed:"3/16/2016",Credits:[{Type:"MOCII",Amount:20.3}],External:!1},{ID:32,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Regrant",DateCompleted:"3/20/2016",DateClaimed:"1/27/2019",Credits:[{Type:"CNErx",Amount:16}],External:!0},{ID:33,ProductTitle:"ACCSAP",Course:null,Activity:"Ventosanzap",DateCompleted:"5/2/2017",DateClaimed:"3/4/2017",Credits:[{Type:"CE",Amount:18.4},{Type:"ECME",Amount:11}],External:!1},{ID:34,ProductTitle:"Heart Songs",Course:"Stim",Activity:"Cardify",DateCompleted:"7/26/2017",DateClaimed:"2/20/2018",Credits:[{Type:"CPE",Amount:23.3}],External:!0},{ID:35,ProductTitle:"ACCSAP",Course:null,Activity:"Bitwolf",DateCompleted:"2/20/2017",DateClaimed:"5/29/2019",Credits:[{Type:"MOCIV",Amount:4.6},{Type:"COP",Amount:19.3}],External:!1},{ID:36,ProductTitle:"EP SAP",Course:null,Activity:"Sonair",DateCompleted:"10/3/2015",DateClaimed:"3/2/2019",Credits:[{Type:"COP",Amount:3.8},{Type:"CNE",Amount:16.1}],External:!1},{ID:37,ProductTitle:"Cardiosourse Plus",Course:"Transcof",Activity:"Sub-Ex",DateCompleted:"10/19/2016",DateClaimed:"6/16/2019",Credits:[{Type:"MOCII",Amount:23.6},{Type:"CE",Amount:1.7}],External:!0},{ID:38,ProductTitle:"Heart Songs",Course:null,Activity:"Asoka",DateCompleted:"2/18/2017",DateClaimed:"1/5/2018",Credits:[{Type:"ECME",Amount:5.4},{Type:"COP",Amount:18.6}],External:!0},{ID:39,ProductTitle:"CathSAP",Course:null,Activity:"Bamity",DateCompleted:"4/8/2018",DateClaimed:"8/25/2016",Credits:[{Type:"ECME",Amount:5.1},{Type:"CNE",Amount:10.9}],External:!0},{ID:40,ProductTitle:"ACCSAP",Course:null,Activity:"Konklab",DateCompleted:"8/21/2018",DateClaimed:"1/27/2019",Credits:[{Type:"ECME",Amount:12.5}],External:!1},{ID:41,ProductTitle:null,Course:null,Activity:"Bitwolf",DateCompleted:"7/27/2018",DateClaimed:"10/17/2016",Credits:[{Type:"CME",Amount:2.9},{Type:"CME",Amount:3.4}],External:!1},{ID:42,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Tin",DateCompleted:"7/23/2019",DateClaimed:"4/20/2018",Credits:[{Type:"CNE",Amount:24.8},{Type:"MOCII",Amount:22.8}],External:!0},{ID:43,ProductTitle:null,Course:null,Activity:"Ventosanzap",DateCompleted:"1/14/2016",DateClaimed:"5/5/2017",Credits:[{Type:"CME",Amount:11.6},{Type:"MOCIV",Amount:7.3}],External:!0},{ID:44,ProductTitle:"EP SAP",Course:null,Activity:"Otcom",DateCompleted:"7/27/2018",DateClaimed:"5/2/2016",Credits:[{Type:"ECME",Amount:8.8}],External:!0},{ID:45,ProductTitle:null,Course:null,Activity:"Asoka",DateCompleted:"11/8/2018",DateClaimed:"2/9/2019",Credits:[{Type:"CPE",Amount:4.3},{Type:"CME",Amount:3.6}],External:!0},{ID:46,ProductTitle:"EP SAP",Course:null,Activity:"Voyatouch",DateCompleted:"2/6/2017",DateClaimed:"3/15/2016",Credits:[{Type:"CNErx",Amount:20.5},{Type:"MOCIV",Amount:22.4}],External:!1},{ID:47,ProductTitle:null,Course:null,Activity:"Lotlux",DateCompleted:"8/20/2016",DateClaimed:"4/7/2017",Credits:[{Type:"ECME",Amount:8.5},{Type:"COP",Amount:6.7}],External:!1},{ID:48,ProductTitle:"Heart Songs",Course:null,Activity:"Keylex",DateCompleted:"5/10/2016",DateClaimed:"10/22/2015",Credits:[{Type:"MOCII",Amount:14.5},{Type:"ECME",Amount:7}],External:!1},{ID:49,ProductTitle:"EP SAP",Course:null,Activity:"Fintone",DateCompleted:"5/6/2016",DateClaimed:"1/27/2018",Credits:[{Type:"CNErx",Amount:3.9},{Type:"CNE",Amount:3.7}],External:!1},{ID:50,ProductTitle:null,Course:null,Activity:"Zamit",DateCompleted:"11/18/2015",DateClaimed:"7/14/2018",Credits:[{Type:"CNE",Amount:17.5}],External:!1},{ID:51,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Home Ing",DateCompleted:"1/16/2018",DateClaimed:"6/3/2016",Credits:[{Type:"CME",Amount:20.2}],External:!0},{ID:52,ProductTitle:null,Course:null,Activity:"Greenlam",DateCompleted:"11/3/2017",DateClaimed:"2/3/2016",Credits:[{Type:"ECME",Amount:4.2},{Type:"COP",Amount:8.3}],External:!1},{ID:53,ProductTitle:"CathSAP",Course:null,Activity:"Bitwolf",DateCompleted:"12/14/2015",DateClaimed:"6/18/2018",Credits:[{Type:"COP",Amount:14.2},{Type:"MOCIV",Amount:20.6}],External:!0},{ID:54,ProductTitle:null,Course:null,Activity:"Bytecard",DateCompleted:"4/15/2016",DateClaimed:"5/2/2017",Credits:[{Type:"CE",Amount:7.9},{Type:"CME",Amount:6.1}],External:!1},{ID:55,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Namfix",DateCompleted:"3/6/2018",DateClaimed:"9/29/2015",Credits:[{Type:"ECME",Amount:8.5}],External:!1},{ID:56,ProductTitle:"ACCSAP",Course:"Pannier",Activity:"Alpha",DateCompleted:"11/17/2016",DateClaimed:"12/24/2015",Credits:[{Type:"CPE",Amount:4.6}],External:!0},{ID:57,ProductTitle:null,Course:null,Activity:"Y-find",DateCompleted:"8/14/2017",DateClaimed:"8/19/2015",Credits:[{Type:"CNE",Amount:11.1},{Type:"MOCII",Amount:6.1}],External:!0},{ID:58,ProductTitle:null,Course:"Voyatouch",Activity:"Matsoft",DateCompleted:"11/29/2016",DateClaimed:"11/24/2016",Credits:[{Type:"CME",Amount:1.4}],External:!0},{ID:59,ProductTitle:"EP SAP",Course:null,Activity:"Y-find",DateCompleted:"3/10/2016",DateClaimed:"1/21/2016",Credits:[{Type:"ECME",Amount:13.2},{Type:"MOCIV",Amount:3.9}],External:!0},{ID:60,ProductTitle:null,Course:null,Activity:"Fintone",DateCompleted:"7/2/2016",DateClaimed:"3/20/2019",Credits:[{Type:"ECME",Amount:1.8},{Type:"CE",Amount:3.2}],External:!0},{ID:61,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Redhold",DateCompleted:"8/3/2015",DateClaimed:"11/16/2018",Credits:[{Type:"MOCIV",Amount:19.2},{Type:"CME",Amount:10.1}],External:!0},{ID:62,ProductTitle:null,Course:"Cardguard",Activity:"Zoolab",DateCompleted:"12/4/2016",DateClaimed:"4/21/2017",Credits:[{Type:"CE",Amount:19.7},{Type:"MOCIV",Amount:3.8}],External:!1},{ID:63,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Konklab",DateCompleted:"3/12/2016",DateClaimed:"1/17/2016",Credits:[{Type:"CPE",Amount:23.4}],External:!1},{ID:64,ProductTitle:null,Course:null,Activity:"Flexidy",DateCompleted:"1/22/2016",DateClaimed:"11/30/2018",Credits:[{Type:"COP",Amount:20.3},{Type:"CE",Amount:17.5}],External:!0},{ID:65,ProductTitle:"EP SAP",Course:"Bamity",Activity:"Home Ing",DateCompleted:"9/19/2015",DateClaimed:"12/18/2015",Credits:[{Type:"CNErx",Amount:17}],External:!1},{ID:66,ProductTitle:"CathSAP",Course:"Lotstring",Activity:"Y-Solowarm",DateCompleted:"7/9/2019",DateClaimed:"10/2/2015",Credits:[{Type:"MOCIV",Amount:3.9}],External:!0},{ID:67,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Bitchip",DateCompleted:"3/14/2019",DateClaimed:"7/13/2019",Credits:[{Type:"ECME",Amount:14.4},{Type:"CPE",Amount:22.4}],External:!1},{ID:68,ProductTitle:"EP SAP",Course:"Tres-Zap",Activity:"Daltfresh",DateCompleted:"8/6/2017",DateClaimed:"3/10/2017",Credits:[{Type:"CPE",Amount:12.9},{Type:"COP",Amount:4.3}],External:!0},{ID:69,ProductTitle:"EP SAP",Course:"Subin",Activity:"Bigtax",DateCompleted:"1/6/2019",DateClaimed:"6/5/2018",Credits:[{Type:"MOCIV",Amount:17.6},{Type:"COP",Amount:11.5}],External:!1},{ID:70,ProductTitle:"CathSAP",Course:null,Activity:"Stringtough",DateCompleted:"6/26/2019",DateClaimed:"6/16/2016",Credits:[{Type:"CE",Amount:4.2},{Type:"MOCII",Amount:22.2}],External:!0},{ID:71,ProductTitle:null,Course:null,Activity:"Domainer",DateCompleted:"4/23/2019",DateClaimed:"8/6/2017",Credits:[{Type:"CPE",Amount:24.6}],External:!1},{ID:72,ProductTitle:"ACCSAP",Course:null,Activity:"Subin",DateCompleted:"3/20/2019",DateClaimed:"12/26/2015",Credits:[{Type:"ECME",Amount:14.4},{Type:"COP",Amount:7.9}],External:!0},{ID:73,ProductTitle:"ACCSAP",Course:null,Activity:"Toughjoyfax",DateCompleted:"11/24/2016",DateClaimed:"5/30/2019",Credits:[{Type:"CPE",Amount:7.5},{Type:"CNErx",Amount:17.7}],External:!1},{ID:74,ProductTitle:null,Course:null,Activity:"Regrant",DateCompleted:"7/13/2016",DateClaimed:"4/15/2018",Credits:[{Type:"MOCII",Amount:20.6},{Type:"CNE",Amount:8.7}],External:!1},{ID:75,ProductTitle:"ACCSAP",Course:null,Activity:"Toughjoyfax",DateCompleted:"4/28/2017",DateClaimed:"10/25/2015",Credits:[{Type:"ECME",Amount:4.5},{Type:"COP",Amount:17.5}],External:!1},{ID:76,ProductTitle:"ACCSAP",Course:null,Activity:"Duobam",DateCompleted:"5/3/2017",DateClaimed:"8/24/2018",Credits:[{Type:"MOCII",Amount:4.1}],External:!1},{ID:77,ProductTitle:"Heart Songs",Course:null,Activity:"Matsoft",DateCompleted:"6/17/2018",DateClaimed:"8/30/2018",Credits:[{Type:"MOCIV",Amount:22.9}],External:!0},{ID:78,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Sonsing",DateCompleted:"11/9/2015",DateClaimed:"2/17/2019",Credits:[{Type:"CPE",Amount:22.3},{Type:"CME",Amount:19.4}],External:!0},{ID:79,ProductTitle:"EP SAP",Course:null,Activity:"Overhold",DateCompleted:"8/27/2017",DateClaimed:"10/1/2018",Credits:[{Type:"COP",Amount:24.3},{Type:"ECME",Amount:20.9}],External:!0},{ID:80,ProductTitle:"Cardiosourse Plus",Course:"Subin",Activity:"Aerified",DateCompleted:"5/29/2016",DateClaimed:"2/5/2016",Credits:[{Type:"CNE",Amount:21.9}],External:!0},{ID:81,ProductTitle:"ACCSAP",Course:"Voyatouch",Activity:"Veribet",DateCompleted:"8/6/2015",DateClaimed:"12/2/2015",Credits:[{Type:"COP",Amount:14.6},{Type:"CPE",Amount:15.8}],External:!1},{ID:82,ProductTitle:"EP SAP",Course:"Regrant",Activity:"Fixflex",DateCompleted:"10/17/2017",DateClaimed:"10/8/2016",Credits:[{Type:"CPE",Amount:19.3}],External:!0},{ID:83,ProductTitle:"ACCSAP",Course:null,Activity:"Matsoft",DateCompleted:"9/3/2015",DateClaimed:"12/15/2018",Credits:[{Type:"MOCIV",Amount:1.4},{Type:"COP",Amount:18.1}],External:!0},{ID:84,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Otcom",DateCompleted:"3/27/2017",DateClaimed:"5/13/2017",Credits:[{Type:"CME",Amount:6.3},{Type:"CNE",Amount:17.5}],External:!1},{ID:85,ProductTitle:"Heart Songs",Course:null,Activity:"Tresom",DateCompleted:"9/24/2017",DateClaimed:"8/13/2015",Credits:[{Type:"CPE",Amount:5.6},{Type:"CME",Amount:22.3}],External:!1},{ID:86,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Konklab",DateCompleted:"5/18/2017",DateClaimed:"5/9/2017",Credits:[{Type:"CNE",Amount:3.3},{Type:"ECME",Amount:5.3}],External:!1},{ID:87,ProductTitle:"ACCSAP",Course:null,Activity:"Mat Lam Tam",DateCompleted:"9/8/2018",DateClaimed:"4/3/2019",Credits:[{Type:"CNE",Amount:25},{Type:"CME",Amount:20.7}],External:!1},{ID:88,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Overhold",DateCompleted:"9/11/2017",DateClaimed:"4/16/2017",Credits:[{Type:"CE",Amount:2.9},{Type:"MOCIV",Amount:8.2}],External:!1},{ID:89,ProductTitle:"ACCSAP",Course:"Zoolab",Activity:"Zaam-Dox",DateCompleted:"10/2/2017",DateClaimed:"3/1/2018",Credits:[{Type:"COP",Amount:13.2}],External:!1},{ID:90,ProductTitle:"CathSAP",Course:null,Activity:"Lotstring",DateCompleted:"1/30/2019",DateClaimed:"1/31/2017",Credits:[{Type:"CE",Amount:9.6},{Type:"CNE",Amount:10.2}],External:!0},{ID:91,ProductTitle:"CathSAP",Course:null,Activity:"Wrapsafe",DateCompleted:"11/4/2017",DateClaimed:"8/25/2017",Credits:[{Type:"CNE",Amount:6.2}],External:!1},{ID:92,ProductTitle:"EP SAP",Course:null,Activity:"Y-Solowarm",DateCompleted:"2/23/2017",DateClaimed:"12/23/2016",Credits:[{Type:"MOCII",Amount:24}],External:!1},{ID:93,ProductTitle:"ACCSAP",Course:null,Activity:"Redhold",DateCompleted:"6/27/2018",DateClaimed:"1/9/2017",Credits:[{Type:"COP",Amount:19.3},{Type:"CME",Amount:20.7}],External:!1},{ID:94,ProductTitle:"EP SAP",Course:null,Activity:"Span",DateCompleted:"8/24/2016",DateClaimed:"11/8/2018",Credits:[{Type:"MOCII",Amount:22.6}],External:!1},{ID:95,ProductTitle:"Heart Songs",Course:null,Activity:"Bamity",DateCompleted:"12/15/2017",DateClaimed:"9/21/2018",Credits:[{Type:"MOCII",Amount:15.3},{Type:"CE",Amount:9.9}],External:!1},{ID:96,ProductTitle:"Heart Songs",Course:null,Activity:"Subin",DateCompleted:"5/14/2017",DateClaimed:"11/14/2016",Credits:[{Type:"ECME",Amount:6.2},{Type:"ECME",Amount:4.9}],External:!0},{ID:97,ProductTitle:null,Course:"Pannier",Activity:"Home Ing",DateCompleted:"10/13/2018",DateClaimed:"7/29/2016",Credits:[{Type:"CE",Amount:2.1}],External:!1},{ID:98,ProductTitle:"EP SAP",Course:null,Activity:"Zathin",DateCompleted:"8/30/2018",DateClaimed:"5/4/2017",Credits:[{Type:"CNErx",Amount:20.2}],External:!1},{ID:99,ProductTitle:"Cardiosourse Plus",Course:null,Activity:"Alpha",DateCompleted:"7/26/2019",DateClaimed:"12/12/2018",Credits:[{Type:"MOCIV",Amount:1.5}],External:!0},{ID:100,ProductTitle:"EP SAP",Course:null,Activity:"Daltfresh",DateCompleted:"12/22/2018",DateClaimed:"6/25/2016",Credits:[{Type:"CE",Amount:10}],External:!0}]},mutations:{},actions:{}});r["a"].config.productionTip=!1,r["a"].use(I["a"]),new r["a"]({store:g,render:function(t){return t(h)}}).$mount("#app")},"64a9":function(t,e,i){}});
//# sourceMappingURL=app-legacy.a0122963.js.map