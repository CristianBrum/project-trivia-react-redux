(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{109:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"},113:function(e,t,a){e.exports=a(216)},118:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},127:function(e,t,a){},134:function(e,t){},136:function(e,t){},169:function(e,t){},170:function(e,t){},176:function(e,t){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(45),c=a.n(o),l=(a(118),a(20)),s=(a(123),a(21)),i=a(22),u=a(47),m=a(6),d=a(7),h=a(9),p=a(8),b=a(4),f=a(10),v=(a(124),a(109)),g=a.n(v),y=a(12),E=a.n(y);function S(){var e,t,a;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://opentdb.com/api_token.php?command=request",n.next=3,E.a.awrap(fetch("https://opentdb.com/api_token.php?command=request"));case 3:return e=n.sent,n.next=6,E.a.awrap(e.json());case 6:return t=n.sent,a=t.token,n.abrupt("return",a);case 9:case"end":return n.stop()}}))}var O=function(e){return{type:"SUBMIT_TOKEN",token:e,loading:!1}},N=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).state={playerName:"",email:""},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handlePlayButton=e.handlePlayButton.bind(Object(b.a)(e)),e.renderPlayButton=e.renderPlayButton.bind(Object(b.a)(e)),e.renderSettingsButton=e.renderSettingsButton.bind(Object(b.a)(e)),e.savePlayerToLocalStorage=e.savePlayerToLocalStorage.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){var t=e.name,a=e.value;this.setState(Object(u.a)({},t,a))}},{key:"handlePlayButton",value:function(){var e=this.state,t=e.playerName,a=e.email;return!t.length||!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(a)}},{key:"savePlayerToLocalStorage",value:function(){var e=this.state,t=e.playerName,a=e.email;localStorage.setItem("state",JSON.stringify({player:{name:t,assertions:0,score:0,gravatarEmail:a}}))}},{key:"renderPlayButton",value:function(){var e=this,t=this.props,a=t.dispatchToken,n=t.dispatchLogin,o=this.state,c=o.email,l=o.playerName;return r.a.createElement("div",null,r.a.createElement(s.b,{to:"/game",className:"link-button"},r.a.createElement("button",{disabled:this.handlePlayButton(),type:"button",className:"btn-play","data-testid":"btn-play",onClick:function(){a(),n(c,l),e.savePlayerToLocalStorage()}},"Jogar")))}},{key:"renderSettingsButton",value:function(){return r.a.createElement("button",{type:"button","data-testid":"btn-settings",className:"btn-settings"},r.a.createElement(s.b,{to:"/settings"},"Configura\xe7\xf5es"))}},{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.playerName;return r.a.createElement("div",{className:"home"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"})),r.a.createElement("form",{className:"form"},r.a.createElement("label",{htmlFor:"input-name"},r.a.createElement("input",{autoComplete:"off",className:"input-name",name:"playerName",value:n,type:"text",id:"input-name","data-testid":"input-player-name",placeholder:"Nome",onChange:function(t){var a=t.target;e.handleChange(a)}})),r.a.createElement("label",{htmlFor:"input-email"},r.a.createElement("input",{className:"input-email",name:"email",value:a,type:"email",id:"input-email","data-testid":"input-gravatar-email",placeholder:"Email",onChange:function(t){var a=t.target;e.handleChange(a)}})),this.renderPlayButton(),this.renderSettingsButton()))}}]),t}(n.Component),k=Object(l.b)(null,(function(e){return{dispatchToken:function(){return e((function(e){var t;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e({type:"REQUEST_TOKEN",loading:!0}),a.next=3,E.a.awrap(S());case 3:return t=a.sent,localStorage.setItem("token",t),a.abrupt("return",e(O(t)));case 6:case"end":return a.stop()}}))}))},dispatchLogin:function(t,a){return e(function(e,t){return{type:"SUBMIT_LOGIN",email:e,playerName:t}}(t,a))}}}))(N),j=a(49),w=(a(127),a(48)),C=a.n(w);function x(){document.getElementsByName("answer").forEach((function(e){"correct-answer"===e.getAttribute("data-testid")?e.style="border: 3px solid rgb(6, 240, 15)":e.style="border: 3px solid rgb(255, 0, 0)"}))}var B=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={indexQuestion:0,assertions:0,showNextButton:!1,timeCount:30,totalScore:0},a.handleNext=a.handleNext.bind(Object(b.a)(a)),a.handleNextStyle=a.handleNextStyle.bind(Object(b.a)(a)),a.handleCorretAnswer=a.handleCorretAnswer.bind(Object(b.a)(a)),a.handleLocalStorage=a.handleLocalStorage.bind(Object(b.a)(a)),a.handleErrorAnswer=a.handleErrorAnswer.bind(Object(b.a)(a)),a.timerCounter=a.timerCounter.bind(Object(b.a)(a)),a.renderCorretBtn=a.renderCorretBtn.bind(Object(b.a)(a)),a.renderWrongBtn=a.renderWrongBtn.bind(Object(b.a)(a)),a.handleDisableButtons=a.handleDisableButtons.bind(Object(b.a)(a)),a.easyScore=a.easyScore.bind(Object(b.a)(a)),a.mediumScore=a.mediumScore.bind(Object(b.a)(a)),a.hardScore=a.hardScore.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e,t,a;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props,t=e.getQuestions,a=e.token,n.next=3,E.a.awrap(t(a));case 3:this.timerCounter();case 4:case"end":return n.stop()}}),null,this)}},{key:"shouldComponentUpdate",value:function(e,t){return 0,this.state.timeCount>0}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInteval)}},{key:"timerCounter",value:function(){var e=this;this.myInteval=setInterval((function(){e.setState((function(e){return{timeCount:e.timeCount-1}}))}),1e3)}},{key:"handleNext",value:function(){var e=this.state.indexQuestion;e<=5&&this.setState({indexQuestion:e+1,showNextButton:!1,timeCount:30})}},{key:"handleNextStyle",value:function(){document.getElementsByName("answer").forEach((function(e){e.style=""}))}},{key:"handleCorretAnswer",value:function(){var e=this;this.setState((function(e){return{assertions:e.assertions+1,showNextButton:!0}}),(function(){return e.handleLocalStorage()}))}},{key:"handleDisableButtons",value:function(){return!!this.state.showNextButton}},{key:"handleErrorAnswer",value:function(){this.setState((function(){return{showNextButton:!0}}))}},{key:"handleLocalStorage",value:function(){var e=this.state,t=e.assertions,a=e.totalScore,n=JSON.parse(localStorage.getItem("state"));n.player.assertions=t,n.player.score=a,localStorage.setItem("state",JSON.stringify(n))}},{key:"hardScore",value:function(e,t){if("hard"===e){var a=10+3*t;this.setState((function(e){return{totalScore:e.totalScore+a}}))}}},{key:"mediumScore",value:function(e,t){if("medium"===e){var a=10+2*t;this.setState((function(e){return{totalScore:e.totalScore+a}}))}}},{key:"easyScore",value:function(e,t){if("easy"===e){var a=10+t;this.setState((function(e){return{totalScore:e.totalScore+a}}))}}},{key:"calcFinalScore",value:function(){var e=this.props.questions,t=this.state,a=t.indexQuestion,n=t.timeCount,r=e[a].difficulty;this.hardScore(r,n),this.mediumScore(r,n),this.easyScore(r,n)}},{key:"renderCorretBtn",value:function(e,t){var a=this,n=this.state.timeCount;return r.a.createElement("button",{className:"answer",key:t,type:"button","data-testid":"correct-answer",disabled:0===n||this.handleDisableButtons(),name:"answer",onClick:function(){a.handleCorretAnswer(),x(),a.calcFinalScore()}},e)}},{key:"renderWrongBtn",value:function(e,t){var a=this,n=this.state.timeCount;return r.a.createElement("button",{className:"wrong-answer",key:t,type:"button",onClick:function(){a.handleErrorAnswer(),x()},"data-testid":"wrong-answer-".concat(t),disabled:0===n||this.handleDisableButtons(),name:"answer"},e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.questions,n=t.dispatchScore,o=t.email,c=t.playerName,l=this.state,s=l.indexQuestion,u=l.showNextButton,m=l.timeCount,d=l.totalScore,h=l.assertions;if(s>4)return function(e,t,a){var n="https://www.gravatar.com/avatar/".concat(C()(t).toString());if(JSON.parse(localStorage.getItem("ranking"))){var r=JSON.parse(localStorage.getItem("ranking")),o=[].concat(Object(j.a)(r),[{name:e,score:a,picture:n}]);localStorage.setItem("ranking",JSON.stringify(o))}else{var c=[{name:e,score:a,picture:n}];localStorage.setItem("ranking",JSON.stringify(c))}}(c,o,d),r.a.createElement(i.a,{to:"/feedback"});if(a.length&&s<=4){var p=a[s].correct_answer,b=a[s].incorrect_answers,f=[p].concat(Object(j.a)(b)).sort(),v=a[s],g=v.category,y=v.question;return r.a.createElement("section",{className:"section-question"},r.a.createElement("div",{className:"category","data-testid":"question-category"},g),r.a.createElement("div",{className:"question","data-testid":"question-text"},y),r.a.createElement("span",null,m),f.map((function(t,a){return t===p?e.renderCorretBtn(t,a):e.renderWrongBtn(t,a)})),u||0===m?r.a.createElement("button",{type:"button",className:"btn-next","data-testid":"btn-next",onClick:function(){e.handleNext(),e.handleNextStyle(),n(d,h)}},"Pr\xf3xima"):null)}return r.a.createElement("section",{className:"loading"},"carregando...")}}]),t}(n.Component),I=Object(l.b)((function(e){return{token:e.homeReducer.token,questions:e.homeReducer.questions,email:e.login.email,playerName:e.login.playerName}}),(function(e){return{getQuestions:function(t){return e(function(e){return function(t){var a,n,r;return E.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,E.a.awrap(fetch("https://opentdb.com/api.php?amount=5&token=".concat(e)));case 2:return a=o.sent,o.next=5,E.a.awrap(a.json());case 5:n=o.sent,r=n.results,t({type:"RECEIVE_QUESTIONS",questions:r});case 8:case"end":return o.stop()}}))}}(t))},dispatchScore:function(t,a){return e(function(e,t){return{type:"SUBMIT_SCORE",totalScore:e,totalAssertions:t}}(t,a))}}}))(B),A=(a(213),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.playerName,a=e.email,n=e.totalScore;return r.a.createElement("header",null,r.a.createElement("div",{className:"player"},r.a.createElement("img",{src:"https://www.gravatar.com/avatar/".concat(C()(a).toString()),alt:t,"data-testid":"header-profile-picture"}),r.a.createElement("label",{className:"user-name",htmlFor:"user-name"},"Jogador:",r.a.createElement("span",{id:"user-name","data-testid":"header-player-name"},t))),r.a.createElement("div",null,"Pontos:",r.a.createElement("span",{"data-testid":"header-score"},n)))}}]),t}(n.Component)),P=Object(l.b)((function(e){return{email:e.login.email,playerName:e.login.playerName,totalScore:e.ScoreReducer.totalScore}}))(A),R=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement(I,null))}}]),t}(n.Component),T=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{"data-testid":"settings-title"},"Configura\xe7\xf5es"))}}]),t}(n.Component),q=(a(214),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={totalScore:e.totalScore,totalAssertions:e.totalAssertions},a.renderFeedback=a.renderFeedback.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"renderFeedback",value:function(){var e=this.state,t=e.totalScore,a=e.totalAssertions;return a<3?r.a.createElement("div",null,r.a.createElement("p",{"data-testid":"feedback-text"},"Podia ser melhor..."),r.a.createElement("div",{className:"assertions"},r.a.createElement("p",null,"Voc\xea acertou"),r.a.createElement("p",{className:"red","data-testid":"feedback-total-question"},a),r.a.createElement("p",null,"Quest",1!==a?"\xf5es!":"\xe3o!")),r.a.createElement("div",{className:"scores"},r.a.createElement("p",null,"Um total de"),r.a.createElement("p",{className:"red","data-testid":"feedback-total-score"},t),r.a.createElement("p",null,"Ponto",1!==t?"s!":"!"))):r.a.createElement("div",null,r.a.createElement("div",{className:"assertions"},r.a.createElement("p",null,"Voc\xea acertou"),r.a.createElement("p",{className:"green","data-testid":"feedback-total-question"},a),r.a.createElement("p",null,"Quest",1!==a?"\xf5es!":"\xe3o!")),r.a.createElement("div",{className:"scores"},r.a.createElement("p",null,"Um total de"),r.a.createElement("p",{className:"green","data-testid":"feedback-total-score"},t),r.a.createElement("p",null,"Ponto",1!==t?"s!":"!")))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),this.renderFeedback(),r.a.createElement("div",{className:"feedback-button"},r.a.createElement(s.b,{to:"ranking"},r.a.createElement("button",{className:"btn-ranking",type:"button","data-testid":"btn-ranking"},"VER RANKING")),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{onClick:"refresh",className:"btn-play-again",type:"button","data-testid":"btn-play-again"},"Jogar Novamente"))))}}]),t}(n.Component)),L=Object(l.b)((function(e){return{totalScore:e.ScoreReducer.totalScore,totalAssertions:e.ScoreReducer.totalAssertions}}))(q);a(215);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var J=r.a.createElement("path",{fill:"currentColor",d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"}),Q=function(e){var t=e.svgRef,a=e.title,n=U(e,["svgRef","title"]);return r.a.createElement("svg",_({"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trophy",className:"svg-inline--fa fa-trophy fa-w-18",role:"img",viewBox:"0 0 576 512",ref:t},n),a?r.a.createElement("title",null,a):null,J)},M=r.a.forwardRef((function(e,t){return r.a.createElement(Q,_({svgRef:t},e))})),F=(a.p,function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={ranking:!1},a.handleLocalStorage=a.handleLocalStorage.bind(Object(b.a)(a)),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.handleLocalStorage()}},{key:"handleLocalStorage",value:function(){var e=JSON.parse(localStorage.getItem("ranking"));this.setState((function(){return{ranking:e}}))}},{key:"class",value:function(e){return 0===e?"first-place":1===e?"second-place":2===e?"third-place":"unranked"}},{key:"render",value:function(){var e=this,t=this.state.ranking;return r.a.createElement("section",{className:"section-ranking"},r.a.createElement("h2",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement("table",null,r.a.createElement("tbody",null,t?t.sort((function(e,t){return t.score-e.score})).map((function(t,a){var n=t.name,o=t.score,c=t.picture;return r.a.createElement("tr",{className:e.class(a),style:{width:"".concat(2*o,"px")},key:a},r.a.createElement("td",null,r.a.createElement("img",{src:c,alt:"profile"})),r.a.createElement("td",{className:"name","data-testid":"player-name-".concat(a)},n),r.a.createElement("td",{className:"score","data-testid":"player-score-".concat(a)},"".concat(o," Pontos")),0===a&&r.a.createElement("td",null,r.a.createElement(M,{className:"gold"})),1===a&&r.a.createElement("td",null,r.a.createElement(M,{className:"silver"})),2===a&&r.a.createElement("td",null,r.a.createElement(M,{className:"bronze"})))})):null)),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{onClick:"refresh",className:"button-home",type:"button","data-testid":"btn-go-home"},"Home")))}}]),t}(n.Component));var D=a(27),z=a(111),V=a(112),W=a(28),H={token:"",questions:[],loading:!1};var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.loading,r=t.token,o=t.questions;switch(a){case"REQUEST_TOKEN":return Object(W.a)({},e,{loading:n});case"SUBMIT_TOKEN":return Object(W.a)({},e,{loading:n,token:r});case"RECEIVE_QUESTIONS":return Object(W.a)({},e,{questions:o});default:return e}},G={email:"",playerName:""};var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.email,r=t.playerName;switch(a){case"SUBMIT_LOGIN":return Object(W.a)({},e,{email:n,playerName:r});default:return e}},X={totalScore:0,totalAssertions:0};var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.totalScore,r=t.totalAssertions;switch(a){case"SUBMIT_SCORE":return Object(W.a)({},e,{totalScore:n,totalAssertions:r});default:return e}},Z=Object(D.combineReducers)({homeReducer:K,login:$,ScoreReducer:Y}),ee=Object(D.createStore)(Z,Object(V.composeWithDevTools)(Object(D.applyMiddleware)(z.a)));c.a.render(r.a.createElement(l.a,{store:ee},r.a.createElement((function(){return r.a.createElement(s.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:k}),r.a.createElement(i.b,{exact:!0,path:"/game",component:R}),r.a.createElement(i.b,{path:"/settings",component:T}),r.a.createElement(i.b,{path:"/feedback",component:L}),r.a.createElement(i.b,{path:"/ranking",component:F})))}),null)),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.bbbb8a94.chunk.js.map