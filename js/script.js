(function(){
  var S=window.SITE||{},$=function(i){return document.getElementById(i)};
  var nome=(S.nome||"").trim();
  if(nome){$("logo").textContent=nome;$("rodNome").textContent=nome;document.title=nome+" | Personal Trainer de Musculação";}
  // WhatsApp
  var num=String(S.whatsapp||"").replace(/\D/g,"");
  var wa=num?"https://wa.me/"+num+"?text="+encodeURIComponent(S.mensagemWhatsapp||""):"";
  document.querySelectorAll("[data-wa]").forEach(function(a){
    if(wa){a.href=wa;a.target="_blank";a.rel="noopener"}else{a.hidden=true}
  });
  if(S.instagram){var ig=$("igBtn");ig.href=S.instagram;ig.hidden=false}
  if(S.cidade){var c=$("cidade");c.textContent="Atendimento: "+S.cidade;c.hidden=false}
  if(S.cref){var r=$("cref");r.textContent=S.cref;r.hidden=false}
  $("ano").textContent=new Date().getFullYear();
  // seções opcionais (só aparecem se houver conteúdo)
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x)e.textContent=x;return e}
  function mostra(id){$(id).hidden=false;var li=document.querySelector('[data-sec="'+id+'"]');if(li)li.hidden=false}
  var so=S.sobre||{};
  if((so.texto&&so.texto.length)||(so.destaques&&so.destaques.length)){
    (so.texto||[]).forEach(function(t){$("sobreTxt").appendChild(el("p",0,t))});
    (so.destaques||[]).forEach(function(d){var w=el("div");w.appendChild(el("dt",0,d.rotulo));w.appendChild(el("dd",0,d.valor));$("sobreDest").appendChild(w)});
    mostra("sobre");
  }
  if(S.servicos&&S.servicos.length){S.servicos.forEach(function(s){var c=el("article","card");c.appendChild(el("h3",0,s.titulo));c.appendChild(el("p",0,s.descricao));$("servLista").appendChild(c)});mostra("servicos")}
  if(S.metodologia&&S.metodologia.length){S.metodologia.forEach(function(s){var li=el("li");var d=el("div");d.appendChild(el("h3",0,s.titulo));d.appendChild(el("p",0,s.descricao));li.appendChild(d);$("metLista").appendChild(li)});mostra("metodologia")}
  // topo e menu
  var topo=$("topo"),btn=$("menuBtn"),menu=$("menu");
  function onScroll(){topo.classList.toggle("rolou",window.scrollY>40)}
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
  function fecha(){menu.classList.remove("aberto");btn.setAttribute("aria-expanded","false")}
  btn.addEventListener("click",function(){var a=menu.classList.toggle("aberto");btn.setAttribute("aria-expanded",a)});
  menu.addEventListener("click",function(e){if(e.target.closest("a"))fecha()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&menu.classList.contains("aberto")){fecha();btn.focus()}});
  // entrada das seções
  var rv=document.querySelectorAll(".sec .wrap");
  if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}})},{threshold:.12});
    rv.forEach(function(n){n.classList.add("rv");io.observe(n)});
  }
  // galeria ampliada
  var lb=$("lb"),li=$("lbImg");
  document.querySelectorAll(".g").forEach(function(b){b.addEventListener("click",function(){
    li.src=b.dataset.img;li.alt=b.dataset.alt;
    if(lb.showModal){lb.showModal()}else{lb.setAttribute("open","")}
  })});
  $("lbX").addEventListener("click",function(){lb.close?lb.close():lb.removeAttribute("open")});
  lb.addEventListener("click",function(e){if(e.target===lb)lb.close()});
})();
/* ===== navegação, objetivo e galeria ===== */
(function(){
  var S=window.SITE||{},$=function(i){return document.getElementById(i)};
  var num=String(S.whatsapp||"").replace(/\D/g,""),base=S.mensagemWhatsapp||"";
  function link(obj){return "https://wa.me/"+num+"?text="+encodeURIComponent(base+(obj?" Meu objetivo: "+obj+".":""))}
  // objetivos
  var ob=S.objetivos||[],box=$("objChips");
  if(num&&ob.length){
    ob.forEach(function(t){var b=document.createElement("button");b.type="button";b.className="chip";b.textContent=t;b.setAttribute("aria-pressed","false");
      b.addEventListener("click",function(){var on=b.getAttribute("aria-pressed")==="true";
        box.querySelectorAll(".chip").forEach(function(x){x.setAttribute("aria-pressed","false")});
        b.setAttribute("aria-pressed",on?"false":"true");$("waMain").href=link(on?"":t);
        $("waMain").textContent=on?"Chamar no WhatsApp":"Enviar meu objetivo no WhatsApp"});
      box.appendChild(b)});
    $("obj").hidden=false;
  }
  // progresso e item ativo do menu
  var prog=$("prog");
  function p(){var h=document.documentElement;prog.style.transform="scaleX("+(h.scrollTop/((h.scrollHeight-h.clientHeight)||1))+")"}
  addEventListener("scroll",p,{passive:true});p();
  var links=[].slice.call(document.querySelectorAll('.menu a[href^="#"]:not(.btn)'));
  if("IntersectionObserver" in window){
    var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){var on=a.getAttribute("href")==="#"+e.target.id;a.classList.toggle("ativo",on);on?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")})}})},{rootMargin:"-45% 0px -50% 0px"});
    links.forEach(function(a){var s=document.querySelector(a.getAttribute("href"));if(s)so.observe(s)});
  }
  // galeria: anterior / próxima
  var gs=[].slice.call(document.querySelectorAll(".g")),i=0,lb=$("lb");
  function show(n){i=(n+gs.length)%gs.length;$("lbImg").src=gs[i].dataset.img;$("lbImg").alt=gs[i].dataset.alt}
  gs.forEach(function(g,n){g.addEventListener("click",function(){i=n})});
  $("lbP").addEventListener("click",function(){show(i-1)});$("lbN").addEventListener("click",function(){show(i+1)});
  lb.addEventListener("keydown",function(e){if(e.key==="ArrowLeft")show(i-1);if(e.key==="ArrowRight")show(i+1)});
})();
