// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r=function(n){return n!=n},t=Number.POSITIVE_INFINITY,e=Number.NEGATIVE_INFINITY,u=t,o=e,i=function(n){return n===u||n===o},f=Math.floor,c=f,a=function(n){return c(n)===n},y=a,l=function(n){return y(n/2)},p=function(n){return l(n>0?n-1:n+1)},A=Math.sqrt,b=function(n){return Math.abs(n)},w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),v=Object.prototype.toString,U=v,d=function(n){return U.call(n)},m=Object.prototype.hasOwnProperty,s=function(n,r){return null!=n&&m.call(n,r)},h="function"==typeof Symbol?Symbol.toStringTag:"",I=s,N=h,g=v,F=d,S=function(n){var r,t,e;if(null==n)return g.call(n);t=n[N],r=I(n,N);try{n[N]=void 0}catch(r){return g.call(n)}return e=g.call(n),r?n[N]=t:delete n[N],e},H=w&&"symbol"==typeof Symbol.toStringTag?S:F,O=H,T="function"==typeof Uint32Array,j="function"==typeof Uint32Array?Uint32Array:null,E=function(n){return T&&n instanceof Uint32Array||"[object Uint32Array]"===O(n)},G=j,L=function(){var n,r;if("function"!=typeof G)return!1;try{r=new G(r=[1,3.14,-3.14,4294967296,4294967297]),n=E(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},W="function"==typeof Uint32Array?Uint32Array:void 0,M=function(){throw new Error("not implemented")},x=L()?W:M,P=H,V="function"==typeof Float64Array,Y="function"==typeof Float64Array?Float64Array:null,_=function(n){return V&&n instanceof Float64Array||"[object Float64Array]"===P(n)},q=Y,k=function(){var n,r;if("function"!=typeof q)return!1;try{r=new q([1,3.14,-3.14,NaN]),n=_(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},C=k()?z:B,D=H,J="function"==typeof Uint8Array,K="function"==typeof Uint8Array?Uint8Array:null,Q=function(n){return J&&n instanceof Uint8Array||"[object Uint8Array]"===D(n)},R=K,X=function(){var n,r;if("function"!=typeof R)return!1;try{r=new R(r=[1,3.14,-3.14,256,257]),n=Q(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},nn=X()?Z:$,rn=H,tn="function"==typeof Uint16Array,en="function"==typeof Uint16Array?Uint16Array:null,un=function(n){return tn&&n instanceof Uint16Array||"[object Uint16Array]"===rn(n)},on=en,fn=function(){var n,r;if("function"!=typeof on)return!1;try{r=new on(r=[1,3.14,-3.14,65536,65537]),n=un(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},cn="function"==typeof Uint16Array?Uint16Array:void 0,an=function(){throw new Error("not implemented")},yn={uint16:fn()?cn:an,uint8:nn};(n=new yn.uint16(1))[0]=4660;var ln,pn,An=52===new yn.uint8(n.buffer)[0];!0===An?(ln=1,pn=0):(ln=0,pn=1);var bn,wn,vn=x,Un={HIGH:ln,LOW:pn},dn=new C(1),mn=new vn(dn.buffer),sn=Un.HIGH,hn=Un.LOW,In=function(n,r){return dn[0]=r,n[0]=mn[sn],n[1]=mn[hn],n},Nn=function(n,r){return 1===arguments.length?In([0,0],n):In(n,r)},gn=Nn,Fn=x,Sn=!0===An?0:1,Hn=new C(1),On=new Fn(Hn.buffer),Tn=function(n,r){return Hn[0]=n,On[Sn]=r>>>0,Hn[0]},jn=Tn,En=function(n){return 0|n},Gn=x,Ln=!0===An?1:0,Wn=new C(1),Mn=new Gn(Wn.buffer),xn=function(n){return Wn[0]=n,Mn[Ln]};!0===An?(bn=1,wn=0):(bn=0,wn=1);var Pn=x,Vn={HIGH:bn,LOW:wn},Yn=new C(1),_n=new Pn(Yn.buffer),qn=Vn.HIGH,kn=Vn.LOW,zn=function(n,r){return _n[qn]=n,_n[kn]=r,Yn[0]},Bn=zn,Cn=gn,Dn=xn,Jn=Bn,Kn=[0,0],Qn=function(n,r){var t,e;return Cn(Kn,n),t=Kn[0],t&=2147483647,e=Dn(r),Jn(t|=e&=2147483648,Kn[1])},Rn=p,Xn=Qn,Zn=e,$n=t,nr=function(n,r){return r===Zn?$n:r===$n?0:r>0?Rn(r)?n:0:Rn(r)?Xn($n,n):$n},rr=xn,tr=function(n,r){return(2147483647&rr(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},er=b,ur=t,or=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:er(n)<1==(r===ur)?0:ur},ir=x,fr=!0===An?1:0,cr=new C(1),ar=new ir(cr.buffer),yr=function(n,r){return cr[0]=n,ar[fr]=r>>>0,cr[0]},lr=xn,pr=jn,Ar=yr,br=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},wr=1048576,vr=[1,1.5],Ur=[0,.5849624872207642],dr=[0,1.350039202129749e-8],mr=jn,sr=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},hr=i,Ir=r,Nr=b,gr=function(n,r){return Ir(r)||hr(r)?(n[0]=r,n[1]=0,n):0!==r&&Nr(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},Fr=function(n,r){return 1===arguments.length?gr([0,0],n):gr(n,r)},Sr=xn,Hr=function(n){var r=Sr(n);return(r=(2146435072&r)>>>20)-1023|0},Or=t,Tr=e,jr=r,Er=i,Gr=Qn,Lr=Fr,Wr=Hr,Mr=gn,xr=Bn,Pr=[0,0],Vr=[0,0],Yr=function(n,r){var t,e;return 0===r||0===n||jr(n)||Er(n)?n:(Lr(Pr,n),r+=Pr[1],(r+=Wr(n=Pr[0]))<-1074?Gr(0,n):r>1023?n<0?Tr:Or:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,Mr(Vr,n),t=Vr[0],t&=2148532223,e*xr(t|=r+1023<<20,Vr[1])))},_r=xn,qr=yr,kr=jn,zr=En,Br=Yr,Cr=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},Dr=2147483647,Jr=1048575,Kr=1048576,Qr=r,Rr=p,Xr=i,Zr=a,$r=A,nt=b,rt=gn,tt=jn,et=En,ut=e,ot=t,it=nr,ft=tr,ct=or,at=function(n,r,t){var e,u,o,i,f,c,a,y,l,p,A,b,w,v,U,d,m,s,h,I;return s=0,t<wr&&(s-=53,t=lr(r*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?I=0:h<767610?I=1:(I=0,s+=1,t-=wr),e=524288+(t>>1|536870912),f=(m=1/((r=Ar(r,t))+(a=vr[I])))*((d=r-a)-(i=pr(u=d*m,0))*(c=Ar(0,e+=I<<18))-i*(r-(c-a))),U=(o=u*u)*o*br(o),c=pr(c=3+(o=i*i)+(U+=f*(i+u)),0),w=(A=-7.028461650952758e-9*(l=pr(l=(d=i*c)+(m=f*c+(U-(c-3-o))*u),0))+.9617966939259756*(m-(l-d))+dr[I])-((b=pr(b=(p=.9617967009544373*l)+A+(y=Ur[I])+(v=s),0))-v-y-p),n[0]=b,n[1]=w,n},yt=function(n,r){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=r-1)-u*u*sr(u)*1.4426950408889634)-((e=mr(e=(o=1.4426950216293335*u)+i,0))-o),n[0]=e,n[1]=t,n},lt=function(n,r,t){var e,u,o,i,f,c,a,y,l;return l=((y=n&Dr|0)>>20)-1023|0,a=0,y>1071644672&&(u=qr(0,((a=n+(Kr>>l+1)>>>0)&~(Jr>>(l=((a&Dr)>>20)-1023|0)))>>>0),a=(a&Jr|Kr)>>20-l>>>0,n<0&&(a=-a),r-=u),f=(i=.6931471805599453*(t-((u=kr(u=t+r,0))-r))+-1.904654299957768e-9*u)-((c=(o=.6931471824645996*u)+i)-o),e=c-(u=c*c)*Cr(u),n=_r(c=1-(c*e/(e-2)-(f+c*f)-c)),n=zr(n),c=(n+=a<<20>>>0)>>20<=0?Br(c,a):qr(c,n)},pt=2147483647,At=1083179008,bt=1e300,wt=1e-300,vt=[0,0],Ut=[0,0],dt=function n(r,t){var e,u,o,i,f,c,a,y,l,p,A,b,w,v;if(Qr(r)||Qr(t))return NaN;if(rt(vt,t),f=vt[0],0===vt[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return $r(r);if(-.5===t)return 1/$r(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Xr(t))return ct(r,t)}if(rt(vt,r),i=vt[0],0===vt[1]){if(0===i)return it(r,t);if(1===r)return 1;if(-1===r&&Rr(t))return-1;if(Xr(r))return r===ut?n(-0,-t):t<0?0:ot}if(r<0&&!1===Zr(t))return(r-r)/(r-r);if(o=nt(r),e=i&pt|0,u=f&pt|0,a=f>>>31|0,c=(c=i>>>31|0)&&Rr(t)?-1:1,u>1105199104){if(u>1139802112)return ft(r,t);if(e<1072693247)return 1===a?c*bt*bt:c*wt*wt;if(e>1072693248)return 0===a?c*bt*bt:c*wt*wt;A=yt(Ut,o)}else A=at(Ut,o,e);if(p=(t-(y=tt(t,0)))*A[0]+t*A[1],l=y*A[0],rt(vt,b=p+l),w=et(vt[0]),v=et(vt[1]),w>=At){if(0!=(w-At|v))return c*bt*bt;if(p+8008566259537294e-32>b-l)return c*bt*bt}else if((w&pt)>=1083231232){if(0!=(w-3230714880|v))return c*wt*wt;if(p<=b-l)return c*wt*wt}return c*(b=lt(w,l,p))},mt=dt,st=1e308;return function(n,t){var u,o;return r(n)||r(t)||i(t)?NaN:i(n)||0===n||t<-324||b(n)>9007199254740992&&t<=0?n:t>308?n>=0?0:e:t<-308?(u=mt(10,-(t+308)),i(o=n*st*u)?n:f(o)/st/u):(u=mt(10,-t),i(o=n*u)?n:f(o)/u)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).floorn=r();
//# sourceMappingURL=index.js.map
