(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[657],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,k=u["".concat(l,".").concat(m)]||u[m]||s[m]||r;return t?i.createElement(k,o(o({ref:n},p),{},{components:t})):i.createElement(k,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4090:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var i=t(2122),a=t(9756),r=(t(7294),t(3905)),o=(t(4996),["components"]),c={id:"inject",title:"2.4 \u795e\u5947\u7684 Inject",sidebar_label:"2.4 \u795e\u5947\u7684 Inject"},l=void 0,d={unversionedId:"inject",id:"inject",isDocsHomePage:!1,title:"2.4 \u795e\u5947\u7684 Inject",description:"2.4.1 Inject \u8bbe\u8ba1",source:"@site/docs/inject.mdx",sourceDirName:".",slug:"/inject",permalink:"/furion/docs/inject",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/inject.mdx",version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1622342267,formattedLastUpdatedAt:"5/30/2021",frontMatter:{id:"inject",title:"2.4 \u795e\u5947\u7684 Inject",sidebar_label:"2.4 \u795e\u5947\u7684 Inject"},sidebar:"docs",previous:{title:"2.3 \u624b\u52a8\u642d\u5efa\u5206\u5c42",permalink:"/furion/docs/reference"},next:{title:"3. \u5e94\u7528\u542f\u52a8 Startup",permalink:"/furion/docs/appstartup"}},p=[{value:"2.4.1 <code>Inject</code> \u8bbe\u8ba1",id:"241-inject-\u8bbe\u8ba1",children:[]},{value:"2.4.2 <code>Inject</code> \u65b9\u6cd5\u6709\u54ea\u4e9b",id:"242-inject-\u65b9\u6cd5\u6709\u54ea\u4e9b",children:[]},{value:"2.4.3 \u5728 <code>Progame.cs</code> \u4e2d\u4f7f\u7528",id:"243-\u5728-progamecs-\u4e2d\u4f7f\u7528",children:[{value:"2.4.3.1 <code>Inject()</code> \u65b9\u6cd5",id:"2431-inject-\u65b9\u6cd5",children:[]}]},{value:"2.4.4 <code>Startup.ConfigureServices</code> \u4f7f\u7528",id:"244-startupconfigureservices-\u4f7f\u7528",children:[{value:"2.4.4.1 <code>AddInject()</code> \u65b9\u6cd5",id:"2441-addinject-\u65b9\u6cd5",children:[]},{value:"2.4.4.2 <code>AddInjectBase()</code> \u65b9\u6cd5",id:"2442-addinjectbase-\u65b9\u6cd5",children:[]},{value:"2.4.4.5 <code>AddInjectWithUnifyResult()</code> \u65b9\u6cd5",id:"2445-addinjectwithunifyresult-\u65b9\u6cd5",children:[]}]},{value:"2.4.5 <code>Startup.Configure</code> \u4f7f\u7528",id:"245-startupconfigure-\u4f7f\u7528",children:[{value:"2.4.5.1 <code>UseInject()</code> \u65b9\u6cd5",id:"2451-useinject-\u65b9\u6cd5",children:[]},{value:"2.4.5.1 <code>UseInjectBase()</code> \u65b9\u6cd5",id:"2451-useinjectbase-\u65b9\u6cd5",children:[]}]},{value:"2.4.6 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"246-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],s={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"241-inject-\u8bbe\u8ba1"},"2.4.1 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Inject")," \u8bbe\u8ba1"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Inject [\u026an\u02c8d\u0292ekt]")," \u610f\u601d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"\u6ce8\u5165\uff0c\u6ce8\u5c04")," \u7684\u610f\u601d\uff0c\u5728\u8fd9\u91cc\u610f\u4e3a\u4f7f\u7528\u6700\u5c0f\u7684\u4fb5\u5165\u5f0f\u5bf9\u5e94\u7528\u8fdb\u884c\u673a\u80fd\u6539\u9020\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Inject()")," \u65b9\u6cd5\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u63d0\u4f9b\u7684\u6700\u5c0f\u4fb5\u5165\u5f0f\u7684\u65b9\u6cd5\uff0c\u53ef\u4ee5\u8ba9\u4efb\u4f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"ASP.NET Core")," Web \u540e\u7aef\u9879\u76ee\u77ac\u95f4\u652f\u6301\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u7279\u6027\u3002"),(0,r.kt)("h2",{id:"242-inject-\u65b9\u6cd5\u6709\u54ea\u4e9b"},"2.4.2 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Inject")," \u65b9\u6cd5\u6709\u54ea\u4e9b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Inject()"),"\uff1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Progame.cs")," \u4e2d\u6ce8\u518c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AddInject()"),"\uff1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfigureServices")," \u4e2d\u6ce8\u518c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AddInjectBase()"),"\uff1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfigureServices")," \u4e2d\u6ce8\u518c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AddInjectWithUnifyResult()/ AddInjectWithUnifyResult<T>()"),"\uff1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"ConfigureServices")," \u4e2d\u6ce8\u518c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseInject()"),"\uff1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Configure")," \u4e2d\u6ce8\u518c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UseInjectBase()"),"\uff1a\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"Startup.cs")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Configure")," \u4e2d\u6ce8\u518c")),(0,r.kt)("h2",{id:"243-\u5728-progamecs-\u4e2d\u4f7f\u7528"},"2.4.3 \u5728 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Progame.cs")," \u4e2d\u4f7f\u7528"),(0,r.kt)("h3",{id:"2431-inject-\u65b9\u6cd5"},"2.4.3.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Inject()")," \u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Inject()")," \u662f\u5728\u542f\u52a8\u7a0b\u5e8f ",(0,r.kt)("inlineCode",{parentName:"p"},"Progame.cs")," \u4e2d\u4f7f\u7528\u7684\uff0c\u96c6\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u552f\u4e00\u65b9\u6cd5\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:'{6,18} title="Furion.Web.Entry\\Program.cs"',"{6,18}":!0,title:'"Furion.Web.Entry\\Program.cs"'},"using Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Furion.Web.Entry\n{\n    public class Program\n    {\n        public static void Main(string[] args)\n        {\n            CreateHostBuilder(args).Build().Run();\n        }\n\n        public static IHostBuilder CreateHostBuilder(string[] args)\n        {\n            return Host.CreateDefaultBuilder(args)\n                .ConfigureWebHostDefaults(webBuilder =>\n                {\n                    webBuilder.Inject()\n                              .UseStartup<Startup>();\n                });\n        }\n    }\n}\n")),(0,r.kt)("h2",{id:"244-startupconfigureservices-\u4f7f\u7528"},"2.4.4 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Startup.ConfigureServices")," \u4f7f\u7528"),(0,r.kt)("h3",{id:"2441-addinject-\u65b9\u6cd5"},"2.4.4.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"AddInject()")," \u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AddInject()")," \u65b9\u6cd5\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," \u4e2d\u63d0\u4f9b\u6700\u57fa\u7840\u529f\u80fd\u7684\u6ce8\u518c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AddInject()")," \u5305\u542b\u4ee5\u4e0b\u57fa\u7840\u529f\u80fd\u6ce8\u518c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddSpecificationDocuments([swaggerGen])\n        .AddDynamicApiControllers()\n        .AddDataValidation()\n        .AddFriendlyException();\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3,5,7,10}","{3,5,7,10}":!0},"namespace Furion.Web.Entry\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddInject();   // \u652f\u6301\u76f4\u63a5\u6ce8\u518c\uff08\u548c\u4e0b\u9762\u4ee3\u7801\u4e8c\u9009\u4e00\uff0c\u4e0d\u80fd\u540c\u65f6\u6ce8\u518c\u4e24\u6b21\uff09\n\n            services.AddControllers()\n                    .AddInject();   // \u652f\u6301\u94fe\u5f0f\u6ce8\u518c\uff08\u548c\u4e0a\u9762\u4ee3\u7801\u4e8c\u9009\u4e00\uff0c\u4e0d\u80fd\u540c\u65f6\u6ce8\u518c\u4e24\u6b21\uff09\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            // \u5176\u4ed6\u4ee3\u7801\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"2442-addinjectbase-\u65b9\u6cd5"},"2.4.4.2 ",(0,r.kt)("inlineCode",{parentName:"h3"},"AddInjectBase()")," \u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AddInjectBase()")," \u65b9\u6cd5\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," \u4e2d\u63d0\u4f9b\u6700\u57fa\u7840\u529f\u80fd\u7684\u6ce8\u518c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AddInjectBase()")," \u5305\u542b\u4ee5\u4e0b\u57fa\u7840\u529f\u80fd\u6ce8\u518c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddDynamicApiControllers()\n        .AddDataValidation()\n        .AddFriendlyException();\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"AddInjectBase(false)"),"\uff0c\u5219\u76f8\u5f53\u4e8e\u4ee5\u4e0b\u529f\u80fd\u6ce8\u518c\uff08\u4e0d\u5305\u542b\u52a8\u6001 API\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddDataValidation()\n        .AddFriendlyException();\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u540c\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"AddInject()"),"\u3002"),(0,r.kt)("h3",{id:"2445-addinjectwithunifyresult-\u65b9\u6cd5"},"2.4.4.5 ",(0,r.kt)("inlineCode",{parentName:"h3"},"AddInjectWithUnifyResult()")," \u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AddInjectWithUnifyResult()")," \u65b9\u6cd5\u5b9e\u9645\u4e0a\u7b49\u540c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"services.AddInject([swaggerGen])\n        .AddUnifyResult();\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u540c\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"AddInject()"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u7279\u522b\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},".AddInject****()")," \u65b9\u6cd5\u4e0d\u80fd\u540c\u65f6\u6ce8\u518c\uff0c\u53ea\u80fd\u53d6\u5176\u4e00\u3002"))),(0,r.kt)("h2",{id:"245-startupconfigure-\u4f7f\u7528"},"2.4.5 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Startup.Configure")," \u4f7f\u7528"),(0,r.kt)("h3",{id:"2451-useinject-\u65b9\u6cd5"},"2.4.5.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"UseInject()")," \u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UseInject()")," \u65b9\u6cd5\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure")," \u4e2d\u63d0\u4f9b\u6700\u57fa\u7840\u529f\u80fd\u7684\u6ce8\u518c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UseInject()")," \u5305\u542b\u4ee5\u4e0b\u57fa\u7840\u529f\u80fd\u6ce8\u518c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"app.UseSpecificationDocuments();\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{3,5,12}","{3,5,12}":!0},"namespace Furion.Web.Entry\n{\n    public class Startup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            // \u5176\u4ed6\u4ee3\u7801\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            app.UseInject();    // \u5305\u542b\u6700\u5c0f Swagger \u6ce8\u518c\n        }\n    }\n}\n")),(0,r.kt)("h3",{id:"2451-useinjectbase-\u65b9\u6cd5"},"2.4.5.1 ",(0,r.kt)("inlineCode",{parentName:"h3"},"UseInjectBase()")," \u65b9\u6cd5"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UseInjectBase()")," \u65b9\u6cd5\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure")," \u4e2d\u63d0\u4f9b\u6700\u57fa\u7840\u529f\u80fd\u7684\u6ce8\u518c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UseInjectBase()")," \u5b9e\u9645\u4e0a\u662f\u4e2a\u7a7a\u65b9\u6cd5\uff0c\u4e3a\u4e86\u89c4\u8303\u5316\u4ee3\u7801\u7279\u610f\u5efa\u7acb\u7684\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u540c\u4e0a ",(0,r.kt)("inlineCode",{parentName:"p"},"UseInject()"),"\u3002"),(0,r.kt)("h2",{id:"246-\u53cd\u9988\u4e0e\u5efa\u8bae"},"2.4.6 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,r.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}u.isMDXComponent=!0}}]);