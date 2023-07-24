"use strict";(self.webpackChunkngrx_musicians_app=self.webpackChunkngrx_musicians_app||[]).push([[196],{6196:(Z,r,a)=>{a.r(r),a.d(r,{MusiciansComponent:()=>A});var n=a(5879),m=a(4221),o=a(8633),l=a(4098),c=a(95);let g=(()=>{class i{constructor(){this.addControl=new c.NI("",{nonNullable:!0}),this.musician=new n.vpe}onAdd(){const s=this.addControl.value.trim().toLowerCase();this.musician.emit(s),this.addControl.reset()}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-add-musicians"]],outputs:{musician:"musician"},standalone:!0,features:[n.jDz],decls:4,vars:1,consts:[[1,"input-group"],["type","text","placeholder","e.g. AC/DC",3,"formControl","keyup.enter"],[3,"click"]],template:function(s,e){1&s&&(n.TgZ(0,"div",0)(1,"input",1),n.NdJ("keyup.enter",function(){return e.onAdd()}),n.qZA(),n.TgZ(2,"button",2),n.NdJ("click",function(){return e.onAdd()}),n._uU(3,"Add"),n.qZA()()),2&s&&(n.xp6(1),n.Q6J("formControl",e.addControl))},dependencies:[c.UX,c.Fj,c.JJ,c.oH],encapsulation:2,changeDetection:0}),i})();var d=a(6814),f=a(4707);function h(i,t){1&i&&(n.TgZ(0,"div",3),n._UZ(1,"app-loader"),n.qZA())}function C(i,t){1&i&&(n.TgZ(0,"p"),n._uU(1,"No musicians were found."),n.qZA())}function y(i,t){if(1&i&&(n.TgZ(0,"article",6),n._UZ(1,"img",7),n.TgZ(2,"h3"),n._uU(3),n.qZA()()),2&i){const s=t.$implicit,e=n.oxw(2);n.xp6(1),n.Q6J("src",s.photoUrl||e.defaultImage,n.LSH)("alt",s.name+" Photo"),n.xp6(2),n.Oqu(s.name)}}function M(i,t){if(1&i&&(n.TgZ(0,"section",4),n.YNc(1,y,4,3,"article",5),n.qZA()),2&i){const s=n.oxw();n.xp6(1),n.Q6J("ngForOf",s.musicians)}}let _=(()=>{class i{constructor(){this.musicians=[],this.isLoading=!1,this.defaultImage="assets/no-pic.jpg"}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-musician-list"]],inputs:{musicians:"musicians",isLoading:"isLoading"},standalone:!0,features:[n.jDz],decls:3,vars:3,consts:[["style","display: flex; justify-content: center; align-items: center; min-height: 300px;",4,"ngIf"],[4,"ngIf"],["class","card-container",4,"ngIf"],[2,"display","flex","justify-content","center","align-items","center","min-height","300px"],[1,"card-container"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[3,"src","alt"]],template:function(s,e){1&s&&(n.YNc(0,h,2,0,"div",0),n.YNc(1,C,2,0,"p",1),n.YNc(2,M,2,1,"section",2)),2&s&&(n.Q6J("ngIf",e.isLoading),n.xp6(1),n.Q6J("ngIf",!e.isLoading&&0===e.musicians.length),n.xp6(1),n.Q6J("ngIf",!e.isLoading&&e.musicians.length))},dependencies:[d.O5,d.ax,f.R],encapsulation:2,changeDetection:0}),i})(),A=(()=>{class i{constructor(){this.store=(0,n.f3M)(m.yh),this.musicians=this.store.selectSignal(o.g4.selectFilteredMusicians),this.isLoading=this.store.selectSignal(o.g4.selectIsLoading),this.query=this.store.selectSignal(o.g4.selectQuery)}ngOnInit(){this.store.dispatch(o.h4.opened())}onSearch(s){this.store.dispatch(o.h4.queryChanged({query:s}))}onAdd(s){this.store.dispatch(o.h4.addMusician({name:s}))}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-musicians"]],standalone:!0,features:[n.jDz],decls:6,vars:3,consts:[[2,"display","flex","justify-content","space-between","align-items","center"],["placeholder","Jimi",3,"query","search"],[3,"musician"],[3,"musicians","isLoading"]],template:function(s,e){1&s&&(n.TgZ(0,"h1"),n._uU(1,"Find your favorite musicians"),n.qZA(),n.TgZ(2,"div",0)(3,"app-search-box",1),n.NdJ("search",function(p){return e.onSearch(p)}),n.qZA(),n.TgZ(4,"app-add-musicians",2),n.NdJ("musician",function(p){return e.onAdd(p)}),n.qZA()(),n._UZ(5,"app-musician-list",3)),2&s&&(n.xp6(3),n.Q6J("query",e.query()),n.xp6(2),n.Q6J("musicians",e.musicians())("isLoading",e.isLoading()))},dependencies:[l.B,_,g],encapsulation:2,changeDetection:0}),i})()}}]);