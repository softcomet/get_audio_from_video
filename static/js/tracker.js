// v6.1.1528
(function(l,k,x,D,L,v,s,y,da,ea,fa,u,P,B,Q,w,ga,R){function S(a,b,c){if(!a)for(a in r)return r[a];if(r[b||a])return r[b||a];var d=new ha(a);c&&d.ia();return r[b||a]=d}function ra(a,b){return function(){a.call(b)}}function C(a){return"object"==typeof a}function z(a,b,c,d){var e;(e=a.addEventListener)?e.call(a,b,c,0):a.attachEvent(d||"on"+b,c)}function t(a,b,c){return function(){a(b,c)}}function A(a,b){for(var c in a)a.hasOwnProperty(c)&&a[c]!==m&&b(a[c],c)}function T(a){var b=[];A(a,function(a,d){b.push(da(d)+
"="+da(a))});return b.join("&")}function E(a,b){if(!a)throw Error(b);}function ia(a){var b={};A(a,function(a,d){b[d]=a});return b}function ja(a,b){A(a,function(c,d){C(c)&&(b["cp."+d]=T(c),a[d]=m)});b.cp=T(a)}function F(a,b,c,d){if(a&&a.call)a();else if(/^GSN-.*-.$/.test(a))b!==""+b&&(c=b,b=0),S(a,b,c||c===m);else if(/^_/.test(a))M[a]&&M[a](b,c),delete M[a];else{var e=function(a,b,c){h?r[h].s(a,b,c):A(r,function(d){d.s(a,b,c)})};a=a[u](".");var h;1<a[B]&&(h=a.shift());a=a[0];var g={usecookies:1,anonymizeip:2,
visitorname:3,username:3,statuscode:5,cookiedomain:6,trackparams:7,trackhash:8,tracklocal:9,referrer:10,visitorid:13,visitor:4,clientid:11,auth:14,props:4,properties:4};if(/transaction$/i.test(a))return ta(h,b,c,d);if("get"==a)return c=g[(b+"")[Q]()]||b,h?d=r[h].g(c):A(r,function(a){d=a.g(c)}),d;"set"==a?(a=(b+"")[u]("."),b=a.shift(),e(g[b[Q]()]||b,c,a.join("."))):"track"==a?G(U,h,b,c,d):"event"==a?G(V,h,b,c,d):"cancel"==a?G(function(){this.G()},h):"noCookies"==a?e(1,0):"anonymizeIP"==a?e(2,1):"tag"==
a?e(3,b):"load"==a?b&&b():"auth"==a?e(14,b):"identify"==a?G(ua,h,b,c,d):"alias"==a?e(13,b):"unidentify"==a?e(13):"props"!=a&&"properties"!=a||e(4,b)}}function ka(a,b,c){var d=a.h=a.h||{},e={};E(b||C(c),"Not an object");b?d[b]=e[b]=c:e=d=a.h=c;!a.da&&a.O&&(a.da=s(function(){la(a)},100))}function W(a,b){function c(a){return"expires="+(new v(a)).toGMTString()+";"}var d="path=/;",e=a.g(6);e&&(d+="domain="+e+";");return{r:function(e,g){a.g(1,1)&&(k.cookie=e+"="+g+";"+c(+new v+(b?6E10:6E4))+d)},o:function(b){if(a.g(1,
1))return(k.cookie.match("(^|;)\\s*"+b+"=([^;]*)")||[])[2]||m},H:function(a){k.cookie=a+"=;"+c(0)+d}}}function G(a,b,c,d,e){b?a.call(r[b],c,d,e):A(r,function(b){a.call(b,c,d,e)})}function ha(a){var b=this;b.na=0;var c=[];c[12]=b.b=a;b.s=function(a,d,g){4==a&&(ka(b,g,d),d=b.h);13==a&&(ka(b,"id",d),d=d||"-",X(b).ga(d));c[a]=d};b.g=function(a,b){return a in c?c[a]:b};var d;b.ia=function(){d=s(ra(U,b),200)};b.G=function(){y(b.k);y(d)}}function U(a,b,c){a&&a.call&&(c=a,a=m);b&&b.call&&(c=b,b=m);var d=
this,e=va(d,a,b),h=wa(d),g=d.i===m&&!h.K;b=d.O=X(d);var f=xa(),q=Y(),sa=d.g(5);b.U(1,g);y(d.k);d.n=0;d.j=0;Z(d);!d.g(9)&&e.W||e.V||x&&"preview"==x.loadPurpose||f.f.F&&f.f.w&&10>f.f.F&&10>f.f.w||(d.B=q.m,d.A=q.l,e={cs:f.Q,cd:f.P,fl:f.T,je:f.X,la:f.Y,sw:f.f.F,sh:f.f.w,dp:f.S,pu:e.ja,pt:e.ha||"-",ri:h.K,ru:h.ea,re:b.fa,vi:b.t,pv:b.p,lv:b.Z,vw:q.N,vh:q.M,dw:q.J,dh:q.I,st:q.m,sl:q.l,un:d.g(3),pp:b.ca(),ec:sa,aip:d.g(2)?1:m,tz:f.$},d.h&&ja(d.h,e),n&&(d.uid=b.c,e.bc=1),H?(e.o_si=H,e.o_vi=$,e.o_ci=aa):d.L=
1,d.ba=0,N(d,"pv",e,function(a){a!==m&&(d.i=a,y(d.k),d.k=s(t(O,d),5E3),c&&c())},5),d.i!==m?a!==m&&(d.i=m):(s(t(ya,d),500),z(l,"beforeunload",t(za,d))))}function V(a,b,c){E(a,"Event name is required");b&&b.call&&(c=b,b=m);if(b===""+b||b===+b)b={caption:b};b=ia(b||{});b.gs_evt_name=a;O(this,"event",b,c)}function O(a,b,c,d){if(a.i!==m){if(!c){var e=Y();c={vw:e.N,vh:e.M,dw:e.J,dh:e.I,st:e.m,sl:e.l,mst:a.B,msl:a.A}}c.i=a.i;c.e=b;c.et=Aa(a);n&&(c.bc=1);a.L&&H&&(a.L=0,c.o_si=H,c.o_vi=$,c.o_ci=aa);N(a,"ping",
c,function(){d&&d();y(a.k);a.k=s(t(O,a),[7E3,12E3][a.ba++]||17500+5E3*L.random())},5)}else s(function(){O(a,b,c,d)},5E3)}function la(a){var b=a.h;if(a.i!==m){var c={};ja(b,c);N(a,"prop",c,t,5)}else s(function(){la(a)},5E3)}function ma(){var a=l.olark;a&&a("api.boot.onIdentityReady",function(a,c,d){H=a;$=c;aa=d})}function N(a,b,c,d,e){var h=s(function(){f&&f();ba=(ba+1)%ca[B];c.et&&(c.et=0);c.rt=1;--e&&N(a,b,c,d,e)},1E4),g=X(a);c.cb=Ba(function(a){d(a);f&&f();y(h)});c.a=a.b;c.au=a.g(14);c.id=g.c;c.cid=
g.D;c.tv=ea;var g=b+"?"+T(c),f;na?na.ka(g):f=Ca(g)}function Ca(a){var b=k[ga]("head")[0],c=k[fa]("script");c.src=(Da?"https":"http")+"://"+ca[ba]+a;b.appendChild(c);return function(){c&&b.removeChild(c);c=null}}function Ba(a){var b="_"+Ea++;M[b]=a;return b}function I(a){function b(){var a=d[w];a&&(d[w]=a[u](":_GS_:")[0])}var c;if(I[a])return I[a];var d=l.top;I[a]=c={R:function(){b();d[w]=(d[w]||"")+":_GS_:"+[a,c.c,c.C]}};try{var e=d[w]||"";if(-1!=e[R](":_GS_:")){var h=e[u](":_GS_:")[1][u](",");h[0]==
a&&(c.c=h[1]||"",c.C=h[2]||"")}b()}catch(g){d={}}return c}function va(a,b,c){var d=k[fa]("a");d.href=b||l.location.href;b=d.href;a.g(7,1)||(b=b[P](/\?[^#]*/,""));a.g(8)||(b=b[P](/#.*$/,""));return{ja:b,ha:c!==m?c:k.title,W:/^file:/.test(b)||/\/\/localhost[\/:]/.test(b+"/"),V:/fb_xd_(bust|fragment)/.test(b)}}function xa(){var a,b,c,d,e,h,g=0,f=0;D&&(g=D.width,f=D.height);e=(e=l.orientation)&&(e+360)%180;return{f:{F:e?f:g,w:e?g:f},P:D&&D.colorDepth||"-",Y:(x.language||x.browserLanguage||"-")[Q](),X:+!!x.javaEnabled(),
Q:k.characterSet||k.charSet||"-",T:function(f,g){if(x&&(a=x.plugins)&&0<(b=a[B]))for(e=0;e<b;e++){if(-1<(d=a[e])[w][R](c=f+" "+g))return h=d.description[u](c+" "),h[1]}else if(h=l.ActiveXObject){try{if(d=(new h((c=f+g+".")+f+g)).GetVariable("$version"))return d=d[u](" ")[1][u](","),d[0]+"."+d[1]+" r"+d[2]}catch(m){}for(e=13;--e;)try{if(d=(d=new h(c+c+e))&&1)return e+".0"}catch(k){}}return"-"}("Shockwave","Flash"),S:l.devicePixelRatio||1,$:(new v).getTimezoneOffset()}}function Y(){function a(a){return l["inner"+
a]||c&&c[e="client"+a]||d&&d[e]}function b(a){return L.max(d[e="scroll"+a]||0,c[e]||0,d[e="offset"+a],c[e],d[e="client"+a],c[e])}var c=k.documentElement,d=k.body||c,e;return{N:a("Width"),M:a("Height"),J:b("Width"),I:b("Height"),l:l.pageXOffset||c&&c.scrollLeft||0,m:l.pageYOffset||c&&c.scrollTop||0}}function Z(a){y(a.aa);a.aa=s(t(oa,a),15E3);a.j||(a.j=1,a.u=new v)}function oa(a){a.j&&(a.j=0,a.n=new v-a.u+(a.n||0))}function Aa(a){var b=a.n,c=new v;a.j&&(b+=c-a.u,a.u=c);a.n=0;return b}function Fa(a){Z(a);
var b=Y();b.m>a.B&&(a.B=b.m);b.l>a.A&&(a.A=b.l)}function ya(a){var b=t(Z,a);z(k,"mousemove",b);z(k,"keydown",b);z(l,"scroll",t(Fa,a));z(k,"focus",b,"focusin");z(k,"blur",t(oa,a),"focusout")}function wa(a){a=a.g(10,k.referrer);var b;!a||/^(chrome|about|file):/.test(a)||/^\[.*\]$/.test(a)?a="-":b=a[P](/^.*?\/\//,"")[R](location.host);return{K:+(0<=b&&8>=b),ea:a}}function za(a){if(a.i!==m){var b=W(a);a.g(1,1)?b.r("gs_p_"+a.b,a.i):(b=I(a.b),b.C=a.i,b.R())}}function X(a){function b(){g.r(e,f.c=[l,548*
p.t+2019,379*p.p+4621,+new v].join(":"));a.s(11,l)}function c(){n&&"-"!==n?g.r(h,n):g.H(h)}function d(a){n=p.D=a;c()}var e="gs_u_"+a.b,h="gs_v_"+a.b,g=W(a,1),f=I(a.b),q=(g.o(e)||f.c||"")[u](":"),k=1,l=a.g(11,q[0])||(k=0,0|2147483647*L.random()),r=((q[1]||2019)-2019)/548,t=((q[2]||4621)-4621)/379,q=(q[3]||0)/1E3,n=a.g(13),s=g.o(h),p={c:l,D:n,t:r,p:t,Z:~~q,fa:k,U:function(a,c){p.p+=+a;p.t+=+c;b()},ga:d,ma:b,ca:function(){var b=g.o("gs_p_"+a.b)||f.C;g.H("gs_p_"+a.b);return a.i!==m?a.i:b}};s&&!n&&d(s);
n||(n=p.D=a.g(3));n&&c();return p}function ta(a,b,c,d){function e(a,b){b=b||(C(a)?a:{});C(a)||(b[w]=a);E(b[w],"No Name");f.push(b);return k}function h(a){for(var b=0;b<a[B];)e(a[b++]);return k}function g(){G(function(){var a=W(this,1),d="gs_t_"+this.b,e=a.o(d)||0;a.r(d,+new v);V.call(this,"_transaction",{d:JSON.stringify({id:b,pt:{ts:+e},i:f,d:c})})},a)}!c&&C(b)&&(c=b,b=c.id);E(b,"No ID");var f=[];d&&h(d);c&&c.track&&g();var k={id:b,addItem:e,addItems:h,track:g};return k}function ua(a,b){!b&&C(a)&&
(b=ia(a),a=b.id,b.id=m);E(a,"ID is required");this.s(13,a);b&&this.s(4,b)}var m,J,K=l._gs||(J=1,function(){pa.push(arguments)}),pa=K.q=K.q||[];if(!K.v){var r={},n=l.GoSquared;if(n){var p;A(n,function(a,b){"acct"==b?(S(a,"_default",1),K(function(){function c(a){d[a.shift()].apply(d,a)}var d=n.DefaultTracker=r._default;if(b=n.q)for(;a=b.shift();)c(a);n.q={push:c};(b=n.load)&&b(d)})):"load"!=b&&"q"!=b&&K("set",b,a)});p=ha.prototype;p.TrackView=U;p.TrackEvent=V;p.Cancel=function(){this.G()};n.Tracker=
S;n.Cancel=t(F,"cancel")}var H,$,aa,ca=["data.gosquared.com/","data2.gosquared.com/"],ba=0|L.random()*ca[B],Da=/^https:/.test(l.location),na,M={},Ea=0;l._gs=F;for(F.v=ea;p=pa.shift();)F.apply({},p);if(J){J=k[ga]("script");p=J[B];for(var qa;p--;)(qa=J[p].getAttribute("data-gs"))&&F(qa)}ma();z(l,"load",ma)}})(window,document,navigator||{},screen,Math,Date,setTimeout,clearTimeout,encodeURIComponent,"6.1.1528","createElement","split","replace","length","toLowerCase","name","getElementsByTagName","indexOf");