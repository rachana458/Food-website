(this["webpackJsonpswiggy-clone"]=this["webpackJsonpswiggy-clone"]||[]).push([[0],{17:function(t,e,a){},19:function(t,e,a){},20:function(t,e,a){},22:function(t,e,a){},23:function(t,e,a){"use strict";a.r(e);var s=a(1),c=a.n(s),r=a(12),n=a.n(r),o=(a(17),a(8)),i=a(11),l=a(2),u=a.n(l),h=a(9),d=a(7),m=a(3),f=a(4),p=a(6),g=a(5),v=(a(19),a(20),a(0)),b=["https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1429554513019-6c61c19ffb7e?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1432139509613-5c4255815697?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1484980972926-edee96e0960d?auto=format&fit=crop&w=500&q=60","https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=500&q=60"],j=function(t){Object(p.a)(a,t);var e=Object(g.a)(a);function a(t){var s;return Object(m.a)(this,a),(s=e.call(this,t)).state={},s}return Object(f.a)(a,[{key:"render",value:function(){var t=this.props,e=t.data,a=t.moreCount,s=t.index;return Object(v.jsxs)("div",{className:"item-card  ".concat(a>0?"":"--allow-hover"),children:[Object(v.jsx)("img",{src:b[s%b.length],className:"item-thumb",alt:e.name}),Object(v.jsxs)("div",{className:"item-card-content",children:[e.name,Object(v.jsx)("div",{className:"item-card__tags",children:e.food_types.slice(0,3).map((function(t){return Object(v.jsx)("div",{className:"item-card__tag",children:t})}))}),Object(v.jsxs)("div",{className:"item-card__stats-row",children:[Object(v.jsxs)("div",{className:"item-card__star-wrap ".concat(e.ratings?"--green":""),children:["\u2605 ",e.ratings||" --"]}),Object(v.jsx)("div",{children:"\u2022"}),Object(v.jsx)("div",{className:"item-card__delivery-time",children:e.delivery_time}),Object(v.jsx)("div",{children:"\u2022"}),Object(v.jsxs)("div",{className:"item-card__price",children:["\u20b9",e.price_for_two," FOR TWO"]})]}),Object(v.jsx)("div",{className:"item-card__quick-view",children:"QUICK VIEW"})]}),a>0&&Object(v.jsxs)("div",{className:"item-card__more-wrap",onClick:this.props.onShowMore,children:["+",a," MORE"]})]})}}]),a}(c.a.Component),y=(a(22),function(t){Object(p.a)(a,t);var e=Object(g.a)(a);function a(t){var s;return Object(m.a)(this,a),(s=e.call(this,t)).state={},s}return Object(f.a)(a,[{key:"render",value:function(){var t=this.props,e=t.categories,a=t.activeCategory,s=t.allRestaurants,c=t.onShowAll,r=t.onClickCategory;return Object(v.jsx)("div",{className:"sidebar",children:Object(v.jsxs)("div",{className:"sidebar-content",children:[e.map((function(t){return Object(v.jsxs)("div",{className:"category-item ".concat(a===t.category?"--active":""),onClick:function(){return r(t.category)},children:[t.category,Object(v.jsxs)("div",{className:"category-item__count",children:[t.restaurantList.length," Restaurants"]})]},t.category)})),Object(v.jsxs)("div",{className:"category-item ".concat("See All"===a?"--active":""),onClick:function(){return c()},children:["See All",Object(v.jsxs)("div",{className:"category-item__count",children:[s.length," Restaurants"]})]})]})})}}]),a}(c.a.Component)),O=function(t){Object(p.a)(a,t);var e=Object(g.a)(a);function a(t){var s;Object(m.a)(this,a),(s=e.call(this,t)).state={categories:[],allRestaurants:[],showAll:!1,activeCategory:"popular brands",visibleItems:{},isAutoScrolling:!1};return s.observer=new IntersectionObserver((function(t){if(1===t.length&&!1===s.state.isAutoScrolling)if(!1===t[0].isIntersecting&&t[0].boundingClientRect.bottom<0){var e=t[0].target.id;console.log("hideSectionId: ",e);var a=s.state.categories.findIndex((function(t){return t.category===e}));-1!==a&&s.setState({activeCategory:s.state.categories[a+1].category})}else if(!0===t[0].isIntersecting&&t[0].boundingClientRect.bottom>=0&&t[0].boundingClientRect.y<=0){var c=t[0].target.id;console.log("upcommingSectionId: ",c);var r=s.state.categories.findIndex((function(t){return t.category===c}));-1!==r&&s.setState({activeCategory:s.state.categories[r].category})}}),{root:null,rootMargin:"0px",threshold:0}),s}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.fetchData(),setTimeout((function(){t.addObservers()}),2e3)}},{key:"fetchData",value:function(){var t=Object(d.a)(u.a.mark((function t(){var e=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://mocki.io/v1/3fb1488d-bbdb-4ddd-9a03-a0d2efc98597").then((function(t){return t.json()})).then((function(t){var a=[],s=[],c={};t.forEach((function(t){a=[].concat(Object(h.a)(a),Object(h.a)(t.restaurantList)),c[t.category]=6})),c["Only in Swiggy"]=6,a.forEach((function(t){t.isExlusive&&s.push(t)})),e.setState({categories:[].concat(Object(h.a)(t),[{category:"Only in Swiggy",restaurantList:s}]),allRestaurants:a,activeCategory:t[0].category,visibleItems:c})}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"addObservers",value:function(){var t=Object(d.a)(u.a.mark((function t(){var e=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.state.categories.forEach((function(t){var a=document.getElementById(t.category);a&&e.observer.observe(a)}));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"selectCategory",value:function(){var t=Object(d.a)(u.a.mark((function t(e){var a=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.state.showAll&&setTimeout((function(){a.addObservers()}),2e3),t.next=3,this.setState({showAll:!1,activeCategory:e});case 3:this.scrollToId(e);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"scrollToId",value:function(t){var e=this,a=document.getElementById(t);a&&(this.setState({isAutoScrolling:!0}),setTimeout((function(){e.setState({isAutoScrolling:!1})}),1e3),window.scrollTo({top:a.offsetTop+1,behavior:"smooth"}))}},{key:"showAll",value:function(){var t=Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.observer.disconnect(),t.next=3,this.setState({showAll:!0,activeCategory:"See All"});case 3:this.scrollToId("See All");case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"updateVisibleItems",value:function(t){this.setState({visibleItems:Object(i.a)(Object(i.a)({},this.state.visibleItems),{},Object(o.a)({},t,this.state.visibleItems[t]+6))})}},{key:"render",value:function(){var t=this,e=this.state,a=e.categories,s=e.activeCategory,c=e.allRestaurants;return Object(v.jsxs)("div",{className:"page-wrap",children:[Object(v.jsx)(y,{categories:a,activeCategory:s,allRestaurants:c,onClickCategory:function(e){return t.selectCategory(e)},onShowAll:function(){return t.showAll()}}),!this.state.showAll&&Object(v.jsx)("div",{className:"list-wrap",children:this.state.categories.map((function(e,a){return Object(v.jsxs)("div",{className:"category-block",id:e.category,children:[Object(v.jsx)("div",{className:"category-block__name",children:e.category}),Object(v.jsx)("div",{className:"list-row",children:e.restaurantList.slice(0,t.state.visibleItems[e.category]).map((function(a,s){return Object(v.jsx)(j,{data:a,index:s,moreCount:s+1===t.state.visibleItems[e.category]?e.restaurantList.length-t.state.visibleItems[e.category]:0,onShowMore:function(){return t.updateVisibleItems(e.category)}},"".concat(e.category,"_").concat(a.name,"_").concat(s))}))})]},"".concat(e.category,"_").concat(a))}))}),this.state.showAll&&Object(v.jsx)("div",{className:"list-wrap",children:Object(v.jsxs)("div",{className:"category-block",id:"See All",children:[Object(v.jsx)("div",{className:"category-block__name",children:"All Restaurants"}),Object(v.jsx)("div",{className:"list-row",children:this.state.allRestaurants.map((function(t,e){return Object(v.jsx)(j,{data:t,index:e},"".concat(t.name,"_").concat(e))}))})]})})]})}}]),a}(c.a.Component);function w(){return Object(v.jsx)(O,{})}var x=document.getElementById("root");n.a.render(Object(v.jsx)(s.StrictMode,{children:Object(v.jsx)(w,{})}),x)}},[[23,1,2]]]);
//# sourceMappingURL=main.7b1fe977.chunk.js.map