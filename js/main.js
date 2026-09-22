(function(){
  "use strict";
  var c = window.SITE_CONFIG || {};
  var bonus = document.getElementById("bonuses");
  if (bonus && c.showBonuses === false) bonus.remove();

  if (typeof c.price === "string" && c.price.trim()) {
    document.querySelectorAll("[data-price]").forEach(function(el){ el.textContent = c.price.trim(); });
  }

  function tracking(url){
    if (!url || url.indexOf("TU-CHECKOUT-AQUI") !== -1) return "#oferta";
    try{
      var out = new URL(url, location.href), cur = new URL(location.href);
      ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","gclid","gbraid","wbraid","fbclid","xcod"].forEach(function(k){
        var v=cur.searchParams.get(k); if(v && !out.searchParams.has(k)) out.searchParams.set(k,v);
      });
      return out.toString();
    }catch(e){ return url; }
  }
  var checkoutHref = tracking(c.checkoutUrl);
  document.querySelectorAll(".checkout-link").forEach(function(a){
    a.setAttribute("href", checkoutHref);
    a.dataset.checkoutConfigured = "true";
  });



  document.querySelectorAll(".comp").forEach(function(comp){
    var range = comp.querySelector(".comp-range");
    function update(){
      var v = (range && range.value) ? range.value : 50;
      comp.style.setProperty("--p", v + "%");
    }
    if(range){
      ["input","change"].forEach(function(evt){ range.addEventListener(evt, update); });
      update();
    }
  });

  document.querySelectorAll(".faq-q").forEach(function(btn){
    btn.addEventListener("click",function(){
      var item=btn.closest(".faq-item");
      item.classList.toggle("open");
    });
  });

  var el=document.querySelector("[data-countdown]");
  if(el){
    var seconds=11*3600+26*60+47;
    setInterval(function(){
      seconds=Math.max(0,seconds-1);
      var h=String(Math.floor(seconds/3600)).padStart(2,"0"),
          m=String(Math.floor((seconds%3600)/60)).padStart(2,"0"),
          s=String(seconds%60).padStart(2,"0");
      el.textContent=h+":"+m+":"+s;
    },1000);
  }
})();