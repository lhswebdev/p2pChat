var app=function(){"use strict";function e(){}function t(e){return e()}function r(){return Object.create(null)}function n(e){e.forEach(t)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function s(e,t,r){e.insertBefore(t,r||null)}function l(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function d(){return u(" ")}function p(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function h(e,t,r){null==r?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function f(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t){e.value=null==t?"":t}let m;function y(e){m=e}const b=[],w=[],v=[],k=[],x=Promise.resolve();let $=!1;function j(e){v.push(e)}let _=!1;const q=new Set;function z(){if(!_){_=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];y(t),S(t.$$)}for(y(null),b.length=0;w.length;)w.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];q.has(t)||(q.add(t),t())}v.length=0}while(b.length);for(;k.length;)k.pop()();$=!1,_=!1,q.clear()}}function S(e){if(null!==e.fragment){e.update(),n(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const E=new Set;function P(e,t){e&&e.i&&(E.delete(e),e.i(t))}function C(e,t,r,n){if(e&&e.o){if(E.has(e))return;E.add(e),undefined.c.push((()=>{E.delete(e),n&&(r&&e.d(1),n())})),e.o(t)}}function L(e){e&&e.c()}function N(e,r,a,i){const{fragment:s,on_mount:l,on_destroy:c,after_update:u}=e.$$;s&&s.m(r,a),i||j((()=>{const r=l.map(t).filter(o);c?c.push(...r):n(r),e.$$.on_mount=[]})),u.forEach(j)}function A(e,t){const r=e.$$;null!==r.fragment&&(n(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function M(e,t){-1===e.$$.dirty[0]&&(b.push(e),$||($=!0,x.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function O(t,o,a,i,s,c,u,d=[-1]){const p=m;y(t);const h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:r(),dirty:d,skip_bound:!1,root:o.target||p.$$.root};u&&u(h.root);let f=!1;if(h.ctx=a?a(t,o.props||{},((e,r,...n)=>{const o=n.length?n[0]:r;return h.ctx&&s(h.ctx[e],h.ctx[e]=o)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](o),f&&M(t,e)),r})):[],h.update(),f=!0,n(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);h.fragment&&h.fragment.l(e),e.forEach(l)}else h.fragment&&h.fragment.c();o.intro&&P(t.$$.fragment),N(t,o.target,o.anchor,o.customElement),z()}y(p)}class T{$destroy(){A(this,1),this.$destroy=e}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const e=r.indexOf(t);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const B=[];function H(t,r=e){let n;const o=new Set;function i(e){if(a(t,e)&&(t=e,n)){const e=!B.length;for(const e of o)e[1](),B.push(e,t);if(e){for(let e=0;e<B.length;e+=2)B[e][0](B[e+1]);B.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(a,s=e){const l=[a,s];return o.add(l),1===o.size&&(n=r(i)||e),a(t),()=>{o.delete(l),0===o.size&&(n(),n=null)}}}}var D=["ability","able","aboard","about","above","accept","accident","according","account","accurate","acres","across","act","action","active","activity","actual","actually","add","addition","additional","adjective","adult","adventure","advice","affect","afraid","after","afternoon","again","against","age","ago","agree","ahead","aid","air","airplane","alike","alive","all","allow","almost","alone","along","aloud","alphabet","already","also","although","am","among","amount","ancient","angle","angry","animal","announced","another","answer","ants","any","anybody","anyone","anything","anyway","anywhere","apart","apartment","appearance","apple","applied","appropriate","are","area","arm","army","around","arrange","arrangement","arrive","arrow","art","article","as","aside","ask","asleep","at","ate","atmosphere","atom","atomic","attached","attack","attempt","attention","audience","author","automobile","available","average","avoid","aware","away","baby","back","bad","badly","bag","balance","ball","balloon","band","bank","bar","bare","bark","barn","base","baseball","basic","basis","basket","bat","battle","be","bean","bear","beat","beautiful","beauty","became","because","become","becoming","bee","been","before","began","beginning","begun","behavior","behind","being","believed","bell","belong","below","belt","bend","beneath","bent","beside","best","bet","better","between","beyond","bicycle","bigger","biggest","bill","birds","birth","birthday","bit","bite","black","blank","blanket","blew","blind","block","blood","blow","blue","board","boat","body","bone","book","border","born","both","bottle","bottom","bound","bow","bowl","box","boy","brain","branch","brass","brave","bread","break","breakfast","breath","breathe","breathing","breeze","brick","bridge","brief","bright","bring","broad","broke","broken","brother","brought","brown","brush","buffalo","build","building","built","buried","burn","burst","bus","bush","business","busy","but","butter","buy","by","cabin","cage","cake","call","calm","came","camera","camp","can","canal","cannot","cap","capital","captain","captured","car","carbon","card","care","careful","carefully","carried","carry","case","cast","castle","cat","catch","cattle","caught","cause","cave","cell","cent","center","central","century","certain","certainly","chain","chair","chamber","chance","change","changing","chapter","character","characteristic","charge","chart","check","cheese","chemical","chest","chicken","chief","child","children","choice","choose","chose","chosen","church","circle","circus","citizen","city","class","classroom","claws","clay","clean","clear","clearly","climate","climb","clock","close","closely","closer","cloth","clothes","clothing","cloud","club","coach","coal","coast","coat","coffee","cold","collect","college","colony","color","column","combination","combine","come","comfortable","coming","command","common","community","company","compare","compass","complete","completely","complex","composed","composition","compound","concerned","condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent","continued","contrast","control","conversation","cook","cookies","cool","copper","copy","corn","corner","correct","correctly","cost","cotton","could","count","country","couple","courage","course","court","cover","cow","cowboy","crack","cream","create","creature","crew","crop","cross","crowd","cry","cup","curious","current","curve","customs","cut","cutting","daily","damage","dance","danger","dangerous","dark","darkness","date","daughter","dawn","day","dead","deal","dear","death","decide","declared","deep","deeply","deer","definition","degree","depend","depth","describe","desert","design","desk","detail","determine","develop","development","diagram","diameter","did","die","differ","difference","different","difficult","difficulty","dig","dinner","direct","direction","directly","dirt","dirty","disappear","discover","discovery","discuss","discussion","disease","dish","distance","distant","divide","division","do","doctor","does","dog","doing","doll","dollar","done","donkey","door","dot","double","doubt","down","dozen","draw","drawn","dream","dress","drew","dried","drink","drive","driven","driver","driving","drop","dropped","drove","dry","duck","due","dug","dull","during","dust","duty","each","eager","ear","earlier","early","earn","earth","easier","easily","east","easy","eat","eaten","edge","education","effect","effort","egg","eight","either","electric","electricity","element","elephant","eleven","else","empty","end","enemy","energy","engine","engineer","enjoy","enough","enter","entire","entirely","environment","equal","equally","equator","equipment","escape","especially","essential","establish","even","evening","event","eventually","ever","every","everybody","everyone","everything","everywhere","evidence","exact","exactly","examine","example","excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise","exist","expect","experience","experiment","explain","explanation","explore","express","expression","extra","eye","face","facing","fact","factor","factory","failed","fair","fairly","fall","fallen","familiar","family","famous","far","farm","farmer","farther","fast","fastened","faster","fat","father","favorite","fear","feathers","feature","fed","feed","feel","feet","fell","fellow","felt","fence","few","fewer","field","fierce","fifteen","fifth","fifty","fight","fighting","figure","fill","film","final","finally","find","fine","finest","finger","finish","fire","fireplace","firm","first","fish","five","fix","flag","flame","flat","flew","flies","flight","floating","floor","flow","flower","fly","fog","folks","follow","food","foot","football","for","force","foreign","forest","forget","forgot","forgotten","form","former","fort","forth","forty","forward","fought","found","four","fourth","fox","frame","free","freedom","frequently","fresh","friend","friendly","frighten","frog","from","front","frozen","fruit","fuel","full","fully","fun","function","funny","fur","furniture","further","future","gain","game","garage","garden","gas","gasoline","gate","gather","gave","general","generally","gentle","gently","get","getting","giant","gift","girl","give","given","giving","glad","glass","globe","go","goes","gold","golden","gone","good","goose","got","government","grabbed","grade","gradually","grain","grandfather","grandmother","graph","grass","gravity","gray","great","greater","greatest","greatly","green","grew","ground","group","grow","grown","growth","guard","guess","guide","gulf","gun","habit","had","hair","half","halfway","hall","hand","handle","handsome","hang","happen","happened","happily","happy","harbor","hard","harder","hardly","has","hat","have","having","hay","he","headed","heading","health","heard","hearing","heart","heat","heavy","height","held","hello","help","helpful","her","herd","here","herself","hidden","hide","high","higher","highest","highway","hill","him","himself","his","history","hit","hold","hole","hollow","home","honor","hope","horn","horse","hospital","hot","hour","house","how","however","huge","human","hundred","hung","hungry","hunt","hunter","hurried","hurry","hurt","husband","ice","idea","identity","if","ill","image","imagine","immediately","importance","important","impossible","improve","in","inch","include","including","income","increase","indeed","independent","indicate","individual","industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest","interior","into","introduced","invented","involved","iron","is","island","it","its","itself","jack","jar","jet","job","join","joined","journey","joy","judge","jump","jungle","just","keep","kept","key","kids","kill","kind","kitchen","knew","knife","know","knowledge","known","label","labor","lack","lady","laid","lake","lamp","land","language","large","larger","largest","last","late","later","laugh","law","lay","layers","lead","leader","leaf","learn","least","leather","leave","leaving","led","left","leg","length","lesson","let","letter","level","library","lie","life","lift","light","like","likely","limited","line","lion","lips","liquid","list","listen","little","live","living","load","local","locate","location","log","lonely","long","longer","look","loose","lose","loss","lost","lot","loud","love","lovely","low","lower","luck","lucky","lunch","lungs","lying","machine","machinery","mad","made","magic","magnet","mail","main","mainly","major","make","making","man","managed","manner","manufacturing","many","map","mark","market","married","mass","massage","master","material","mathematics","matter","may","maybe","me","meal","mean","means","meant","measure","meat","medicine","meet","melted","member","memory","men","mental","merely","met","metal","method","mice","middle","might","mighty","mile","military","milk","mill","mind","mine","minerals","minute","mirror","missing","mission","mistake","mix","mixture","model","modern","molecular","moment","money","monkey","month","mood","moon","more","morning","most","mostly","mother","motion","motor","mountain","mouse","mouth","move","movement","movie","moving","mud","muscle","music","musical","must","my","myself","mysterious","nails","name","nation","national","native","natural","naturally","nature","near","nearby","nearer","nearest","nearly","necessary","neck","needed","needle","needs","negative","neighbor","neighborhood","nervous","nest","never","new","news","newspaper","next","nice","night","nine","no","nobody","nodded","noise","none","noon","nor","north","nose","not","note","noted","nothing","notice","noun","now","number","numeral","nuts","object","observe","obtain","occasionally","occur","ocean","of","off","offer","office","officer","official","oil","old","older","oldest","on","once","one","only","onto","open","operation","opinion","opportunity","opposite","or","orange","orbit","order","ordinary","organization","organized","origin","original","other","ought","our","ourselves","out","outer","outline","outside","over","own","owner","oxygen","pack","package","page","paid","pain","paint","pair","palace","pale","pan","paper","paragraph","parallel","parent","park","part","particles","particular","particularly","partly","parts","party","pass","passage","past","path","pattern","pay","peace","pen","pencil","people","per","percent","perfect","perfectly","perhaps","period","person","personal","pet","phrase","physical","piano","pick","picture","pictured","pie","piece","pig","pile","pilot","pine","pink","pipe","pitch","place","plain","plan","plane","planet","planned","planning","plant","plastic","plate","plates","play","pleasant","please","pleasure","plenty","plural","plus","pocket","poem","poet","poetry","point","pole","police","policeman","political","pond","pony","pool","poor","popular","population","porch","port","position","positive","possible","possibly","post","pot","potatoes","pound","pour","powder","power","powerful","practical","practice","prepare","present","president","press","pressure","pretty","prevent","previous","price","pride","primitive","principal","principle","printed","private","prize","probably","problem","process","produce","product","production","program","progress","promised","proper","properly","property","protection","proud","prove","provide","public","pull","pupil","pure","purple","purpose","push","put","putting","quarter","queen","question","quick","quickly","quiet","quietly","quite","rabbit","race","radio","railroad","rain","raise","ran","ranch","range","rapidly","rate","rather","raw","rays","reach","read","reader","ready","real","realize","rear","reason","recall","receive","recent","recently","recognize","record","red","refer","refused","region","regular","related","relationship","religious","remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require","research","respect","rest","result","return","review","rhyme","rhythm","rice","rich","ride","riding","right","ring","rise","rising","river","road","roar","rock","rocket","rocky","rod","roll","roof","room","root","rope","rose","rough","round","route","row","rubbed","rubber","rule","ruler","run","running","rush","sad","saddle","safe","safety","said","sail","sale","salmon","salt","same","sand","sang","sat","satellites","satisfied","save","saved","saw","say","scale","scared","scene","school","science","scientific","scientist","score","screen","sea","search","season","seat","second","secret","section","see","seed","seeing","seems","seen","seldom","select","selection","sell","send","sense","sent","sentence","separate","series","serious","serve","service","sets","setting","settle","settlers","seven","several","shade","shadow","shake","shaking","shall","shallow","shape","share","sharp","she","sheep","sheet","shelf","shells","shelter","shine","shinning","ship","shirt","shoe","shoot","shop","shore","short","shorter","shot","should","shoulder","shout","show","shown","shut","sick","sides","sight","sign","signal","silence","silent","silk","silly","silver","similar","simple","simplest","simply","since","sing","single","sink","sister","sit","sitting","situation","six","size","skill","skin","sky","slabs","slave","sleep","slept","slide","slight","slightly","slip","slipped","slope","slow","slowly","small","smaller","smallest","smell","smile","smoke","smooth","snake","snow","so","soap","social","society","soft","softly","soil","solar","sold","soldier","solid","solution","solve","some","somebody","somehow","someone","something","sometime","somewhere","son","song","soon","sort","sound","source","south","southern","space","speak","special","species","specific","speech","speed","spell","spend","spent","spider","spin","spirit","spite","split","spoken","sport","spread","spring","square","stage","stairs","stand","standard","star","stared","start","state","statement","station","stay","steady","steam","steel","steep","stems","step","stepped","stick","stiff","still","stock","stomach","stone","stood","stop","stopped","store","storm","story","stove","straight","strange","stranger","straw","stream","street","strength","stretch","strike","string","strip","strong","stronger","struck","structure","struggle","stuck","student","studied","studying","subject","substance","success","successful","such","sudden","suddenly","sugar","suggest","suit","sum","summer","sun","sunlight","supper","supply","support","suppose","sure","surface","surprise","surrounded","swam","sweet","swept","swim","swimming","swing","swung","syllable","symbol","system","table","tail","take","taken","tales","talk","tall","tank","tape","task","taste","taught","tax","tea","teach","teacher","team","tears","teeth","telephone","television","tell","temperature","ten","tent","term","terrible","test","than","thank","that","thee","them","themselves","then","theory","there","therefore","these","they","thick","thin","thing","think","third","thirty","this","those","thou","though","thought","thousand","thread","three","threw","throat","through","throughout","throw","thrown","thumb","thus","thy","tide","tie","tight","tightly","till","time","tin","tiny","tip","tired","title","to","tobacco","today","together","told","tomorrow","tone","tongue","tonight","too","took","tool","top","topic","torn","total","touch","toward","tower","town","toy","trace","track","trade","traffic","trail","train","transportation","trap","travel","treated","tree","triangle","tribe","trick","tried","trip","troops","tropical","trouble","truck","trunk","truth","try","tube","tune","turn","twelve","twenty","twice","two","type","typical","uncle","under","underline","understanding","unhappy","union","unit","universe","unknown","unless","until","unusual","up","upon","upper","upward","us","use","useful","using","usual","usually","valley","valuable","value","vapor","variety","various","vast","vegetable","verb","vertical","very","vessels","victory","view","village","visit","visitor","voice","volume","vote","vowel","voyage","wagon","wait","walk","wall","want","war","warm","warn","was","wash","waste","watch","water","wave","way","we","weak","wealth","wear","weather","week","weigh","weight","welcome","well","went","were","west","western","wet","whale","what","whatever","wheat","wheel","when","whenever","where","wherever","whether","which","while","whispered","whistle","white","who","whole","whom","whose","why","wide","widely","wife","wild","will","willing","win","wind","window","wing","winter","wire","wise","wish","with","within","without","wolf","women","won","wonder","wonderful","wood","wooden","wool","word","wore","work","worker","world","worried","worry","worse","worth","would","wrapped","write","writer","writing","written","wrong","wrote","yard","year","yellow","yes","yesterday","yet","you","young","younger","your","yourself","youth","zero","zebra","zipper","zoo","zulu"];function F(e){function t(){return e&&e.maxLength>1?function(){var t,n=!1;for(;!n;)(t=r()).length<=e.maxLength&&(n=!0);return t}():r()}function r(){return D[n(D.length)]}function n(e){return Math.floor(Math.random()*e)}if(void 0===e)return t();"number"==typeof e&&(e={exactly:e}),e.exactly&&(e.min=e.exactly,e.max=e.exactly),"number"!=typeof e.wordsPerString&&(e.wordsPerString=1),"function"!=typeof e.formatter&&(e.formatter=e=>e),"string"!=typeof e.separator&&(e.separator=" ");for(var o=e.min+n(e.max+1-e.min),a=[],i="",s=0,l=0;l<o*e.wordsPerString;l++)s===e.wordsPerString-1?i+=e.formatter(t(),s):i+=e.formatter(t(),s)+e.separator,s++,(l+1)%e.wordsPerString==0&&(a.push(i),i="",s=0);return"string"==typeof e.join&&(a=a.join(e.join)),a}var G=F;F.wordList=D;const I=new window.Peer(G()),J=H(""),K=H([]);function Q(e){let t,r,n;return{c(){t=c("b"),r=u("Connected with Peer -> "),n=u(e[0])},m(e,o){s(e,t,o),i(t,r),i(t,n)},p(e,t){1&t&&f(n,e[0])},d(e){e&&l(t)}}}function R(e){let t,r,o,a,i;return{c(){t=c("input"),r=d(),o=c("button"),o.textContent="connect",h(t,"type","text")},m(n,l){s(n,t,l),g(t,e[0]),s(n,r,l),s(n,o,l),a||(i=[p(t,"input",e[3]),p(o,"click",e[2])],a=!0)},p(e,r){1&r&&t.value!==e[0]&&g(t,e[0])},d(e){e&&l(t),e&&l(r),e&&l(o),a=!1,n(i)}}}function U(t){let r;function n(e,t){return e[1]?Q:R}let o=n(t),a=o(t);return{c(){a.c(),r=u("")},m(e,t){a.m(e,t),s(e,r,t)},p(e,[t]){o===(o=n(e))&&a?a.p(e,t):(a.d(1),a=o(e),a&&(a.c(),a.m(r.parentNode,r)))},i:e,o:e,d(e){a.d(e),e&&l(r)}}}function V(e,t,r){let n,o="";K.subscribe((e=>{n=e}));let a=!1;return I.on("connection",(function(e){J.set(e),r(0,o=e.peer),r(1,a=!0)})),[o,a,function(){var e=I.connect(o);J.set(e),e.on("data",(e=>{K.set([...n,e])})),r(1,a=!0)},function(){o=this.value,r(0,o)}]}class W extends T{constructor(e){super(),O(this,e,V,U,a,{})}}function X(e,t,r){const n=e.slice();return n[5]=t[r],n}function Y(e){let t,r,n=e[5]+"";return{c(){t=c("p"),r=u(n)},m(e,n){s(e,t,n),i(t,r)},p(e,t){2&t&&n!==(n=e[5]+"")&&f(r,n)},d(e){e&&l(t)}}}function Z(t){let r,a,i,u,f,m,y=t[1],b=[];for(let e=0;e<y.length;e+=1)b[e]=Y(X(t,y,e));return{c(){for(let e=0;e<b.length;e+=1)b[e].c();r=d(),a=c("input"),i=d(),u=c("button"),u.textContent="Send",h(a,"type","text")},m(e,n){for(let t=0;t<b.length;t+=1)b[t].m(e,n);s(e,r,n),s(e,a,n),g(a,t[0]),s(e,i,n),s(e,u,n),f||(m=[p(a,"input",t[3]),p(u,"click",(function(){o(t[2](t[0]))&&t[2](t[0]).apply(this,arguments)}))],f=!0)},p(e,[n]){if(t=e,2&n){let e;for(y=t[1],e=0;e<y.length;e+=1){const o=X(t,y,e);b[e]?b[e].p(o,n):(b[e]=Y(o),b[e].c(),b[e].m(r.parentNode,r))}for(;e<b.length;e+=1)b[e].d(1);b.length=y.length}1&n&&a.value!==t[0]&&g(a,t[0])},i:e,o:e,d(e){!function(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}(b,e),e&&l(r),e&&l(a),e&&l(i),e&&l(u),f=!1,n(m)}}}function ee(e,t,r){let n,o,a;return K.subscribe((e=>{r(1,n=e)})),J.subscribe((e=>{a=e})),I.on("connection",(function(e){e.on("data",(e=>{K.set([...n,e])})),console.log("fdfdfd")})),r(1,n=[]),[o,n,function(){a.send(o),K.set([...n,o])},function(){o=this.value,r(0,o)}]}class te extends T{constructor(e){super(),O(this,e,ee,Z,a,{})}}function re(e){let t,r,n,o,a,p,g,m,y,b;return g=new W({}),y=new te({}),{c(){t=c("main"),r=c("h1"),n=u("Hello "),o=u(e[0]),a=u("!"),p=d(),L(g.$$.fragment),m=d(),L(y.$$.fragment),h(r,"class","svelte-1e9puaw"),h(t,"class","svelte-1e9puaw")},m(e,l){s(e,t,l),i(t,r),i(r,n),i(r,o),i(r,a),i(t,p),N(g,t,null),i(t,m),N(y,t,null),b=!0},p(e,[t]){(!b||1&t)&&f(o,e[0])},i(e){b||(P(g.$$.fragment,e),P(y.$$.fragment,e),b=!0)},o(e){C(g.$$.fragment,e),C(y.$$.fragment,e),b=!1},d(e){e&&l(t),A(g),A(y)}}}function ne(e,t,r){let n;return r(0,n=I.id),[n]}const oe=new class extends T{constructor(e){super(),O(this,e,ne,re,a,{})}}({target:document.body,props:{name:"world"}});return"undefined"!=typeof module&&module.hot&&("undefined"!=typeof module&&module.hot.dispose((()=>{oe.$destroy()})),"undefined"!=typeof module&&module.hot.accept()),oe}();
//# sourceMappingURL=bundle.js.map
