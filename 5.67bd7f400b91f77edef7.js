(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"ct+p":function(n,t,o){"use strict";o.r(t),o.d(t,"HomeModule",function(){return l});var s=o("ofXK"),e=o("tyNb"),i=o("fXoL"),r=o("sbAP");function c(n,t){if(1&n&&(i.Gb(0,"li"),i.Gb(1,"a",1),i.Wb(2),i.Fb(),i.Fb()),2&n){const n=t.$implicit;i.ub(1),i.Rb("routerLink",n.route),i.ub(1),i.Xb(n.title)}}const b=[{path:"",component:(()=>{class n{constructor(n){this.scully=n,this.links$=this.scully.available$}ngOnInit(){this.links$.subscribe(n=>{console.log("links: "+n)})}}return n.\u0275fac=function(t){return new(t||n)(i.Db(r.c))},n.\u0275cmp=i.xb({type:n,selectors:[["app-home"]],decls:5,vars:3,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(n,t){1&n&&(i.Gb(0,"p"),i.Wb(1,"home works!"),i.Fb(),i.Gb(2,"ul"),i.Vb(3,c,3,2,"li",0),i.Nb(4,"async"),i.Fb()),2&n&&(i.ub(3),i.Rb("ngForOf",i.Ob(4,1,t.links$)))},directives:[s.i,e.e],pipes:[s.b],styles:[""]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=i.Bb({type:n}),n.\u0275inj=i.Ab({factory:function(t){return new(t||n)},imports:[[e.f.forChild(b)],e.f]}),n})(),l=(()=>{class n{}return n.\u0275mod=i.Bb({type:n}),n.\u0275inj=i.Ab({factory:function(t){return new(t||n)},imports:[[s.c,u]]}),n})()}}]);