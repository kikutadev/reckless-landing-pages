(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const tc="181",Eu=0,Bc=1,Au=2,Mh=1,yh=2,kn=3,$n=0,Kt=1,tn=2,Xn=0,Pi=1,no=2,zc=3,kc=4,wu=5,Ti=100,Ru=101,Cu=102,Pu=103,Lu=104,Iu=200,Du=201,Uu=202,Nu=203,io=204,so=205,Fu=206,Ou=207,Bu=208,zu=209,ku=210,Vu=211,Hu=212,Gu=213,Wu=214,ro=0,ao=1,oo=2,as=3,co=4,lo=5,ho=6,uo=7,nc=0,Xu=1,qu=2,hi=0,Yu=1,ju=2,Ku=3,bh=4,$u=5,Zu=6,Ju=7,Vc="attached",Qu="detached",Sh=300,os=301,cs=302,fo=303,po=304,na=306,ls=1e3,An=1001,jr=1002,Gt=1003,Th=1004,Vs=1005,Rt=1006,kr=1007,Vn=1008,Pn=1009,Eh=1010,Ah=1011,js=1012,ic=1013,Ii=1014,xn=1015,_s=1016,sc=1017,rc=1018,Ks=1020,wh=35902,Rh=35899,Ch=1021,Ph=1022,jt=1023,$s=1026,Zs=1027,ac=1028,oc=1029,cc=1030,lc=1031,hc=1033,Vr=33776,Hr=33777,Gr=33778,Wr=33779,mo=35840,xo=35841,go=35842,_o=35843,vo=36196,Mo=37492,yo=37496,bo=37808,So=37809,To=37810,Eo=37811,Ao=37812,wo=37813,Ro=37814,Co=37815,Po=37816,Lo=37817,Io=37818,Do=37819,Uo=37820,No=37821,Fo=36492,Oo=36494,Bo=36495,zo=36283,ko=36284,Vo=36285,Ho=36286,Js=2300,Qs=2301,xa=2302,Hc=2400,Gc=2401,Wc=2402,ed=2500,td=0,Lh=1,Go=2,nd=3200,id=3201,uc=0,sd=1,oi="",It="srgb",Wt="srgb-linear",Kr="linear",ct="srgb",Ni=7680,Xc=519,rd=512,ad=513,od=514,Ih=515,cd=516,ld=517,hd=518,ud=519,Wo=35044,dc=35048,qc="300 es",wn=2e3,$r=2001;function Dh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){const i=er("canvas");return i.style.display="block",i}const Yc={};function Zr(...i){const e="THREE."+i.shift();console.log(e,...i)}function we(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ye(...i){const e="THREE."+i.shift();console.error(e,...i)}function tr(...i){const e=i.join(" ");e in Yc||(Yc[e]=!0,we(...i))}function fd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const Gs=Math.PI/180,hs=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function fc(i,e){return(i%e+e)%e}function pd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function md(i,e,t){return i!==e?(t-i)/(e-i):0}function Ws(i,e,t){return(1-t)*i+t*e}function xd(i,e,t,n){return Ws(i,e,1-Math.exp(-t*n))}function gd(i,e=1){return e-Math.abs(fc(i,e*2)-e)}function _d(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Md(i,e){return i+Math.floor(Math.random()*(e-i+1))}function yd(i,e){return i+Math.random()*(e-i)}function bd(i){return i*(.5-Math.random())}function Sd(i){i!==void 0&&(jc=i);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Td(i){return i*Gs}function Ed(i){return i*hs}function Ad(i){return(i&i-1)===0&&i!==0}function wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cd(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*x,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*x,o*l);break;case"ZYZ":i.set(c*x,c*f,o*h,o*l);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function it(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $t={DEG2RAD:Gs,RAD2DEG:hs,generateUUID:gn,clamp:je,euclideanModulo:fc,mapLinear:pd,inverseLerp:md,lerp:Ws,damp:xd,pingpong:gd,smoothstep:_d,smootherstep:vd,randInt:Md,randFloat:yd,randFloatSpread:bd,seededRandom:Sd,degToRad:Td,radToDeg:Ed,isPowerOfTwo:Ad,ceilPowerOfTwo:wd,floorPowerOfTwo:Rd,setQuaternionFromProperEuler:Cd,normalize:it,denormalize:mn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],x=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==x){let m=c*d+l*f+h*x+u*g;m<0&&(d=-d,f=-f,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),b=Math.sin(E);p=Math.sin(p*E)/b,o=Math.sin(o*E)/b,c=c*p+d*o,l=l*p+f*o,h=h*p+x*o,u=u*p+g*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+x*o,u=u*p+g*o;const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],x=r[a+3];return e[t]=o*x+h*u+c*f-l*d,e[t+1]=c*x+h*d+l*u-o*f,e[t+2]=l*x+h*f+o*d-c*u,e[t+3]=h*x-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"YZX":this._x=d*h*u+l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u-d*f*x;break;case"XZY":this._x=d*h*u-l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u+d*f*x;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new C,Kc=new Ot;class We{constructor(e,t,n,s,r,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],x=n[8],g=s[0],m=s[3],p=s[6],E=s[1],b=s[4],M=s[7],w=s[2],A=s[5],P=s[8];return r[0]=a*g+o*E+c*w,r[3]=a*m+o*b+c*A,r[6]=a*p+o*M+c*P,r[1]=l*g+h*E+u*w,r[4]=l*m+h*b+u*A,r[7]=l*p+h*M+u*P,r[2]=d*g+f*E+x*w,r[5]=d*m+f*b+x*A,r[8]=d*p+f*M+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,x=t*u+n*d+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=u*g,e[1]=(s*l-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(h*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new We,$c=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){const i={enabled:!0,workingColorSpace:Wt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=is(s.r),s.g=is(s.g),s.b=is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wt]:{primaries:e,whitePoint:n,transfer:Kr,toXYZ:$c,fromXYZ:Zc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:$c,fromXYZ:Zc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),i}const Qe=Pd();function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class Ld{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=er("canvas")),Fi.width=e.width,Fi.height=e.height;const s=Fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qn(t[n]/255)*255):t[n]=qn(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Id=0;class pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let Dd=0;const Ma=new C;class Dt extends vs{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=An,s=An,r=Rt,a=Vn,o=jt,c=Pn,l=Dt.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=gn(),this.name="",this.source=new pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ma).x}get height(){return this.source.getSize(Ma).y}get depth(){return this.source.getSize(Ma).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Sh;Dt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],x=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,M=(f+1)/2,w=(p+1)/2,A=(h+d)/4,P=(u+g)/4,z=(x+m)/4;return b>M&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=P/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=z/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=P/r,s=z/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-x)/E,this.y=(u-g)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ud extends vs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Dt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new pc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Ud{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uh extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nd extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),lr.subVectors(this.max,Rs),Oi.subVectors(e.a,Rs),Bi.subVectors(e.b,Rs),zi.subVectors(e.c,Rs),Jn.subVectors(Bi,Oi),Qn.subVectors(zi,Bi),mi.subVectors(Oi,zi);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-mi.y,mi.x,0];return!ya(t,Oi,Bi,zi,lr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,Oi,Bi,zi,lr))?!1:(hr.crossVectors(Jn,Qn),t=[hr.x,hr.y,hr.z],ya(t,Oi,Bi,zi,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Dn=[new C,new C,new C,new C,new C,new C,new C,new C],dn=new C,cr=new nn,Oi=new C,Bi=new C,zi=new C,Jn=new C,Qn=new C,mi=new C,Rs=new C,lr=new C,hr=new C,xi=new C;function ya(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xi.fromArray(i,r);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),c=e.dot(xi),l=t.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Fd=new nn,Cs=new C,ba=new C;class Ln{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const t=Cs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(ba)),this.expandByPoint(Cs.copy(e.center).sub(ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Un=new C,Sa=new C,ur=new C,ei=new C,Ta=new C,dr=new C,Ea=new C;class ia{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sa.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(Sa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ur),o=ei.dot(this.direction),c=-ei.dot(ur),l=ei.lengthSq(),h=Math.abs(1-a*a);let u,d,f,x;if(h>0)if(u=a*c-o,d=a*o-c,x=r*h,u>=0)if(d>=-x)if(d<=x){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sa).addScaledVector(ur,d),f}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,s,r){Ta.subVectors(t,e),dr.subVectors(n,e),Ea.crossVectors(Ta,dr);let a=this.direction.dot(Ea),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,e);const c=o*this.direction.dot(dr.crossVectors(ei,dr));if(c<0)return null;const l=o*this.direction.dot(Ta.cross(ei));if(l<0||c+l>a)return null;const h=-o*ei.dot(Ea);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,x,g,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,x,g,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,x,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,x=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+x*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=x+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,x=l*h,g=l*u;t[0]=d+g*o,t[4]=x*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,x=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,x=o*h,g=o*u;t[0]=c*h,t[4]=x*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,x=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=x*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+x,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*c,f=a*l,x=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Od,e,Bd)}lookAt(e,t,n){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ti.crossVectors(n,Qt),ti.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ti.crossVectors(n,Qt)),ti.normalize(),fr.crossVectors(Qt,ti),s[0]=ti.x,s[4]=fr.x,s[8]=Qt.x,s[1]=ti.y,s[5]=fr.y,s[9]=Qt.y,s[2]=ti.z,s[6]=fr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],x=n[2],g=n[6],m=n[10],p=n[14],E=n[3],b=n[7],M=n[11],w=n[15],A=s[0],P=s[4],z=s[8],S=s[12],v=s[1],T=s[5],D=s[9],F=s[13],B=s[2],k=s[6],G=s[10],U=s[14],N=s[3],K=s[7],q=s[11],te=s[15];return r[0]=a*A+o*v+c*B+l*N,r[4]=a*P+o*T+c*k+l*K,r[8]=a*z+o*D+c*G+l*q,r[12]=a*S+o*F+c*U+l*te,r[1]=h*A+u*v+d*B+f*N,r[5]=h*P+u*T+d*k+f*K,r[9]=h*z+u*D+d*G+f*q,r[13]=h*S+u*F+d*U+f*te,r[2]=x*A+g*v+m*B+p*N,r[6]=x*P+g*T+m*k+p*K,r[10]=x*z+g*D+m*G+p*q,r[14]=x*S+g*F+m*U+p*te,r[3]=E*A+b*v+M*B+w*N,r[7]=E*P+b*T+M*k+w*K,r[11]=E*z+b*D+M*G+w*q,r[15]=E*S+b*F+M*U+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+g*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],g=e[13],m=e[14],p=e[15],E=u*m*l-g*d*l+g*c*f-o*m*f-u*c*p+o*d*p,b=x*d*l-h*m*l-x*c*f+a*m*f+h*c*p-a*d*p,M=h*g*l-x*u*l+x*o*f-a*g*f-h*o*p+a*u*p,w=x*u*c-h*g*c-x*o*d+a*g*d+h*o*m-a*u*m,A=t*E+n*b+s*M+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=E*P,e[1]=(g*d*r-u*m*r-g*s*f+n*m*f+u*s*p-n*d*p)*P,e[2]=(o*m*r-g*c*r+g*s*l-n*m*l-o*s*p+n*c*p)*P,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*P,e[4]=b*P,e[5]=(h*m*r-x*d*r+x*s*f-t*m*f-h*s*p+t*d*p)*P,e[6]=(x*c*r-a*m*r-x*s*l+t*m*l+a*s*p-t*c*p)*P,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*P,e[8]=M*P,e[9]=(x*u*r-h*g*r-x*n*f+t*g*f+h*n*p-t*u*p)*P,e[10]=(a*g*r-x*o*r+x*n*l-t*g*l-a*n*p+t*o*p)*P,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*P,e[12]=w*P,e[13]=(h*g*s-x*u*s+x*n*d-t*g*d-h*n*m+t*u*m)*P,e[14]=(x*o*s-a*g*s-x*n*c+t*g*c+a*n*m-t*o*m)*P,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,x=r*u,g=a*h,m=a*u,p=o*u,E=c*l,b=c*h,M=c*u,w=n.x,A=n.y,P=n.z;return s[0]=(1-(g+p))*w,s[1]=(f+M)*w,s[2]=(x-b)*w,s[3]=0,s[4]=(f-M)*A,s[5]=(1-(d+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(x+b)*P,s[9]=(m-E)*P,s[10]=(1-(d+g))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ki.set(s[0],s[1],s[2]).length();const a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);const l=1/r,h=1/a,u=1/o;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=wn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let x,g;if(c)x=r/(a-r),g=a*r/(a-r);else if(o===wn)x=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===$r)x=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=wn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let x,g;if(c)x=1/(a-r),g=a/(a-r);else if(o===wn)x=-2/(a-r),g=-(a+r)/(a-r);else if(o===$r)x=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new C,fn=new Ne,Od=new C(0,0,0),Bd=new C(1,1,1),ti=new C,fr=new C,Qt=new C,Jc=new Ne,Qc=new Ot;class _n{constructor(e=0,t=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Nh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zd=0;const el=new C,Vi=new Ot,Nn=new Ne,pr=new C,Ps=new C,kd=new C,Vd=new Ot,tl=new C(1,0,0),nl=new C(0,1,0),il=new C(0,0,1),sl={type:"added"},Hd={type:"removed"},Hi={type:"childadded",child:null},Aa={type:"childremoved",child:null};class xt extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new C,t=new _n,n=new Ot,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new We}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(tl,e)}rotateY(e){return this.rotateOnAxis(nl,e)}rotateZ(e){return this.rotateOnAxis(il,e)}translateOnAxis(e,t){return el.copy(e).applyQuaternion(this.quaternion),this.position.add(el.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tl,e)}translateY(e){return this.translateOnAxis(nl,e)}translateZ(e){return this.translateOnAxis(il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pr.copy(e):pr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ps,pr,this.up):Nn.lookAt(pr,Ps,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hd),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sl),Hi.child=e,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Vd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}xt.DEFAULT_UP=new C(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new C,Fn=new C,wa=new C,On=new C,Gi=new C,Wi=new C,rl=new C,Ra=new C,Ca=new C,Pa=new C,La=new nt,Ia=new nt,Da=new nt;class cn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pn.subVectors(e,t),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pn.subVectors(s,t),Fn.subVectors(n,t),wa.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Fn),c=pn.dot(wa),l=Fn.dot(Fn),h=Fn.dot(wa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,x=(a*h-o*c)*d;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return La.setScalar(0),Ia.setScalar(0),Da.setScalar(0),La.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Da,r.z),a}static isFrontFacing(e,t,n,s){return pn.subVectors(n,t),Fn.subVectors(e,t),pn.cross(Fn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Gi.subVectors(s,n),Wi.subVectors(r,n),Ra.subVectors(e,n);const c=Gi.dot(Ra),l=Wi.dot(Ra);if(c<=0&&l<=0)return t.copy(n);Ca.subVectors(e,s);const h=Gi.dot(Ca),u=Wi.dot(Ca);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Gi,a);Pa.subVectors(e,r);const f=Gi.dot(Pa),x=Wi.dot(Pa);if(x>=0&&f<=x)return t.copy(r);const g=f*l-c*x;if(g<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Wi,o);const m=h*x-f*u;if(m<=0&&u-h>=0&&f-x>=0)return rl.subVectors(r,s),o=(u-h)/(u-h+(f-x)),t.copy(s).addScaledVector(rl,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Gi,a).addScaledVector(Wi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=fc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ua(a,r,e+1/3),this.g=Ua(a,r,e),this.b=Ua(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Qe.workingToColorSpace(Ft.copy(this),e),Math.round(je(Ft.r*255,0,255))*65536+Math.round(je(Ft.g*255,0,255))*256+Math.round(je(Ft.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=It){Qe.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,s=Ft.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(mr);const n=Ws(ni.h,mr.h,t),s=Ws(ni.s,mr.s,t),r=Ws(ni.l,mr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Te;Te.NAMES=Fh;let Gd=0;class ln extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Pi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=so,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hn extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new C,xr=new Ve;let Wd=0;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wo,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}}class Oh extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bh extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xd=0;const rn=new Ne,Na=new xt,Xi=new C,en=new nn,Ls=new nn,Lt=new C;class Mt extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dh(e)?Bh:Oh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Na.lookAt(e),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(en.min,Ls.min),en.expandByPoint(Lt),Lt.addVectors(en.max,Ls.max),en.expandByPoint(Lt)):(en.expandByPoint(Ls.min),en.expandByPoint(Ls.max))}en.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Lt.fromBufferAttribute(o,l),c&&(Xi.fromBufferAttribute(e,l),Lt.add(Xi)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<n.count;z++)o[z]=new C,c[z]=new C;const l=new C,h=new C,u=new C,d=new Ve,f=new Ve,x=new Ve,g=new C,m=new C;function p(z,S,v){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,z),f.fromBufferAttribute(r,S),x.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),x.sub(d);const T=1/(f.x*x.y-x.x*f.y);isFinite(T)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(T),o[z].add(g),o[S].add(g),o[v].add(g),c[z].add(m),c[S].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let z=0,S=E.length;z<S;++z){const v=E[z],T=v.start,D=v.count;for(let F=T,B=T+D;F<B;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const b=new C,M=new C,w=new C,A=new C;function P(z){w.fromBufferAttribute(s,z),A.copy(w);const S=o[z];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),M.crossVectors(A,S);const T=M.dot(c[z])<0?-1:1;a.setXYZW(z,b.x,b.y,b.z,T)}for(let z=0,S=E.length;z<S;++z){const v=E[z],T=v.start,D=v.count;for(let F=T,B=T+D;F<B;F+=3)P(e.getX(F+0)),P(e.getX(F+1)),P(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,x=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)d[x++]=l[f++]}return new Ut(d,h,u)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const al=new Ne,gi=new ia,gr=new Ln,ol=new C,_r=new C,vr=new C,Mr=new C,Fa=new C,yr=new C,cl=new C,br=new C;class tt extends xt{constructor(e=new Mt,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Fa.fromBufferAttribute(u,e),a?yr.addScaledVector(Fa,h):yr.addScaledVector(Fa.sub(t),h))}t.add(yr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(gr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(gr,ol)===null||gi.origin.distanceToSquared(ol)>(e.far-e.near)**2))&&(al.copy(r).invert(),gi.copy(e.ray).applyMatrix4(al),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,w=b;M<w;M+=3){const A=o.getX(M),P=o.getX(M+1),z=o.getX(M+2);s=Sr(this,p,e,n,l,h,u,A,P,z),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const E=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=Sr(this,a,e,n,l,h,u,E,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){const m=d[x],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=E,w=b;M<w;M+=3){const A=M,P=M+1,z=M+2;s=Sr(this,p,e,n,l,h,u,A,P,z),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const x=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){const E=m,b=m+1,M=m+2;s=Sr(this,a,e,n,l,h,u,E,b,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function qd(i,e,t,n,s,r,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===$n,o),c===null)return null;br.copy(o),br.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(br);return l<t.near||l>t.far?null:{distance:l,point:br.clone(),object:i}}function Sr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,_r),i.getVertexPosition(c,vr),i.getVertexPosition(l,Mr);const h=qd(i,e,t,n,_r,vr,Mr,cl);if(h){const u=new C;cn.getBarycoord(cl,_r,vr,Mr,u),s&&(h.uv=cn.getInterpolatedAttribute(s,o,c,l,u,new Ve)),r&&(h.uv1=cn.getInterpolatedAttribute(r,o,c,l,u,new Ve)),a&&(h.normal=cn.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};cn.getNormal(_r,vr,Mr,d.normal),h.face=d,h.barycoord=u}return h}class Ms extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function x(g,m,p,E,b,M,w,A,P,z,S){const v=M/P,T=w/z,D=M/2,F=w/2,B=A/2,k=P+1,G=z+1;let U=0,N=0;const K=new C;for(let q=0;q<G;q++){const te=q*T-F;for(let ge=0;ge<k;ge++){const Pe=ge*v-D;K[g]=Pe*E,K[m]=te*b,K[p]=B,l.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[p]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(ge/P),u.push(1-q/z),U+=1}}for(let q=0;q<z;q++)for(let te=0;te<P;te++){const ge=d+te+k*q,Pe=d+te+k*(q+1),Ee=d+(te+1)+k*(q+1),Se=d+(te+1)+k*q;c.push(ge,Pe,Se),c.push(Pe,Ee,Se),N+=6}o.addGroup(f,N,S),f+=N,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ms(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=us(i[t]);for(const s in n)e[s]=n[s]}return e}function Yd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const kh={clone:us,merge:kt};var jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vh extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new C,ll=new Ve,hl=new Ve;class Vt extends Vh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,ll,hl),t.subVectors(hl,ll)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Yi=1;class $d extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(qi,Yi,e,t);s.layers=this.layers,this.add(s);const r=new Vt(qi,Yi,e,t);r.layers=this.layers,this.add(r);const a=new Vt(qi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new Vt(qi,Yi,e,t);o.layers=this.layers,this.add(o);const c=new Vt(qi,Yi,e,t);c.layers=this.layers,this.add(c);const l=new Vt(qi,Yi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Hh extends Dt{constructor(e=[],t=os,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zd extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ms(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Xn});r.uniforms.tEquirect.value=t;const a=new tt(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Rt),new $d(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class Rn extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jd={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;l.inputState.pinching&&d>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class mc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new mc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qd extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wo,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new C;class nr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),s=it(s,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xs extends ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ji;const Is=new C,Ki=new C,$i=new C,Zi=new Ve,Ds=new Ve,Wh=new Ne,Tr=new C,Us=new C,Er=new C,ul=new Ve,Ba=new Ve,dl=new Ve;class Xr extends xt{constructor(e=new Xs){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gh(t,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new nr(n,3,0,!1)),ji.setAttribute("uv",new nr(n,2,3,!1))}this.geometry=ji,this.material=e,this.center=new Ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ki.setFromMatrixScale(this.matrixWorld),Wh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$i.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ki.multiplyScalar(-$i.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ar(Tr.set(-.5,-.5,0),$i,a,Ki,s,r),Ar(Us.set(.5,-.5,0),$i,a,Ki,s,r),Ar(Er.set(.5,.5,0),$i,a,Ki,s,r),ul.set(0,0),Ba.set(1,0),dl.set(1,1);let o=e.ray.intersectTriangle(Tr,Us,Er,!1,Is);if(o===null&&(Ar(Us.set(-.5,.5,0),$i,a,Ki,s,r),Ba.set(0,1),o=e.ray.intersectTriangle(Tr,Er,Us,!1,Is),o===null))return;const c=e.ray.origin.distanceTo(Is);c<e.near||c>e.far||t.push({distance:c,point:Is.clone(),uv:cn.getInterpolation(Is,Tr,Us,Er,ul,Ba,dl,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ar(i,e,t,n,s,r){Zi.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ds.x=r*Zi.x-s*Zi.y,Ds.y=s*Zi.x+r*Zi.y):Ds.copy(Zi),i.copy(e),i.x+=Ds.x,i.y+=Ds.y,i.applyMatrix4(Wh)}const fl=new C,pl=new nt,ml=new nt,ef=new C,xl=new Ne,wr=new C,za=new Ln,gl=new Ne,ka=new ia;class tf extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vc,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wr),this.boundingBox.expandByPoint(wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,wr),this.boundingSphere.expandByPoint(wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(s),e.ray.intersectsSphere(za)!==!1&&(gl.copy(s).invert(),ka.copy(e.ray).applyMatrix4(gl),!(this.boundingBox!==null&&ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ka)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qu?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;pl.fromBufferAttribute(s.attributes.skinIndex,e),ml.fromBufferAttribute(s.attributes.skinWeight,e),fl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=ml.getComponent(r);if(a!==0){const o=pl.getComponent(r);xl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ef.copy(fl).applyMatrix4(xl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xh extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ir extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Gt,h=Gt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _l=new Ne,nf=new Ne;class xc{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:nf;_l.multiplyMatrices(o,t[r]),_l.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ir(t,e,e,jt,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(we("Skeleton: No bone found with UUID:",r),a=new Xh),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Xo extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ji=new Ne,vl=new Ne,Rr=[],Ml=new nn,sf=new Ne,Ns=new tt,Fs=new Ln;class ys extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Ml.copy(e.boundingBox).applyMatrix4(Ji),this.boundingBox.union(Ml)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ji),Fs.copy(e.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),vl.multiplyMatrices(n,Ji),Ns.matrixWorld=vl,Ns.raycast(e,Rr);for(let a=0,o=Rr.length;a<o;a++){const c=Rr[a];c.instanceId=r,c.object=this,t.push(c)}Rr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ir(new Float32Array(s*this.count),s,this.count,ac,xn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Va=new C,rf=new C,af=new We;class bi{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Va.subVectors(n,t).cross(rf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||af.getNormalMatrix(e),s=this.coplanarPoint(Va).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new Ln,of=new Ve(.5,.5),Cr=new C;class gc{constructor(e=new bi,t=new bi,n=new bi,s=new bi,r=new bi,a=new bi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],x=r[8],g=r[9],m=r[10],p=r[11],E=r[12],b=r[13],M=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-x,w-E).normalize(),s[1].setComponents(l+a,f+h,p+x,w+E).normalize(),s[2].setComponents(l+o,f+u,p+g,w+b).normalize(),s[3].setComponents(l-o,f-u,p-g,w-b).normalize(),n)s[4].setComponents(c,d,m,M).normalize(),s[5].setComponents(l-c,f-d,p-m,w-M).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-M).normalize(),t===wn)s[5].setComponents(l+c,f+d,p+m,w+M).normalize();else if(t===$r)s[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);const t=of.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Cr.x=s.normal.x>0?e.max.x:e.min.x,Cr.y=s.normal.y>0?e.max.y:e.min.y,Cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yn extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jr=new C,Qr=new C,yl=new Ne,Os=new ia,Pr=new Ln,Ha=new C,bl=new C;class sa extends xt{constructor(e=new Mt,t=new Yn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Jr.fromBufferAttribute(t,s-1),Qr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jr.distanceTo(Qr);e.setAttribute("lineDistance",new Tt(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,e.ray.intersectsSphere(Pr)===!1)return;yl.copy(s).invert(),Os.copy(e.ray).applyMatrix4(yl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let g=f,m=x-1;g<m;g+=l){const p=h.getX(g),E=h.getX(g+1),b=Lr(this,e,Os,c,p,E,g);b&&t.push(b)}if(this.isLineLoop){const g=h.getX(x-1),m=h.getX(f),p=Lr(this,e,Os,c,g,m,x-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let g=f,m=x-1;g<m;g+=l){const p=Lr(this,e,Os,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Lr(this,e,Os,c,x-1,f,x-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Jr.fromBufferAttribute(o,s),Qr.fromBufferAttribute(o,r),t.distanceSqToSegment(Jr,Qr,Ha,bl)>n)return;Ha.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ha);if(!(l<e.near||l>e.far))return{distance:l,point:bl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Sl=new C,Tl=new C;class jn extends sa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Sl.fromBufferAttribute(t,s),Tl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Sl.distanceTo(Tl);e.setAttribute("lineDistance",new Tt(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cf extends sa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qh extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const El=new Ne,qo=new ia,Ir=new Ln,Dr=new C;class lf extends xt{constructor(e=new Mt,t=new qh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=r,e.ray.intersectsSphere(Ir)===!1)return;El.copy(s).invert(),qo.copy(e.ray).applyMatrix4(El);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let x=d,g=f;x<g;x++){const m=l.getX(x);Dr.fromBufferAttribute(u,m),Al(Dr,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let x=d,g=f;x<g;x++)Dr.fromBufferAttribute(u,x),Al(Dr,x,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Al(i,e,t,n,s,r,a){const o=qo.distanceSqToPoint(i);if(o<t){const c=new C;qo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Yh extends Dt{constructor(e,t,n=Ii,s,r,a,o=Gt,c=Gt,l,h=$s,u=1){if(h!==$s&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jh extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ui extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],x=[],g=[],m=[];for(let p=0;p<h;p++){const E=p*d-a;for(let b=0;b<l;b++){const M=b*u-r;x.push(M,-E,0),g.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const b=E+l*p,M=E+l*(p+1),w=E+1+l*(p+1),A=E+1+l*p;f.push(b,M,A),f.push(M,w,A)}this.setIndex(f),this.setAttribute("position",new Tt(x,3)),this.setAttribute("normal",new Tt(g,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.width,e.height,e.widthSegments,e.heightSegments)}}class _c extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){const g=x/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(x/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){const g=(s+1)*f+x-1,m=(s+1)*(f-1)+x-1,p=(s+1)*(f-1)+x,E=(s+1)*f+x;a.push(g,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ds extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class In extends ds{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hf extends ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uc,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uf extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class df extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ur(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ff(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function pf(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function wl(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Kh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class sr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class mf extends sr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gc:r=e,o=2*t-n;break;case Wc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gc:a=e,c=2*n-t;break;case Wc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(n-t)/(s-t),g=x*x,m=g*x,p=-d*m+2*d*g-d*x,E=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*x+1,b=(-1-f)*m+(1.5+f)*g+.5*x,M=f*m-f*g;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+E*a[l+w]+b*a[c+w]+M*a[u+w];return r}}class xf extends sr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class gf extends sr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class bn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case Qs:t=this.InterpolantFactoryMethodLinear;break;case xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Qs;case this.InterpolantFactoryMethodSmooth:return xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ye("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&ff(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===xa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let x=0;x!==n;++x){const g=t[u+x];if(g!==t[d+x]||g!==t[f+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Qs;class bs extends bn{constructor(e,t,n){super(e,t,n)}}bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Js;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;class $h extends bn{constructor(e,t,n,s){super(e,t,n,s)}}$h.prototype.ValueTypeName="color";class fs extends bn{constructor(e,t,n,s){super(e,t,n,s)}}fs.prototype.ValueTypeName="number";class _f extends sr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Ot.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ps extends bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _f(this.times,this.values,this.getValueSize(),e)}}ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends bn{constructor(e,t,n){super(e,t,n)}}Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Js;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends bn{constructor(e,t,n,s){super(e,t,n,s)}}ms.prototype.ValueTypeName="vector";class vf{constructor(e="",t=-1,n=[],s=ed){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(yf(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=pf(c);c=wl(c,1,h),l=wl(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new fs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(we("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ye("AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,x,g){if(f.length!==0){const m=[],p=[];Kh(f,m,p,x),m.length!==0&&g.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let x;for(x=0;x<d.length;x++)if(d[x].morphTargets)for(let g=0;g<d[x].morphTargets.length;g++)f[d[x].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let E=0;E!==d[x].morphTargets.length;++E){const b=d[x];m.push(b.time),p.push(b.morphTarget===g?1:0)}s.push(new fs(".morphTargetInfluence["+g+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(ms,f+".position",d,"pos",s),n(ps,f+".quaternion",d,"rot",s),n(ms,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Mf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return $h;case"quaternion":return ps;case"bool":case"boolean":return bs;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function yf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Mf(i.type);if(i.times===void 0){const t=[],n=[];Kh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Gn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bf{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],x=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Sf=new bf;class Ts{constructor(e){this.manager=e!==void 0?e:Sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ts.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bn={};class Tf extends Error{constructor(e,t){super(e),this.response=t}}class Zh extends Ts{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Gn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:s});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Bn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,x=f!==0;let g=0;const m=new ReadableStream({start(p){E();function E(){u.read().then(({done:b,value:M})=>{if(b)p.close();else{g+=M.byteLength;const w=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:f});for(let A=0,P=h.length;A<P;A++){const z=h[A];z.onProgress&&z.onProgress(w)}p.enqueue(M),E()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Tf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(x=>f.decode(x))}}}).then(l=>{Gn.add(`file:${e}`,l);const h=Bn[e];delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Bn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qi=new WeakMap;class Ef extends Ts{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Gn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Qi.get(a);u===void 0&&(u=[],Qi.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=er("img");function c(){h(),t&&t(this);const u=Qi.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Qi.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Gn.remove(`image:${e}`);const d=Qi.get(this)||[];for(let f=0;f<d.length;f++){const x=d[f];x.onError&&x.onError(u)}Qi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Af extends Ts{constructor(e){super(e)}load(e,t,n,s){const r=new Dt,a=new Ef(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ra extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class wf extends ra{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ga=new Ne,Rl=new C,Cl=new C;class vc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gc,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rl),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Rf extends vc{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Cf extends ra{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Rf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pl=new Ne,Bs=new C,Wa=new C;class Pf extends vc{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bs),Wa.copy(n.position),Wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wa),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Pl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl,n.coordinateSystem,n.reversedDepth)}}class Lf extends ra{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Pf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mc extends Vh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class If extends vc{constructor(){super(new Mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jh extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new If}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Xa=new WeakMap;class Df extends Ts{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Gn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Xa.has(a)===!0)s&&s(Xa.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Gn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Xa.set(c,l),Gn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Gn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Uf extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yc="\\[\\]\\.:\\/",Nf=new RegExp("["+yc+"]","g"),bc="[^"+yc+"]",Ff="[^"+yc.replace("\\.","")+"]",Of=/((?:WC+[\/:])*)/.source.replace("WC",bc),Bf=/(WCOD+)?/.source.replace("WCOD",Ff),zf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),kf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Vf=new RegExp("^"+Of+Bf+zf+kf+"$"),Hf=["material","materials","bones","map"];class Gf{constructor(e,t,n){const s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nf,"")}static parseTrackName(e){const t=Vf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Hf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Gf;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Ll(i,e,t,n){const s=Wf(n);switch(t){case Ch:return i*e;case ac:return i*e/s.components*s.byteLength;case oc:return i*e/s.components*s.byteLength;case cc:return i*e*2/s.components*s.byteLength;case lc:return i*e*2/s.components*s.byteLength;case Ph:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case hc:return i*e*4/s.components*s.byteLength;case Vr:case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:case _o:return Math.max(i,16)*Math.max(e,8)/4;case mo:case go:return Math.max(i,8)*Math.max(e,8)/2;case vo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Fo:case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case zo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wf(i){switch(i){case Pn:case Eh:return{byteLength:1,components:1};case js:case Ah:case _s:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case Ii:case ic:case xn:return{byteLength:4,components:1};case wh:case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tc}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tc);function Qh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xf(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){const x=u[d],g=u[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){const g=u[f];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ap=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Pm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,km=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,h0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,S0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:qf,alphahash_pars_fragment:Yf,alphamap_fragment:jf,alphamap_pars_fragment:Kf,alphatest_fragment:$f,alphatest_pars_fragment:Zf,aomap_fragment:Jf,aomap_pars_fragment:Qf,batching_pars_vertex:ep,batching_vertex:tp,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:lp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:gp,displacementmap_pars_vertex:_p,displacementmap_vertex:vp,emissivemap_fragment:Mp,emissivemap_pars_fragment:yp,colorspace_fragment:bp,colorspace_pars_fragment:Sp,envmap_fragment:Tp,envmap_common_pars_fragment:Ep,envmap_pars_fragment:Ap,envmap_pars_vertex:wp,envmap_physical_pars_fragment:Bp,envmap_vertex:Rp,fog_vertex:Cp,fog_pars_vertex:Pp,fog_fragment:Lp,fog_pars_fragment:Ip,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Up,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Fp,lights_pars_begin:Op,lights_toon_fragment:zp,lights_toon_pars_fragment:kp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Zp,map_fragment:Jp,map_pars_fragment:Qp,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:rm,morphnormal_vertex:am,morphtarget_pars_vertex:om,morphtarget_vertex:cm,normal_fragment_begin:lm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:gm,iridescence_pars_fragment:_m,opaque_fragment:vm,packing:Mm,premultiplied_alpha_fragment:ym,project_vertex:bm,dithering_fragment:Sm,dithering_pars_fragment:Tm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Rm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Pm,skinbase_vertex:Lm,skinning_pars_vertex:Im,skinning_vertex:Dm,skinnormal_vertex:Um,specularmap_fragment:Nm,specularmap_pars_fragment:Fm,tonemapping_fragment:Om,tonemapping_pars_fragment:Bm,transmission_fragment:zm,transmission_pars_fragment:km,uv_pars_fragment:Vm,uv_pars_vertex:Hm,uv_vertex:Gm,worldpos_vertex:Wm,background_vert:Xm,background_frag:qm,backgroundCube_vert:Ym,backgroundCube_frag:jm,cube_vert:Km,cube_frag:$m,depth_vert:Zm,depth_frag:Jm,distanceRGBA_vert:Qm,distanceRGBA_frag:e0,equirect_vert:t0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:a0,meshlambert_vert:o0,meshlambert_frag:c0,meshmatcap_vert:l0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:x0,meshtoon_vert:g0,meshtoon_frag:_0,points_vert:v0,points_frag:M0,shadow_vert:y0,shadow_frag:b0,sprite_vert:S0,sprite_frag:T0},ce={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},En={basic:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Te(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:kt([ce.points,ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:kt([ce.common,ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:kt([ce.sprite,ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:kt([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:kt([ce.lights,ce.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};En.physical={uniforms:kt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Nr={r:0,b:0,g:0},vi=new _n,E0=new Ne;function A0(i,e,t,n,s,r,a){const o=new Te(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function x(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function g(b){let M=!1;const w=x(b);w===null?p(o,c):w&&w.isColor&&(p(w,1),M=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const w=x(M);w&&(w.isCubeTexture||w.mapping===na)?(h===void 0&&(h=new tt(new Ms(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:us(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vi.copy(M.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E0.makeRotationFromEuler(vi)),h.material.toneMapped=Qe.getTransfer(w.colorSpace)!==ct,(u!==w||d!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new tt(new ui(2,2),new vn({name:"BackgroundMaterial",uniforms:us(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,d=w.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(Nr,zh(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,M,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),c=M,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:g,addToRenderList:m,dispose:E}}function w0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(v,T,D,F,B){let k=!1;const G=u(F,D,T);r!==G&&(r=G,l(r.object)),k=f(v,F,D,B),k&&x(v,F,D,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,M(v,T,D,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,T,D){const F=D.wireframe===!0;let B=n[v.id];B===void 0&&(B={},n[v.id]=B);let k=B[T.id];k===void 0&&(k={},B[T.id]=k);let G=k[F];return G===void 0&&(G=d(c()),k[F]=G),G}function d(v){const T=[],D=[],F=[];for(let B=0;B<t;B++)T[B]=0,D[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:F,object:v,attributes:{},index:null}}function f(v,T,D,F){const B=r.attributes,k=T.attributes;let G=0;const U=D.getAttributes();for(const N in U)if(U[N].location>=0){const q=B[N];let te=k[N];if(te===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),q===void 0||q.attribute!==te||te&&q.data!==te.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function x(v,T,D,F){const B={},k=T.attributes;let G=0;const U=D.getAttributes();for(const N in U)if(U[N].location>=0){let q=k[N];q===void 0&&(N==="instanceMatrix"&&v.instanceMatrix&&(q=v.instanceMatrix),N==="instanceColor"&&v.instanceColor&&(q=v.instanceColor));const te={};te.attribute=q,q&&q.data&&(te.data=q.data),B[N]=te,G++}r.attributes=B,r.attributesNum=G,r.index=F}function g(){const v=r.newAttributes;for(let T=0,D=v.length;T<D;T++)v[T]=0}function m(v){p(v,0)}function p(v,T){const D=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;D[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),B[v]!==T&&(i.vertexAttribDivisor(v,T),B[v]=T)}function E(){const v=r.newAttributes,T=r.enabledAttributes;for(let D=0,F=T.length;D<F;D++)T[D]!==v[D]&&(i.disableVertexAttribArray(D),T[D]=0)}function b(v,T,D,F,B,k,G){G===!0?i.vertexAttribIPointer(v,T,D,B,k):i.vertexAttribPointer(v,T,D,F,B,k)}function M(v,T,D,F){g();const B=F.attributes,k=D.getAttributes(),G=T.defaultAttributeValues;for(const U in k){const N=k[U];if(N.location>=0){let K=B[U];if(K===void 0&&(U==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),U==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),K!==void 0){const q=K.normalized,te=K.itemSize,ge=e.get(K);if(ge===void 0)continue;const Pe=ge.buffer,Ee=ge.type,Se=ge.bytesPerElement,Y=Ee===i.INT||Ee===i.UNSIGNED_INT||K.gpuType===ic;if(K.isInterleavedBufferAttribute){const $=K.data,ie=$.stride,_e=K.offset;if($.isInstancedInterleavedBuffer){for(let me=0;me<N.locationSize;me++)p(N.location+me,$.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<N.locationSize;me++)m(N.location+me);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let me=0;me<N.locationSize;me++)b(N.location+me,te/N.locationSize,Ee,q,ie*Se,(_e+te/N.locationSize*me)*Se,Y)}else{if(K.isInstancedBufferAttribute){for(let $=0;$<N.locationSize;$++)p(N.location+$,K.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let $=0;$<N.locationSize;$++)m(N.location+$);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let $=0;$<N.locationSize;$++)b(N.location+$,te/N.locationSize,Ee,q,te*Se,te/N.locationSize*$*Se,Y)}}else if(G!==void 0){const q=G[U];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(N.location,q);break;case 3:i.vertexAttrib3fv(N.location,q);break;case 4:i.vertexAttrib4fv(N.location,q);break;default:i.vertexAttrib1fv(N.location,q)}}}}E()}function w(){z();for(const v in n){const T=n[v];for(const D in T){const F=T[D];for(const B in F)h(F[B].object),delete F[B];delete T[D]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const D in T){const F=T[D];for(const B in F)h(F[B].object),delete F[B];delete T[D]}delete n[v.id]}function P(v){for(const T in n){const D=n[T];if(D[v.id]===void 0)continue;const F=D[v.id];for(const B in F)h(F[B].object),delete F[B];delete D[v.id]}}function z(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function R0(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)a(l[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*d[g];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function C0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==jt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const z=P===_s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Pn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==xn&&!z)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(we("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:w,maxSamples:A}}function P0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new bi,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,b=E*4;let M=p.clippingState||null;c.value=M,M=h(x,d,b,f);for(let w=0;w!==b;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,x){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,x!==!0||m===null){const p=f+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==g;++b,M+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function L0(i){let e=new WeakMap;function t(a,o){return o===fo?a.mapping=os:o===po&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fo||o===po)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Zd(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const li=4,Il=[.125,.215,.35,.446,.526,.582],Ei=20,I0=256,zs=new Mc,Dl=new Te;let qa=null,Ya=0,ja=0,Ka=!1;const D0=new C;class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=D0}=r;qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qa,Ya,ja),this._renderer.xr.enabled=Ka,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),Ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:_s,format:jt,colorSpace:Wt,depthBuffer:!1},s=Nl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=U0(r)),this._blurMaterial=F0(r,e,t),this._ggxMaterial=N0(r,e,t)}return s}_compileMaterial(e){const t=new tt(new Mt,e);this._renderer.compile(t,zs)}_sceneToCubeUV(e,t,n,s,r){const c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Dl),u.toneMapping=hi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new Ms,new Hn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(Dl),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const w=this._cubeSize;es(s,M*w,b>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===os||e.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=.05+l*.95,f=u*d,{_lodMax:x}=this,g=this._sizeLods[n],m=3*g*(n>x-li?n-x+li:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=x-t,es(r,m,p,3*g,2*g),s.setRenderTarget(r),s.render(o,zs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-n,es(e,m,p,3*g,2*g),s.setRenderTarget(e),s.render(o,zs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):Ei;m>Ei&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const p=[];let E=0;for(let P=0;P<Ei;++P){const z=P/g,S=Math.exp(-z*z/2);p.push(S),P===0?E+=S:P<m&&(E+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=x,d.mipInt.value=b-n;const M=this._sizeLods[s],w=3*M*(s>b-li?s-b+li:0),A=4*(this._cubeSize-M);es(t,w,A,3*M,2*M),c.setRenderTarget(t),c.render(u,zs)}}function U0(i){const e=[],t=[],n=[];let s=i;const r=i-li+1+Il.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-li?c=Il[a-i+li-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,g=3,m=2,p=1,E=new Float32Array(g*x*f),b=new Float32Array(m*x*f),M=new Float32Array(p*x*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,z=A>2?0:-1,S=[P,z,0,P+2/3,z,0,P+2/3,z+1,0,P,z,0,P+2/3,z+1,0,P,z+1,0];E.set(S,g*x*A),b.set(d,m*x*A);const v=[A,A,A,A,A,A];M.set(v,p*x*A)}const w=new Mt;w.setAttribute("position",new Ut(E,g)),w.setAttribute("uv",new Ut(b,m)),w.setAttribute("faceIndex",new Ut(M,p)),n.push(new tt(w,null)),s>li&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Nl(i,e,t){const n=new Di(i,e,t);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function N0(i,e,t){return new vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:aa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function F0(i,e,t){const n=new Float32Array(Ei),s=new C(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Fl(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ol(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function aa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===fo||c===po,h=c===os||c===cs;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ul(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Ul(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function B0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&tr("WebGLRenderer: "+n+" extension not supported."),s}}}function z0(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,x=u.attributes.position;let g=0;if(f!==null){const E=f.array;g=f.version;for(let b=0,M=E.length;b<M;b+=3){const w=E[b+0],A=E[b+1],P=E[b+2];d.push(w,A,A,P,P,w)}}else if(x!==void 0){const E=x.array;g=x.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const w=b+0,A=b+1,P=b+2;d.push(w,A,A,P,P,w)}}else return;const m=new(Dh(d)?Bh:Oh)(d,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function k0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,d*a,x),t.update(f,n,x))}function h(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];t.update(m,n,1)}function u(d,f,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,x);let p=0;for(let E=0;E<x;E++)p+=f[E]*g[E];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function V0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function H0(i,e,t){const n=new WeakMap,s=new nt;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){z.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let w=o.attributes.position.count*M,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*A*4*u),z=new Uh(P,w,A,u);z.type=xn,z.needsUpdate=!0;const S=M*4;for(let T=0;T<u;T++){const D=p[T],F=E[T],B=b[T],k=w*A*4*T;for(let G=0;G<D.count;G++){const U=G*S;x===!0&&(s.fromBufferAttribute(D,G),P[k+U+0]=s.x,P[k+U+1]=s.y,P[k+U+2]=s.z,P[k+U+3]=0),g===!0&&(s.fromBufferAttribute(F,G),P[k+U+4]=s.x,P[k+U+5]=s.y,P[k+U+6]=s.z,P[k+U+7]=0),m===!0&&(s.fromBufferAttribute(B,G),P[k+U+8]=s.x,P[k+U+9]=s.y,P[k+U+10]=s.z,P[k+U+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:z,size:new Ve(w,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let m=0;m<l.length;m++)x+=l[m];const g=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function G0(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const eu=new Dt,Bl=new Yh(1,1),tu=new Uh,nu=new Nd,iu=new Hh,zl=[],kl=[],Vl=new Float32Array(16),Hl=new Float32Array(9),Gl=new Float32Array(4);function Es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=zl[s];if(r===void 0&&(r=new Float32Array(s),zl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function oa(i,e){let t=kl[e];t===void 0&&(t=new Int32Array(e),kl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function W0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function j0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Gl.set(n),i.uniformMatrix2fv(this.addr,!1,Gl),Pt(t,n)}}function K0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Hl.set(n),i.uniformMatrix3fv(this.addr,!1,Hl),Pt(t,n)}}function $0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Vl.set(n),i.uniformMatrix4fv(this.addr,!1,Vl),Pt(t,n)}}function Z0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function J0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function Q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function tx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function sx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function rx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bl.compareFunction=Ih,r=Bl):r=eu,t.setTexture2D(e||r,s)}function ax(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nu,s)}function ox(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||iu,s)}function cx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tu,s)}function lx(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return j0;case 35675:return K0;case 35676:return $0;case 5124:case 35670:return Z0;case 35667:case 35671:return J0;case 35668:case 35672:return Q0;case 35669:case 35673:return ex;case 5125:return tx;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return cx}}function hx(i,e){i.uniform1fv(this.addr,e)}function ux(i,e){const t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function dx(i,e){const t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function fx(i,e){const t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function px(i,e){const t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mx(i,e){const t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xx(i,e){const t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gx(i,e){i.uniform1iv(this.addr,e)}function _x(i,e){i.uniform2iv(this.addr,e)}function vx(i,e){i.uniform3iv(this.addr,e)}function Mx(i,e){i.uniform4iv(this.addr,e)}function yx(i,e){i.uniform1uiv(this.addr,e)}function bx(i,e){i.uniform2uiv(this.addr,e)}function Sx(i,e){i.uniform3uiv(this.addr,e)}function Tx(i,e){i.uniform4uiv(this.addr,e)}function Ex(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||eu,r[a])}function Ax(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nu,r[a])}function wx(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||iu,r[a])}function Rx(i,e,t){const n=this.cache,s=e.length,r=oa(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||tu,r[a])}function Cx(i){switch(i){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return xx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return vx;case 35669:case 35673:return Mx;case 5125:return yx;case 36294:return bx;case 36295:return Sx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Rx}}class Px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lx(t.type)}}class Lx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cx(t.type)}}class Ix{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Wl(i,e){i.seq.push(e),i.map[e.id]=e}function Dx(i,e,t){const n=i.name,s=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),a=$a.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Wl(t,l===void 0?new Px(o,i,e):new Lx(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ix(o),Wl(t,u)),t=u}}}class qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Dx(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Xl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ux=37297;let Nx=0;function Fx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ql=new We;function Ox(i){Qe._getMatrix(ql,Qe.workingColorSpace,i);const e=`mat3( ${ql.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Kr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Fx(i.getShaderSource(e),o)}else return r}function Bx(i,e){const t=Ox(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zx(i,e){let t;switch(e){case Yu:t="Linear";break;case ju:t="Reinhard";break;case Ku:t="Cineon";break;case bh:t="ACESFilmic";break;case Zu:t="AgX";break;case Ju:t="Neutral";break;case $u:t="Custom";break;default:we("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fr=new C;function kx(){Qe.getLuminanceCoefficients(Fr);const i=Fr.x.toFixed(4),e=Fr.y.toFixed(4),t=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Hx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hs(i){return i!==""}function jl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(i){return i.replace(Wx,qx)}const Xx=new Map;function qx(i,e){let t=qe[e];if(t===void 0){const n=Xx.get(e);if(n!==void 0)t=qe[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}const Yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(Yx,jx)}function jx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function $x(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case cs:e="ENVMAP_TYPE_CUBE";break;case na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===cs&&(e="ENVMAP_MODE_REFRACTION"),e}function Jx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nc:e="ENVMAP_BLENDING_MULTIPLY";break;case Xu:e="ENVMAP_BLENDING_MIX";break;case qu:e="ENVMAP_BLENDING_ADD";break}return e}function Qx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function eg(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Kx(t),l=$x(t),h=Zx(t),u=Jx(t),d=Qx(t),f=Vx(t),x=Hx(r),g=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(m=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?qe.tonemapping_pars_fragment:"",t.toneMapping!==hi?zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Bx("linearToOutputTexel",t.outputColorSpace),kx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),a=Yo(a),a=jl(a,t),a=Kl(a,t),o=Yo(o),o=jl(o,t),o=Kl(o,t),a=$l(a),o=$l(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+a,M=E+p+o,w=Xl(s,s.VERTEX_SHADER,b),A=Xl(s,s.FRAGMENT_SHADER,M);s.attachShader(g,w),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(T){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(w)||"",B=s.getShaderInfoLog(A)||"",k=D.trim(),G=F.trim(),U=B.trim();let N=!0,K=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,A);else{const q=Yl(s,w,"vertex"),te=Yl(s,A,"fragment");Ye("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+q+`
`+te)}else k!==""?we("WebGLProgram: Program Info Log:",k):(G===""||U==="")&&(K=!1);K&&(T.diagnostics={runnable:N,programLog:k,vertexShader:{log:G,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(w),s.deleteShader(A),z=new qr(s,g),S=Gx(s,g)}let z;this.getUniforms=function(){return z===void 0&&P(this),z};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,Ux)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}let tg=0;class ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ig(e),t.set(e,n)),n}}class ig{constructor(e){this.id=tg++,this.code=e,this.usedTimes=0}}function sg(i,e,t,n,s,r,a){const o=new Nh,c=new ng,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,T,D,F){const B=D.fog,k=F.geometry,G=S.isMeshStandardMaterial?D.environment:null,U=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),N=U&&U.mapping===na?U.image.height:null,K=x[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&we("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=q!==void 0?q.length:0;let ge=0;k.morphAttributes.position!==void 0&&(ge=1),k.morphAttributes.normal!==void 0&&(ge=2),k.morphAttributes.color!==void 0&&(ge=3);let Pe,Ee,Se,Y;if(K){const at=En[K];Pe=at.vertexShader,Ee=at.fragmentShader}else Pe=S.vertexShader,Ee=S.fragmentShader,c.update(S),Se=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);const $=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),_e=F.isInstancedMesh===!0,me=F.isBatchedMesh===!0,Ge=!!S.map,yt=!!S.matcap,Xe=!!U,rt=!!S.aoMap,L=!!S.lightMap,$e=!!S.bumpMap,Ze=!!S.normalMap,ut=!!S.displacementMap,ye=!!S.emissiveMap,gt=!!S.metalnessMap,Ce=!!S.roughnessMap,ke=S.anisotropy>0,R=S.clearcoat>0,_=S.dispersion>0,H=S.iridescence>0,Z=S.sheen>0,Q=S.transmission>0,j=ke&&!!S.anisotropyMap,Ae=R&&!!S.clearcoatMap,le=R&&!!S.clearcoatNormalMap,Le=R&&!!S.clearcoatRoughnessMap,be=H&&!!S.iridescenceMap,ee=H&&!!S.iridescenceThicknessMap,re=Z&&!!S.sheenColorMap,Fe=Z&&!!S.sheenRoughnessMap,De=!!S.specularMap,fe=!!S.specularColorMap,Be=!!S.specularIntensityMap,I=Q&&!!S.transmissionMap,he=Q&&!!S.thicknessMap,ae=!!S.gradientMap,oe=!!S.alphaMap,ne=S.alphaTest>0,J=!!S.alphaHash,ve=!!S.extensions;let ze=hi;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ze=i.toneMapping);const pt={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:Pe,fragmentShader:Ee,defines:S.defines,customVertexShaderID:Se,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:me,batchingColor:me&&F._colorsTexture!==null,instancing:_e,instancingColor:_e&&F.instanceColor!==null,instancingMorph:_e&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Wt,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:yt,envMap:Xe,envMapMode:Xe&&U.mapping,envMapCubeUVHeight:N,aoMap:rt,lightMap:L,bumpMap:$e,normalMap:Ze,displacementMap:d&&ut,emissiveMap:ye,normalMapObjectSpace:Ze&&S.normalMapType===sd,normalMapTangentSpace:Ze&&S.normalMapType===uc,metalnessMap:gt,roughnessMap:Ce,anisotropy:ke,anisotropyMap:j,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:le,clearcoatRoughnessMap:Le,dispersion:_,iridescence:H,iridescenceMap:be,iridescenceThicknessMap:ee,sheen:Z,sheenColorMap:re,sheenRoughnessMap:Fe,specularMap:De,specularColorMap:fe,specularIntensityMap:Be,transmission:Q,transmissionMap:I,thicknessMap:he,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Pi&&S.alphaToCoverage===!1,alphaMap:oe,alphaTest:ne,alphaHash:J,combine:S.combine,mapUv:Ge&&g(S.map.channel),aoMapUv:rt&&g(S.aoMap.channel),lightMapUv:L&&g(S.lightMap.channel),bumpMapUv:$e&&g(S.bumpMap.channel),normalMapUv:Ze&&g(S.normalMap.channel),displacementMapUv:ut&&g(S.displacementMap.channel),emissiveMapUv:ye&&g(S.emissiveMap.channel),metalnessMapUv:gt&&g(S.metalnessMap.channel),roughnessMapUv:Ce&&g(S.roughnessMap.channel),anisotropyMapUv:j&&g(S.anisotropyMap.channel),clearcoatMapUv:Ae&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:re&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(S.sheenRoughnessMap.channel),specularMapUv:De&&g(S.specularMap.channel),specularColorMapUv:fe&&g(S.specularColorMap.channel),specularIntensityMapUv:Be&&g(S.specularIntensityMap.channel),transmissionMapUv:I&&g(S.transmissionMap.channel),thicknessMapUv:he&&g(S.thicknessMap.channel),alphaMapUv:oe&&g(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ze||ke),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Ge||oe),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ie,skinning:F.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ge,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:ye&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&S.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)v.push(T),v.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(E(v,S),b(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function E(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function b(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function M(S){const v=x[S.type];let T;if(v){const D=En[v];T=kh.clone(D.uniforms)}else T=S.uniforms;return T}function w(S,v){let T;for(let D=0,F=h.length;D<F;D++){const B=h[D];if(B.cacheKey===v){T=B,++T.usedTimes;break}}return T===void 0&&(T=new eg(i,v,S,r),h.push(T)),T}function A(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function P(S){c.remove(S)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:z}}function rg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ag(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ql(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,x,g,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,d,f,x,g,m){const p=a(u,d,f,x,g,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,x,g,m){const p=a(u,d,f,x,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||ag),n.length>1&&n.sort(d||Jl),s.length>1&&s.sort(d||Jl)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function og(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ql,i.set(n,[a])):s>=r.length?(a=new Ql,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function cg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Te};break;case"SpotLight":t={position:new C,direction:new C,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function lg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hg=0;function ug(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dg(i){const e=new cg,t=lg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new Ne,a=new Ne;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,E=0,b=0,M=0,w=0,A=0,P=0;l.sort(ug);for(let S=0,v=l.length;S<v;S++){const T=l[S],D=T.color,F=T.intensity,B=T.distance,k=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=D.r*F,u+=D.g*F,d+=D.b*F;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],F);P++}else if(T.isDirectionalLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const U=T.shadow,N=t.get(T);N.shadowIntensity=U.intensity,N.shadowBias=U.bias,N.shadowNormalBias=U.normalBias,N.shadowRadius=U.radius,N.shadowMapSize=U.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=T.shadow.matrix,E++}n.directional[f]=G,f++}else if(T.isSpotLight){const G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(D).multiplyScalar(F),G.distance=B,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[g]=G;const U=T.shadow;if(T.map&&(n.spotLightMap[w]=T.map,w++,U.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[g]=U.matrix,T.castShadow){const N=t.get(T);N.shadowIntensity=U.intensity,N.shadowBias=U.bias,N.shadowNormalBias=U.normalBias,N.shadowRadius=U.radius,N.shadowMapSize=U.mapSize,n.spotShadow[g]=N,n.spotShadowMap[g]=k,M++}g++}else if(T.isRectAreaLight){const G=e.get(T);G.color.copy(D).multiplyScalar(F),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=G,m++}else if(T.isPointLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const U=T.shadow,N=t.get(T);N.shadowIntensity=U.intensity,N.shadowBias=U.bias,N.shadowNormalBias=U.normalBias,N.shadowRadius=U.radius,N.shadowMapSize=U.mapSize,N.shadowCameraNear=U.camera.near,N.shadowCameraFar=U.camera.far,n.pointShadow[x]=N,n.pointShadowMap[x]=k,n.pointShadowMatrix[x]=T.shadow.matrix,b++}n.point[x]=G,x++}else if(T.isHemisphereLight){const G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(F),G.groundColor.copy(T.groundColor).multiplyScalar(F),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const z=n.hash;(z.directionalLength!==f||z.pointLength!==x||z.spotLength!==g||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==E||z.numPointShadows!==b||z.numSpotShadows!==M||z.numSpotMaps!==w||z.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=x,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,z.directionalLength=f,z.pointLength=x,z.spotLength=g,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=E,z.numPointShadows=b,z.numSpotShadows=M,z.numSpotMaps=w,z.numLightProbes=P,n.version=hg++)}function c(l,h){let u=0,d=0,f=0,x=0,g=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const b=l[p];if(b.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function eh(i){const e=new dg(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function fg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new eh(i),e.set(s,[o])):r>=a.length?(o=new eh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xg(i,e,t){let n=new gc;const s=new Ve,r=new Ve,a=new nt,o=new uf({depthPacking:id}),c=new df,l={},h=t.maxTextureSize,u={[$n]:Kt,[Kt]:$n,[tn]:tn},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const x=new Mt;x.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new tt(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let p=this.type;this.render=function(A,P,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Xn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=p!==kn&&this.type===kn,B=p===kn&&this.type!==kn;for(let k=0,G=A.length;k<G;k++){const U=A[k],N=U.shadow;if(N===void 0){we("WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const K=N.getFrameExtents();if(s.multiply(K),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,N.mapSize.y=r.y)),N.map===null||F===!0||B===!0){const te=this.type!==kn?{minFilter:Gt,magFilter:Gt}:{};N.map!==null&&N.map.dispose(),N.map=new Di(s.x,s.y,te),N.map.texture.name=U.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const q=N.getViewportCount();for(let te=0;te<q;te++){const ge=N.getViewport(te);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),D.viewport(a),N.updateMatrices(U,te),n=N.getFrustum(),M(P,z,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===kn&&E(N,z),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,T)};function E(A,P){const z=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Di(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,z,d,g,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,z,f,g,null)}function b(A,P,z,S){let v=null;const T=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)v=T;else if(v=z.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const D=v.uuid,F=P.uuid;let B=l[D];B===void 0&&(B={},l[D]=B);let k=B[F];k===void 0&&(k=v.clone(),B[F]=k,P.addEventListener("dispose",w)),v=k}if(v.visible=P.visible,v.wireframe=P.wireframe,S===kn?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:u[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,z.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=i.properties.get(v);D.light=z}return v}function M(A,P,z,S,v){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===kn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);const F=e.update(A),B=A.material;if(Array.isArray(B)){const k=F.groups;for(let G=0,U=k.length;G<U;G++){const N=k[G],K=B[N.materialIndex];if(K&&K.visible){const q=b(A,K,S,v);A.onBeforeShadow(i,A,P,z,F,q,N),i.renderBufferDirect(z,null,F,q,A,N),A.onAfterShadow(i,A,P,z,F,q,N)}}}else if(B.visible){const k=b(A,B,S,v);A.onBeforeShadow(i,A,P,z,F,k,null),i.renderBufferDirect(z,null,F,k,A,null),A.onAfterShadow(i,A,P,z,F,k,null)}}const D=A.children;for(let F=0,B=D.length;F<B;F++)M(D[F],P,z,S,v)}function w(A){A.target.removeEventListener("dispose",w);for(const z in l){const S=l[z],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const gg={[ro]:ao,[oo]:ho,[co]:uo,[as]:lo,[ao]:ro,[ho]:oo,[uo]:co,[lo]:as};function _g(i,e){function t(){let I=!1;const he=new nt;let ae=null;const oe=new nt(0,0,0,0);return{setMask:function(ne){ae!==ne&&!I&&(i.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){I=ne},setClear:function(ne,J,ve,ze,pt){pt===!0&&(ne*=ze,J*=ze,ve*=ze),he.set(ne,J,ve,ze),oe.equals(he)===!1&&(i.clearColor(ne,J,ve,ze),oe.copy(he))},reset:function(){I=!1,ae=null,oe.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,ae=null,oe=null,ne=null;return{setReversed:function(J){if(he!==J){const ve=e.get("EXT_clip_control");J?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),he=J;const ze=ne;ne=null,this.setClear(ze)}},getReversed:function(){return he},setTest:function(J){J?$(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(J){ae!==J&&!I&&(i.depthMask(J),ae=J)},setFunc:function(J){if(he&&(J=gg[J]),oe!==J){switch(J){case ro:i.depthFunc(i.NEVER);break;case ao:i.depthFunc(i.ALWAYS);break;case oo:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case co:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=J}},setLocked:function(J){I=J},setClear:function(J){ne!==J&&(he&&(J=1-J),i.clearDepth(J),ne=J)},reset:function(){I=!1,ae=null,oe=null,ne=null,he=!1}}}function s(){let I=!1,he=null,ae=null,oe=null,ne=null,J=null,ve=null,ze=null,pt=null;return{setTest:function(at){I||(at?$(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(at){he!==at&&!I&&(i.stencilMask(at),he=at)},setFunc:function(at,Sn,un){(ae!==at||oe!==Sn||ne!==un)&&(i.stencilFunc(at,Sn,un),ae=at,oe=Sn,ne=un)},setOp:function(at,Sn,un){(J!==at||ve!==Sn||ze!==un)&&(i.stencilOp(at,Sn,un),J=at,ve=Sn,ze=un)},setLocked:function(at){I=at},setClear:function(at){pt!==at&&(i.clearStencil(at),pt=at)},reset:function(){I=!1,he=null,ae=null,oe=null,ne=null,J=null,ve=null,ze=null,pt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,E=null,b=null,M=null,w=null,A=null,P=new Te(0,0,0),z=0,S=!1,v=null,T=null,D=null,F=null,B=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,U=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(N)[1]),G=U>=1):N.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),G=U>=2);let K=null,q={};const te=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Pe=new nt().fromArray(te),Ee=new nt().fromArray(ge);function Se(I,he,ae,oe){const ne=new Uint8Array(4),J=i.createTexture();i.bindTexture(I,J),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<ae;ve++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(he+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return J}const Y={};Y[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(as),$e(!1),Ze(Bc),$(i.CULL_FACE),rt(Xn);function $(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function ie(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function _e(I,he){return u[I]!==he?(i.bindFramebuffer(I,he),u[I]=he,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function me(I,he){let ae=f,oe=!1;if(I){ae=d.get(he),ae===void 0&&(ae=[],d.set(he,ae));const ne=I.textures;if(ae.length!==ne.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let J=0,ve=ne.length;J<ve;J++)ae[J]=i.COLOR_ATTACHMENT0+J;ae.length=ne.length,oe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,oe=!0);oe&&i.drawBuffers(ae)}function Ge(I){return x!==I?(i.useProgram(I),x=I,!0):!1}const yt={[Ti]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};yt[Pu]=i.MIN,yt[Lu]=i.MAX;const Xe={[Iu]:i.ZERO,[Du]:i.ONE,[Uu]:i.SRC_COLOR,[io]:i.SRC_ALPHA,[ku]:i.SRC_ALPHA_SATURATE,[Bu]:i.DST_COLOR,[Fu]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[so]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[Vu]:i.CONSTANT_COLOR,[Hu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(I,he,ae,oe,ne,J,ve,ze,pt,at){if(I===Xn){g===!0&&(ie(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),I!==wu){if(I!==m||at!==S){if((p!==Ti||M!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,M=Ti),at)switch(I){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",I);break}else switch(I){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zc:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kc:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",I);break}E=null,b=null,w=null,A=null,P.set(0,0,0),z=0,m=I,S=at}return}ne=ne||he,J=J||ae,ve=ve||oe,(he!==p||ne!==M)&&(i.blendEquationSeparate(yt[he],yt[ne]),p=he,M=ne),(ae!==E||oe!==b||J!==w||ve!==A)&&(i.blendFuncSeparate(Xe[ae],Xe[oe],Xe[J],Xe[ve]),E=ae,b=oe,w=J,A=ve),(ze.equals(P)===!1||pt!==z)&&(i.blendColor(ze.r,ze.g,ze.b,pt),P.copy(ze),z=pt),m=I,S=!1}function L(I,he){I.side===tn?ie(i.CULL_FACE):$(i.CULL_FACE);let ae=I.side===Kt;he&&(ae=!ae),$e(ae),I.blending===Pi&&I.transparent===!1?rt(Xn):rt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const oe=I.stencilWrite;o.setTest(oe),oe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ye(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function Ze(I){I!==Eu?($(i.CULL_FACE),I!==T&&(I===Bc?i.cullFace(i.BACK):I===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),T=I}function ut(I){I!==D&&(G&&i.lineWidth(I),D=I)}function ye(I,he,ae){I?($(i.POLYGON_OFFSET_FILL),(F!==he||B!==ae)&&(i.polygonOffset(he,ae),F=he,B=ae)):ie(i.POLYGON_OFFSET_FILL)}function gt(I){I?$(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function Ce(I){I===void 0&&(I=i.TEXTURE0+k-1),K!==I&&(i.activeTexture(I),K=I)}function ke(I,he,ae){ae===void 0&&(K===null?ae=i.TEXTURE0+k-1:ae=K);let oe=q[ae];oe===void 0&&(oe={type:void 0,texture:void 0},q[ae]=oe),(oe.type!==I||oe.texture!==he)&&(K!==ae&&(i.activeTexture(ae),K=ae),i.bindTexture(I,he||Y[I]),oe.type=I,oe.texture=he)}function R(){const I=q[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Z(){try{i.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Q(){try{i.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function le(){try{i.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Le(){try{i.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function be(){try{i.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ee(){try{i.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function re(I){Pe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Pe.copy(I))}function Fe(I){Ee.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ee.copy(I))}function De(I,he){let ae=l.get(he);ae===void 0&&(ae=new WeakMap,l.set(he,ae));let oe=ae.get(I);oe===void 0&&(oe=i.getUniformBlockIndex(he,I.name),ae.set(I,oe))}function fe(I,he){const oe=l.get(he).get(I);c.get(he)!==oe&&(i.uniformBlockBinding(he,oe,I.__bindingPointIndex),c.set(he,oe))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,q={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,E=null,b=null,M=null,w=null,A=null,P=new Te(0,0,0),z=0,S=!1,v=null,T=null,D=null,F=null,B=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:ie,bindFramebuffer:_e,drawBuffers:me,useProgram:Ge,setBlending:rt,setMaterial:L,setFlipSided:$e,setCullFace:Ze,setLineWidth:ut,setPolygonOffset:ye,setScissorTest:gt,activeTexture:Ce,bindTexture:ke,unbindTexture:R,compressedTexImage2D:_,compressedTexImage3D:H,texImage2D:be,texImage3D:ee,updateUBOMapping:De,uniformBlockBinding:fe,texStorage2D:le,texStorage3D:Le,texSubImage2D:Z,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:Ae,scissor:re,viewport:Fe,reset:Be}}function vg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ve,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,_){return f?new OffscreenCanvas(R,_):er("canvas")}function g(R,_,H){let Z=1;const Q=ke(R);if((Q.width>H||Q.height>H)&&(Z=H/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Z*Q.width),Ae=Math.floor(Z*Q.height);u===void 0&&(u=x(j,Ae));const le=_?x(j,Ae):u;return le.width=j,le.height=Ae,le.getContext("2d").drawImage(R,0,0,j,Ae),we("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+Ae+")."),le}else return"data"in R&&we("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,_,H,Z,Q=!1){if(R!==null){if(i[R]!==void 0)return i[R];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=_;if(_===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),_===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),_===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),_===i.RGBA){const Ae=Q?Kr:Qe.getTransfer(Z);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=Ae===ct?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(R,_){let H;return R?_===null||_===Ii||_===Ks?H=i.DEPTH24_STENCIL8:_===xn?H=i.DEPTH32F_STENCIL8:_===js&&(H=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ii||_===Ks?H=i.DEPTH_COMPONENT24:_===xn?H=i.DEPTH_COMPONENT32F:_===js&&(H=i.DEPTH_COMPONENT16),H}function w(R,_){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==Rt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function A(R){const _=R.target;_.removeEventListener("dispose",A),z(_),_.isVideoTexture&&h.delete(_)}function P(R){const _=R.target;_.removeEventListener("dispose",P),v(_)}function z(R){const _=n.get(R);if(_.__webglInit===void 0)return;const H=R.source,Z=d.get(H);if(Z){const Q=Z[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(R),Object.keys(Z).length===0&&d.delete(H)}n.remove(R)}function S(R){const _=n.get(R);i.deleteTexture(_.__webglTexture);const H=R.source,Z=d.get(H);delete Z[_.__cacheKey],a.memory.textures--}function v(R){const _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let Q=0;Q<_.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=R.textures;for(let Z=0,Q=H.length;Z<Q;Z++){const j=n.get(H[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(R)}let T=0;function D(){T=0}function F(){const R=T;return R>=s.maxTextures&&we("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),T+=1,R}function B(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function k(R,_){const H=n.get(R);if(R.isVideoTexture&&gt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){const Z=R.image;if(Z===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,R,_);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function G(R,_){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Y(H,R,_);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function U(R,_){const H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){Y(H,R,_);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function N(R,_){const H=n.get(R);if(R.version>0&&H.__version!==R.version){$(H,R,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}const K={[ls]:i.REPEAT,[An]:i.CLAMP_TO_EDGE,[jr]:i.MIRRORED_REPEAT},q={[Gt]:i.NEAREST,[Th]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[Rt]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},te={[rd]:i.NEVER,[ud]:i.ALWAYS,[ad]:i.LESS,[Ih]:i.LEQUAL,[od]:i.EQUAL,[hd]:i.GEQUAL,[cd]:i.GREATER,[ld]:i.NOTEQUAL};function ge(R,_){if(_.type===xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Rt||_.magFilter===kr||_.magFilter===Vs||_.magFilter===Vn||_.minFilter===Rt||_.minFilter===kr||_.minFilter===Vs||_.minFilter===Vn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,K[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,K[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,K[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,q[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,q[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,te[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==Vs&&_.minFilter!==Vn||_.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Pe(R,_){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",A));const Z=_.source;let Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));const j=B(_);if(j!==R.__cacheKey){Q[j]===void 0&&(Q[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[j].usedTimes++;const Ae=Q[R.__cacheKey];Ae!==void 0&&(Q[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(_)),R.__cacheKey=j,R.__webglTexture=Q[j].texture}return H}function Ee(R,_,H){return Math.floor(Math.floor(R/H)/_)}function Se(R,_,H,Z){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,H,Z,_.data);else{j.sort((ee,re)=>ee.start-re.start);let Ae=0;for(let ee=1;ee<j.length;ee++){const re=j[Ae],Fe=j[ee],De=re.start+re.count,fe=Ee(Fe.start,_.width,4),Be=Ee(re.start,_.width,4);Fe.start<=De+1&&fe===Be&&Ee(Fe.start+Fe.count-1,_.width,4)===fe?re.count=Math.max(re.count,Fe.start+Fe.count-re.start):(++Ae,j[Ae]=Fe)}j.length=Ae+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ee=0,re=j.length;ee<re;ee++){const Fe=j[ee],De=Math.floor(Fe.start/4),fe=Math.ceil(Fe.count/4),Be=De%_.width,I=Math.floor(De/_.width),he=fe,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Be,I,he,ae,H,Z,_.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function Y(R,_,H){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);const Q=Pe(R,_),j=_.source;t.bindTexture(Z,R.__webglTexture,i.TEXTURE0+H);const Ae=n.get(j);if(j.version!==Ae.__version||Q===!0){t.activeTexture(i.TEXTURE0+H);const le=Qe.getPrimaries(Qe.workingColorSpace),Le=_.colorSpace===oi?null:Qe.getPrimaries(_.colorSpace),be=_.colorSpace===oi||le===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let ee=g(_.image,!1,s.maxTextureSize);ee=Ce(_,ee);const re=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type);let De=b(_.internalFormat,re,Fe,_.colorSpace,_.isVideoTexture);ge(Z,_);let fe;const Be=_.mipmaps,I=_.isVideoTexture!==!0,he=Ae.__version===void 0||Q===!0,ae=j.dataReady,oe=w(_,ee);if(_.isDepthTexture)De=M(_.format===Zs,_.type),he&&(I?t.texStorage2D(i.TEXTURE_2D,1,De,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,De,ee.width,ee.height,0,re,Fe,null));else if(_.isDataTexture)if(Be.length>0){I&&he&&t.texStorage2D(i.TEXTURE_2D,oe,De,Be[0].width,Be[0].height);for(let ne=0,J=Be.length;ne<J;ne++)fe=Be[ne],I?ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,re,Fe,fe.data):t.texImage2D(i.TEXTURE_2D,ne,De,fe.width,fe.height,0,re,Fe,fe.data);_.generateMipmaps=!1}else I?(he&&t.texStorage2D(i.TEXTURE_2D,oe,De,ee.width,ee.height),ae&&Se(_,ee,re,Fe)):t.texImage2D(i.TEXTURE_2D,0,De,ee.width,ee.height,0,re,Fe,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,De,Be[0].width,Be[0].height,ee.depth);for(let ne=0,J=Be.length;ne<J;ne++)if(fe=Be[ne],_.format!==jt)if(re!==null)if(I){if(ae)if(_.layerUpdates.size>0){const ve=Ll(fe.width,fe.height,_.format,_.type);for(const ze of _.layerUpdates){const pt=fe.data.subarray(ze*ve/fe.data.BYTES_PER_ELEMENT,(ze+1)*ve/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ze,fe.width,fe.height,1,re,pt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ee.depth,re,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,De,fe.width,fe.height,ee.depth,0,fe.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,ee.depth,re,Fe,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,De,fe.width,fe.height,ee.depth,0,re,Fe,fe.data)}else{I&&he&&t.texStorage2D(i.TEXTURE_2D,oe,De,Be[0].width,Be[0].height);for(let ne=0,J=Be.length;ne<J;ne++)fe=Be[ne],_.format!==jt?re!==null?I?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,re,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,De,fe.width,fe.height,0,fe.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,re,Fe,fe.data):t.texImage2D(i.TEXTURE_2D,ne,De,fe.width,fe.height,0,re,Fe,fe.data)}else if(_.isDataArrayTexture)if(I){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,De,ee.width,ee.height,ee.depth),ae)if(_.layerUpdates.size>0){const ne=Ll(ee.width,ee.height,_.format,_.type);for(const J of _.layerUpdates){const ve=ee.data.subarray(J*ne/ee.data.BYTES_PER_ELEMENT,(J+1)*ne/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ee.width,ee.height,1,re,Fe,ve)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,re,Fe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ee.width,ee.height,ee.depth,0,re,Fe,ee.data);else if(_.isData3DTexture)I?(he&&t.texStorage3D(i.TEXTURE_3D,oe,De,ee.width,ee.height,ee.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,re,Fe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,De,ee.width,ee.height,ee.depth,0,re,Fe,ee.data);else if(_.isFramebufferTexture){if(he)if(I)t.texStorage2D(i.TEXTURE_2D,oe,De,ee.width,ee.height);else{let ne=ee.width,J=ee.height;for(let ve=0;ve<oe;ve++)t.texImage2D(i.TEXTURE_2D,ve,De,ne,J,0,re,Fe,null),ne>>=1,J>>=1}}else if(Be.length>0){if(I&&he){const ne=ke(Be[0]);t.texStorage2D(i.TEXTURE_2D,oe,De,ne.width,ne.height)}for(let ne=0,J=Be.length;ne<J;ne++)fe=Be[ne],I?ae&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,re,Fe,fe):t.texImage2D(i.TEXTURE_2D,ne,De,re,Fe,fe);_.generateMipmaps=!1}else if(I){if(he){const ne=ke(ee);t.texStorage2D(i.TEXTURE_2D,oe,De,ne.width,ne.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Fe,ee)}else t.texImage2D(i.TEXTURE_2D,0,De,re,Fe,ee);m(_)&&p(Z),Ae.__version=j.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function $(R,_,H){if(_.image.length!==6)return;const Z=Pe(R,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);const j=n.get(Q);if(Q.version!==j.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const Ae=Qe.getPrimaries(Qe.workingColorSpace),le=_.colorSpace===oi?null:Qe.getPrimaries(_.colorSpace),Le=_.colorSpace===oi||Ae===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const be=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,re=[];for(let J=0;J<6;J++)!be&&!ee?re[J]=g(_.image[J],!0,s.maxCubemapSize):re[J]=ee?_.image[J].image:_.image[J],re[J]=Ce(_,re[J]);const Fe=re[0],De=r.convert(_.format,_.colorSpace),fe=r.convert(_.type),Be=b(_.internalFormat,De,fe,_.colorSpace),I=_.isVideoTexture!==!0,he=j.__version===void 0||Z===!0,ae=Q.dataReady;let oe=w(_,Fe);ge(i.TEXTURE_CUBE_MAP,_);let ne;if(be){I&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Be,Fe.width,Fe.height);for(let J=0;J<6;J++){ne=re[J].mipmaps;for(let ve=0;ve<ne.length;ve++){const ze=ne[ve];_.format!==jt?De!==null?I?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,ze.width,ze.height,De,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,Be,ze.width,ze.height,0,ze.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,ze.width,ze.height,De,fe,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,Be,ze.width,ze.height,0,De,fe,ze.data)}}}else{if(ne=_.mipmaps,I&&he){ne.length>0&&oe++;const J=ke(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Be,J.width,J.height)}for(let J=0;J<6;J++)if(ee){I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,re[J].width,re[J].height,De,fe,re[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,re[J].width,re[J].height,0,De,fe,re[J].data);for(let ve=0;ve<ne.length;ve++){const pt=ne[ve].image[J].image;I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,pt.width,pt.height,De,fe,pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,Be,pt.width,pt.height,0,De,fe,pt.data)}}else{I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,fe,re[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,De,fe,re[J]);for(let ve=0;ve<ne.length;ve++){const ze=ne[ve];I?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,De,fe,ze.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,Be,De,fe,ze.image[J])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),j.__version=Q.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ie(R,_,H,Z,Q,j){const Ae=r.convert(H.format,H.colorSpace),le=r.convert(H.type),Le=b(H.internalFormat,Ae,le,H.colorSpace),be=n.get(_),ee=n.get(H);if(ee.__renderTarget=_,!be.__hasExternalTextures){const re=Math.max(1,_.width>>j),Fe=Math.max(1,_.height>>j);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Le,re,Fe,_.depth,0,Ae,le,null):t.texImage2D(Q,j,Le,re,Fe,0,Ae,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ye(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,ee.__webglTexture,0,ut(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,ee.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(R,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){const Z=_.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,j=M(_.stencilBuffer,Q),Ae=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=ut(_);ye(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,j,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,R)}else{const Z=_.textures;for(let Q=0;Q<Z.length;Q++){const j=Z[Q],Ae=r.convert(j.format,j.colorSpace),le=r.convert(j.type),Le=b(j.internalFormat,Ae,le,j.colorSpace),be=ut(_);H&&ye(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,Le,_.width,_.height):ye(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,Le,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Le,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(R,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k(_.depthTexture,0);const Q=Z.__webglTexture,j=ut(_);if(_.depthTexture.format===$s)ye(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===Zs)ye(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ge(R){const _=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=Z}if(R.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const Z=R.texture.mipmaps;Z&&Z.length>0?me(_.__webglFramebuffer[0],R):me(_.__webglFramebuffer,R)}else if(H){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),_e(_.__webglDepthbuffer[Z],R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),_e(_.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(R,_,H){const Z=n.get(R);_!==void 0&&ie(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ge(R)}function Xe(R){const _=R.texture,H=n.get(R),Z=n.get(_);R.addEventListener("dispose",P);const Q=R.textures,j=R.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let Le=0;Le<_.mipmaps.length;Le++)H.__webglFramebuffer[le][Le]=i.createFramebuffer()}else H.__webglFramebuffer[le]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<_.mipmaps.length;le++)H.__webglFramebuffer[le]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let le=0,Le=Q.length;le<Le;le++){const be=n.get(Q[le]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ye(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<Q.length;le++){const Le=Q[le];H.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const be=r.convert(Le.format,Le.colorSpace),ee=r.convert(Le.type),re=b(Le.internalFormat,be,ee,Le.colorSpace,R.isXRRenderTarget===!0),Fe=ut(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,re,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,H.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),ge(i.TEXTURE_CUBE_MAP,_);for(let le=0;le<6;le++)if(_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)ie(H.__webglFramebuffer[le][Le],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le);else ie(H.__webglFramebuffer[le],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let le=0,Le=Q.length;le<Le;le++){const be=Q[le],ee=n.get(be);let re=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,ee.__webglTexture),ge(re,be),ie(H.__webglFramebuffer,R,be,i.COLOR_ATTACHMENT0+le,re,0),m(be)&&p(re)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),ge(le,_),_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)ie(H.__webglFramebuffer[Le],R,_,i.COLOR_ATTACHMENT0,le,Le);else ie(H.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,le,0);m(_)&&p(le),t.unbindTexture()}R.depthBuffer&&Ge(R)}function rt(R){const _=R.textures;for(let H=0,Z=_.length;H<Z;H++){const Q=_[H];if(m(Q)){const j=E(R),Ae=n.get(Q).__webglTexture;t.bindTexture(j,Ae),p(j),t.unbindTexture()}}}const L=[],$e=[];function Ze(R){if(R.samples>0){if(ye(R)===!1){const _=R.textures,H=R.width,Z=R.height;let Q=i.COLOR_BUFFER_BIT;const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(R),le=_.length>1;if(le)for(let be=0;be<_.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Le=R.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let be=0;be<_.length;be++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);const ee=n.get(_[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,Q,i.NEAREST),c===!0&&(L.length=0,$e.length=0,L.push(i.COLOR_ATTACHMENT0+be),R.depthBuffer&&R.resolveDepthBuffer===!1&&(L.push(j),$e.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<_.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[be]);const ee=n.get(_[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ut(R){return Math.min(s.maxSamples,R.samples)}function ye(R){const _=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function gt(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function Ce(R,_){const H=R.colorSpace,Z=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Wt&&H!==oi&&(Qe.getTransfer(H)===ct?(Z!==jt||Q!==Pn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",H)),_}function ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=U,this.setTextureCube=N,this.rebindTextures=yt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ye}function Mg(i,e){function t(n,s=oi){let r;const a=Qe.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===Ah)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===ic)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===_s)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ph)return i.RGB;if(n===jt)return i.RGBA;if(n===$s)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===ac)return i.RED;if(n===oc)return i.RED_INTEGER;if(n===cc)return i.RG;if(n===lc)return i.RG_INTEGER;if(n===hc)return i.RGBA_INTEGER;if(n===Vr||n===Hr||n===Gr||n===Wr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===xo||n===go||n===_o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===Mo||n===yo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===Mo)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bo||n===So||n===To||n===Eo||n===Ao||n===wo||n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===Uo||n===No)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Co)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===No)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===Oo||n===Bo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zo||n===ko||n===Vo||n===Ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new jh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vn({vertexShader:yg,fragmentShader:bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tg extends vs{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,x=null;const g=typeof XRWebGLBinding<"u",m=new Sg,p={},E=t.getContextAttributes();let b=null,M=null;const w=[],A=[],P=new Ve;let z=null;const S=new Vt;S.viewport=new nt;const v=new Vt;v.viewport=new nt;const T=[S,v],D=new Uf;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=w[Y];return $===void 0&&($=new Oa,w[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=w[Y];return $===void 0&&($=new Oa,w[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=w[Y];return $===void 0&&($=new Oa,w[Y]=$),$.getHandSpace()};function k(Y){const $=A.indexOf(Y.inputSource);if($===-1)return;const ie=w[$];ie!==void 0&&(ie.update(Y.inputSource,Y.frame,l||a),ie.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",U);for(let Y=0;Y<w.length;Y++){const $=A[Y];$!==null&&(A[Y]=null,w[Y].disconnect($))}F=null,B=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(b),f=null,d=null,u=null,s=null,M=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",G),s.addEventListener("inputsourceschange",U),E.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,_e=null,me=null;E.depth&&(me=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=E.stencil?Zs:$s,_e=E.stencil?Ks:Ii);const Ge={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Di(d.textureWidth,d.textureHeight,{format:jt,type:Pn,depthTexture:new Yh(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Di(f.framebufferWidth,f.framebufferHeight,{format:jt,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Se.setContext(s),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(Y){for(let $=0;$<Y.removed.length;$++){const ie=Y.removed[$],_e=A.indexOf(ie);_e>=0&&(A[_e]=null,w[_e].disconnect(ie))}for(let $=0;$<Y.added.length;$++){const ie=Y.added[$];let _e=A.indexOf(ie);if(_e===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=A.length){A.push(ie),_e=Ge;break}else if(A[Ge]===null){A[Ge]=ie,_e=Ge;break}if(_e===-1)break}const me=w[_e];me&&me.connect(ie)}}const N=new C,K=new C;function q(Y,$,ie){N.setFromMatrixPosition($.matrixWorld),K.setFromMatrixPosition(ie.matrixWorld);const _e=N.distanceTo(K),me=$.projectionMatrix.elements,Ge=ie.projectionMatrix.elements,yt=me[14]/(me[10]-1),Xe=me[14]/(me[10]+1),rt=(me[9]+1)/me[5],L=(me[9]-1)/me[5],$e=(me[8]-1)/me[0],Ze=(Ge[8]+1)/Ge[0],ut=yt*$e,ye=yt*Ze,gt=_e/(-$e+Ze),Ce=gt*-$e;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ce),Y.translateZ(gt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),me[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ke=yt+gt,R=Xe+gt,_=ut-Ce,H=ye+(_e-Ce),Z=rt*Xe/R*ke,Q=L*Xe/R*ke;Y.projectionMatrix.makePerspective(_,H,Z,Q,ke,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function te(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,ie=Y.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),D.near=v.near=S.near=$,D.far=v.far=S.far=ie,(F!==D.near||B!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),F=D.near,B=D.far),D.layers.mask=Y.layers.mask|6,S.layers.mask=D.layers.mask&3,v.layers.mask=D.layers.mask&5;const _e=Y.parent,me=D.cameras;te(D,_e);for(let Ge=0;Ge<me.length;Ge++)te(me[Ge],_e);me.length===2?q(D,S,v):D.projectionMatrix.copy(S.projectionMatrix),ge(Y,D,_e)};function ge(Y,$,ie){ie===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(ie.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=hs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Y){return p[Y]};let Pe=null;function Ee(Y,$){if(h=$.getViewerPose(l||a),x=$,h!==null){const ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let _e=!1;ie.length!==D.cameras.length&&(D.cameras.length=0,_e=!0);for(let Xe=0;Xe<ie.length;Xe++){const rt=ie[Xe];let L=null;if(f!==null)L=f.getViewport(rt);else{const Ze=u.getViewSubImage(d,rt);L=Ze.viewport,Xe===0&&(e.setRenderTargetTextures(M,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(M))}let $e=T[Xe];$e===void 0&&($e=new Vt,$e.layers.enable(Xe),$e.viewport=new nt,T[Xe]=$e),$e.matrix.fromArray(rt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(rt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(L.x,L.y,L.width,L.height),Xe===0&&(D.matrix.copy($e.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),_e===!0&&D.cameras.push($e)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const Xe=u.getDepthInformation(ie[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,s.renderState)}if(me&&me.includes("camera-access")&&g){e.state.unbindTexture(),u=n.getBinding();for(let Xe=0;Xe<ie.length;Xe++){const rt=ie[Xe].camera;if(rt){let L=p[rt];L||(L=new jh,p[rt]=L);const $e=u.getCameraImage(rt);L.sourceTexture=$e}}}}for(let ie=0;ie<w.length;ie++){const _e=A[ie],me=w[ie];_e!==null&&me!==void 0&&me.update(_e,$,l||a)}Pe&&Pe(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),x=null}const Se=new Qh;Se.setAnimationLoop(Ee),this.setAnimationLoop=function(Y){Pe=Y},this.dispose=function(){}}}const Mi=new _n,Eg=new Ne;function Ag(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,Mi.copy(M),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Mi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const M=b.program;n.uniformBlockBinding(E,M)}function l(E,b){let M=s[E.id];M===void 0&&(x(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));const w=b.program;n.updateUBOMapping(E,w);const A=e.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){const b=u();E.__bindingPointIndex=b;const M=i.createBuffer(),w=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=s[E.id],M=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,P=M.length;A<P;A++){const z=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,v=z.length;S<v;S++){const T=z[S];if(f(T,A,S,w)===!0){const D=T.__offset,F=Array.isArray(T.value)?T.value:[T.value];let B=0;for(let k=0;k<F.length;k++){const G=F[k],U=g(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,D+B,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,B),B+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,b,M,w){const A=E.value,P=b+"_"+M;if(w[P]===void 0)return typeof A=="number"||typeof A=="boolean"?w[P]=A:w[P]=A.clone(),!0;{const z=w[P];if(typeof A=="number"||typeof A=="boolean"){if(z!==A)return w[P]=A,!0}else if(z.equals(A)===!1)return z.copy(A),!0}return!1}function x(E){const b=E.uniforms;let M=0;const w=16;for(let P=0,z=b.length;P<z;P++){const S=Array.isArray(b[P])?b[P]:[b[P]];for(let v=0,T=S.length;v<T;v++){const D=S[v],F=Array.isArray(D.value)?D.value:[D.value];for(let B=0,k=F.length;B<k;B++){const G=F[B],U=g(G),N=M%w,K=N%U.boundary,q=N+K;M+=K,q!==0&&w-q<U.storage&&(M+=w-q),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=U.storage}}}const A=M%w;return A>0&&(M+=w-A),E.__size=M,E.__cache={},this}function g(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):we("WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}const Rg=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let zn=null;function Cg(){return zn===null&&(zn=new ir(Rg,32,32,cc,_s),zn.minFilter=Rt,zn.magFilter=Rt,zn.wrapS=An,zn.wrapT=An,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class Pg{constructor(e={}){const{canvas:t=dd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const x=new Set([hc,lc,oc]),g=new Set([Pn,Ii,js,Ks,sc,rc]),m=new Uint32Array(4),p=new Int32Array(4);let E=null,b=null;const M=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1;this._outputColorSpace=It;let z=0,S=0,v=null,T=-1,D=null;const F=new nt,B=new nt;let k=null;const G=new Te(0);let U=0,N=t.width,K=t.height,q=1,te=null,ge=null;const Pe=new nt(0,0,N,K),Ee=new nt(0,0,N,K);let Se=!1;const Y=new gc;let $=!1,ie=!1;const _e=new Ne,me=new C,Ge=new nt,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function rt(){return v===null?q:1}let L=n;function $e(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tc}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",ve,!1),L===null){const O="webgl2";if(L=$e(O,y),L===null)throw $e(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw y("WebGLRenderer: "+y.message),y}let Ze,ut,ye,gt,Ce,ke,R,_,H,Z,Q,j,Ae,le,Le,be,ee,re,Fe,De,fe,Be,I,he;function ae(){Ze=new B0(L),Ze.init(),Be=new Mg(L,Ze),ut=new C0(L,Ze,e,Be),ye=new _g(L,Ze),ut.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),gt=new V0(L),Ce=new rg,ke=new vg(L,Ze,ye,Ce,ut,Be,gt),R=new L0(A),_=new O0(A),H=new Xf(L),I=new w0(L,H),Z=new z0(L,H,gt,I),Q=new G0(L,Z,H,gt),Fe=new H0(L,ut,ke),be=new P0(Ce),j=new sg(A,R,_,Ze,ut,I,be),Ae=new Ag(A,Ce),le=new og,Le=new fg(Ze),re=new A0(A,R,_,ye,Q,f,c),ee=new xg(A,Q,ut),he=new wg(L,gt,ut,ye),De=new R0(L,Ze,gt),fe=new k0(L,Ze,gt),gt.programs=j.programs,A.capabilities=ut,A.extensions=Ze,A.properties=Ce,A.renderLists=le,A.shadowMap=ee,A.state=ye,A.info=gt}ae();const oe=new Tg(A,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Ze.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ze.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(y){y!==void 0&&(q=y,this.setSize(N,K,!1))},this.getSize=function(y){return y.set(N,K)},this.setSize=function(y,O,W=!0){if(oe.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}N=y,K=O,t.width=Math.floor(y*q),t.height=Math.floor(O*q),W===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(N*q,K*q).floor()},this.setDrawingBufferSize=function(y,O,W){N=y,K=O,q=W,t.width=Math.floor(y*W),t.height=Math.floor(O*W),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(F)},this.getViewport=function(y){return y.copy(Pe)},this.setViewport=function(y,O,W,X){y.isVector4?Pe.set(y.x,y.y,y.z,y.w):Pe.set(y,O,W,X),ye.viewport(F.copy(Pe).multiplyScalar(q).round())},this.getScissor=function(y){return y.copy(Ee)},this.setScissor=function(y,O,W,X){y.isVector4?Ee.set(y.x,y.y,y.z,y.w):Ee.set(y,O,W,X),ye.scissor(B.copy(Ee).multiplyScalar(q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(y){ye.setScissorTest(Se=y)},this.setOpaqueSort=function(y){te=y},this.setTransparentSort=function(y){ge=y},this.getClearColor=function(y){return y.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,W=!0){let X=0;if(y){let V=!1;if(v!==null){const se=v.texture.format;V=x.has(se)}if(V){const se=v.texture.type,de=g.has(se),Me=re.getClearColor(),xe=re.getClearAlpha(),Ue=Me.r,Oe=Me.g,Re=Me.b;de?(m[0]=Ue,m[1]=Oe,m[2]=Re,m[3]=xe,L.clearBufferuiv(L.COLOR,0,m)):(p[0]=Ue,p[1]=Oe,p[2]=Re,p[3]=xe,L.clearBufferiv(L.COLOR,0,p))}else X|=L.COLOR_BUFFER_BIT}O&&(X|=L.DEPTH_BUFFER_BIT),W&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),re.dispose(),le.dispose(),Le.dispose(),Ce.dispose(),R.dispose(),_.dispose(),Q.dispose(),I.dispose(),he.dispose(),j.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Lc),oe.removeEventListener("sessionend",Ic),fi.stop()};function ne(y){y.preventDefault(),Zr("WebGLRenderer: Context Lost."),P=!0}function J(){Zr("WebGLRenderer: Context Restored."),P=!1;const y=gt.autoReset,O=ee.enabled,W=ee.autoUpdate,X=ee.needsUpdate,V=ee.type;ae(),gt.autoReset=y,ee.enabled=O,ee.autoUpdate=W,ee.needsUpdate=X,ee.type=V}function ve(y){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ze(y){const O=y.target;O.removeEventListener("dispose",ze),pt(O)}function pt(y){at(y),Ce.remove(y)}function at(y){const O=Ce.get(y).programs;O!==void 0&&(O.forEach(function(W){j.releaseProgram(W)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,W,X,V,se){O===null&&(O=yt);const de=V.isMesh&&V.matrixWorld.determinant()<0,Me=vu(y,O,W,X,V);ye.setMaterial(X,de);let xe=W.index,Ue=1;if(X.wireframe===!0){if(xe=Z.getWireframeAttribute(W),xe===void 0)return;Ue=2}const Oe=W.drawRange,Re=W.attributes.position;let Je=Oe.start*Ue,ot=(Oe.start+Oe.count)*Ue;se!==null&&(Je=Math.max(Je,se.start*Ue),ot=Math.min(ot,(se.start+se.count)*Ue)),xe!==null?(Je=Math.max(Je,0),ot=Math.min(ot,xe.count)):Re!=null&&(Je=Math.max(Je,0),ot=Math.min(ot,Re.count));const bt=ot-Je;if(bt<0||bt===1/0)return;I.setup(V,X,Me,W,xe);let St,ht=De;if(xe!==null&&(St=H.get(xe),ht=fe,ht.setIndex(St)),V.isMesh)X.wireframe===!0?(ye.setLineWidth(X.wireframeLinewidth*rt()),ht.setMode(L.LINES)):ht.setMode(L.TRIANGLES);else if(V.isLine){let Ie=X.linewidth;Ie===void 0&&(Ie=1),ye.setLineWidth(Ie*rt()),V.isLineSegments?ht.setMode(L.LINES):V.isLineLoop?ht.setMode(L.LINE_LOOP):ht.setMode(L.LINE_STRIP)}else V.isPoints?ht.setMode(L.POINTS):V.isSprite&&ht.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)tr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ht.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ie=V._multiDrawStarts,_t=V._multiDrawCounts,et=V._multiDrawCount,Zt=xe?H.get(xe).bytesPerElement:1,Ui=Ce.get(X).currentProgram.getUniforms();for(let Jt=0;Jt<et;Jt++)Ui.setValue(L,"_gl_DrawID",Jt),ht.render(Ie[Jt]/Zt,_t[Jt])}else if(V.isInstancedMesh)ht.renderInstances(Je,bt,V.count);else if(W.isInstancedBufferGeometry){const Ie=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_t=Math.min(W.instanceCount,Ie);ht.renderInstances(Je,bt,_t)}else ht.render(Je,bt)};function Sn(y,O,W){y.transparent===!0&&y.side===tn&&y.forceSinglePass===!1?(y.side=Kt,y.needsUpdate=!0,or(y,O,W),y.side=$n,y.needsUpdate=!0,or(y,O,W),y.side=tn):or(y,O,W)}this.compile=function(y,O,W=null){W===null&&(W=y),b=Le.get(W),b.init(O),w.push(b),W.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),y!==W&&y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const X=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const se=V.material;if(se)if(Array.isArray(se))for(let de=0;de<se.length;de++){const Me=se[de];Sn(Me,W,V),X.add(Me)}else Sn(se,W,V),X.add(se)}),b=w.pop(),X},this.compileAsync=function(y,O,W=null){const X=this.compile(y,O,W);return new Promise(V=>{function se(){if(X.forEach(function(de){Ce.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){V(y);return}setTimeout(se,10)}Ze.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let un=null;function _u(y){un&&un(y)}function Lc(){fi.stop()}function Ic(){fi.start()}const fi=new Qh;fi.setAnimationLoop(_u),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(y){un=y,oe.setAnimationLoop(y),y===null?fi.stop():fi.start()},oe.addEventListener("sessionstart",Lc),oe.addEventListener("sessionend",Ic),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(O),O=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(A,y,O,v),b=Le.get(y,w.length),b.init(O),w.push(b),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(_e,wn,O.reversedDepth),ie=this.localClippingEnabled,$=be.init(this.clippingPlanes,ie),E=le.get(y,M.length),E.init(),M.push(E),oe.enabled===!0&&oe.isPresenting===!0){const se=A.xr.getDepthSensingMesh();se!==null&&pa(se,O,-1/0,A.sortObjects)}pa(y,O,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(te,ge),Xe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Xe&&re.addToRenderList(E,y),this.info.render.frame++,$===!0&&be.beginShadows();const W=b.state.shadowsArray;ee.render(W,y,O),$===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=E.opaque,V=E.transmissive;if(b.setupLights(),O.isArrayCamera){const se=O.cameras;if(V.length>0)for(let de=0,Me=se.length;de<Me;de++){const xe=se[de];Uc(X,V,y,xe)}Xe&&re.render(y);for(let de=0,Me=se.length;de<Me;de++){const xe=se[de];Dc(E,y,xe,xe.viewport)}}else V.length>0&&Uc(X,V,y,O),Xe&&re.render(y),Dc(E,y,O);v!==null&&S===0&&(ke.updateMultisampleRenderTarget(v),ke.updateRenderTargetMipmap(v)),y.isScene===!0&&y.onAfterRender(A,y,O),I.resetDefaultState(),T=-1,D=null,w.pop(),w.length>0?(b=w[w.length-1],$===!0&&be.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,M.pop(),M.length>0?E=M[M.length-1]:E=null};function pa(y,O,W,X){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Y.intersectsSprite(y)){X&&Ge.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_e);const de=Q.update(y),Me=y.material;Me.visible&&E.push(y,de,Me,W,Ge.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Y.intersectsObject(y))){const de=Q.update(y),Me=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ge.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ge.copy(de.boundingSphere.center)),Ge.applyMatrix4(y.matrixWorld).applyMatrix4(_e)),Array.isArray(Me)){const xe=de.groups;for(let Ue=0,Oe=xe.length;Ue<Oe;Ue++){const Re=xe[Ue],Je=Me[Re.materialIndex];Je&&Je.visible&&E.push(y,de,Je,W,Ge.z,Re)}}else Me.visible&&E.push(y,de,Me,W,Ge.z,null)}}const se=y.children;for(let de=0,Me=se.length;de<Me;de++)pa(se[de],O,W,X)}function Dc(y,O,W,X){const{opaque:V,transmissive:se,transparent:de}=y;b.setupLightsView(W),$===!0&&be.setGlobalState(A.clippingPlanes,W),X&&ye.viewport(F.copy(X)),V.length>0&&ar(V,O,W),se.length>0&&ar(se,O,W),de.length>0&&ar(de,O,W),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Uc(y,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[X.id]===void 0&&(b.state.transmissionRenderTarget[X.id]=new Di(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?_s:Pn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=b.state.transmissionRenderTarget[X.id],de=X.viewport||F;se.setSize(de.z*A.transmissionResolutionScale,de.w*A.transmissionResolutionScale);const Me=A.getRenderTarget(),xe=A.getActiveCubeFace(),Ue=A.getActiveMipmapLevel();A.setRenderTarget(se),A.getClearColor(G),U=A.getClearAlpha(),U<1&&A.setClearColor(16777215,.5),A.clear(),Xe&&re.render(W);const Oe=A.toneMapping;A.toneMapping=hi;const Re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),$===!0&&be.setGlobalState(A.clippingPlanes,X),ar(y,W,X),ke.updateMultisampleRenderTarget(se),ke.updateRenderTargetMipmap(se),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ot=0,bt=O.length;ot<bt;ot++){const St=O[ot],{object:ht,geometry:Ie,material:_t,group:et}=St;if(_t.side===tn&&ht.layers.test(X.layers)){const Zt=_t.side;_t.side=Kt,_t.needsUpdate=!0,Nc(ht,W,X,Ie,_t,et),_t.side=Zt,_t.needsUpdate=!0,Je=!0}}Je===!0&&(ke.updateMultisampleRenderTarget(se),ke.updateRenderTargetMipmap(se))}A.setRenderTarget(Me,xe,Ue),A.setClearColor(G,U),Re!==void 0&&(X.viewport=Re),A.toneMapping=Oe}function ar(y,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let V=0,se=y.length;V<se;V++){const de=y[V],{object:Me,geometry:xe,group:Ue}=de;let Oe=de.material;Oe.allowOverride===!0&&X!==null&&(Oe=X),Me.layers.test(W.layers)&&Nc(Me,O,W,xe,Oe,Ue)}}function Nc(y,O,W,X,V,se){y.onBeforeRender(A,O,W,X,V,se),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(A,O,W,X,y,se),V.transparent===!0&&V.side===tn&&V.forceSinglePass===!1?(V.side=Kt,V.needsUpdate=!0,A.renderBufferDirect(W,O,X,V,y,se),V.side=$n,V.needsUpdate=!0,A.renderBufferDirect(W,O,X,V,y,se),V.side=tn):A.renderBufferDirect(W,O,X,V,y,se),y.onAfterRender(A,O,W,X,V,se)}function or(y,O,W){O.isScene!==!0&&(O=yt);const X=Ce.get(y),V=b.state.lights,se=b.state.shadowsArray,de=V.state.version,Me=j.getParameters(y,V.state,se,O,W),xe=j.getProgramCacheKey(Me);let Ue=X.programs;X.environment=y.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(y.isMeshStandardMaterial?_:R).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Ue===void 0&&(y.addEventListener("dispose",ze),Ue=new Map,X.programs=Ue);let Oe=Ue.get(xe);if(Oe!==void 0){if(X.currentProgram===Oe&&X.lightsStateVersion===de)return Oc(y,Me),Oe}else Me.uniforms=j.getUniforms(y),y.onBeforeCompile(Me,A),Oe=j.acquireProgram(Me,xe),Ue.set(xe,Oe),X.uniforms=Me.uniforms;const Re=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Re.clippingPlanes=be.uniform),Oc(y,Me),X.needsLights=yu(y),X.lightsStateVersion=de,X.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.directionalShadowMap.value=V.state.directionalShadowMap,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotShadowMap.value=V.state.spotShadowMap,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMap.value=V.state.pointShadowMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Oe,X.uniformsList=null,Oe}function Fc(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=qr.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Oc(y,O){const W=Ce.get(y);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function vu(y,O,W,X,V){O.isScene!==!0&&(O=yt),ke.resetTextureUnits();const se=O.fog,de=X.isMeshStandardMaterial?O.environment:null,Me=v===null?A.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Wt,xe=(X.isMeshStandardMaterial?_:R).get(X.envMap||de),Ue=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Oe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!W.morphAttributes.position,Je=!!W.morphAttributes.normal,ot=!!W.morphAttributes.color;let bt=hi;X.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(bt=A.toneMapping);const St=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=St!==void 0?St.length:0,Ie=Ce.get(X),_t=b.state.lights;if($===!0&&(ie===!0||y!==D)){const Bt=y===D&&X.id===T;be.setState(X,y,Bt)}let et=!1;X.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==_t.state.version||Ie.outputColorSpace!==Me||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==xe||X.fog===!0&&Ie.fog!==se||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==be.numPlanes||Ie.numIntersection!==be.numIntersection)||Ie.vertexAlphas!==Ue||Ie.vertexTangents!==Oe||Ie.morphTargets!==Re||Ie.morphNormals!==Je||Ie.morphColors!==ot||Ie.toneMapping!==bt||Ie.morphTargetsCount!==ht)&&(et=!0):(et=!0,Ie.__version=X.version);let Zt=Ie.currentProgram;et===!0&&(Zt=or(X,O,V));let Ui=!1,Jt=!1,ws=!1;const vt=Zt.getUniforms(),Xt=Ie.uniforms;if(ye.useProgram(Zt.program)&&(Ui=!0,Jt=!0,ws=!0),X.id!==T&&(T=X.id,Jt=!0),Ui||D!==y){ye.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",y.projectionMatrix),vt.setValue(L,"viewMatrix",y.matrixWorldInverse);const qt=vt.map.cameraPosition;qt!==void 0&&qt.setValue(L,me.setFromMatrixPosition(y.matrixWorld)),ut.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),D!==y&&(D=y,Jt=!0,ws=!0)}if(V.isSkinnedMesh){vt.setOptional(L,V,"bindMatrix"),vt.setOptional(L,V,"bindMatrixInverse");const Bt=V.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),vt.setValue(L,"boneTexture",Bt.boneTexture,ke))}V.isBatchedMesh&&(vt.setOptional(L,V,"batchingTexture"),vt.setValue(L,"batchingTexture",V._matricesTexture,ke),vt.setOptional(L,V,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",V._indirectTexture,ke),vt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",V._colorsTexture,ke));const sn=W.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Fe.update(V,W,Zt),(Jt||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,vt.setValue(L,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Xt.envMap.value=xe,Xt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Xt.envMapIntensity.value=O.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Cg()),Jt&&(vt.setValue(L,"toneMappingExposure",A.toneMappingExposure),Ie.needsLights&&Mu(Xt,ws),se&&X.fog===!0&&Ae.refreshFogUniforms(Xt,se),Ae.refreshMaterialUniforms(Xt,X,q,K,b.state.transmissionRenderTarget[y.id]),qr.upload(L,Fc(Ie),Xt,ke)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qr.upload(L,Fc(Ie),Xt,ke),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(L,"center",V.center),vt.setValue(L,"modelViewMatrix",V.modelViewMatrix),vt.setValue(L,"normalMatrix",V.normalMatrix),vt.setValue(L,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Bt=X.uniformsGroups;for(let qt=0,ma=Bt.length;qt<ma;qt++){const pi=Bt[qt];he.update(pi,Zt),he.bind(pi,Zt)}}return Zt}function Mu(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function yu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(y,O,W){const X=Ce.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ce.get(y.texture).__webglTexture=O,Ce.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const W=Ce.get(y);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const bu=L.createFramebuffer();this.setRenderTarget=function(y,O=0,W=0){v=y,z=O,S=W;let X=!0,V=null,se=!1,de=!1;if(y){const xe=Ce.get(y);if(xe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(xe.__webglFramebuffer===void 0)ke.setupRenderTarget(y);else if(xe.__hasExternalTextures)ke.rebindTextures(y,Ce.get(y.texture).__webglTexture,Ce.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Re=y.depthTexture;if(xe.__boundDepthTexture!==Re){if(Re!==null&&Ce.has(Re)&&(y.width!==Re.image.width||y.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ke.setupDepthRenderbuffer(y)}}const Ue=y.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(de=!0);const Oe=Ce.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?V=Oe[O][W]:V=Oe[O],se=!0):y.samples>0&&ke.useMultisampledRTT(y)===!1?V=Ce.get(y).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[W]:V=Oe,F.copy(y.viewport),B.copy(y.scissor),k=y.scissorTest}else F.copy(Pe).multiplyScalar(q).floor(),B.copy(Ee).multiplyScalar(q).floor(),k=Se;if(W!==0&&(V=bu),ye.bindFramebuffer(L.FRAMEBUFFER,V)&&X&&ye.drawBuffers(y,V),ye.viewport(F),ye.scissor(B),ye.setScissorTest(k),se){const xe=Ce.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,W)}else if(de){const xe=O;for(let Ue=0;Ue<y.textures.length;Ue++){const Oe=Ce.get(y.textures[Ue]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,W,xe)}}else if(y!==null&&W!==0){const xe=Ce.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,W)}T=-1},this.readRenderTargetPixels=function(y,O,W,X,V,se,de,Me=0){if(!(y&&y.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe){ye.bindFramebuffer(L.FRAMEBUFFER,xe);try{const Ue=y.textures[Me],Oe=Ue.format,Re=Ue.type;if(!ut.textureFormatReadable(Oe)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Re)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-X&&W>=0&&W<=y.height-V&&(y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me),L.readPixels(O,W,X,V,Be.convert(Oe),Be.convert(Re),se))}finally{const Ue=v!==null?Ce.get(v).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(y,O,W,X,V,se,de,Me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(xe=xe[de]),xe)if(O>=0&&O<=y.width-X&&W>=0&&W<=y.height-V){ye.bindFramebuffer(L.FRAMEBUFFER,xe);const Ue=y.textures[Me],Oe=Ue.format,Re=Ue.type;if(!ut.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Me),L.readPixels(O,W,X,V,Be.convert(Oe),Be.convert(Re),0);const ot=v!==null?Ce.get(v).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,ot);const bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fd(L,bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(Je),L.deleteSync(bt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,W=0){const X=Math.pow(2,-W),V=Math.floor(y.image.width*X),se=Math.floor(y.image.height*X),de=O!==null?O.x:0,Me=O!==null?O.y:0;ke.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,de,Me,V,se),ye.unbindTexture()};const Su=L.createFramebuffer(),Tu=L.createFramebuffer();this.copyTextureToTexture=function(y,O,W=null,X=null,V=0,se=null){se===null&&(V!==0?(tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=V,V=0):se=0);let de,Me,xe,Ue,Oe,Re,Je,ot,bt;const St=y.isCompressedTexture?y.mipmaps[se]:y.image;if(W!==null)de=W.max.x-W.min.x,Me=W.max.y-W.min.y,xe=W.isBox3?W.max.z-W.min.z:1,Ue=W.min.x,Oe=W.min.y,Re=W.isBox3?W.min.z:0;else{const sn=Math.pow(2,-V);de=Math.floor(St.width*sn),Me=Math.floor(St.height*sn),y.isDataArrayTexture?xe=St.depth:y.isData3DTexture?xe=Math.floor(St.depth*sn):xe=1,Ue=0,Oe=0,Re=0}X!==null?(Je=X.x,ot=X.y,bt=X.z):(Je=0,ot=0,bt=0);const ht=Be.convert(O.format),Ie=Be.convert(O.type);let _t;O.isData3DTexture?(ke.setTexture3D(O,0),_t=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ke.setTexture2DArray(O,0),_t=L.TEXTURE_2D_ARRAY):(ke.setTexture2D(O,0),_t=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const et=L.getParameter(L.UNPACK_ROW_LENGTH),Zt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ui=L.getParameter(L.UNPACK_SKIP_PIXELS),Jt=L.getParameter(L.UNPACK_SKIP_ROWS),ws=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const vt=y.isDataArrayTexture||y.isData3DTexture,Xt=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const sn=Ce.get(y),Bt=Ce.get(O),qt=Ce.get(sn.__renderTarget),ma=Ce.get(Bt.__renderTarget);ye.bindFramebuffer(L.READ_FRAMEBUFFER,qt.__webglFramebuffer),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,ma.__webglFramebuffer);for(let pi=0;pi<xe;pi++)vt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(y).__webglTexture,V,Re+pi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(O).__webglTexture,se,bt+pi)),L.blitFramebuffer(Ue,Oe,de,Me,Je,ot,de,Me,L.DEPTH_BUFFER_BIT,L.NEAREST);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||Ce.has(y)){const sn=Ce.get(y),Bt=Ce.get(O);ye.bindFramebuffer(L.READ_FRAMEBUFFER,Su),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,Tu);for(let qt=0;qt<xe;qt++)vt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sn.__webglTexture,V,Re+qt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sn.__webglTexture,V),Xt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Bt.__webglTexture,se,bt+qt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Bt.__webglTexture,se),V!==0?L.blitFramebuffer(Ue,Oe,de,Me,Je,ot,de,Me,L.COLOR_BUFFER_BIT,L.NEAREST):Xt?L.copyTexSubImage3D(_t,se,Je,ot,bt+qt,Ue,Oe,de,Me):L.copyTexSubImage2D(_t,se,Je,ot,Ue,Oe,de,Me);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Xt?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(_t,se,Je,ot,bt,de,Me,xe,ht,Ie,St.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(_t,se,Je,ot,bt,de,Me,xe,ht,St.data):L.texSubImage3D(_t,se,Je,ot,bt,de,Me,xe,ht,Ie,St):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,se,Je,ot,de,Me,ht,Ie,St.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,se,Je,ot,St.width,St.height,ht,St.data):L.texSubImage2D(L.TEXTURE_2D,se,Je,ot,de,Me,ht,Ie,St);L.pixelStorei(L.UNPACK_ROW_LENGTH,et),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ui),L.pixelStorei(L.UNPACK_SKIP_ROWS,Jt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ws),se===0&&O.generateMipmaps&&L.generateMipmap(_t),ye.unbindTexture()},this.initRenderTarget=function(y){Ce.get(y).__webglFramebuffer===void 0&&ke.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ke.setTextureCube(y,0):y.isData3DTexture?ke.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ke.setTexture2DArray(y,0):ke.setTexture2D(y,0),ye.unbindTexture()},this.resetState=function(){z=0,S=0,v=null,ye.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Lg(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Mt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let x=0;x<f.count;++x)u.push(f.getX(x)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=th(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let g=0;g<a[h].length;++g)f.push(a[h][g][d]);const x=th(f);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function th(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Ut(a,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let x=0;x<t;x++){const g=h.getComponent(d,x);o.setComponent(d+u,x,g)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function nh(i,e){if(e===td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Go||e===Lh){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Go)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Ig extends Ts{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Og(t)}),this.register(function(t){return new Bg(t)}),this.register(function(t){return new Yg(t)}),this.register(function(t){return new jg(t)}),this.register(function(t){return new Kg(t)}),this.register(function(t){return new kg(t)}),this.register(function(t){return new Vg(t)}),this.register(function(t){return new Hg(t)}),this.register(function(t){return new Gg(t)}),this.register(function(t){return new Fg(t)}),this.register(function(t){return new Wg(t)}),this.register(function(t){return new zg(t)}),this.register(function(t){return new qg(t)}),this.register(function(t){return new Xg(t)}),this.register(function(t){return new Ug(t)}),this.register(function(t){return new $g(t)}),this.register(function(t){return new Zg(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=qs.extractUrlBase(e);a=qs.resolveURL(l,this.path)}else a=qs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Zh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===su){try{a[Ke.KHR_BINARY_GLTF]=new Jg(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new u_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:a[u]=new Ng;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[u]=new Qg(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[u]=new e_;break;case Ke.KHR_MESH_QUANTIZATION:a[u]=new t_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Dg(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ug{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Wt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Jh(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Lf(h),l.distance=u;break;case"spot":l=new Cf(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Tn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Ng{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(e,t,n){const s=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Wt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}}class Fg{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Og{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(o,o)}return Promise.all(r)}}class Bg{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class zg{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class kg{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Wt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Vg{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Hg{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],Wt),Promise.all(r)}}class Gg{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Wg{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],Wt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(r)}}class Xg{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class qg{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Yg{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class jg{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Kg{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class $g{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class Zg{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==an.TRIANGLES&&l.mode!==an.TRIANGLE_STRIP&&l.mode!==an.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const x of u){const g=new Ne,m=new C,p=new Ot,E=new C(1,1,1),b=new ys(x.geometry,x.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&E.fromBufferAttribute(c.SCALE,M),b.setMatrixAt(M,g.compose(m,p,E));for(const M in c)if(M==="_COLOR_0"){const w=c[M];b.instanceColor=new Xo(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&x.geometry.setAttribute(M,c[M]);xt.prototype.copy.call(b,x),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const su="glTF",ks=12,ih={JSON:1313821514,BIN:5130562};class Jg{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ks),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==su)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ks,r=new DataView(e,ks);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===ih.JSON){const l=new Uint8Array(e,ks+a,o);this.content=n.decode(l)}else if(c===ih.BIN){const l=ks+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Qg{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=jo[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=jo[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=ss[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const x in f.attributes){const g=f.attributes[x],m=c[x];m!==void 0&&(g.normalized=m)}u(f)},o,l,Wt,d)})})}}class e_{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class t_{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class ru extends sr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,x=e*l,g=x-l,m=-2*f+3*d,p=f-d,E=1-m,b=p-d+u;for(let M=0;M!==o;M++){const w=a[g+M+o],A=a[g+M+c]*h,P=a[x+M+o],z=a[x+M]*h;r[M]=E*w+b*A+m*P+p*z}return r}}const n_=new Ot;class i_ extends ru{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return n_.fromArray(r).normalize().toArray(r),r}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},sh={9728:Gt,9729:Rt,9984:Th,9985:kr,9986:Vs,9987:Vn},rh={33071:An,33648:jr,10497:ls},Za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},s_={CUBICSPLINE:void 0,LINEAR:Qs,STEP:Js},Ja={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function r_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ds({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),i.DefaultMaterial}function yi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Tn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function a_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function o_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function c_(i){let e;const t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qa(t.attributes):e=i.indices+":"+Qa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Qa(i.targets[n]);return e}function Qa(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ko(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function l_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const h_=new Ne;class u_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Dg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Af(this.options.manager):this.textureLoader=new Df(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return yi(r,o,s),Tn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(qs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Za[s.type],o=ss[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ut(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Za[s.type],l=ss[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0;let g,m;if(f&&f!==u){const p=Math.floor(d/f),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let b=t.cache.get(E);b||(g=new l(o,p*f,s.count*f/h),b=new Gh(g,f/h),t.cache.add(E,b)),m=new nr(b,c,d%f/h,x)}else o===null?g=new l(s.count*c):g=new l(o,d,s.count*c),m=new Ut(g,c,x);if(s.sparse!==void 0){const p=Za.SCALAR,E=ss[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,w=new E(a[1],b,s.sparse.count*p),A=new l(a[2],M,s.sparse.count*c);o!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,z=w.length;P<z;P++){const S=w[P];if(m.setX(S,A[P*c]),c>=2&&m.setY(S,A[P*c+1]),c>=3&&m.setZ(S,A[P*c+2]),c>=4&&m.setW(S,A[P*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=x}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=sh[d.magFilter]||Rt,h.minFilter=sh[d.minFilter]||Vn,h.wrapS=rh[d.wrapS]||ls,h.wrapT=rh[d.wrapT]||ls,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==Rt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let x=d;t.isImageBitmapLoader===!0&&(x=function(g){const m=new Dt(g);m.needsUpdate=!0,d(m)}),t.load(qs.resolveURL(u,r.path),x,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Tn(u,a),u.userData.mimeType=a.mimeType||l_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new qh,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Yn,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ds}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const u=s[Ke.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Wt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,It)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=tn);const h=r.alphaMode||Ja.OPAQUE;if(h===Ja.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ja.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Hn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ve(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Hn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Hn){const u=r.emissiveFactor;o.emissive=new Te().setRGB(u[0],u[1],u[2],Wt)}return r.emissiveTexture!==void 0&&a!==Hn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Tn(u,r),t.associations.set(u,{materials:e}),r.extensions&&yi(s,u,r),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ah(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=c_(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=ah(new Mt,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?r_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,x=h.length;f<x;f++){const g=h[f],m=a[f];let p;const E=l[f];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new tf(g,E):new tt(g,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===an.TRIANGLE_STRIP?p.geometry=nh(p.geometry,Lh):m.mode===an.TRIANGLE_FAN&&(p.geometry=nh(p.geometry,Go));else if(m.mode===an.LINES)p=new jn(g,E);else if(m.mode===an.LINE_STRIP)p=new sa(g,E);else if(m.mode===an.LINE_LOOP)p=new cf(g,E);else if(m.mode===an.POINTS)p=new lf(g,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&o_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Tn(p,r),m.extensions&&yi(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,x=u.length;f<x;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&yi(s,u[0],r),u[0];const d=new Rn;r.extensions&&yi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,x=u.length;f<x;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt($t.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Mc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Tn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Ne;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new xc(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],x=s.samplers[f.sampler],g=f.target,m=g.node,p=s.parameters!==void 0?s.parameters[x.input]:x.input,E=s.parameters!==void 0?s.parameters[x.output]:x.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",E)),l.push(x),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],x=u[2],g=u[3],m=u[4],p=[];for(let b=0,M=d.length;b<M;b++){const w=d[b],A=f[b],P=x[b],z=g[b],S=m[b];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const v=n._createAnimationTracks(w,A,P,z,S);if(v)for(let T=0;T<v.length;T++)p.push(v[T])}const E=new vf(r,void 0,p);return Tn(E,s),E})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,h_)});for(let f=0,x=u.length;f<x;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Xh:l.length>1?h=new Rn:l.length===1?h=l[0]:h=new xt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Tn(h,r),r.extensions&&yi(n,h,r),r.matrix!==void 0){const u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Rn;n.name&&(r.name=s.createUniqueName(n.name)),Tn(r,n),n.extensions&&yi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof ln||d instanceof Dt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];si[r.path]===si.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(si[r.path]){case si.weights:l=fs;break;case si.rotation:l=ps;break;case si.translation:case si.scale:l=ms;break;default:n.itemSize===1?l=fs:l=ms;break}const h=s.interpolation!==void 0?s_[s.interpolation]:Qs,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const x=new l(c[d]+"."+si[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ko(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ps?i_:ru;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function d_(i,e,t){const n=e.attributes,s=new nn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const h=Ko(ss[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,c=new C;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,x=d.max;if(f!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(x[2]))),d.normalized){const g=Ko(ss[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Ln;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function ah(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=jo[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Qe.workingColorSpace!==Wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Tn(i,e),d_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?a_(i,e.targets,t):i})}const Sc=(i,e,t)=>Math.max(e,Math.min(t,i));function au(i,e){return i+930-65*Math.sin(e/430)-25*Math.sin(e/143)}const ns=(i,e,t)=>{const n=Sc((t-i)/(e-i),0,1);return n*n*(3-2*n)},Yr=i=>95*Math.sin(i/340)+20*Math.sin(i/145);function f_(i,e){const t=i-Yr(e),n=Math.abs(t),s=ns(42,350,n),r=610*Math.pow(s,1.2),a=.1*Math.sin(e/115+t/310)+.09*Math.cos(e/63-t/155),o=165*Math.exp(-Math.pow((t-335)/140,2)-Math.pow((e+170)/370,2)),c=155*Math.exp(-Math.pow((t+315)/140,2)-Math.pow((e-280)/300,2));return 9+3*Math.sin(e/170)+1.7*Math.sin(e/69)+r*(1+a)+o+c}function Or(i,e,t,n,s,r,a){const o=(i-t)/s,c=(e-n)/r,l=Math.atan2(c,o),u=1+.095*Math.sin(4*l+a)+.055*Math.sin(7*l-a*.7)+.03*Math.cos(11*l+a)-Math.hypot(o,c);return{inland:u,height:-19+36*ns(-.045,.23,u)}}function p_(i,e){const t=Or(i,e,0,-260,525,820,.65),n=ns(.03,.24,t.inland),s=292*Math.exp(-Math.pow((i-70)/165,2)-Math.pow((e+360)/255,2)),r=173*Math.exp(-Math.pow((i+210)/180,2)-Math.pow((e+80)/235,2)),a=110*Math.exp(-Math.pow((i-265)/125,2)-Math.pow((e+620)/220,2)),o=Or(i,e,-770,150,170,200,1.6),c=Or(i,e,765,-590,205,260,2.9),l=Or(i,e,-625,-1050,145,180,-.4);return Math.max(t.height+n*(s+r+a),o.height+36*ns(.08,.6,o.inland),c.height+75*ns(.08,.6,c.inland),l.height+26*ns(.08,.6,l.inland))}function wi(i,e,t){const n=i.stage.id;if(n===3)return f_(e,t);if(n===4)return p_(e,t);const s=4+2.2*Math.sin(e/370)*Math.sin(t/470)+.7*Math.sin(e/115+t/230);return n===1?Math.min(s,5-au(e,t)*.095):s}function ou(i,e,t){const n=e-i.x,s=t-i.z,r=Math.cos(i.rotation),a=Math.sin(i.rotation);return{across:n*r+s*a,along:-n*a+s*r}}function $o(i,e,t){let n=wi(i,e,t);for(const s of i.roads){const r=ou(s,e,t),a=Math.abs(r.across)-s.width/2;if(a<35&&Math.abs(r.along)<s.length/2){const o=wi(i,s.x-Math.sin(s.rotation)*r.along,s.z+Math.cos(s.rotation)*r.along),c=Sc(a/35,0,1);n=o*(1-c)+n*c}}return n}function ts(i,e,t){let n=$o(i,e,t),s="草地",r=.25;if(i.stage.id===0){s="畑";const o=(Math.floor((e+1200)/175)+Math.floor((t+2400)/225))%5;r=.28+Math.max(0,o)*.032}i.stage.id===3&&(s=n>48?"山肌":"草地",r=n>48?.72:.4),i.stage.id===1&&au(e,t)>-75&&(s="砂浜",r=.4),i.stage.id===4&&(n<0?(s="海面",r=.6):n<15?(s="砂浜",r=.36):n>75?(s="岩場",r=.78):(s="草地",r=.44));for(const o of i.roads){const c=ou(o,e,t);Math.abs(c.across)<o.width/2&&Math.abs(c.along)<o.length/2&&n>=0&&(n=wi(i,o.x-Math.sin(o.rotation)*c.along,o.z+Math.cos(o.rotation)*c.along)+.2,s="道路",r=.06)}i.stage.id===2&&Math.abs(e+145)<45&&Math.abs(t+140)<65&&(n=4,s="競技場",r=.11);const a=n<0;return{height:a?0:n,kind:a?"海面":s,roughness:a?.6:r,water:a}}function mt(i,e,t){const n=ts(i,e,t),s=(ts(i,e+1,t).height-ts(i,e-1,t).height)/2,r=(ts(i,e,t+1).height-ts(i,e,t-1).height)/2,a=1/Math.sqrt(1+s*s+r*r);return{...n,name:n.kind,slopeX:s,slopeZ:r,normal:{x:-s*a,y:a,z:-r*a}}}const Kn=[{id:0,name:"01 — 畑に降ろせ",subtitle:"道はない。畝の方向と段差を読んで不時着する。",wind:.6,gust:.4,birds:0,sky:10472405,fog:12769491,start:{x:0,y:155,z:1e3,heading:0}},{id:1,name:"02 — 外洋へ不時着水",subtitle:"陸は遠い。速度と機首を合わせて水面で生き残れ。",wind:4.2,gust:2.2,birds:3,sky:8436175,fog:10341590,start:{x:0,y:165,z:1e3,heading:0}},{id:2,name:"03 — 街の上で故障",subtitle:"密集した建物、狭い街路、競技場。どこに降りる？",wind:3.5,gust:2.5,birds:9,sky:11716049,fog:13620428,start:{x:0,y:185,z:1e3,heading:0}},{id:3,name:"04 — 峡谷を抜けろ",subtitle:"左右の山が迫る狭い谷。接地前に進路を決めろ。",wind:6,gust:4,birds:8,sky:10532542,fog:12503238,start:{x:0,y:205,z:1e3,heading:0}},{id:4,name:"05 — 嵐の島",subtitle:"島の全景を見て選ぶ。海も岩場も着陸先になる。",wind:8,gust:5.3,birds:12,sky:7573151,fog:10268344,start:{x:0,y:195,z:1e3,heading:0}}];function m_(i){let e=i|0;return()=>(e=Math.imul(e,1664525)+1013904223|0,(e>>>0)/4294967296)}function x_(i,e=1){const t=Kn[Sc(i,0,Kn.length-1)],n={stage:t,seed:e,extent:2200,start:{...t.start},obstacles:[],props:[],roads:[]};if(t.id===3)for(let a=-2e3;a<2e3;a+=85){const o=Yr(a),c=95/340*Math.cos(a/340)+20/145*Math.cos(a/145);n.roads.push({x:o,z:a,width:17,length:90,rotation:-Math.atan(c)})}else if(t.id===2){n.roads.push({x:-15,z:0,width:26,length:3800,rotation:0});for(const a of[-470,-240,210])n.roads.push({x:a,z:0,width:20,length:3e3,rotation:0});for(const a of[360,-850])n.roads.push({x:-150,z:a,width:20,length:1550,rotation:Math.PI/2})}const s=m_(e+t.id*191),r=(a,o,c,l,h=0)=>{const u=mt(n,o,c);if(u.water||u.kind==="道路"||u.kind==="競技場")return;n.props.push({kind:a,x:o,y:u.height,z:c,scale:l,rotation:h});const d=a==="urban-office"?[28,58,28]:a==="urban-apartment"?[24,39,26]:a==="urban-storefront"?[21,24,23]:a==="tree"?[5,13,5]:a==="house"?[12,7,9]:a==="warehouse"?[20,8,14]:a==="tower"?[12,30,12]:[5,3,5];n.obstacles.push({id:`${a}-${n.props.length}`,x:o,y:u.height+d[1]*l/2,z:c,hx:d[0]*l/2,hy:d[1]*l/2,hz:d[2]*l/2,kind:a})};if(t.id===2){const a=[-460,-350,-235,-102,89,205,329,456];for(let o=0;o<18;o++){const c=850-o*128;for(let l=0;l<a.length;l++){if(s()<.055)continue;const h=a[l];for(const u of[-23,23])for(const d of[-31,31]){const f=h+u+(s()-.5)*5,x=c+d+(s()-.5)*6;if(f>-280&&f<-25&&x>-292&&x<26||f>-125&&f<150&&x<-620&&x>-795||s()<.12)continue;const g=s(),m=g<.32?"urban-office":g<.78?"urban-apartment":"urban-storefront",p=.82+s()*.24;r(m,f,x,p)}}}for(const[o,c]of[[-170,-700],[-190,-780],[240,600],[285,600],[310,540]])r("tree",o,c,.85)}else{const a=t.id===3?[[-180,460],[210,-100],[-180,-600],[235,730]]:t.id===4?[[-330,380],[260,320],[-180,-680],[250,-400]]:t.id===0?[[-400,600],[120,100],[-350,-650],[-630,-100],[100,-1e3]]:[];for(const[o,c]of a)for(let l=0;l<20;l++){const h=s()*Math.PI*2,u=Math.sqrt(s())*90;r(s()<.9?"tree":"rock",o+Math.cos(h)*u,c+Math.sin(h)*u,.9+s()*.7,s()*Math.PI*2)}if(t.id===3)for(let o=0;o<35;o++){const c=850-o*65;r("rock",95*Math.sin(c/340)+(o%2?1:-1)*(135+s()*80),c,1+s()*2)}if(t.id===4)for(const[o,c]of[[580,-230],[610,-290],[635,-350],[570,-335],[605,-420]])r("rock",o,c,2.1+s()*.65,s()*Math.PI*2)}if(t.id===2||t.id===3)for(let a=0;a<12;a++){const o=500-a*160,c=t.id===3?Yr(o)+(a%2?-4:4):-15+(a%2?-6:6),l=mt(n,c,o);l.water||(n.props.push({kind:"car",x:c,y:l.height,z:o,rotation:a%2?0:Math.PI,scale:1.1}),n.obstacles.push({id:"car-"+a,x:c,y:l.height+1,z:o,hx:1.1,hy:1,hz:2.7,kind:"car"}))}if(t.id===2){for(const[a,o,c,l,h,u]of[[-201,-140,Math.PI/2,1,8,60],[-89,-140,Math.PI/2,1,8,60],[-145,-214,0,.72,44,6],[-145,-66,0,.72,44,6]]){const d=mt(n,a,o);n.props.push({kind:"bleacher",x:a,y:d.height,z:o,rotation:c,scale:l}),n.obstacles.push({id:"stand-"+a+"-"+o,x:a,y:d.height+4,z:o,hx:h,hy:4.5,hz:u,kind:"stadium-stand"})}for(const a of[-199,-81])n.props.push({kind:"goalpost",x:-145,y:4,z:a,rotation:a<-140?0:Math.PI,scale:1}),n.obstacles.push({id:"goal-"+a,x:-145,y:5.8,z:a,hx:6.2,hy:1.75,hz:.3,kind:"goalpost"})}if(t.id===4){const c=mt(n,340,50);c.water||(n.props.push({kind:"lighthouse",x:340,y:c.height,z:50,rotation:0,scale:1}),n.obstacles.push({id:"island-lighthouse",x:340,y:c.height+14,z:50,hx:4,hy:15,hz:4,kind:"lighthouse"}))}if(t.id===2||t.id===3)for(let a=-1400;a<550;a+=80){const o=t.id===3?Yr(a):-15,c=t.id===3?9.6:14;for(const l of[o-c,o+c]){const h=mt(n,l,a);h.water||n.obstacles.push({id:`rail-${l}-${a}`,x:l,y:h.height+.7,z:a,hx:.25,hy:.7,hz:24,kind:"rail"})}}return n.start.y=mt(n,n.start.x,n.start.z).height+t.start.y,n}function Br(i){return new ds({color:i,roughness:1,flatShading:!0})}function g_(i,e){return new vn({fog:!0,depthWrite:!0,uniforms:kh.merge([ce.fog,{uSeaColor:{value:new Te(i)},uTime:{value:0},uGust:{value:e}}]),vertexShader:`
   varying vec2 vSeaPosition;
   #include <fog_pars_vertex>
   void main(){
    vec4 worldPosition=modelMatrix*vec4(position,1.0);
    vSeaPosition=worldPosition.xz;
    vec4 mvPosition=viewMatrix*worldPosition;
    gl_Position=projectionMatrix*mvPosition;
    #include <fog_vertex>
   }
  `,fragmentShader:`
   uniform vec3 uSeaColor;
   uniform float uTime;
   uniform float uGust;
   varying vec2 vSeaPosition;
   #include <fog_pars_fragment>
   void main(){
    vec2 p=vSeaPosition;
    float t=uTime*(.24+uGust*.027);
    // Long, wind-aligned swells. Keep the contrast restrained: depth and speed
    // should read without graphic discs or an obvious repeating checker.
    float mainWave=sin(p.x*.021+p.y*.071+t+.11*sin(p.x*.009+p.y*.008));
    float crossWave=sin(-p.x*.047+p.y*.022-t*.58);
    float fineWave=sin(p.x*.064+p.y*.12+t*.79);
    float distanceFromCamera=length(p-cameraPosition.xz);
    float nearFade=1.0-smoothstep(160.0,1200.0,distanceFromCamera);
    float swells=mainWave*.70+crossWave*.24+fineWave*.06;
    float facets=floor((swells+1.0)*8.0)/8.0-.5;
    vec3 color=uSeaColor*(1.16+facets*.095*nearFade);
    // A barely brighter broken crest replaces the former large square patches.
    float crest=smoothstep(.83,.97,mainWave)*max(0.0,crossWave);
    color=mix(color,vec3(.25,.43,.47),crest*.065*nearFade);
    gl_FragColor=vec4(color,1.0);
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }
  `})}function __(i,e){const t=new Rn;t.name="landscape";const n=i.extent*2,s=i.stage.id>=3?255:180,r=new ui(n,n,s,s);r.rotateX(-Math.PI/2);const a=r.attributes.position,o=[],c=new Te;for(let M=0;M<a.count;M++){const w=a.getX(M),A=a.getZ(M),P=ts(i,w,A);a.setY(M,P.water?Math.min(-.25,$o(i,w,A)):P.kind==="競技場"?4:$o(i,w,A));let z=i.stage.id===3?7768180:i.stage.id===4?6916451:9413995;if(i.stage.id===3){const v=P.height;z=v>510?12831689:v>350?9279125:v>135?7831414:7836265}if(i.stage.id===4){const v=P.height;z=v>190?11383209:v>85?7831161:v>24?6391139:8363376}if(i.stage.id===0){const v=Math.abs(Math.floor(w/175)*7+Math.floor(A/225)*11)%6;z=[7702600,11901783,9016143,12758379,8879945,6785878][v]}P.kind==="砂浜"&&(z=14470302),i.stage.id===2&&(z=8689031),c.setHex(z);const S=Math.sin(Math.floor(w/130)*3.7+Math.floor(A/180)*7.3);c.multiplyScalar(1+S*(i.stage.id===0?.14:.055)),o.push(c.r,c.g,c.b)}r.setAttribute("color",new Tt(o,3)),r.computeVertexNormals();const l=new tt(r,new ds({vertexColors:!0,roughness:1,flatShading:!0}));l.receiveShadow=!0,t.add(l);const h=i.stage.id===4?3235179:i.stage.id===1?2651531:4888741,u=i.stage.id===1||i.stage.id===4?g_(h,i.stage.gust):new ds({color:h,roughness:.35,metalness:.15}),d=new tt(new ui(n*5,n*5),u);d.rotation.x=-Math.PI/2,d.position.y=-.05,t.add(d),u instanceof vn&&(t.userData.seaMaterial=u);const f=Br(4936537),x=Br(15326639),g=Br(11121581);f.polygonOffset=!0,f.polygonOffsetFactor=-2,f.polygonOffsetUnits=-3,x.polygonOffset=!0,x.polygonOffsetFactor=-3,x.polygonOffsetUnits=-4;function m(M,w,A,P){const z=Math.ceil(M.length/35),S=[],v=[];for(let F=0;F<=z;F++){const B=(F/z-.5)*M.length;for(const k of[-w/2+A,w/2+A]){const G=M.x+k*Math.cos(M.rotation)-B*Math.sin(M.rotation),U=M.z+k*Math.sin(M.rotation)+B*Math.cos(M.rotation);S.push(G,wi(i,M.x-B*Math.sin(M.rotation),M.z+B*Math.cos(M.rotation))+(P===x?.24:.2),U)}}for(let F=0;F<z;F++){const B=F*2;v.push(B,B+2,B+1,B+1,B+2,B+3)}const T=new Mt;T.setAttribute("position",new Tt(S,3)),T.setIndex(v),T.computeVertexNormals();const D=new tt(T,P);D.receiveShadow=!0,t.add(D)}for(const M of i.roads){m(M,M.width,0,f),m(M,.2,-M.width/2+1,x),m(M,.2,M.width/2-1,x);for(let w=-M.length/2;w<M.length/2;w+=30)m({...M,x:M.x-w*Math.sin(M.rotation),z:M.z+w*Math.cos(M.rotation),length:10},.25,0,x)}for(const M of i.obstacles.filter(w=>w.kind==="rail")){const w=new tt(new Ms(M.hx*2,.35,M.hz*2),g);w.position.set(M.x,M.y+.25,M.z),t.add(w)}if(i.stage.id===2){let M=function(v,T=!1){for(let D=0;D<v.length-1;D++)A.push(v[D][0],P,v[D][1],v[D+1][0],P,v[D+1][1]);T&&A.push(v[v.length-1][0],P,v[v.length-1][1],v[0][0],P,v[0][1])};const w=new tt(new ui(90,130),Br(5405257));w.rotation.x=-Math.PI/2,w.position.set(-145,4.14,-140),w.receiveShadow=!0,t.add(w);const A=[],P=4.18;M([[-189,-204],[-101,-204],[-101,-76],[-189,-76]],!0),M([[-189,-140],[-101,-140]]);for(const v of[-204,-76]){const T=v===-204?1:-1;M([[-169,v],[-169,v+T*18],[-121,v+T*18],[-121,v]]),M([[-154,v],[-154,v+T*6],[-136,v+T*6],[-136,v]])}const z=[];for(let v=0;v<=48;v++){const T=v/48*Math.PI*2;z.push([-145+12*Math.cos(T),-140+12*Math.sin(T)])}M(z);const S=new Mt;S.setAttribute("position",new Tt(A,3)),t.add(new jn(S,new Yn({color:15921369})))}if(i.stage.id===0){let M=function(B,k,G,U,N,K){const q=w.length/3,te=G-B,ge=U-k,Pe=Math.hypot(te,ge),Ee=-ge/Pe,Se=te/Pe;z.setHex(v[K]).multiplyScalar(.84),S.setHex(v[K]).multiplyScalar(1.09);for(const[Y,$]of[[B+Ee*N,k+Se*N],[B,k],[B-Ee*N,k-Se*N],[G+Ee*N,U+Se*N],[G,U],[G-Ee*N,U-Se*N]]){const ie=(w.length/3-q)%3===1;w.push(Y,wi(i,Y,$)+(ie?.14:.065),$);const _e=ie?S:z;A.push(_e.r,_e.g,_e.b)}P.push(q,q+3,q+1,q+1,q+3,q+4,q+1,q+4,q+2,q+2,q+4,q+5)};const w=[],A=[],P=[],z=new Te,S=new Te,v=[7702600,11901783,9016143,12758379,8879945,6785878];for(let B=-875;B<=875;B+=175)for(let k=-1550;k<=1170;k+=225){const G=Math.abs(Math.floor(B/175)*7+Math.floor(k/225)*11)%6,U=G===1||G===4,N=G===3?17:12,K=U?185:138;for(let q=-K/2;q<=K/2;q+=G===0?8.4:G===2?10.5:11.8){const te=Math.sin((B+k)*.017+q*.067)*1.3,ge=-((U?175:225)/2)+N,Pe=(U?175:225)/2-N;for(let Ee=0;Ee<3;Ee++){const Se=ge+(Pe-ge)*Ee/3+1.2,Y=ge+(Pe-ge)*(Ee+1)/3-1.2,$=B+(U?Se:q+te),ie=k+(U?q+te:Se),_e=B+(U?Y:q-te),me=k+(U?q-te:Y);M($,ie,_e,me,G===0?.32:G===2?.38:.46,G)}}}const T=new Mt;T.setAttribute("position",new Tt(w,3)),T.setAttribute("color",new Tt(A,3)),T.setIndex(P),T.computeVertexNormals();const D=new hf({vertexColors:!0,side:tn,transparent:!0,opacity:.59,depthWrite:!1}),F=new tt(T,D);if(F.receiveShadow=!0,t.add(F),e){let B=i.seed*931+51;const k=()=>(B=Math.imul(B,1664525)+1013904223|0,(B>>>0)/4294967296),G={"crop-grain":[],"crop-leafy":[]};for(let Ee=-1350;Ee<=1010;Ee+=8.5)for(let Se=-590;Se<=590;Se+=8.5){const Y=Math.round(Se/175)*175,$=Math.round((Ee+1550)/225)*225-1550,ie=Math.abs(Math.floor(Y/175)*7+Math.floor($/225)*11)%6,_e=ie===1||ie===3?"crop-grain":ie===0||ie===4?"crop-leafy":null,me=.39*(1-.4*Math.pow(Math.abs(Se)/600,2));if(!_e||k()>me)continue;const Ge=ie===1||ie===4,yt=ie===0?8.4:ie===2?10.5:11.8,Xe=k()*.65-.325,rt=Ge?Se+(k()-.5)*3.7:Y+Math.round((Se-Y)/yt)*yt+Xe,L=Ge?$+Math.round((Ee-$)/yt)*yt+Xe:Ee+(k()-.5)*3.7;Math.abs(rt-Y)>75||Math.abs(L-$)>99||G[_e].push({x:rt,y:wi(i,rt,L)-.06,z:L,scale:.88+k()*.45,rotation:k()*Math.PI*2})}e.updateWorldMatrix(!0,!0);const U=new Ne,N=new Ne,K=new Ne,q=new C,te=new Ot,ge=new C,Pe=new C(0,1,0);for(const Ee of["crop-grain","crop-leafy"]){const Se=e.getObjectByName(Ee);if(!Se)throw new Error("Blender farm asset missing: "+Ee);Se.updateWorldMatrix(!0,!0);const Y=Se.matrixWorld.clone().invert(),$=G[Ee];Se.traverse(ie=>{if(!(ie instanceof tt))return;K.multiplyMatrices(Y,ie.matrixWorld);const _e=new ys(ie.geometry,ie.material,$.length);_e.name="farm-"+Ee,_e.castShadow=!1,_e.receiveShadow=!0,_e.frustumCulled=!1,$.forEach((me,Ge)=>{q.set(me.x,me.y,me.z),te.setFromAxisAngle(Pe,me.rotation),ge.setScalar(me.scale),U.compose(q,te,ge),N.multiplyMatrices(U,K),_e.setMatrixAt(Ge,N)}),_e.instanceMatrix.needsUpdate=!0,t.add(_e)})}}}if(i.stage.id===1){const M=[];for(let A=-1500;A<1750;A+=52)for(let P=-1800;P<1400;P+=58){const z=Math.sin(A*.021+P*.017)*Math.cos(A*.037-P*.012);if(z<-.1)continue;const S=6+3*z,v=P+17*Math.sin(A*.017+P*.02);M.push(A-S,-.005,v,A+S,-.005,v+2.3)}const w=new Mt;w.setAttribute("position",new Tt(M,3)),t.add(new jn(w,new Yn({color:12706012,transparent:!0,opacity:.42,depthWrite:!1})))}const p=[];function E(M,w){let A=null;for(let P=0;P<=w;P++){const[z,S]=M(P/w*Math.PI*2),v=new C(z,.08,S);A&&p.push(A.x,A.y,A.z,v.x,v.y,v.z),A=v}}if(i.stage.id===1)for(let M=-1900;M<1900;M+=14){const w=-930+65*Math.sin(M/430)+25*Math.sin(M/143)+66,A=-930+65*Math.sin((M+14)/430)+25*Math.sin((M+14)/143)+66;p.push(w,.08,M,A,.08,M+14)}if(i.stage.id===4)for(const[M,w,A,P,z]of[[0,-260,525,820,.65],[-770,150,170,200,1.6],[765,-590,205,260,2.9],[-625,-1050,145,180,-.4]])E(S=>{let v=.4,T=1.45;const D=Math.cos(S),F=Math.sin(S);for(let B=0;B<12;B++){const k=(v+T)/2,G=M+D*A*k,U=w+F*P*k;wi(i,G,U)>0?v=k:T=k}return[M+D*A*(v+T)/2,w+F*P*(v+T)/2]},128);if(p.length){const M=new Mt;M.setAttribute("position",new Tt(p,3)),t.add(new jn(M,new Yn({color:14872027,transparent:!0,opacity:.67,depthWrite:!1})))}const b=new Map;for(const M of[...t.children])if(M instanceof tt&&!Array.isArray(M.material)){const w=M.material.uuid+Object.keys(M.geometry.attributes).sort().join(),A=b.get(w)||[];A.push(M),b.set(w,A)}for(const M of b.values()){if(M.length<2)continue;const w=M.map(P=>(P.updateMatrix(),P.geometry.clone().applyMatrix4(P.matrix))),A=Lg(w);if(A){const P=new tt(A,M[0].material);P.receiveShadow=!0,t.add(P),M.forEach(z=>{t.remove(z),z.geometry.dispose()})}w.forEach(P=>P.dispose())}return t}const ri=(i,e,t)=>Math.max(e,Math.min(t,i));function Zo(i){return i.parts.gear?1.7:1.05}function cu(i){const e=i.phase==="flying"?1:.07;return{x:Math.sin(i.heading)*i.speed+i.windX*e,z:-Math.cos(i.heading)*i.speed+i.windZ*e}}function v_(i={}){return{x:i.x??0,y:i.y??160,z:i.z??700,heading:i.heading??0,pitch:0,roll:0,speed:i.speed??205,verticalSpeed:-12,time:0,phase:"flying",integrity:100,parts:{leftWing:!0,rightWing:!0,tail:!0,gear:!0},events:[],surface:"",distance:0,touchdownSpeed:0,touchdownSink:0,groundTime:0,windX:0,windZ:0,hits:{},stopTime:0,reason:""}}function ci(i,e,t,n=1,s){i.events.push({type:e,message:t,strength:n,part:s,x:i.x,y:i.y,z:i.z})}function rs(i,e,t){i.parts[e]&&(i.parts[e]=!1,ci(i,"detach",t,1,e))}function Ri(i,e,t){e<=0||(i.integrity=ri(i.integrity-e,0,100),ci(i,"damage",t,e/50),i.integrity<=0&&i.phase!=="crashed"&&(i.phase="crashed",i.reason=t,ci(i,"crash",t,Math.min(3,Math.max(.55,i.speed/48,i.touchdownSink/9,Math.abs(i.verticalSpeed)/18)))))}function eo(i,e,t,n,s){return Math.abs(e-i.x)<i.hx+s&&Math.abs(t-i.y)<i.hy+s&&Math.abs(n-i.z)<i.hz+s}function M_(i,e){const t=Math.cos(i.heading),n=Math.sin(i.heading);for(const s of e.obstacles??[]){if(Math.abs(s.x-i.x)>s.hx+10||Math.abs(s.z-i.z)>s.hz+10)continue;const r=i.hits[s.id]!==void 0&&i.time-i.hits[s.id]<.7;for(const[a,o]of[["leftWing",-1],["rightWing",1]])i.parts[a]&&eo(s,i.x+t*o*5.5,i.y-Math.sin(i.roll)*o*5.5,i.z+n*o*5.5,1.5)&&(rs(i,a,a==="leftWing"?"左翼がもげた！":"右翼がもげた！"),Ri(i,4,"翼が衝突"),i.speed*=.88,i.heading+=o*.08);if(!r&&eo(s,i.x,i.y,i.z,1.15)){const a=s.kind==="tree"||s.kind==="bird"||s.kind==="rail"||s.kind==="guardrail";Ri(i,a?8+i.speed*.5:22+i.speed*1.9,a?"障害物をこすった":"胴体が激突"),i.speed>18&&rs(i,"gear","脚が折れた！"),i.speed*=a?.72:.35,i.hits[s.id]=i.time}i.parts.tail&&eo(s,i.x-n*4,i.y+.8,i.z+t*4,1.5)&&(rs(i,"tail","尾翼が折れた！"),Ri(i,5,"尾翼が衝突"))}for(let s=0;s<(e.birds?.length??0);s++){const r=e.birds[s],a=`bird-${s}`;i.hits[a]===void 0&&Math.hypot(i.x-r.x,i.y-r.y,i.z-r.z)<(r.radius??2)+5&&(i.hits[a]=i.time,Ri(i,7,"鳥の群れに接触"),i.roll+=.25,i.speed*=.96)}}function y_(i,e,t,n){i.time+=n;const s=ri(Number(e.brake),0,1),r=ri(e.roll,-1,1),a=ri(e.pitch,-1,1),o=(t.wind?.gust??0)*(Math.sin(i.time*1.7)+Math.sin(i.time*.63+2)*.5);if(i.windX=(t.wind?.x??0)+o,i.windZ=(t.wind?.z??0)+o*.33,i.phase==="flying"){const u=+!i.parts.leftWing+ +!i.parts.rightWing,d=(+!i.parts.rightWing-+!i.parts.leftWing)*.18,f=(t.wind?.gust??0)*.055*(Math.sin(i.time*.83)+.55*Math.sin(i.time*2.1));i.roll+=(r*.62+d+f-i.roll)*Math.min(1,n*3.4),i.pitch+=(a*.23-i.pitch)*Math.min(1,n*(i.parts.tail?2.5:1.1)),i.heading+=Math.sin(i.roll)*.59*n,i.speed=ri(i.speed+(-.48-i.pitch*9-s*22.5)*n,18,235);const x=Math.max(0,42-i.speed),g=x*x*.067,m=ri((i.speed-18)/24,0,1),p=-12+i.pitch*22*m-g-s*1.4-Math.abs(i.roll)*2.4-u*3.6;i.verticalSpeed+=(p-i.verticalSpeed)*Math.min(1,n*2.4),i.y+=i.verticalSpeed*n}else i.groundTime+=n,i.roll+=(0-i.roll)*Math.min(1,n*2),i.pitch+=((i.parts.gear?0:-.08)-i.pitch)*Math.min(1,n*3),i.heading+=r*.32*Math.min(1,i.speed/10)*n;const c=cu(i);i.x+=c.x*n,i.z+=c.z*n,i.distance+=Math.hypot(c.x,c.z)*n;const l=t.sample(i.x,i.z);i.surface=l.kind??(l.water?"海":"地面");const h=Zo(i);if(i.phase==="flying"&&i.y<=l.height+h){const u=l.normal??{x:0,y:1,z:0},d=-(c.x*u.x+i.verticalSpeed*u.y+c.z*u.z);i.touchdownSpeed=Math.hypot(c.x,c.z),i.touchdownSink=Math.max(0,d),i.groundTime=0,i.y=l.height+h,i.phase="sliding",ci(i,"touchdown","接地！ ブレーキで止まれ",i.touchdownSink/10);const f=Math.abs(i.roll),x=l.normal?Math.acos(ri(l.normal.y,-1,1)):0;if((i.touchdownSink>6.5||l.roughness>.6||f>.4)&&rs(i,"gear","脚が折れた！ 胴体で滑走"),f>.36&&rs(i,i.roll<0?"leftWing":"rightWing","翼端が地面に引っかかった！"),l.water){rs(i,"gear","水面に接触");const g=t.wind?.gust??0,m=g*.75*(1+.2*Math.sin(i.time*1.4+i.x*.025)),p=Math.max(45,78-g*2.5),E=Math.max(0,i.touchdownSpeed-p),b=Math.max(0,i.touchdownSink+m-7);Ri(i,E*E*.18+b*b*4.2+Math.max(0,f-.24)*45,g>3?"荒波への衝撃":"水面への衝撃")}else{const g=Math.max(0,i.touchdownSink-5)*6+Math.max(0,i.touchdownSpeed-86)*2.8+Math.max(0,f-.24)*35+x*30;Ri(i,g,i.touchdownSink>11?"激しい衝突で胴体が破損":"荒い接地")}i.verticalSpeed=0}if(i.phase==="sliding"){const u=Zo(i),d=l.height+u-i.y;if(d<-1.1){i.phase="flying",i.verticalSpeed=-1,i.stopTime=0;return}d>1.1&&i.speed>8&&Ri(i,Math.min(50,d*i.speed*.23),"地形の段差に衝突"),i.y=l.height+u;const f=l.normal?Math.sqrt(l.normal.x**2+l.normal.z**2):0,x=3.6+s*11.5+l.roughness*3.1+(i.parts.gear?0:2.1)+(l.water?16:0);i.speed=Math.max(0,i.speed-x*n),i.integrity=Math.max(0,i.integrity-(l.roughness*Math.max(0,i.speed-20)*.045+f*i.speed*.12)*n),i.integrity<=0&&(i.phase="crashed",i.reason="滑走中に胴体が破損",ci(i,"crash",i.reason,Math.min(1.5,Math.max(.35,i.speed/55)))),i.speed<1.3&&(i.stopTime+=n,i.stopTime>.55&&i.phase==="sliding"&&(i.speed=0,i.phase="success",i.reason=l.water?"不時着水、生還！":Object.values(i.parts).every(Boolean)?"無事に着陸！":"ボロボロだけど、生還！",ci(i,"success",i.reason)))}(i.phase==="flying"||i.phase==="sliding")&&M_(i,t),t.bounds&&Math.max(Math.abs(i.x),Math.abs(i.z))>t.bounds&&i.phase==="flying"&&(i.phase="crashed",i.reason="救助圏外に出た",ci(i,"crash",i.reason)),i.time>90&&i.phase==="flying"&&(i.phase="crashed",i.reason="機体が限界を迎えた",ci(i,"crash",i.reason))}function b_(i,e,t,n){if(i.events=[],i.phase==="success"||i.phase==="crashed")return i;let s=ri(n,0,.1);for(;s>0&&(i.phase==="flying"||i.phase==="sliding");){const r=Math.min(s,.011111111111111112);y_(i,e,t,r),s-=r}return i}function lu(i,e,t=[]){const n=cu(i),s=Zo(i),r=e(i.x,i.z),a=Math.max(0,i.y-r.height-s),o=Math.hypot(n.x,n.z)*3.6,c=Math.cos(i.heading)*i.windX+Math.sin(i.heading)*i.windZ,l=i.phase==="flying"?i.verticalSpeed:0,h=l>.5?"上昇":l<-.5?"降下":"水平";let u=null;if(i.phase==="flying")for(const d of[.2,.4,.6,.85]){const f=i.x+n.x*d,x=i.z+n.z*d,g=i.y+i.verticalSpeed*d,m=e(f,x),p=g-m.height-s;if(m.height-r.height>18&&p<12){u={timeSeconds:d,kind:"terrain",label:m.kind??"地形"};break}if(t.find(b=>Math.abs(f-b.x)<b.hx+5.8&&Math.abs(x-b.z)<b.hz+5.8&&g<b.y+b.hy+6&&g>b.y-b.hy-5)){u={timeSeconds:d,kind:"obstacle",label:"障害物"};break}}return{groundClearanceM:a,groundSpeedKmh:o,verticalSpeedMs:l,verticalLabel:h,verticalMagnitudeMs:Math.abs(l),crosswindMs:c,forwardHazard:u}}function S_(i,e){const t=e.groundClearanceM;if(i.phase==="sliding")return{text:"接地 · ブレーキで停止",warning:!1};if(e.forwardHazard)return{text:e.forwardHazard.kind==="obstacle"?"前方に障害物！":"前方に"+e.forwardHazard.label+"！",warning:!0};if(i.speed<37)return{text:"失速 · ブレーキを離す",warning:!0};if(i.speed<45)return{text:"速度不足 · ブレーキを離す",warning:!0};if(t<85&&Math.abs(i.roll)>.3)return{text:"翼を水平に",warning:!0};if(t<95&&e.verticalSpeedMs<-9)return{text:"急降下 · スティックを下へ",warning:!0};if(i.surface==="海面"){if(t<105&&i.speed>90)return{text:"着水が速い · ブレーキ",warning:!0};if(t<75&&i.speed>=42)return{text:"着水態勢 · 翼を水平に",warning:!1};if(i.time<7)return{text:"海は早めに減速 · 下で機首上げ",warning:!1}}return t<70&&i.speed>55?{text:"接地が速い · ブレーキ",warning:!0}:t<35?{text:"接地間近",warning:!1}:i.time<2.8?{text:"ブレーキで速度を調整",warning:!1}:{text:"",warning:!1}}const At=i=>document.getElementById(i);function hu(i,e,t){const n=lu(i,(l,h)=>mt(e,l,h),e.obstacles),s=n.groundClearanceM;At("alt").textContent=String(Math.round(s)),At("speed").textContent=String(Math.round(n.groundSpeedKmh));const r=i.phase!=="flying"||i.integrity<80;At("risk-label").textContent=r?"機体":n.verticalLabel,At("risk-value").textContent=String(Math.round(r?i.integrity:n.verticalMagnitudeMs)),At("risk-unit").textContent=r?"%":"m/s",At("meter-alt").classList.toggle("caution",s<75&&s>=30),At("meter-alt").classList.toggle("danger",s<30||!!n.forwardHazard),At("meter-speed").classList.toggle("caution",i.phase==="flying"&&n.groundSpeedKmh>320),At("meter-speed").classList.toggle("danger",i.phase==="flying"&&s<45&&i.speed>65),At("meter-risk").classList.toggle("danger",r?i.integrity<55:s<80&&n.verticalSpeedMs<-13),At("meter-risk").classList.toggle("caution",!r&&s<100&&n.verticalSpeedMs<-9);const a=Math.abs(n.crosswindMs)>=2;At("wind").hidden=!a,a&&(At("wind").textContent="横風 "+(n.crosswindMs>0?"→ ":"← ")+Math.abs(n.crosswindMs).toFixed(1)+"m/s"),At("hud-message").classList.toggle("wind-active",a);const o=S_(i,n),c=i.time<=t&&!!At("notice").textContent;!c&&At("notice").textContent&&(At("notice").textContent=""),At("status").textContent=c?"":o.text,At("status").classList.toggle("warning",o.warning)}const oh=54,zr=26,T_=i=>i-Math.floor(i),ai=(i,e)=>T_(Math.sin(i*127.1+e*311.7)*43758.5453123);function ch(i){return Array.from({length:i},(e,t)=>({side:t%2===0?-1:1,spread:ai(t,1),height:ai(t,2),z:-145+ai(t,3)*182,length:4+ai(t,4)*17,rate:.75+ai(t,5)*.5,phase:ai(t,6)*Math.PI*2}))}function lh(i,e,t,n){const s=new Float32Array(e*6),r=new Mt;r.setAttribute("position",new Ut(s,3).setUsage(dc)),r.setDrawRange(0,0);const a=new Yn({color:t,transparent:!0,opacity:n,depthTest:!0,depthWrite:!1,blending:no}),o=new jn(r,a);return o.frustumCulled=!1,o.visible=!1,i.add(o),{lines:o,positions:s,geometry:r,material:a}}class E_{constructor(e){this.scene=e,this.air=lh(e,oh,14744319,.45),this.cross=lh(e,zr,16186620,.5)}scene;streams=ch(oh);gusts=ch(zr);air;cross;clock=0;currentStrength=0;reset(){this.clock=0,this.currentStrength=0,this.hide();for(let e=0;e<this.streams.length;e++)this.streams[e].z=-145+ai(e,3)*182;for(let e=0;e<this.gusts.length;e++)this.gusts[e].z=-145+ai(e,8)*182}hide(){this.air.lines.visible=!1,this.cross.lines.visible=!1}update(e,t,n,s){if(t.phase!=="flying"){this.hide();return}this.clock+=e;const r=$t.clamp(t.speed/205,0,1),a=Math.hypot(t.windX,t.windZ),o=$t.clamp((a+n*1.7)/16,0,1);this.currentStrength+=(o-this.currentStrength)*Math.min(1,e*2.8);const c=Math.round(12+r*17+n*2.2),l=Math.min(zr,Math.floor(Math.max(0,this.currentStrength-.065)*zr*1.35)),h=s?11.5:23,u=Math.cos(t.heading)*t.windX+Math.sin(t.heading)*t.windZ;this.draw(this.air,this.streams,c,e,t.speed,h,u,!1),this.draw(this.cross,this.gusts,l,e,t.speed,h,u,!0);for(const d of[this.air,this.cross])d.lines.position.set(t.x,t.y,t.z),d.lines.rotation.set(0,-t.heading,0);this.air.material.opacity=.12+.035*r+.045*this.currentStrength,this.cross.material.opacity=.1+.19*this.currentStrength,this.air.lines.visible=!0,this.cross.lines.visible=l>0}draw(e,t,n,s,r,a,o,c){const l=Math.min(n,t.length),h=e.positions;for(let u=0;u<l;u++){const d=t[u];d.z+=(r*(c?.83:1)+8)*s*d.rate,d.z>40&&(d.z=-145+(d.z-40)%25);const f=c?8+d.spread*a*1.25:7.5+d.spread*a,x=d.side*f,g=(d.height-.48)*(c?24:20)+Math.sin(this.clock*3+d.phase)*.27,m=d.length*(c?1.6:1)*(.55+Math.min(r/205,1)*.65),p=o*m/Math.max(30,r)*(c?5.5:2.2),E=u*6;h[E]=x-p*.5,h[E+1]=g+(c?m*.065:0),h[E+2]=d.z-m,h[E+3]=x+p*.5,h[E+4]=g-(c?m*.065:0),h[E+5]=d.z}e.geometry.setDrawRange(0,l*2),e.geometry.attributes.position.needsUpdate=!0}dispose(){for(const e of[this.air,this.cross])this.scene.remove(e.lines),e.geometry.dispose(),e.material.dispose()}}const hh=new C,uh=new Ot,dh=new C,Ai=(i,e,t)=>Math.min(t,Math.max(e,i));function fh(i){const t=new Uint8Array(16384);for(let s=0;s<64;s++)for(let r=0;r<64;r++){const a=(r+.5-32)/32,o=(s+.5-64/2)/(64/2),c=Math.hypot(a,o),l=Math.atan2(o,a),h=Ai((.98-c+.06*Math.sin(l*9+c*13)+.03*Math.sin(l*17))/.53,0,1),u=(s*64+r)*4;if(i==="fire"){const d=Ai(1-c*1.4,0,1);t[u]=255,t[u+1]=Math.round(36+178*d),t[u+2]=Math.round(4+70*d)}else t[u]=t[u+1]=t[u+2]=255;t[u+3]=Math.round(255*Math.pow(h,1.45))}const n=new ir(t,64,64,jt);return n.magFilter=Rt,n.minFilter=Rt,n.needsUpdate=!0,n}function A_(i,e,t){return!t&&e>=1.28&&(i.speed>=62||i.speed>=38&&i.touchdownSink>25)}class w_{constructor(e,t){this.scene=e,this.sample=t}scene;sample;fireMap=fh("fire");smokeMap=fh("smoke");pieces=[];flares=[];smoke=[];foam=[];foamGeometry=new ui(1,1);origin=new C;age=0;smokeClock=0;emberClock=0;splashCount=0;groundContactCount=0;intensity=0;violent=!1;water=!1;active=!1;createdPartNames=[];start(e,t,n,s){if(this.active)return;this.active=!0,this.age=0,this.smokeClock=0,this.emberClock=0,this.splashCount=0,this.groundContactCount=0,this.origin.set(t.x,t.y,t.z),this.water=s,this.intensity=Ai(n,.4,2.7),this.violent=A_(t,n,s);const r=new C(Math.sin(t.heading),0,-Math.cos(t.heading)),a=new C(Math.cos(t.heading),0,Math.sin(t.heading)),o=!s&&t.speed<38,c=new Rn;if(c.name="wreckCore",o){c.position.copy(e.position),c.quaternion.copy(e.quaternion),this.scene.add(c);for(const h of["hullCabin","hullAft"]){const u=e.getObjectByName(h);u&&c.attach(u)}}const l=[{name:"hullNose",side:.5,front:12,up:6,spin:1.7},...o?[{name:"wreckCore",side:0,front:1.5,up:1,spin:.85}]:[{name:"hullCabin",side:-1.5,front:3,up:2.5,spin:1.3},{name:"hullAft",side:-5,front:-3,up:6,spin:2}],{name:"leftWing",side:-13,front:2,up:8,spin:2.7},{name:"rightWing",side:13,front:5,up:9,spin:2.3},{name:"tail",side:4,front:-6,up:5.5,spin:2.4},{name:"gear",side:-2,front:2,up:3,spin:2.8}];for(const h of l){const u=h.name==="wreckCore"?c:e.getObjectByName(h.name);if(!u)continue;u.updateWorldMatrix(!0,!0),u.matrixWorld.decompose(hh,uh,dh),u.removeFromParent(),this.scene.add(u),u.position.copy(hh),u.quaternion.copy(uh),u.scale.copy(dh),u.traverse(p=>{if(p instanceof tt){const b=(Array.isArray(p.material)?p.material:[p.material]).map(M=>{const w=M.clone();return"color"in w&&w.color instanceof Te&&w.color.lerp(new Te(3156776),this.violent?.2:.1),w});p.material=Array.isArray(p.material)?b:b[0]}}),u.updateMatrixWorld(!0);const d=new nn().setFromObject(u),f=[];for(const p of[d.min.x,d.max.x])for(const E of[d.min.y,d.max.y])for(const b of[d.min.z,d.max.z])f.push(u.worldToLocal(new C(p,E,b)));const x=this.violent?1:.18,g=r.clone().multiplyScalar(h.front*x+Math.min(9,t.speed*.065)).addScaledVector(a,h.side*x).add(new C(0,h.up*x,0)),m=h.name==="hullCabin"?.7:1;this.pieces.push({object:u,velocity:g,spin:new C(h.spin*.63*m*(this.violent?1:.42),h.spin*.41*(this.violent?1:.42),h.spin*(h.side<0?-1:1)*(this.violent?1:.42)),age:0,rebound:0,contacts:f,waterHit:!1,waterAge:0,groundHit:!1,crush:o?h.name==="wreckCore"?.27:h.name==="hullNose"?.19:0:0,originalScale:u.scale.clone()}),this.createdPartNames.push(h.name)}if(this.violent)for(let h=0;h<5;h++){const u=h*Math.PI*2/5,d=this.origin.clone().add(new C(Math.cos(u)*(1.1+h%2),.7+h*2%3,Math.sin(u)*(1.1+h%2)));this.spawnFire(d,h)}if(s)this.spawnSplash(this.origin,12),this.spawnFoam(this.origin,3);else for(let h=0;h<5;h++)this.spawnSmoke(h,!0)}update(e){if(!this.active)return;this.age+=e;const t=new C;for(const n of this.pieces){const s=n.object;if(n.age+=e,n.velocity.y-=15*e,s.position.addScaledVector(n.velocity,e),s.rotateX(n.spin.x*e),s.rotateY(n.spin.y*e),s.rotateZ(n.spin.z*e),n.waterHit){n.waterAge+=e,n.velocity.x*=Math.exp(-e*3.5),n.velocity.z*=Math.exp(-e*3.5),n.velocity.y=Math.max(-1.55,n.velocity.y*.36),n.spin.multiplyScalar(Math.exp(-e*2.6));const c=Ai((1.7-n.waterAge)/1.2,0,1);s.visible=c>.025,c<.999&&s.traverse(l=>{if(l instanceof tt){const h=Array.isArray(l.material)?l.material:[l.material];for(const u of h)u.transparent=!0,u.opacity=c}});continue}s.updateMatrixWorld(!0);let r=0,a=null,o=null;for(const c of n.contacts){t.copy(c).applyMatrix4(s.matrixWorld);const l=this.sample(t.x,t.z),h=l.height-t.y;h>r&&(r=h,a=l,o=t.clone())}if(a&&o)if(a.water)n.waterHit=!0,n.velocity.y=Math.max(-1.55,n.velocity.y*.24),n.velocity.x*=.36,n.velocity.z*=.36,n.spin.multiplyScalar(.65),this.spawnSplash(o,4),this.spawnFoam(o,1);else{const c=new C(a.normal?.x??0,a.normal?.y??1,a.normal?.z??0).normalize();s.position.y+=r+.012;const l=n.velocity.dot(c);if(l<0){const f=n.rebound===0?.22:n.rebound===1?.08:0;n.velocity.addScaledVector(c,-l*(1+f)),l<-.9&&n.rebound++}const h=n.velocity.dot(c),u=n.velocity.clone().addScaledVector(c,-h),d=a.roughness!==void 0?2+a.roughness*3.3:3.2;if(u.multiplyScalar(Math.exp(-e*d)),n.velocity.copy(u).addScaledVector(c,Math.max(0,h)),n.spin.multiplyScalar(Math.exp(-e*2.25)),n.crush>0){const f=Math.min(1,Math.max(0,(n.age-.05)/.32)),x=f*f*(3-2*f);s.name==="wreckCore"&&(s.scale.y=n.originalScale.y*(1-n.crush*x)),s.name==="hullNose"&&(s.scale.z=n.originalScale.z*(1-n.crush*x))}if((s.name==="leftWing"||s.name==="rightWing"||s.name==="tail")&&n.velocity.length()<9&&n.age>.45){const f=new C(0,1,0).applyQuaternion(s.quaternion),x=new Ot().setFromUnitVectors(f,c).multiply(s.quaternion);s.quaternion.slerp(x,Math.min(1,e*1.4))}n.groundHit||(n.groundHit=!0,this.groundContactCount++)}else n.velocity.x*=Math.exp(-e*.23),n.velocity.z*=Math.exp(-e*.23)}if(this.violent&&this.age<2.5&&(this.emberClock+=e,this.emberClock>.22)){this.emberClock=0;const n=this.focus;this.spawnFire(n.clone().add(new C(Math.sin(this.age*9)*1.25,.45+Math.sin(this.age*13)*.35,Math.cos(this.age*8)*1)),Math.round(this.age*10),!0)}if(!this.water&&this.age<2.9){this.smokeClock+=e;const n=this.violent?.17:.24;for(;this.smokeClock>n;)this.smokeClock-=n,this.spawnSmoke(Math.floor(this.age*100),!1)}for(let n=this.foam.length-1;n>=0;n--){const s=this.foam[n];s.age+=e;const r=Ai(s.age/s.duration,0,1),a=s.start+s.grow*r;s.mesh.scale.set(a,a,1),s.mesh.material.opacity=.36*Math.pow(1-r,.85),r>=1&&(this.scene.remove(s.mesh),s.mesh.material.dispose(),this.foam.splice(n,1))}for(let n=this.flares.length-1;n>=0;n--){const s=this.flares[n];s.age+=e;const r=Ai(s.age/s.duration,0,1);s.sprite.scale.setScalar(s.start+s.grow*(r<.45?r/.45:1+(r-.45)*.1)),s.sprite.position.y+=s.rise*e,s.sprite.material.opacity=Math.pow(1-r,1.4)*(.64-this.age*.025),r>=1&&(this.scene.remove(s.sprite),s.sprite.material.dispose(),this.flares.splice(n,1))}for(let n=this.smoke.length-1;n>=0;n--){const s=this.smoke[n];s.age+=e;const r=Ai(s.age/s.duration,0,1);s.sprite.position.addScaledVector(s.velocity,e),s.sprite.scale.setScalar(s.size*(s.kind==="spray"?.55+r*1.2:.85+r*1.5)),s.sprite.material.opacity=s.kind==="spray"?.66*Math.pow(1-r,2):(this.violent?.26:.19)*Math.pow(1-r,1.2),r>=1&&(this.scene.remove(s.sprite),s.sprite.material.dispose(),this.smoke.splice(n,1))}}spawnFire(e,t,n=!1){const s=new Xs({map:this.fireMap,color:16743218,toneMapped:!1,transparent:!0,opacity:.8,depthTest:!0,depthWrite:!1,blending:Pi}),r=new Xr(s);r.position.copy(e);const a=n?1.2+t%3*.43:Math.min(1.6,this.intensity*.75)*(3+t%3*1.4);r.scale.setScalar(a),this.scene.add(r),this.flares.push({sprite:r,age:0,duration:n?.5+t%3*.12:.72+t%3*.16,start:a*.45,grow:a*(n?.95:.88),rise:n?1.1:1.8+t%3})}spawnFoam(e,t){const n=this.sample(e.x,e.z).height+.1;for(let s=0;s<t;s++){const r=new Hn({map:this.smokeMap,color:12119028,transparent:!0,opacity:.3,side:tn,depthWrite:!1}),a=new tt(this.foamGeometry,r);a.rotation.x=-Math.PI/2;const o=s*2.4;a.position.set(e.x+Math.cos(o)*1.4,n+s*.008,e.z+Math.sin(o)*1.4),this.scene.add(a),this.foam.push({mesh:a,age:0,duration:11+s%3*.5,start:2.5+s*.55,grow:10+s%2*4})}}spawnSplash(e,t){for(let n=0;n<t;n++){const s=n*2.399963229728653,r=3.8+n%4*1.6,a=new Xs({map:this.smokeMap,color:11922943,transparent:!0,opacity:.66,depthWrite:!1,depthTest:!0}),o=new Xr(a);o.position.copy(e).add(new C(Math.cos(s)*.45,.14,Math.sin(s)*.45)),this.scene.add(o),this.smoke.push({sprite:o,age:0,duration:.75+n%3*.15,size:1.2+n%3*.35,kind:"spray",velocity:new C(Math.cos(s)*r,5+n%5*1.8,Math.sin(s)*r)})}this.splashCount+=t}spawnSmoke(e,t){const n=e*.743,s=this.origin.clone().add(new C(Math.sin(n*2)*(e%7+1)*.7,1+Math.abs(Math.sin(n))*1.8,Math.cos(n*1.3)*(e%5+1)*.9));if(!t&&this.age>1&&this.pieces.length){const o=this.pieces.find(c=>c.object.name==="hullCabin")??this.pieces[0];s.copy(o.object.position).add(new C(Math.sin(n)*2.1,1,Math.cos(n)*1.6))}const r=new Xs({map:this.smokeMap,color:this.violent?3421495:6447973,opacity:t?.24:.33,transparent:!0,depthWrite:!1,depthTest:!0}),a=new Xr(r);a.position.copy(s),a.scale.setScalar(1),this.scene.add(a),this.smoke.push({sprite:a,age:0,duration:(t?1.6:2.4)+e%4*.25,size:this.violent?2+e%3*.4:1.7,kind:"smoke",velocity:new C(Math.sin(n)*1.4,2.8+e%3,Math.cos(n*2)*1.2)})}get impact(){return this.origin.clone()}get focus(){const e=this.pieces.find(t=>t.object.name==="wreckCore")??this.pieces.find(t=>t.object.name==="hullCabin")??this.pieces[0];return e?e.object.position.clone():this.origin.clone()}get status(){return{active:this.active,violent:this.violent,fragments:this.pieces.length,names:[...this.createdPartNames],flames:this.flares.length,smoke:this.smoke.filter(e=>e.kind==="smoke").length,spray:this.smoke.filter(e=>e.kind==="spray").length,splashes:this.splashCount,grounded:this.groundContactCount,submerged:this.pieces.filter(e=>e.waterHit).length,foam:this.foam.length,coreIntact:this.pieces.some(e=>e.object.name==="wreckCore"),coreCompression:this.pieces.find(e=>e.object.name==="wreckCore")?.object.scale.y??0}}reset(){for(const e of this.pieces)this.scene.remove(e.object),e.object.traverse(t=>{if(t instanceof tt){const n=Array.isArray(t.material)?t.material:[t.material];for(const s of n)s.dispose()}});for(const e of this.flares)this.scene.remove(e.sprite),e.sprite.material.dispose();for(const e of this.foam)this.scene.remove(e.mesh),e.mesh.material.dispose();for(const e of this.smoke)this.scene.remove(e.sprite),e.sprite.material.dispose();this.pieces.length=0,this.flares.length=0,this.smoke.length=0,this.foam.length=0,this.active=!1,this.violent=!1,this.createdPartNames=[],this.age=0,this.emberClock=0,this.splashCount=0,this.groundContactCount=0}}function R_(i){const e=i.phase==="flying",t=e?1:Math.min(1,i.speed/75),n=e?0:Math.exp(-i.groundTime*3.2),s=$t.clamp(i.touchdownSink/13,0,1);return{propellerRate:(.7+i.speed*.065)*t,aileron:e?$t.clamp(i.roll*.42,-.28,.28):0,elevator:e?$t.clamp(i.pitch*.6,-.17,.17):0,bodyLift:e?0:s*n*.1*(1+Math.sin(i.groundTime*27)),gearCompression:i.parts.gear&&!e?s*n*.2:0}}class C_{body=null;gear=null;propellers=[];ailerons=[];elevators=[];get status(){return{propellerAngles:this.propellers.map(e=>e.rotation.z),aileronAngles:this.ailerons.map(e=>e.rotation.x),elevatorAngles:this.elevators.map(e=>e.rotation.x),bodyLift:this.body?.position.y??0,gearCompression:this.gear?.position.y??0}}bind(e){this.body=e.children[0]??null,this.gear=e.getObjectByName("gear")??null;const t=n=>{const s=e.getObjectByName(n);if(!s)throw new Error("Missing Blender aircraft control: "+n);return s};this.propellers=[t("propeller-left"),t("propeller-right")],this.ailerons=[t("aileron-left"),t("aileron-right")],this.elevators=[t("elevator-left"),t("elevator-right")]}update(e,t){const n=R_(t);this.propellers.forEach((s,r)=>{s.rotation.z+=n.propellerRate*e*(r===0?1:-1)}),this.ailerons.length===2&&(this.ailerons[0].rotation.x=n.aileron,this.ailerons[1].rotation.x=-n.aileron),this.elevators.forEach(s=>{s.rotation.x=n.elevator}),this.body&&!this.body.parent?.userData.destroyed&&(this.body.position.y=n.bodyLift),this.gear&&t.parts.gear&&(this.gear.position.y=n.gearCompression)}}class P_{ctx=null;wind=null;brake=null;skid=null;master=null;noise=null;muted=!1;setMuted(e){this.muted=e,this.ctx&&this.master&&this.master.gain.setTargetAtTime(e?0:.68,this.ctx.currentTime,.03)}get isMuted(){return this.muted}get status(){return{muted:this.muted,active:!!this.ctx,state:this.ctx?.state??"unavailable"}}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}if(!(typeof AudioContext>"u"))try{const e=new AudioContext;this.ctx=e;const t=e.createBuffer(1,e.sampleRate*3,e.sampleRate),n=t.getChannelData(0);let s=341797,r=0;for(let c=0;c<n.length;c++){s=Math.imul(s,1664525)+1013904223|0;const l=(s>>>0)/2147483648-1;r=(r+l*.13)/1.13,n[c]=.78*l+.22*r}this.noise=t;const a=e.createGain();a.gain.value=this.muted?0:.68,a.connect(e.destination),this.master=a;const o=(c,l,h)=>{const u=e.createBufferSource();u.buffer=t,u.loop=!0;const d=e.createBiquadFilter();d.type="highpass",d.frequency.value=c;const f=e.createBiquadFilter();f.type="lowpass",f.frequency.value=l;const x=e.createGain();return x.gain.value=0,u.connect(d).connect(f).connect(x).connect(a),u.start(0,h),x};this.wind=o(100,1550,.1),this.brake=o(580,3900,1.2),this.skid=o(180,1350,2.4),e.state==="suspended"&&e.resume().catch(()=>{})}catch{this.ctx=null,this.wind=this.brake=this.skid=this.master=null}}update(e,t,n){if(!this.ctx||!this.wind||!this.brake||!this.skid)return;const s=this.ctx.currentTime,r=!n&&(e.phase==="flying"||e.phase==="sliding"),a=Math.min(1,e.speed/205),o=r&&e.phase==="flying"?.018+.16*a*a:0,c=r&&e.phase==="flying"&&t.brake?.016+.028*a:0,l=r&&e.phase==="sliding"?.018+Math.min(.11,e.speed*.0013):0;this.wind.gain.setTargetAtTime(o,s,.14),this.brake.gain.setTargetAtTime(c,s,.055),this.skid.gain.setTargetAtTime(l,s,.1)}event(e,t){if(!this.ctx||!this.noise||!this.master)return;const n=this.ctx.currentTime;e.type==="touchdown"?(this.burst(t?700:230,t?3200:1100,.075,.22,Math.min(.5,.1+e.strength*.17)),t||this.thud(Math.min(.4,.075+e.strength*.17),n)):e.type==="detach"?this.burst(t?280:430,t?2400:4300,.035,t?.19:.4,t?.18:.23):e.type==="crash"&&(this.burst(t?500:90,t?2400:950,.04,.55,.46),t||this.thud(.45,n))}burst(e,t,n,s,r){if(!this.ctx||!this.noise||!this.master)return;const a=this.ctx,o=a.currentTime,c=a.createBufferSource();c.buffer=this.noise;const l=a.createBiquadFilter();l.type="highpass",l.frequency.value=e;const h=a.createBiquadFilter();h.type="lowpass",h.frequency.value=t;const u=a.createGain();u.gain.setValueAtTime(1e-4,o),u.gain.exponentialRampToValueAtTime(Math.max(.001,r),o+n),u.gain.exponentialRampToValueAtTime(1e-4,o+s),c.connect(l).connect(h).connect(u).connect(this.master),c.start(o,.5+o%1),c.stop(o+s+.02),c.onended=()=>{c.disconnect(),l.disconnect(),h.disconnect(),u.disconnect()}}thud(e,t){if(!this.ctx||!this.master)return;const n=this.ctx,s=n.createOscillator();s.type="triangle",s.frequency.setValueAtTime(93,t),s.frequency.exponentialRampToValueAtTime(40,t+.22);const r=n.createGain();r.gain.setValueAtTime(e,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.26),s.connect(r).connect(this.master),s.start(t),s.stop(t+.28),s.onended=()=>{s.disconnect(),r.disconnect()}}}function L_(i,e,t,n){const s=new Set;let r=0,a=0,o=!1,c=null,l=null;const h=i.querySelector("span");function u(){s.clear(),r=a=0,o=!1,c!==null&&i.hasPointerCapture(c)&&i.releasePointerCapture(c),l!==null&&e.hasPointerCapture(l)&&e.releasePointerCapture(l),c=l=null,h.style.transform="",e.classList.remove("held")}addEventListener("keydown",g=>{if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(g.code)&&g.preventDefault(),g.code==="Escape"||g.code==="KeyP"){g.repeat||n();return}s.add(g.code)}),addEventListener("keyup",g=>s.delete(g.code)),t.addEventListener("contextmenu",g=>g.preventDefault());function d(g){const m=i.getBoundingClientRect(),p=m.width*.35;r=$t.clamp((g.clientX-m.left-m.width/2)/p,-1,1),a=$t.clamp((g.clientY-m.top-m.height/2)/p,-1,1),h.style.transform="translate(-50%,-50%) translate("+r*p+"px,"+a*p+"px)"}i.addEventListener("pointerdown",g=>{c===null&&(g.preventDefault(),c=g.pointerId,i.setPointerCapture(g.pointerId),d(g))}),i.addEventListener("pointermove",g=>{g.pointerId===c&&d(g)});for(const g of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(g,m=>{m.pointerId===c&&(r=a=0,c=null,h.style.transform="")});e.addEventListener("pointerdown",g=>{l===null&&(g.preventDefault(),l=g.pointerId,o=!0,e.setPointerCapture(g.pointerId),e.classList.add("held"))});for(const g of["pointerup","pointercancel","lostpointercapture"])e.addEventListener(g,m=>{m.pointerId===l&&(l=null,o=!1,e.classList.remove("held"))});function f(){return{roll:r+Number(s.has("ArrowRight")||s.has("KeyD"))-Number(s.has("ArrowLeft")||s.has("KeyA")),pitch:a+Number(s.has("ArrowDown")||s.has("KeyS"))-Number(s.has("ArrowUp")||s.has("KeyW")),brake:o||s.has("Space")}}function x(){return{stickX:r,stickY:a,braking:o,keys:[...s]}}return{read:f,clear:u,debug:x}}function I_(i,e,t){const n=[];function s(){const D=new Uint8Array(16384);for(let B=0;B<64;B++)for(let k=0;k<64;k++){const G=(k+.5)/64*2-1,U=(B+.5)/64*2-1,N=Math.sqrt(G*G+U*U),K=Math.atan2(U,G),q=.08*Math.sin(K*6+N*7)+.04*Math.sin(K*11-N*4),te=$t.clamp((.98+q-N)/.68,0,1),ge=.65+.25*Math.sin(G*17+U*12)*Math.cos(U*22-G*9),Pe=(B*64+k)*4;D[Pe]=D[Pe+1]=D[Pe+2]=255,D[Pe+3]=Math.round(255*te*te*ge*.85)}const F=new ir(D,64,64,jt);return F.magFilter=Rt,F.minFilter=Rt,F.needsUpdate=!0,F}const r=s();function a(T,D){return new Xr(new Xs({map:r,color:T,transparent:!0,opacity:D,depthTest:!0,depthWrite:!1}))}const o=[];let c=0;const l=new _c(1,.1,3,48);l.rotateX(-Math.PI/2);const h=[],u=[];let d=0;const f=1500,x=new Float32Array(f*6),g=new Mt;g.setAttribute("position",new Ut(x,3).setUsage(dc)),g.setDrawRange(0,0);const m=new jn(g,new Yn({color:5722423,transparent:!0,opacity:.57,depthWrite:!1}));m.frustumCulled=!1,m.visible=!1,i.add(m);let p=0;function E(T,D){const{flight:F,world:B}=e(),k=Math.cos(F.heading),G=Math.sin(F.heading),U=F.x+k*T+G*D,N=F.z+G*T-k*D,K=mt(B,U,N);return new C(U,K.height+.12,N)}function b(T,D){const{world:F,flight:B}=e();if(p>=f-3||mt(F,B.x,B.z).water)return;const k=Math.min(9,Math.max(.7,T*.085)),G=D?0:1.5,U=D?[-2.8,2.8]:[-.72,.72];for(const N of U){const K=E(N,G),q=E(N,G-k),te=p++*6;x[te]=K.x,x[te+1]=K.y,x[te+2]=K.z,x[te+3]=q.x,x[te+4]=q.y,x[te+5]=q.z}g.setDrawRange(0,p*2),g.attributes.position.needsUpdate=!0,m.visible=!0}function M(T){const{flight:D,aircraft:F}=e(),B=F.getObjectByName(T);if(!B)return;B.updateWorldMatrix(!0,!0);const k=new C,G=new Ot,U=new C;B.matrixWorld.decompose(k,G,U),B.removeFromParent(),i.add(B),B.position.copy(k),B.quaternion.copy(G),B.scale.copy(U),B.updateMatrixWorld(!0);const N=new nn().setFromObject(B),K=[];for(const te of[N.min.x,N.max.x])for(const ge of[N.min.y,N.max.y])for(const Pe of[N.min.z,N.max.z])K.push(B.worldToLocal(new C(te,ge,Pe)));const q=T==="gear"?.45:.92;n.push({object:B,contacts:K,underwater:!1,velocity:new C(Math.sin(D.heading)*D.speed*q+(T==="leftWing"?-5:T==="rightWing"?5:0),T==="gear"?-1.3:1.2,-Math.cos(D.heading)*D.speed*q),spin:T==="gear"?new C(.4,.2,.7):new C(1.6,.5,2),age:0})}function w(T,D,F,B){const{flight:k}=e(),G=Math.min(34,Math.round(11+B*12)),U=[];for(let te=0;te<G;te++){const ge=te*2.39996323+k.time*4,Pe=.35+te%5*.3,Ee=(.6+te%7*.32)*(.7+B*.35);U.push(Math.sin(ge)*Pe,0,Math.cos(ge)*Pe),U.push(Math.sin(ge)*Ee,.18+te%6*.25,Math.cos(ge)*Ee)}const N=new Mt;N.setAttribute("position",new Tt(U,3));const K=new Yn({color:16768938,transparent:!0,opacity:.64,depthWrite:!1}),q=new jn(N,K);q.position.set(T,D,F),i.add(q),u.push({lines:q,age:0})}function A(T,D){const{flight:F,world:B}=e(),k=mt(B,F.x,F.z),G=new Hn({color:D?13107199:16770231,transparent:!0,opacity:.55,depthWrite:!1,side:tn}),U=new tt(l,G);U.position.set(F.x,k.height+.22,F.z),D||U.quaternion.setFromUnitVectors(new C(0,1,0),new C(k.normal.x,k.normal.y,k.normal.z).normalize()),U.scale.setScalar(.8),i.add(U),h.push({mesh:U,age:0,duration:.48,strength:$t.clamp(T,.45,1.4)})}function P(T,D){const{flight:F,world:B}=e(),k=mt(B,F.x,F.z),G=D?13827071:k.kind==="道路"?12567997:k.kind==="砂浜"?15127205:13878429;(D||T>1.25)&&A(T,D),!D&&(T>1.1||!F.parts.gear)&&w(F.x,k.height+.45,F.z,Math.min(1.8,T));const U=D?[[0,0],[-2.8,0],[2.8,0]]:F.parts.gear?[[-2.8,0],[2.8,0],[0,3.1]]:[[-.75,1],[.75,1],[0,3.2]],N=Math.max(20,Math.min(36,Math.round(19+T*9))),K=Math.sin(F.heading),q=Math.cos(F.heading);for(let te=0;te<N;te++){const[ge,Pe]=U[te%U.length],Ee=E(ge,Pe),Se=te*2.39996323+F.time*.31,Y=(.6+te%7*.42)*(1+T*.25),$=a(G,D?.51:.4),ie=Ee.x+Math.cos(Se)*Y,_e=Ee.z+Math.sin(Se)*Y,me=mt(B,ie,_e);$.position.set(ie,me.height+.65+te%4*.22,_e),$.scale.setScalar(1.45+te%5*.38+T*.52),i.add($),o.push({mesh:$,age:0,drift:new C(K*(F.speed*.57-(3+T*5))+q*Math.sign(ge||Math.cos(Se))*(2.6+T*2)+Math.cos(Se)*(1.6+T)+F.windX*.22,D?2.8+T*2:1.2+T*1.8+te%3*.44,-q*(F.speed*.57-(3+T*5))+K*Math.sign(ge||Math.sin(Se))*(2.6+T*2)+Math.sin(Se)*(1.6+T)+F.windZ*.22)})}}function z(T){const{flight:D,world:F}=e();if(D.phase!=="sliding"||D.speed<7){d=0;return}if(d+=T,d<.12)return;d=0;const B=mt(F,D.x,D.z),k=B.water,G=k?13892351:B.kind==="道路"?11187639:B.kind==="砂浜"?14930086:14142111;k||b(D.speed,D.parts.gear);const U=D.parts.gear?[-2.8,2.8]:[-1.25,0,1.25];for(let N=0;N<U.length;N++){const K=E(U[N],-1.6),q=a(G,k?.28:.27);q.position.copy(K).add(new C(0,.55+N%2*.22,0)),q.scale.setScalar((k?1.75:1.85)+Math.min(1,D.speed/85)*.72),i.add(q);const te=Math.sin(D.heading),ge=Math.cos(D.heading);o.push({mesh:q,age:0,drift:new C(te*(D.speed*.48-2.2)+ge*Math.sign(U[N])*(2+Math.min(D.speed*.025,2))+D.windX*.32,k?2.8:1.1+N%2*.3,-ge*(D.speed*.48-2.2)+te*Math.sign(U[N])*(2+Math.min(D.speed*.025,2))+D.windZ*.32)})}}function S(T){const{flight:D,world:F,aircraft:B,mode:k}=e();t.update(T),z(T);const G=new C;for(const U of n){if(U.age+=T,U.underwater){U.velocity.x*=Math.exp(-T*4),U.velocity.z*=Math.exp(-T*4),U.velocity.y=-1.7,U.object.position.addScaledVector(U.velocity,T),U.spin.multiplyScalar(Math.exp(-T*3));continue}U.velocity.y-=14*T,U.object.position.addScaledVector(U.velocity,T),U.object.rotateX(U.spin.x*T),U.object.rotateZ(U.spin.z*T),U.object.updateMatrixWorld(!0);let N=0,K=null;for(const Ee of U.contacts){G.copy(Ee).applyMatrix4(U.object.matrixWorld);const Se=mt(F,G.x,G.z),Y=Se.height-G.y;Y>N&&(N=Y,K=Se)}if(!K)continue;if(K.water){U.underwater=!0,U.velocity.y=-1.7,U.velocity.x*=.2,U.velocity.z*=.2,U.spin.multiplyScalar(.4);continue}const q=new C(K.normal.x,K.normal.y,K.normal.z).normalize();U.object.position.addScaledVector(q,N+.012);const te=U.velocity.dot(q);te<0&&U.velocity.addScaledVector(q,-te*1.12);const ge=U.velocity.dot(q),Pe=U.velocity.clone().addScaledVector(q,-ge);Pe.multiplyScalar(Math.exp(-T*(3+K.roughness*5))),U.velocity.copy(Pe).addScaledVector(q,Math.max(0,ge)),U.spin.multiplyScalar(Math.exp(-T*3.3))}if(c+=T,c>.2&&k==="flight"&&D.integrity<55&&D.phase==="flying"){c=0;const U=a(6910842,.26);U.position.copy(B.position).add(new C(0,.1,1)),U.scale.setScalar(1.7),i.add(U),o.push({mesh:U,age:0,drift:new C(0,1.8,0)})}for(let U=o.length-1;U>=0;U--){const N=o[U];N.age+=T,N.mesh.position.addScaledVector(N.drift,T),N.mesh.scale.multiplyScalar(1+T*.62),N.mesh.material.opacity*=Math.exp(-T*2.1),N.age>1.35&&(i.remove(N.mesh),N.mesh.material.dispose(),o.splice(U,1))}for(let U=h.length-1;U>=0;U--){const N=h[U];N.age+=T;const K=Math.min(1,N.age/N.duration);N.mesh.scale.setScalar(.8+K*8*N.strength),N.mesh.material.opacity=.34*(1-K)*(1-K),K>=1&&(i.remove(N.mesh),N.mesh.material.dispose(),h.splice(U,1))}for(let U=u.length-1;U>=0;U--){const N=u[U];N.age+=T,N.lines.material.opacity=.64*Math.max(0,1-N.age/.42),N.age>=.42&&(i.remove(N.lines),N.lines.geometry.dispose(),N.lines.material.dispose(),u.splice(U,1))}}function v(){for(const T of n)i.remove(T.object);n.length=0;for(const T of o)i.remove(T.mesh),T.mesh.material.dispose();o.length=0;for(const T of h)i.remove(T.mesh),T.mesh.material.dispose();h.length=0;for(const T of u)i.remove(T.lines),T.lines.geometry.dispose(),T.lines.material.dispose();u.length=0,c=0,d=0,p=0,g.setDrawRange(0,0),m.visible=!1}return{detach:M,emitSparks:w,emitImpact:P,tick:S,reset:v}}const ph=99,D_=11,U_=new C(0,1,0),N_=new Ne().makeScale(0,0,0),mh=["#2f656e","#37636c","#546476","#37604e","#644d59","#465c74"],xh=["#ff8a2b","#f9b43a","#ed6c4c","#fa9c40","#e9a94a"],gh=["#e9b58c","#c68c62","#a96e49","#e7b18a","#8e5b3f"];class F_{constructor(e,t){this.scene=e,this.source=t}scene;source;people=[];batches=[];elapsed=0;onWater=!1;sample=null;plane=null;flight=null;scratch=new C;facing=new Ot;modelMatrix=new Ne;batchTint=new Te;right=new C;rear=new C;get total(){return this.people.length}get shown(){return this.people.reduce((e,t)=>e+(this.elapsed>=t.delay?1:0),0)}get roofCount(){return this.people.filter(e=>e.onRoof).length}get batchCount(){return this.batches.length}begin(e,t,n,s){if(this.reset(),e.phase!=="success")return;this.flight=e,this.plane=t,this.sample=n,this.onWater=s,this.right.set(Math.cos(e.heading),0,Math.sin(e.heading)),this.rear.set(-Math.sin(e.heading),0,Math.cos(e.heading));const r=[];if(this.source.traverse(a=>{a instanceof tt&&r.push(a)}),!r.length)throw new Error("No geometry in authored pilot GLB");this.batches=r.map((a,o)=>{const c=a.material;if(Array.isArray(a.material))throw new Error("Unexpected multi-material pilot GLB");const l=c.clone(),h=c.name.includes("MAT_pilot_suit")||c.name.includes("MAT_pilot_vest")||c.name.includes("MAT_pilot_skin");h&&l.color.set(16777215);const u=new ys(a.geometry,l,ph);return u.name="victory-survivors-"+o,u.frustumCulled=!1,u.castShadow=!1,u.receiveShadow=!0,u.instanceMatrix.setUsage(dc),this.scene.add(u),{mesh:u,material:l,colored:h}});for(let a=0;a<ph;a++){const o=this.source.clone(!0),c=[];if(o.traverse(E=>{E instanceof tt&&c.push(E)}),c.length!==r.length)throw new Error("Crowd mesh clone mismatch");const l=E=>{const b=o.getObjectByName(E);if(!b)throw new Error("Crowd limb not found: "+E);return b},h=s&&a<D_,u=Math.floor(a/11),f=(a%11-5)*1.55+u%2*.38+Math.sin(a*17.3)*.48,x=6.2+u*1.75+Math.cos(a*8.4)*.46,g=new C(e.x,0,e.z);if(h||g.addScaledVector(this.right,f).addScaledVector(this.rear,x),h){const E=a,b=(E%2?1:-1)*(.55+E%3*.08),M=-2.3+Math.floor(E/2)*.93;g.copy(t.localToWorld(new C(b,1.31,M)))}else s?g.y=n(g.x,g.z).height-1.14:g.y=n(g.x,g.z).height+.035;const m=new C(e.x,e.y,e.z).addScaledVector(this.right,a%2?.95:-.95).addScaledVector(this.rear,2.5);m.y=s?t.localToWorld(new C(0,1.31,1)).y:n(m.x,m.z).height+.035;const p={puppet:o,meshes:c,left:l("pilot-arm-L"),right:l("pilot-arm-R"),legL:l("pilot-leg-L"),legR:l("pilot-leg-R"),from:m,to:g,delay:a*.037,onRoof:h};this.people.push(p);for(let E=0;E<r.length;E++){const b=r[E].material.name,M=this.batches[E];if(!M.colored)continue;let w;b.includes("suit")?w=mh[(a*5+Math.floor(a/9))%mh.length]:b.includes("vest")?w=xh[(a*3+Math.floor(a/5))%xh.length]:w=gh[(a+Math.floor(a/7))%gh.length],this.batchTint.set(w),b.includes("suitHighlight")&&this.batchTint.multiplyScalar(1.15),b.includes("skinShade")&&this.batchTint.multiplyScalar(.78),M.mesh.setColorAt(a,this.batchTint)}}for(const a of this.batches)a.mesh.instanceColor&&(a.mesh.instanceColor.needsUpdate=!0);this.elapsed=0}update(e,t){if(!(!this.people.length||!this.sample||!this.plane)){this.elapsed+=Math.max(0,Math.min(.09,e));for(let n=0;n<this.people.length;n++){const s=this.people[n],r=this.elapsed-s.delay;if(r<0){for(const u of this.batches)u.mesh.setMatrixAt(n,N_);continue}const a=Math.min(1,r/.93),o=a*a*(3-2*a);s.puppet.position.copy(s.from).lerp(s.to,o),s.onRoof?s.puppet.position.y=s.to.y+(1-a)*-.55:this.onWater?s.puppet.position.y=$t.lerp(s.from.y,s.to.y,o)+Math.sin(Math.PI*a)*.44+Math.sin(r*2+n*1.3)*.08*a:(s.puppet.position.y=this.sample(s.puppet.position.x,s.puppet.position.z).height+.035,s.puppet.position.y+=Math.abs(Math.sin(r*13+n*.4))*.05*(1-a)),this.scratch.copy(t.position).sub(s.puppet.position),s.puppet.quaternion.setFromAxisAngle(U_,Math.atan2(-this.scratch.x,-this.scratch.z));const c=$t.smoothstep(r,.55,1.35),l=r>1.35?Math.sin(r*(4.2+n%4*.35)+n)*.18:0;s.left.rotation.z=-c*(2.15+l),s.right.rotation.z=c*(2.15+l);const h=1-a;s.legL.rotation.x=h*Math.sin(r*13+n*.7)*.34,s.legR.rotation.x=-s.legL.rotation.x,s.puppet.scale.setScalar(1),s.puppet.updateMatrixWorld(!0);for(let u=0;u<this.batches.length;u++)this.batches[u].mesh.setMatrixAt(n,s.meshes[u].matrixWorld)}for(const n of this.batches)n.mesh.instanceMatrix.needsUpdate=!0}}status(e){let t=0,n=1/0;const s={land:0,sea:0,roof:0};for(const r of this.people){if(this.elapsed<r.delay)continue;this.onWater&&!r.onRoof&&this.elapsed-r.delay>1.5&&(n=Math.min(n,this.sample(r.to.x,r.to.z).height-r.puppet.position.y));const a=r.puppet.position.clone().add(new C(0,1,0)).project(e);a.x>=-1&&a.x<=1&&a.y>=-1&&a.y<=1&&a.z>=-1&&a.z<=1&&(t++,r.onRoof?s.roof++:this.onWater?s.sea++:s.land++)}return{additional:this.people.length,spawned:this.shown,visibleInCamera:t,roof:this.roofCount,floating:this.onWater?this.people.length-this.roofCount:0,meshBatches:this.batches.length,swimmerFootDepthMin:Number.isFinite(n)?n:null,inFrame:s}}reset(){for(const e of this.batches)e.mesh.removeFromParent(),e.mesh.dispose(),e.material.dispose();this.batches=[],this.people=[],this.elapsed=0,this.sample=null,this.plane=null,this.flight=null}}class O_{constructor(e,t){if(this.scene=e,this.source=t,this.crowd=new F_(e,t),!t.getObjectByName("rescuePilot")||!t.getObjectByName("pilot-arm-L")||!t.getObjectByName("pilot-arm-R")||!t.getObjectByName("pilot-leg-L")||!t.getObjectByName("pilot-leg-R"))throw new Error("Blender pilot hierarchy is incomplete")}scene;source;actor=null;crowd;armL=null;armR=null;legL=null;legR=null;elapsed=0;onWater=!1;flight=null;plane=null;sample=null;from=new C;to=new C;pos=new C;parentRotation=new Ot;aim=new Ot;get active(){return!!this.actor}get water(){return this.active&&this.onWater}begin(e,t,n){if(e.phase==="success"){if(this.reset(),this.flight=e,this.plane=t,this.sample=n,this.onWater=!!n(e.x,e.z).water,this.elapsed=0,this.actor=this.source.clone(!0),this.actor.name="victory-pilot",this.armL=this.actor.getObjectByName("pilot-arm-L")??null,this.armR=this.actor.getObjectByName("pilot-arm-R")??null,this.legL=this.actor.getObjectByName("pilot-leg-L")??null,this.legR=this.actor.getObjectByName("pilot-leg-R")??null,this.onWater)this.plane.add(this.actor),this.actor.position.set(0,1.3,.1),this.actor.scale.set(1,.65,1);else{this.scene.add(this.actor);const s=new C(Math.cos(e.heading),0,Math.sin(e.heading)),r=new C(Math.sin(e.heading),0,-Math.cos(e.heading));this.from.set(e.x,0,e.z).addScaledVector(s,1.36).addScaledVector(r,2.45),this.to.set(e.x,0,e.z).addScaledVector(s,1.75).addScaledVector(r,7.1),this.actor.position.copy(this.from),this.actor.position.y=n(this.from.x,this.from.z).height+.035}this.crowd.begin(e,t,n,this.onWater)}}update(e,t){if(!this.actor||!this.flight||!this.sample||!this.plane)return;this.elapsed+=Math.min(e,.09);const n=this.elapsed,s=Math.min(1,n/.95),r=s*s*(3-2*s);if(this.onWater){const u=Math.min(1,n/.85);this.actor.scale.y=.65+.35*(u*u*(3-2*u))}else this.pos.copy(this.from).lerp(this.to,r),this.pos.y=this.sample(this.pos.x,this.pos.z).height+.035,this.actor.position.copy(this.pos);this.actor.getWorldPosition(this.pos);const a=Math.atan2(-(t.position.x-this.pos.x),-(t.position.z-this.pos.z));this.aim.setFromAxisAngle(new C(0,1,0),a),this.actor.parent.getWorldQuaternion(this.parentRotation),this.actor.quaternion.copy(this.parentRotation.invert().multiply(this.aim));const o=Math.min(1,Math.max(0,(n-.66)/.72)),c=o*o*(3-2*o),l=n>1.42?Math.sin((n-1.42)*6)*.105:0;this.armR&&(this.armR.rotation.z=c*(2.28+l)),this.armL&&(this.armL.rotation.z=-c*(2.28+l));const h=this.onWater?0:Math.sin(n*15)*.34*(1-s);this.legL&&(this.legL.rotation.x=h),this.legR&&(this.legR.rotation.x=-h),this.onWater?n>1.4&&(this.actor.position.y=1.3+Math.abs(Math.sin(n*5))*.025):this.actor.position.y+=(1-s)*Math.abs(Math.sin(n*15))*.043,this.crowd.update(e,t)}reset(){this.crowd.reset(),this.actor?.removeFromParent(),this.actor=null,this.armL=this.armR=this.legL=this.legR=null,this.flight=null,this.plane=null,this.sample=null,this.elapsed=0,this.onWater=!1}status(e){if(!this.actor)return{active:!1};this.actor.updateWorldMatrix(!0,!0);const t=new nn().setFromObject(this.actor),n=t.max.y-t.min.y,s=this.actor.getWorldPosition(new C).project(e);return{active:!0,water:this.onWater,age:this.elapsed,heightM:n,worldFootY:t.min.y,planeY:this.plane?.position.y??null,groundY:this.sample?this.onWater?this.sample(this.flight.x,this.flight.z).height:this.sample(this.actor.position.x,this.actor.position.z).height:null,armL:this.armL?.rotation.z??0,armR:this.armR?.rotation.z??0,screenX:(s.x+1)*innerWidth/2,screenY:(1-s.y)*innerHeight/2,count:1+this.crowd.total,visible:1+this.crowd.shown,crowd:this.crowd.status(e)}}}function Tc(i,e,t=!1,n=0){const s=innerHeight>=innerWidth,r=s?new C(21,10,25):new C(19,8,19),a=e.position.clone().add(r);t?i.position.copy(a):i.position.lerp(a,1-Math.exp(-Math.max(.016,n)*3));const o=e.position.clone().add(s?new C(0,-7,0):new C(-14,-2,0));i.lookAt(o)}function Ec(i,e,t){const n=innerHeight>=innerWidth;if(e.stage.id===4){Ac(i,t);return}const s=[[580,385,860],[520,280,620],[650,550,630],[430,650,950]],r=[[0,10,-170],[0,-20,-200],[-120,80,-310],[0,180,-70]],a=e.stage.id;if(a===3&&n){i.position.set(34+Math.sin(t*16e-5)*8,730,1140),i.lookAt(new C(0,72,-280));return}const o=s[a],c=r[a],l=Math.sin(t*16e-5)*35;i.position.set(o[0]+l,o[1],n?o[2]*1.16:o[2]);const h=new C(c[0],c[1],c[2]);h.y-=n?115:12,i.lookAt(h)}function Jo(i,e,t,n){const s=new C(Math.sin(t.heading),0,-Math.cos(t.heading)),r=innerHeight>innerWidth,a=r?39:17,o=r?14:7,c=e.position.clone().addScaledVector(s,-a).add(new C(0,o,0));c.y=Math.max(c.y,mt(n,c.x,c.z).height+5),i.position.copy(c),i.lookAt(e.position.clone().addScaledVector(s,8).add(new C(0,-1.4,0)))}function Ac(i,e){const t=innerHeight>innerWidth,n=Math.sin(e*15e-5)*90,s=new C(0,34,-260),r=t?new C(750+n,2350,2950):new C(900+n,1280,1550);i.position.copy(r),i.lookAt(s.clone().add(new C(t?0:-440,t?-760:-80,0)))}function B_(i,e,t,n,s,r=!1){const a=new C(Math.sin(e.heading),0,-Math.cos(e.heading)),o=new C(Math.cos(e.heading),0,Math.sin(e.heading)),c=innerHeight>innerWidth,l=n.clone().addScaledVector(a,c?-30:-28).addScaledVector(o,c?4:13).add(new C(0,c?18:15,0));l.y=Math.max(l.y,mt(t,l.x,l.z).height+9),i.position.lerp(l,1-Math.exp(-s*2.7)),i.lookAt(n.clone().add(new C(0,r?-3:.7,0)))}function z_(i,e,t,n,s,r=0){const a=new C(Math.sin(t.heading),0,-Math.cos(t.heading)),o=new C(Math.cos(t.heading),0,Math.sin(t.heading)),c=innerHeight>innerWidth,l=e.position.clone().addScaledVector(a,c?-48:-38).addScaledVector(o,c?17:15).add(new C(0,c?22:20,0));l.y=Math.max(l.y,mt(n,l.x,l.z).height+8),i.position.lerp(l,1-Math.exp(-r*3.6)),i.lookAt(e.position.clone().addScaledVector(a,c?-8:-16).addScaledVector(o,c?0:-3).add(new C(0,c?-5:-3,0)))}const ue=i=>document.getElementById(i),uu=ue("game");document.body.dataset.mode="title";const Mn=new Pg({canvas:uu,antialias:!0,powerPreference:"high-performance"});Mn.setPixelRatio(Math.min(devicePixelRatio,1.75));Mn.shadowMap.enabled=!0;Mn.shadowMap.type=yh;Mn.outputColorSpace=It;Mn.toneMapping=bh;Mn.toneMappingExposure=1.05;const Ht=new Qd,ft=new Vt(53,innerWidth/innerHeight,.5,6500);Ht.add(new wf(14151167,6251842,1.9));const yn=new Jh(16769973,2.5);yn.position.set(-180,350,130);yn.castShadow=!0;yn.shadow.mapSize.set(2048,2048);Object.assign(yn.shadow.camera,{left:-200,right:200,top:200,bottom:-200,near:1,far:850});yn.shadow.bias=-.001;Ht.add(yn,yn.target);const lt=new Rn;Ht.add(lt);const ca=new E_(Ht),Ys=new C_,hn=new P_;try{hn.setMuted(localStorage.getItem("deadstick-muted")==="1")}catch{}const Ci=new w_(Ht,(i,e)=>mt(He,i,e));let Qo,xs,He,Wn,pe,gs=null;const Si=I_(Ht,()=>({world:He,flight:pe,aircraft:lt,mode:dt}),Ci);let wt=0,Li=0,k_=13,di=!1,dt="title",Cn=!1,ec=0,ea=0,on=0;try{Li=Math.min(Kn.length-1,Math.max(0,Number(localStorage.getItem("deadstick-stage")||0)))}catch{}wt=0;const la=matchMedia("(pointer:coarse)").matches||navigator.maxTouchPoints>0;document.body.dataset.controls=la?"touch":"keyboard";let Yt=0;const du=new Mt;du.setAttribute("position",new Tt([-2,0,0,0,.55,0,2,0,0],3));const ta=[],ha=[];let wc=[];const Rc=[],_h={leftWing:"左翼",rightWing:"右翼",tail:"尾翼",gear:"脚"};function fu(){Mn.setSize(innerWidth,innerHeight),ft.aspect=innerWidth/innerHeight,ft.updateProjectionMatrix(),Zn.clear()}const Zn=L_(ue("stick"),ue("brake"),uu,()=>{dt==="flight"&&rr(!Cn)});addEventListener("resize",fu);fu();addEventListener("blur",()=>{Zn.clear(),dt==="flight"&&rr(!0)});document.addEventListener("visibilitychange",()=>{document.hidden&&dt==="flight"&&rr(!0)});function As(i,e=!0){ue("help-overlay").hidden=!i,ue("help-open").setAttribute("aria-expanded",String(i)),i?ue("help-close").focus():e&&ue("help-open").focus()}ue("help-open").onclick=()=>As(!0);ue("help-close").onclick=()=>As(!1);ue("help-backdrop").onclick=()=>As(!1);addEventListener("keydown",i=>{i.key==="Escape"&&!ue("help-overlay").hidden&&(i.preventDefault(),i.stopImmediatePropagation(),As(!1))},!0);function pu(){const i=ue("audio-toggle");i.textContent=hn.isMuted?"音：オフ":"音：オン",i.setAttribute("aria-pressed",String(!hn.isMuted))}ue("audio-toggle").onclick=()=>{hn.setMuted(!hn.isMuted);try{localStorage.setItem("deadstick-muted",hn.isMuted?"1":"0")}catch{}pu()};pu();function ua(){ue("stage-select").innerHTML="",Kn.forEach((e,t)=>{const n=document.createElement("button");n.textContent=String(t+1).padStart(2,"0"),n.title=e.subtitle,n.className=(t===wt?"active":"")+(t>Li?" locked":""),n.ariaLabel=e.name+(t>Li?" 未解放・背景プレビュー可能":""),n.onclick=()=>{wt=t,ua(),da(),Ec(ft,He,performance.now())},ue("stage-select").append(n)}),ue("selected-stage-name").textContent=Kn[wt].name,ue("stage-desc").textContent=Kn[wt].subtitle;const i=di&&wt<=Li;ue("start").disabled=!i,ue("start").textContent=i?"飛ぶ":"未解放"}function V_(){Wn&&(Ht.remove(Wn),Wn.traverse(i=>{if(i instanceof ys&&i.dispose(),(i instanceof tt||i instanceof jn)&&i.userData.terrainOwned){i.geometry.dispose();const e=Array.isArray(i.material)?i.material:[i.material];for(const t of e)t.dispose()}})),Si.reset();for(const i of ta)Ht.remove(i),i.material.dispose();ta.length=0,ha.length=0,wc=[],Rc.length=0}function H_(){const i=["urban-apartment","urban-office","urban-storefront"];xs.updateMatrixWorld(!0);const e=new Ne,t=new Ne,n=new Ne,s=new C,r=new Ot,a=new C,o=new C(0,1,0);for(const c of i){const l=He.props.filter(u=>u.kind===c);if(!l.length)continue;const h=xs.getObjectByName(c);if(!h)throw new Error("Urban asset missing: "+c);h.updateWorldMatrix(!0,!0),n.copy(h.matrixWorld).invert(),h.traverse(u=>{if(!(u instanceof tt))return;t.multiplyMatrices(n,u.matrixWorld);const d=new ys(u.geometry,u.material,l.length);d.name=c+"-batch",d.frustumCulled=!1,d.castShadow=!1,d.receiveShadow=!0,l.forEach((f,x)=>{s.set(f.x,f.y,f.z),r.setFromAxisAngle(o,f.rotation),a.setScalar(f.scale),e.compose(s,r,a),e.multiply(t),d.setMatrixAt(x,e)}),d.instanceMatrix.needsUpdate=!0,Wn.add(d)})}}function da(){if(di){gs?.reset(),V_(),Ci.reset(),ca.reset(),He=x_(wt,k_),Ht.background=new Te(He.stage.sky),Ht.fog=new mc(He.stage.fog,wt===4?1700:wt===3?600:450,wt===4?6200:wt===3?4600:2600),Wn=__(He,xs),Wn.traverse(i=>{!(i instanceof ys)&&(i instanceof tt||i instanceof jn)&&(i.userData.terrainOwned=!0)}),Ht.add(Wn),H_();for(const i of He.props){if(i.kind.startsWith("urban-"))continue;const e=xs.getObjectByName(i.kind);if(!e)continue;const t=e.clone(!0);if(t.position.set(i.x,i.y,i.z),t.rotation.set(0,i.rotation,0),t.scale.setScalar(i.scale),Wn.add(t),i.kind==="tree"&&Rc.push({object:t,phase:i.x*.011+i.z*.017}),i.kind==="car"){const n=He.obstacles.find(s=>s.kind==="car"&&Math.abs(s.x-i.x)<.1&&Math.abs(s.z-i.z)<.1);n&&wc.push({mesh:t,obstacle:n,z:i.z,direction:i.rotation===0?-1:1})}}lt.clear(),lt.add(Qo.clone(!0)),Ys.bind(lt),pe=v_(He.start),lt.position.set(pe.x,pe.y,pe.z),lt.rotation.set(0,0,0);for(let i=0;i<He.stage.birds;i++){const e=new sa(du,new Yn({color:2572100}));Ht.add(e),ta.push(e),ha.push({x:0,y:0,z:0,radius:2})}mu(0),ft.position.set(pe.x+65,pe.y+22,pe.z+65),ft.lookAt(pe.x,pe.y,pe.z),yn.target.position.copy(lt.position),yn.position.copy(lt.position).add(new C(-180,350,130))}}function mu(i){const e=He.stage.gust*(Math.sin(i*1.7)+.5*Math.sin(i*.63+2));for(const t of Rc){const n=(He.stage.wind+e)*.0105+He.stage.gust*.004*Math.sin(i*2+t.phase);t.object.rotation.z=-$t.clamp(n,-.2,.2),t.object.rotation.x=$t.clamp(e*.0035*Math.sin(i*1.4+t.phase),-.06,.06)}ta.forEach((t,n)=>{const s=Math.floor(n/5),r=ha[n];r.x=Math.sin(i*.32+n*.43)*48+(s-1)*90,r.y=105-s*26+Math.sin(i+n)*3,r.z=500-s*300+Math.cos(i*.2+n*.2)*55,t.position.set(r.x,r.y,r.z),t.rotation.z=Math.sin(i*8+n)*.35});for(const t of wc)t.mesh.position.z=((t.z+i*t.direction*9+1900)%3800+3800)%3800-1900,wt===3&&(t.mesh.position.x=95*Math.sin(t.mesh.position.z/340)+t.direction*6,t.mesh.rotation.y=-Math.atan(95/340*Math.cos(t.mesh.position.z/340))+(t.direction>0?Math.PI:0),t.obstacle.x=t.mesh.position.x),t.mesh.position.y=mt(He,t.mesh.position.x,t.mesh.position.z).height,t.obstacle.z=t.mesh.position.z,t.obstacle.y=t.mesh.position.y+1}function fa(){di&&(hn.start(),As(!1,!1),da(),lt.visible=!0,dt="flight",document.body.dataset.mode="flight",Cn=!1,ec=0,on=wt===4?2:0,Zn.clear(),hu(pe,He,ea),ue("menu").hidden=!0,ue("stage-menu").hidden=!0,ue("result").hidden=!0,ue("pause-panel").hidden=!0,ue("pause").hidden=on>0,ue("pause").textContent="Ⅱ",ue("pause").setAttribute("aria-label","一時停止"),ue("hud").hidden=on>0,ue("touch").hidden=on>0||!la,ue("stage-label").textContent=He.stage.name,ue("notice").textContent="",ea=0,on>0?Ac(ft,performance.now()):Jo(ft,lt,pe,He))}function Cc(i){As(!1,!1),dt=i,document.body.dataset.mode=i,Cn=!1,Zn.clear(),Yt=0,pe&&hn.update(pe,{roll:0,pitch:0,brake:!1},!0),ue("menu").hidden=i!=="title",ue("stage-menu").hidden=i!=="stages",ue("result").hidden=!0,ue("hud").hidden=!0,ue("touch").hidden=!0,ue("pause-panel").hidden=!0,ue("pause").hidden=!0,i==="title"&&(wt=0),ua(),di&&(da(),lt.visible=i==="title",i==="title"?Tc(ft,lt,!0):Ec(ft,He,performance.now()))}function xu(){Cc("stages")}function rr(i){dt==="flight"&&(Cn=i,hn.update(pe,{roll:0,pitch:0,brake:!1},i),i&&ca.hide(),Zn.clear(),ue("pause-panel").hidden=!i,ue("touch").hidden=i||!la,ue("hud").hidden=i,ue("pause").textContent=i?"▶":"Ⅱ",ue("pause").setAttribute("aria-label",i?"飛行を再開":"一時停止"))}ue("choose-stage").onclick=()=>Cc("stages");ue("stage-back").onclick=()=>Cc("title");ue("start").onclick=fa;ue("restart").onclick=fa;ue("pause-home").onclick=xu;ue("pause").onclick=()=>rr(!Cn);ue("resume").onclick=()=>rr(!1);function Pc(i,e){const t=ue(i);let n=!1;t.addEventListener("pointerdown",()=>{dt==="result"&&(n=!0)}),t.addEventListener("pointercancel",()=>{n=!1}),t.addEventListener("click",s=>{const r=n||s.detail===0;n=!1,dt==="result"&&r&&e()})}Pc("retry",fa);Pc("home",xu);Pc("next",()=>{wt=Math.min(Kn.length-1,wt+1),fa()});function G_(){dt="result",ca.hide(),pe.phase==="success"?gs?.begin(pe,lt,(s,r)=>mt(He,s,r)):gs?.reset(),document.body.dataset.mode="result",Zn.clear(),ue("touch").hidden=!0,ue("pause").hidden=!0,ue("hud").hidden=!0;const i=pe.phase==="success";if(i){Li=Math.max(Li,Math.min(wt+1,Kn.length-1));try{localStorage.setItem("deadstick-stage",String(Li))}catch{}}const e=Object.keys(_h).filter(s=>!pe.parts[s]).map(s=>_h[s]);ue("result").hidden=!1,ue("result-stage").textContent=He.stage.name,ue("result-title").textContent=i?pe.surface==="海面"?"着水、生還":"生還":"墜落";const t=ue("result-damage");t.hidden=!i||e.length===0,t.textContent=i&&e.length?"損失："+e.join("・"):"";const n=[["接地点",pe.surface||"不明"],["飛行",pe.time.toFixed(1)+"s"],["機体",Math.round(pe.integrity)+"%"]];ue("result-stats").innerHTML=n.map(([s,r])=>"<div><small>"+s+"</small><strong>"+r+"</strong></div>").join(""),ue("result-stats").dataset.count=String(n.length),ue("next").hidden=!i||wt===Kn.length-1,ue("retry").textContent="リトライ"}let vh=performance.now();function gu(i){requestAnimationFrame(gu);const e=Math.min((i-vh)/1e3,.05);if(vh=i,!di){Mn.render(Ht,ft);return}if(dt==="flight"&&!Cn&&on>0&&(on=Math.max(0,on-e),on===0&&(ue("hud").hidden=!1,ue("pause").hidden=!1,ue("touch").hidden=!la,Jo(ft,lt,pe,He))),dt==="flight"&&!Cn&&on===0){mu(pe.time);const n=Zn.read();b_(pe,n,{sample:(s,r)=>mt(He,s,r),obstacles:He.obstacles,wind:{x:He.stage.wind,z:.3,gust:He.stage.gust},birds:ha,bounds:He.extent-100},e),hn.update(pe,n,!1),lt.position.set(pe.x,pe.y,pe.z),lt.rotation.set(pe.pitch,-pe.heading,-pe.roll,"YXZ"),Ys.update(e,pe);for(const s of pe.events){if((s.type==="detach"||s.type==="crash"||s.type==="touchdown"&&pe.phase!=="crashed")&&hn.event(s,mt(He,pe.x,pe.z).water),s.type==="detach"&&s.part&&(Si.detach(s.part),Si.emitSparks(s.x,s.y,s.z,.8),Yt=Math.max(Yt,.35)),s.type==="touchdown"&&pe.phase!=="crashed"&&(Si.emitImpact(Math.max(.5,s.strength),pe.surface==="海面"),Yt=Math.max(Yt,Math.min(1.5,s.strength*.65))),s.type==="crash"){const r=mt(He,pe.x,pe.z),a=r.water;pe.y-r.height<13&&Si.emitImpact(Math.min(3,Math.max(.8,s.strength)),a),Ci.start(lt,pe,s.strength,a),Zn.clear(),ue("touch").hidden=!0,ue("hud").hidden=!0,ue("pause").hidden=!0,Yt=Math.max(Yt,1.7)}s.type==="damage"&&(Yt=Math.max(Yt,Math.min(1,s.strength*.3))),ue("notice").textContent=s.message,ea=pe.time+3}ca.update(e,pe,He.stage.gust,innerHeight>innerWidth),Si.tick(e),hu(pe,He,ea),(pe.phase==="success"||pe.phase==="crashed")&&(ec+=e,ec>(pe.phase==="crashed"?3.15:1.7)&&G_())}if(dt==="result"&&Si.tick(e),dt==="title"){const n=i*12e-5;lt.position.y=pe.y+Math.sin(n*7)*.7,lt.rotation.set(.04,-.22,Math.sin(n*3)*.035),Ys.update(e,pe),Tc(ft,lt,!1,e)}else if(dt==="stages")Ec(ft,He,i);else if(dt==="flight"&&on>0)Ac(ft,i);else if(pe.phase==="crashed"&&Ci.status.active){const n=Ci.impact,s=dt==="result"&&mt(He,n.x,n.z).water?new C(n.x,1,n.z):Ci.focus;B_(ft,pe,He,s,e,dt==="result")}else dt==="result"||dt==="flight"&&pe.phase==="success"?z_(ft,lt,pe,He,!1,e):Jo(ft,lt,pe,He);if(dt==="flight"&&!Cn&&on===0&&pe.phase==="flying"){const n=Math.min(.23,He.stage.gust*.019+Math.abs(pe.windX)*.009)*Math.min(1,pe.speed/90);ft.position.x+=Math.sin(i*.042)*n+Math.sin(i*.086)*n*.33,ft.position.y+=Math.cos(i*.058)*n*.38}dt==="result"&&pe.phase==="success"&&(Ys.update(e,pe),gs?.update(e,ft)),Yt>0&&(dt==="flight"||dt==="result")&&(ft.position.x+=Math.sin(i*.092)*Yt*.7,ft.position.y+=Math.sin(i*.13)*Yt*.25,Yt=Math.max(0,Yt-e*2.5));const t=Wn?.userData.seaMaterial;t&&(t.uniforms.uTime.value=dt==="flight"&&!Cn?pe.time:i*.001),yn.target.position.copy(lt.position),yn.position.copy(lt.position).add(new C(-180,350,130)),Mn.render(Ht,ft)}requestAnimationFrame(gu);ua();const to=new Ig;Promise.all([to.loadAsync("./models/plane.glb"),to.loadAsync("./models/environment.glb"),to.loadAsync("./models/pilot.glb")]).then(([i,e,t])=>{Qo=i.scene,xs=e.scene,gs=new O_(Ht,t.scene);for(const n of[Qo,xs,t.scene])n.traverse(s=>{s instanceof tt&&(s.castShadow=!0,s.receiveShadow=!0)});di=!0,da(),ua(),Tc(ft,lt,!0),ue("start").textContent="飛ぶ",ue("start").disabled=!1,ue("choose-stage").textContent="はじめる",ue("choose-stage").disabled=!1}).catch(i=>{ue("loading-error").hidden=!1,ue("loading-error").textContent="機体の読み込みに失敗しました。ページを再読み込みしてください。",console.error(i)});function W_(){if(!di)return null;const i=new nn().setFromObject(lt),e=[];for(const a of[i.min.x,i.max.x])for(const o of[i.min.y,i.max.y])for(const c of[i.min.z,i.max.z])e.push(new C(a,o,c).project(ft));const t=Math.min(...e.map(a=>a.x)),n=Math.max(...e.map(a=>a.x)),s=Math.min(...e.map(a=>a.y)),r=Math.max(...e.map(a=>a.y));return{x:(t+1)*innerWidth/2,y:(1-r)*innerHeight/2,width:(n-t)*innerWidth/2,height:(r-s)*innerHeight/2,centerX:(t+n+2)*innerWidth/4,centerY:(2-s-r)*innerHeight/4,worldSize:i.getSize(new C).toArray()}}Object.defineProperty(window,"flightTelemetry",{get:()=>({ready:di,mode:dt,paused:Cn,stage:wt,aircraftVisible:lt.visible,previewStage:He?.stage.name??null,flight:pe?JSON.parse(JSON.stringify(pe)):null,input:Zn.debug(),gpu:{geometries:Mn.info.memory.geometries,textures:Mn.info.memory.textures},pilot:gs?.status(ft)??{active:!1},planeView:W_(),aircraftVisual:Ys.status,audio:hn.status,instruments:pe&&He?lu(pe,(i,e)=>mt(He,i,e),He.obstacles):null,wreck:Ci.status})});
