"use strict";(self.webpackChunkngrx_musicians_app=self.webpackChunkngrx_musicians_app||[]).push([[39],{3039:(x,c,o)=>{o.r(c),o.d(c,{BandsComponent:()=>C});var n=o(5879),p=o(4221),i=o(5738),r=o(4098),d=o(6814),l=o(4707);function g(e,a){1&e&&(n.TgZ(0,"div",3),n._UZ(1,"app-loader"),n.qZA())}function m(e,a){1&e&&(n.TgZ(0,"p"),n._uU(1,"No bands were found."),n.qZA())}function u(e,a){if(1&e&&(n.TgZ(0,"article",6),n._UZ(1,"img",7),n.TgZ(2,"h3"),n._uU(3),n.qZA()()),2&e){const t=a.$implicit,s=n.oxw(2);n.xp6(1),n.Q6J("src",t.photoUrl||s.defaultImage,n.LSH)("alt",t.name+" Photo"),n.xp6(2),n.Oqu(t.name)}}function h(e,a){if(1&e&&(n.TgZ(0,"section",4),n.YNc(1,u,4,3,"article",5),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.bands)}}let f=(()=>{class e{constructor(){this.bands=[],this.isLoading=!1,this.defaultImage="assets/no-pic.jpg"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-band-list"]],inputs:{bands:"bands",isLoading:"isLoading"},standalone:!0,features:[n.jDz],decls:3,vars:3,consts:[["style","display: flex; justify-content: center; align-items: center; min-height: 300px;",4,"ngIf"],[4,"ngIf"],["class","card-container",4,"ngIf"],[2,"display","flex","justify-content","center","align-items","center","min-height","300px"],[1,"card-container"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[3,"src","alt"]],template:function(t,s){1&t&&(n.YNc(0,g,2,0,"div",0),n.YNc(1,m,2,0,"p",1),n.YNc(2,h,2,1,"section",2)),2&t&&(n.Q6J("ngIf",s.isLoading),n.xp6(1),n.Q6J("ngIf",!s.isLoading&&0===s.bands.length),n.xp6(1),n.Q6J("ngIf",!s.isLoading&&s.bands.length))},dependencies:[d.O5,d.ax,l.R],encapsulation:2,changeDetection:0}),e})(),C=(()=>{class e{constructor(){this.store=(0,n.f3M)(p.yh),this.bands=this.store.selectSignal(i.C1.selectFilteredBands),this.isLoading=this.store.selectSignal(i.C1.selectIsLoading),this.query=this.store.selectSignal(i.C1.selectQuery)}ngOnInit(){this.store.dispatch(i.ew.opened())}onSearch(t){this.store.dispatch(i.ew.queryChanged({query:t}))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-bands"]],standalone:!0,features:[n.jDz],decls:4,vars:3,consts:[["placeholder","U2",3,"query","search"],[3,"bands","isLoading"]],template:function(t,s){1&t&&(n.TgZ(0,"h1"),n._uU(1,"Find your favorite bands"),n.qZA(),n.TgZ(2,"app-search-box",0),n.NdJ("search",function(L){return s.onSearch(L)}),n.qZA(),n._UZ(3,"app-band-list",1)),2&t&&(n.xp6(2),n.Q6J("query",s.query()),n.xp6(1),n.Q6J("bands",s.bands())("isLoading",s.isLoading()))},dependencies:[r.B,f],encapsulation:2,changeDetection:0}),e})()}}]);