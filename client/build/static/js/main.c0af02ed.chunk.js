(this.webpackJsonpmajj=this.webpackJsonpmajj||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/yellowgem.e7c75d0c.png"},60:function(e,a,t){e.exports=t(98)},65:function(e,a,t){},67:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},88:function(e,a,t){},92:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(19),i=t.n(r),c=(t(65),t(46)),s=t(47),l=t(57),m=t(56),d=(t(66),t(53)),u=t(16),h=(t(67),t(14)),b=t.n(h),g=t(21),p=t(8),f=t(58),w=t(15),k=Object(n.createContext)(),E=k.Provider,y=function(e,a){var t=e.items,n=a.id;switch(console.log(a),console.log(n),a.type){case"ADD_TO_QUEUE":case"PASS":return t[0].splice(n,1),Object(w.a)({},e,{items:t});case"NEW_FILTER":return Object(w.a)({},e,{filter:[a.filter]});case"NEW_ITEMS":return Object(w.a)({},e,{items:[a.items]});default:return e}},v=function(e){e.value;var a=Object(f.a)(e,["value"]),t=Object(n.useReducer)(y,{}),r=Object(p.a)(t,2),i=r[0],c=r[1];return o.a.createElement(E,Object.assign({value:[i,c]},a))},C=function(){return Object(n.useContext)(k)},N=t(29),O=t.n(N),T={getItems:function(){var e=Object(g.a)(b.a.mark((function e(a){var t,n,o,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return e.next=3,Promise.all(Object.keys(a[0]).map(function(){var e=Object(g.a)(b.a.mark((function e(a){var t,n,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=".concat(a,"&count=9&sortby=dat"),n={method:"get",url:t,headers:{"X-RapidAPI-Key":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY}},e.next=4,O()(n);case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()));case 3:return t=e.sent,e.abrupt("return",t);case 7:return n=[],"kitten",o="https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=".concat("kitten","&count=9&sortby=dat"),r={method:"get",url:o,headers:{"X-RapidAPI-Key":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY}},e.abrupt("return",O()(r).then((function(e){return n.push(e),n})));case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},F=(t(86),t(23)),A=t.n(F);var x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid majj text-center"},o.a.createElement("div",{className:"majj-text"},o.a.createElement("img",{src:A.a,height:"80px",width:"80px",alt:"gem",className:"rotate yellowgem"}),"majj",o.a.createElement("div",{className:"slogan-mainnav"},"mining for gems on the web"))))},S=t(20),j=t(52),_=t(104),D=t(102),B=t(100),U=(t(87),t(88),t(101));var P=function(){var e=Object(n.useState)(!0),a=Object(p.a)(e,2),t=a[0],r=(a[1],Object(n.useState)(!1)),i=Object(p.a)(r,2),c=i[0],s=i[1],l=Object(n.useState)({}),m=Object(p.a)(l,2),d=m[0],u=m[1],h=function(){return s(!1)},b=function(){return s(!0)};function g(e){var a=e.target,t=a.name,n=a.value;u(Object(w.a)({},d,Object(S.a)({},t,n)))}function f(e){e.preventDefault(),d.username&&d.password}var k={backgroundColor:"#461767",color:"#675682",border:"0px",borderRadius:"10px"};return t?o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{className:"mod-btn",style:k,onClick:b},o.a.createElement("i",{class:"fas fa-user fa-2x"})),o.a.createElement(U.a,{show:c,onHide:h},o.a.createElement(U.a.Title,{className:"mod-heading mod-head"},o.a.createElement("img",{src:A.a,height:"30px",width:"30px",alt:"gem",className:"yellowgem"}),"majj",o.a.createElement("div",{className:"slogan"},"mining for gems on the web")),o.a.createElement(U.a.Body,null,o.a.createElement(D.a,null,o.a.createElement(D.a.Group,{controlId:"formBasicEmail"},o.a.createElement(D.a.Label,null,"Username"),o.a.createElement(D.a.Control,{onChange:g,name:"username",type:"username",placeholder:"Enter Username"})),o.a.createElement(D.a.Group,{controlId:"formBasicPassword"},o.a.createElement(D.a.Label,null,"Password"),o.a.createElement(D.a.Control,{onChange:g,name:"password",type:"password",placeholder:"Password"}))),"AYYYYY"),o.a.createElement(U.a.Footer,null,o.a.createElement(_.a,{className:"mod-btn",style:k,onClick:f},"Login"),o.a.createElement(_.a,{className:"mod-btn",style:k,onClick:f},"SignUp")))):o.a.createElement(o.a.Fragment,null,o.a.createElement(_.a,{className:"mod-btn",style:k,onClick:b},o.a.createElement("i",{class:"fas fa-user fa-2x"})),o.a.createElement(U.a,{show:c,onHide:h},o.a.createElement(U.a.Title,{className:"mod-heading mod-head"},o.a.createElement("img",{src:A.a,height:"30px",width:"30px",alt:"gem",className:"yellowgem"}),"majj",o.a.createElement("div",{className:"slogan"},"mining for gems on the web")),o.a.createElement(U.a.Body,null,o.a.createElement(D.a,null,o.a.createElement(D.a.Group,{controlId:"formBasicEmail"},o.a.createElement(D.a.Label,null,"Username"),o.a.createElement(D.a.Control,{onChange:g,name:"username",type:"username",placeholder:"Enter Username"})),o.a.createElement(D.a.Group,{controlId:"formBasicPassword"},o.a.createElement(D.a.Label,null,"Password"),o.a.createElement(D.a.Control,{onChange:g,name:"password",type:"password",placeholder:"Password"}))),"Never been here before? Click Sign Up to get started!"),o.a.createElement(U.a.Footer,null,o.a.createElement(_.a,{className:"mod-btn",style:k,onClick:f},"Login"),o.a.createElement(_.a,{className:"mod-btn",style:k,onClick:f},"SignUp"))))};var I=function(){var e=C(),a=Object(p.a)(e,2),t=a[0],r=a[1],i=Object(n.useState)({}),c=Object(p.a)(i,2),s=c[0],l=c[1],m=(t.filter,function(e){var a=e.target,t=a.name,n=a.value;l(Object(w.a)({},s,Object(S.a)({},t,n)))}),d={backgroundColor:"#461767",color:"#675682",border:"0px",borderRadius:"10px"};return o.a.createElement(j.a,{xs:3,md:4,lg:3,style:{zIndex:"1",backgroundColor:"#034169",overflow:"hidden",height:"100vh",paddingTop:"10px",boxShadow:"4px 4px 4px 4px #00000080",position:"sticky",margin:"0px",marginRight:"20px"}},o.a.createElement(P,null),o.a.createElement(_.a,{className:"sign-out",style:d},o.a.createElement("i",{class:"fas fa-sign-out-alt fa-2x"})),o.a.createElement("div",{className:"create-heading"},"choose your topics below:"),o.a.createElement(D.a,null,["checkbox"].map((function(e){return o.a.createElement("div",{key:"default-".concat(e),className:"mb-3 choices"},o.a.createElement(B.a,{className:"rad-row"},o.a.createElement(j.a,{md:4,className:"choices-col"},o.a.createElement(D.a.Check,{label:"Sports",name:"Sports",type:e,id:"default-".concat(e),onChange:m})),o.a.createElement(j.a,{md:4,className:"choices-col"},o.a.createElement(D.a.Check,{label:"Politics",name:"Politics",type:e,id:"default-".concat(e),onChange:m}))),o.a.createElement(B.a,{className:"rad-row"},o.a.createElement(j.a,{md:4,className:"choices-col"},o.a.createElement(D.a.Check,{label:"Art",name:"Art",type:e,id:"default-".concat(e),onChange:m})),o.a.createElement(j.a,{md:4,className:"choices-col"},o.a.createElement(D.a.Check,{label:"Fashion",name:"Fashion",type:e,id:"default-".concat(e),onChange:m}))),o.a.createElement(B.a,{className:"rad-row"},o.a.createElement(j.a,{md:4,className:"choices-col"},o.a.createElement(D.a.Check,{label:"Technology",name:"Technology",type:e,id:"default-".concat(e),onChange:m})),o.a.createElement(j.a,{md:4,className:"choices-col"},o.a.createElement(D.a.Check,{label:"Animals",name:"Animals",type:e,id:"default-".concat(e),onChange:m}))),o.a.createElement(B.a,{className:"rad-row"},o.a.createElement(j.a,{md:4,className:"choices-col"},o.a.createElement(D.a.Check,{label:"Home Decor",name:"Home Decor",type:e,id:"default-".concat(e),onChange:m})),o.a.createElement(j.a,{md:4,className:"choices-col"},o.a.createElement(D.a.Check,{label:"Music",name:"Music",type:e,id:"default-".concat(e),onChange:m}))))})),o.a.createElement("br",null),o.a.createElement(_.a,{className:"apply-btn",style:d,onClick:function(e){e.preventDefault(),r({type:"NEW_FILTER",filter:s})}},"Apply")))},Z={value:[{name:"Facebook has gotten so big that no one can understand it, and it could be a good reason to break it up",url:"http://www.businessinsider.com/is-facebook-a-monopoly-2018-4",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=ON.78F8C25FAD2793BC0D586CEE1DEC5C01&pid=News",width:700,height:350}},description:"Facebook has gotten so big that it's impossible to understand how it all works. Congress' concerns over data privacy are valid, but many missed a larger, deeper issue. More lawmakers should be asking if Facebook is getting too big and if it should be ...",mentions:[{name:"Business Insider"},{name:"India"},{name:"Australia"}],provider:[{_type:"Organization",name:"Business Insider",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=AR_86ac6d5fd1859e509650fb5feef96bf7&pid=news"}}}],datePublished:"2018-04-12T00:37:00.0000000Z",category:"ScienceAndTechnology"},{name:"What You Don\u2019t Know About How Facebook Uses Your Data",url:"https://www.nytimes.com/2018/04/11/technology/facebook-privacy-hearings.html",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=ON.039BD91C819D644D243982FF1687E53B&pid=News",width:675,height:261}},description:"Mark Zuckerberg, Facebook\u2019s chief executive, went to Capitol Hill this week to explain to members of Congress how the detailed personal information of up to 87 million Facebook users ended up in the hands of a voter-profiling company called Cambridge ...",about:[{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/614b60a2-4ccd-3ecb-15dc-6e2fba54ed28",name:"The New York Times"}],mentions:[{name:"The New York Times"},{name:"T"},{name:"Data"}],provider:[{_type:"Organization",name:"The New York Times",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=AR_cc657c1af702fae867766bbf2aa25756&pid=news"}}}],datePublished:"2018-04-12T00:30:00.0000000Z",category:"ScienceAndTechnology"},{name:"Congress doesn\u2019t know how Facebook works and other things we learned from Mark Zuckerberg\u2019s testimony",url:"https://www.recode.net/2018/4/11/17226742/congress-senate-house-facebook-ceo-zuckerberg-testimony-hearing",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=ON.4EF23FBEE7FC9AB41ABC6136545FC568&pid=News",width:700,height:466}},description:"Mark Zuckerberg answered questions about Facebook\u2019s data collection and privacy policies this week from almost 100 different politicians in nearly 10 hours of public testimony. The hearings had it all. One lawmaker literally held up the U.S. Constitution ...",about:[{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/ca412294-5641-492f-af5e-c0cae623d148",name:"Mark Zuckerberg"}],provider:[{_type:"Organization",name:"Recode",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=AR_780a3fbf939b8a50fa20fbcc435f763c&pid=news"}}}],datePublished:"2018-04-12T00:19:00.0000000Z",category:"ScienceAndTechnology"},{name:"In Facebook Hearings, Lawmakers Ramp Up Talk of Regulation",url:"https://www.wsj.com/articles/congressional-hearing-on-facebook-turns-up-heat-on-mark-zuckerberg-1523464332",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=ON.BE7003895EFBC1772A9A0BB61077615A&pid=News",width:700,height:366}},description:"WASHINGTON\u2014Facebook Inc. CEO Mark Zuckerberg spent two days on Capitol Hill seeking to placate angry lawmakers by saying he would be open to some sort of regulation to protect the privacy of users on his global social-media platform. The question now is ...",about:[{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/70834f76-d913-bf85-87a6-b9386945a646",name:"The Wall Street Journal"},{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/3c1b211e-25df-a714-8488-e70ae9601078",name:"Ramp"},{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/2037eddd-b294-9772-2c59-3cc1d5d02b63",name:"Hearing"}],mentions:[{name:"The Wall Street Journal"},{name:"Ramp"},{name:"Hearing"}],provider:[{_type:"Organization",name:"The Wall Street Journal",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=AR_fb65cf047b726a4d148957726730accd&pid=news"}}}],datePublished:"2018-04-12T00:18:00.0000000Z",video:{name:"Congressional Hearing on Facebook Turns Up Heat on Mark Zuckerberg",thumbnailUrl:"https://www.bing.com/th?id=ON.910A0EC7C2CE29BC68C18A8BD771773C&pid=News",embedHtml:'<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="512" height="288" src="https://video-api.wsj.com/api-video/player/v3/iframe.html?guid=5C7E88ED-A058-4C2F-873D-34E5EFB817F6&shareDomain=null"></iframe>',allowHttpsEmbed:!0,thumbnail:{width:262,height:174}},category:"ScienceAndTechnology"},{name:"Facebook's Zuckerberg unscathed by congressional grilling, stock rises",url:"https://www.reuters.com/article/us-facebook-privacy-zuckerberg/facebooks-zuckerberg-unscathed-by-congressional-grilling-stock-rises-idUSKBN1HI1CJ",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=ON.2C8AF1EC5816479FEEBDA3B35E2F23EF&pid=News",width:700,height:466}},description:"WASHINGTON/SAN FRANCISCO (Reuters) - Facebook Inc Chief Executive Mark Zuckerberg fielded 10 hours of questions over two days from nearly 100 U.S. lawmakers and emerged largely unscathed and considerably richer. He parried questions of how much control ...",about:[{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/ca412294-5641-492f-af5e-c0cae623d148",name:"Mark Zuckerberg"},{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/9f417f89-9a37-e0d0-912e-99dccfb8982d",name:"Reuters"},{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/458fb3ec-80f7-2a40-2f5e-ea0bf47fe7f6",name:"Stock"}],mentions:[{name:"Mark Zuckerberg"},{name:"Reuters"},{name:"Stock"}],provider:[{_type:"Organization",name:"Reuters",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=AR_62e71bb461e92ae25d37bed673fc53b9&pid=news"}}}],datePublished:"2018-04-11T23:56:00.0000000Z",category:"ScienceAndTechnology"},{name:"What Mark Zuckerberg didn\u2019t tell Congress: You\u2019re risking more than your data on Facebook",url:"https://www.marketwatch.com/story/the-more-you-endlessly-scroll-on-facebook-the-bigger-the-risk-to-your-mental-health-2018-01-12",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=ON.00CA8271A4474901DFD395584BF5077D&pid=News",width:700,height:393}},description:"Facebook Chief Executive Mark Zuckerberg testified before Congress about the social media giant\u2019s recent privacy violations. On day two of answering questions from politicians, Zuckerberg said it was \u201cinevitable\u201d that the industry would face some ...",about:[{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/ca412294-5641-492f-af5e-c0cae623d148",name:"Mark Zuckerberg"}],mentions:[{name:"Mark Zuckerberg"},{name:"MarketWatch"},{name:"United States Congress"}],provider:[{_type:"Organization",name:"MarketWatch",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=AR_441785deaf1a49733ea1c3b5b1003bbd&pid=news"}}}],datePublished:"2018-04-11T23:53:00.0000000Z",category:"ScienceAndTechnology"},{name:"Facebook CEO Mark Zuckerberg Is Grilled on Privacy During Day Two of Congressional Hearings",url:"http://fortune.com/2018/04/11/facebook-mark-zuckerberg-congress-hearing-data/",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=ON.6E4406A93493C7112ACF6AB6723B06E0&pid=News",width:395,height:220}},description:"Lawmakers grilled Facebook CEO Mark Zuckerberg on Wednesday over the social networking giant\u2019s repeated data privacy problems and subsequent apologies. Zuckerberg withstood five hours of questioning by members of the House Energy and Commerce Committee ...",about:[{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/ca412294-5641-492f-af5e-c0cae623d148",name:"Mark Zuckerberg"},{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/7c0f5fd4-9175-8cbe-5f78-11b28a5218c3",name:"Fortune"}],mentions:[{name:"Mark Zuckerberg"},{name:"Fortune"},{name:"Chief Executive Officer"}],provider:[{_type:"Organization",name:"Fortune",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=AR_7c695504ff94f44c227830153ca54bc2&pid=news"}}}],datePublished:"2018-04-11T23:06:00.0000000Z",video:{name:"Facebook CEO Mark Zuckerberg Is Grilled on Privacy During Day Two of Congressional Hearings",thumbnailUrl:"https://www.bing.com/th?id=ON.B3D568DBCD56FA2F55F1BA695994A81E&pid=News",embedHtml:"<iframe src='//players.brightcove.net/2111767321001/default_default/index.html?videoId=5768243348001' allowfullscreen frameborder=0></iframe>",allowHttpsEmbed:!0,thumbnail:{width:480,height:324}},category:"ScienceAndTechnology"},{name:"I Downloaded the Information That Facebook Has on Me. Yikes.",url:"https://www.nytimes.com/2018/04/11/technology/personaltech/i-downloaded-the-information-that-facebook-has-on-me-yikes.html",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=ON.FB81D79E6A9F86CE240375067BD7FF0A&pid=News",width:675,height:522}},description:"When I downloaded a copy of my Facebook data last week, I didn\u2019t expect to see much. My profile is sparse, I rarely post anything on the site, and I seldom click on ads. (I\u2019m what some call a Facebook \u201clurker.\u201d) But when I opened my file, it was ...",about:[{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/d62dd683-9cf9-4db9-a497-d810d529592b",name:"Maine"},{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/614b60a2-4ccd-3ecb-15dc-6e2fba54ed28",name:"The New York Times"}],provider:[{_type:"Organization",name:"The New York Times",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=AR_cc657c1af702fae867766bbf2aa25756&pid=news"}}}],datePublished:"2018-04-11T23:57:00.0000000Z",category:"ScienceAndTechnology"},{name:"Congressional Leaders Press Zuckerberg On Political Bias, Data Collection At Facebook",url:"https://www.forbes.com/sites/kathleenchaykowski/2018/04/11/congressional-leaders-press-zuckerberg-on-political-bias-data-collection-at-facebook/",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=ON.F9CC18202E3676C43E2F3F65B25069D4&pid=News",width:640,height:434}},description:"Facebook cofounder and CEO Mark Zuckerberg completed his second and final day of Congressional testimony on Wednesday, in a hearing before the House Energy and Commerce Committee. Lawmakers opened the hearing by noting its purpose was to examine ...",about:[{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/ca412294-5641-492f-af5e-c0cae623d148",name:"Mark Zuckerberg"},{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/7fa9918b-cbf1-8f94-359b-2cd79c242183",name:"Congressional Country Club"},{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/ac816b2b-df92-1985-4610-75d0518e334e",name:"Data collection"}],provider:[{_type:"Organization",name:"Forbes",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=AR_f798ef715781699feff0f3ea5f101626&pid=news"}}}],datePublished:"2018-04-11T21:50:00.0000000Z",category:"ScienceAndTechnology"},{name:"Mark Zuckerberg finished his second day of Congressional grilling over user data and Facebook bias \u2014 here's what you need to know",url:"http://www.businessinsider.com/mark-zuckerberg-day-2-congressional-testimony-data-bias-2018-4",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=ON.DEB71C49CB47BCFDF698F327BEC7376A&pid=News",width:700,height:350}},description:"Mark Zuckerberg faced a tough day of questioning on his second day of US Congressional questioning on Wednesday. The Facebook CEO was grilled over what data Facebook collects, and his answers were often evasive and unsatisfying. Republican lawmakers were ...",about:[{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/ca412294-5641-492f-af5e-c0cae623d148",name:"Mark Zuckerberg"},{readLink:"https://api.cognitive.microsoft.com/api/v7/entities/7fa9918b-cbf1-8f94-359b-2cd79c242183",name:"Congressional Country Club"}],mentions:[{name:"Mark Zuckerberg"},{name:"Congressional Country Club"},{name:"Business Insider"}],provider:[{_type:"Organization",name:"Business Insider",image:{thumbnail:{contentUrl:"https://www.bing.com/th?id=AR_86ac6d5fd1859e509650fb5feef96bf7&pid=news"}}}],datePublished:"2018-04-11T23:55:00.0000000Z",category:"ScienceAndTechnology"}]},M=t(103),R=(t(92),t(31)),L=t.n(R);var H=function(){var e=C(),a=Object(p.a)(e,2),t=a[0],r=a[1],i=t.items,c=Object(n.useState)(Z),s=Object(p.a)(c,2),l=s[0],m=(s[1],function(e){var a=e.target.id;r({type:"ADD_TO_QUEUE",id:a})}),d=function(e){var a=e.target.id;r({type:"PASS",id:a})},u=function(e){e.preventDefault();e.target.id};return i?o.a.createElement(n.Fragment,null,o.a.createElement(B.a,{className:"mosaic"},i[0].map((function(e,a){var t;return o.a.createElement(j.a,{key:"col".concat(a),cxs:12,md:5,lg:4},o.a.createElement(M.a,{className:"card",key:"gem".concat(a),style:{width:"18rem"}},o.a.createElement("img",{className:"picture",alt:"thumbnail, where art thou?",src:(null===(t=e.image)||void 0===t?void 0:t.thumbnail.contentUrl)||"https://media.giphy.com/media/PdfNwG98g6Sxq/source.gif",height:"150",width:"150"}),o.a.createElement(M.a.Body,null,o.a.createElement(M.a.Title,{className:"title"},o.a.createElement("a",{href:e.url},e.name)),o.a.createElement(M.a.Text,{className:"name"},e.provider[0].name," "),o.a.createElement(M.a.Text,{className:"date"},o.a.createElement(L.a,{fromNow:!0},e.datePublished)),o.a.createElement(M.a.Text,{className:"icons"},o.a.createElement("button",null,o.a.createElement("i",{className:"far fa-gem",id:a,onClick:m})),o.a.createElement("button",null,o.a.createElement("i",{className:"far fa-eye",id:a,onClick:u})),o.a.createElement("button",null,o.a.createElement("i",{className:"far fa-trash-alt",id:a,onClick:d}))))))})))):o.a.createElement(n.Fragment,null,o.a.createElement(B.a,{className:"mosaic "},l.value.map((function(e,a){var t;return o.a.createElement(j.a,{key:"col".concat(a),xs:12,md:5,lg:4},o.a.createElement(M.a,{className:"card",key:"gem".concat(a),style:{width:"18rem"}},o.a.createElement("img",{className:"picture",alt:"thumbnail, where art thou?",src:(null===(t=e.image)||void 0===t?void 0:t.thumbnail.contentUrl)||"https://media.giphy.com/media/PdfNwG98g6Sxq/source.gif",height:"150",width:"150"}),o.a.createElement(M.a.Body,null,o.a.createElement(M.a.Title,{className:"title"},o.a.createElement("a",{href:e.url},e.name)),o.a.createElement(M.a.Text,{className:"name"},e.provider[0].name," "),o.a.createElement(M.a.Text,{className:"date"},o.a.createElement(L.a,{fromNow:!0},e.datePublished)),o.a.createElement(M.a.Text,{className:"icons"},o.a.createElement("button",null,o.a.createElement("i",{className:"far fa-gem",id:a,onClick:m})),o.a.createElement("button",null,o.a.createElement("i",{className:"far fa-eye",id:a,onClick:u})),o.a.createElement("button",null,o.a.createElement("i",{className:"far fa-trash-alt",id:a,onClick:d}))))))}))))};var W=function(){var e=C(),a=Object(p.a)(e,2),t=a[0],r=a[1],i=t.filter,c=(t.queue,t.items),s=Object(n.useState)(Z),l=Object(p.a)(s,2),m=l[0],d=(l[1],{display:"flex",flexDirection:"row"});function u(){return(u=Object(g.a)(b.a.mark((function e(){var a,t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],!i){e.next=7;break}return e.next=4,T.getItems(i);case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,T.getItems();case 9:a=e.sent;case 10:t=[],a.map(function(){var e=Object(g.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.data.value.forEach((function(e){t.push(e)}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),h(t),r({type:"NEW_ITEMS",items:t});case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e}return Object(n.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[i]),c?o.a.createElement("div",null,o.a.createElement(x,null),o.a.createElement("div",{className:"flexbox-containter",style:d},o.a.createElement(I,null),Object.keys(c).map((function(e){return o.a.createElement(H,{key:e,details:c[e]})})))):o.a.createElement("div",null,o.a.createElement(x,null),o.a.createElement("div",{className:"flexbox-containter",style:d},o.a.createElement(I,null),Object.keys(m).map((function(e){return o.a.createElement(H,{key:e,details:m[e]})}))))},z=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(v,null,o.a.createElement(d.a,null,o.a.createElement("div",null,o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:W})))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.c0af02ed.chunk.js.map