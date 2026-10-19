/* ============================================================
   AD Lab v2 공통 스크립트 — 숫자·사례·샘플은 CONFIG에서만 수정
   ============================================================ */
var CONFIG = {
  formUrl: 'https://forms.gle/hiVqT1a8VHmTjyti8',
  // 샘플: video를 넣으면 영상, 비어 있으면 poster 이미지
  samples: (function(){ var a=[]; for(var i=1;i<=28;i++){ var n=String(i).padStart(2,'0'); a.push({poster:'ads/ad'+n+'.webp', video:''}); } return a; })(),
  // 포트폴리오 (진짜마케팅 형식). 숫자·문구는 실제 값으로 교체
  cases: [
    { brand:'건강기능식품 A', cat:'건강 · 웰니스', title:'후기형 소재로 구매 전환 개선', big:'324.6%', bigLabel:'Meta 구매 ROAS', subs:['CTR 3.4%','CPA ↓31%','소재 48편'], desc:'첫 3초 후킹과 체험 후기형 구성을 비교해 반응이 좋은 방향의 소재를 늘렸습니다.', basis:'집계 기준: Meta · 최근 3개월 · 구매 전환 기준', img:'cases/health.jpg' },
    { brand:'뷰티 A', cat:'뷰티', title:'신제품 런칭 구간 구매 효율', big:'243.4%', bigLabel:'Meta 구매 ROAS', subs:['CTR 4.1%','구매 1,280건','소재 36편'], desc:'사용 전후 장면을 앞에 둔 소재가 가장 높은 구매 효율을 기록했습니다.', basis:'집계 기준: Meta · 런칭 후 6주 · 구매 전환 기준', img:'cases/beauty.jpg' },
    { brand:'리빙 A', cat:'리빙', title:'시즌 프로모션에 맞춘 빠른 제작', big:'1,920건', bigLabel:'구매 이벤트 · 4주 합계', subs:['ROAS 304.5%','CPA ↓27%','소재 60편'], desc:'시즌 4주 전 소재 세트를 먼저 집행하고, 반응이 좋은 방향으로 소재를 추가했습니다.', basis:'집계 기준: Meta · 시즌 4주 · 구매 이벤트 기준', img:'cases/living.jpg' },
    { brand:'식품 A', cat:'식품', title:'구성별 구매 이유를 나눈 소재', big:'2.7배', bigLabel:'광고비 대비 매출', subs:['ROAS 274.3%','구매 2,430건','소재 44편'], desc:'식사량·구성·가격 중 무엇이 구매 이유인지 소재로 나눠 확인했습니다.', basis:'집계 기준: Meta · 최근 2개월 · 광고 기여 매출', img:'cases/food.jpg' },
    { brand:'패션 A', cat:'패션', title:'착용 장면 중심 소재로 효율 개선', big:'↓ 38.5%', bigLabel:'구매당 비용(CPA)', subs:['ROAS 256.6%','CTR 3.1%','소재 52편'], desc:'착용 장면과 사이즈 정보를 앞에 둔 소재가 비교 구간 대비 구매당 비용을 낮췄습니다.', basis:'집계 기준: Meta · 비교 구간 대비 · 구매 전환 기준', img:'cases/fashion.jpg' },
    { brand:'생활소비재 A', cat:'생활소비재', title:'반복 구매를 부른 사용 장면', big:'5,310건', bigLabel:'구매 이벤트 · 3개월 합계', subs:['ROAS 233.3%','재구매율 +12%','소재 80편'], desc:'사용 장면과 오퍼를 조합한 소재를 다양하게 테스트해 반응이 좋은 조합을 늘렸습니다.', basis:'집계 기준: Meta · 최근 3개월 · 구매 이벤트 기준', img:'cases/goods.jpg' }
  ],
  // 장면 배경: 이미지(png/jpg)나 영상(mp4)을 media 폴더에 넣고 경로만 바꾸면 됩니다.
  // 장면 배경: media 폴더의 jpg를 mp4로 바꾸면 영상으로 재생됩니다.
  shots: { hero:'media/hero.mp4', approach:'media/approach.mp4', capability:'media/numbers.mp4', cta:'media/cta.mp4' },
  clients: 180,           // 함께한 브랜드 수 (숫자만 바꾸면 됩니다)
  version: '20261018tiles'
};

(function(){
  if ('scrollRestoration' in history) history.scrollRestoration='manual';
  function toTop(){
    var id=location.hash.slice(1), t=id && /^[\w-]+$/.test(id) ? document.getElementById(id) : null;
    if (t){ var hh=(document.querySelector('.hd')||{offsetHeight:0}).offsetHeight; window.scrollTo(0, t.getBoundingClientRect().top+window.scrollY-hh-16); }
    else window.scrollTo(0,0);
  }
  toTop(); window.addEventListener('load', function(){ toTop(); setTimeout(toTop,60); });
  window.addEventListener('pageshow', function(e){ if(e.persisted) toTop(); });
  var page = document.body.dataset.page || 'home';
  var root = document.body.dataset.root || '';
  var V = CONFIG.version;
  function el(t,c,h){ var e=document.createElement(t); if(c) e.className=c; if(h!=null) e.innerHTML=h; return e; }

  /* 헤더 */
  var hd = document.querySelector('[data-hd]');
  if (hd){
    var cur = function(p){ return page===p?' aria-current="page"':''; };
    hd.outerHTML = '<header class="hd"><div class="wrap">'+
      '<a class="logo" href="'+(root||'./')+'">AD Lab</a>'+
      '<nav class="nav" aria-label="주요 메뉴">'+
        '<a href="'+root+'about.html"'+cur('about')+'>회사소개</a>'+
        '<a href="'+root+'services.html"'+cur('services')+'>서비스</a>'+
        '<a href="'+root+'blog/index.html"'+cur('blog')+'>칼럼</a>'+
        '<a href="'+root+'portfolio.html"'+cur('portfolio')+'>레퍼런스</a>'+
        '<a href="'+root+'careers.html"'+cur('careers')+'>채용</a>'+
      '</nav>'+
      '<div class="ctas"><a class="btn red sm" href="'+root+'inquiry.html?type=sample">무료 샘플 받기</a></div>'+
    '</div></header>';
  }

  /* 푸터 */
  var ft = document.querySelector('[data-ft]');
  if (ft){
    ft.outerHTML = '<footer class="ft"><div class="wrap">'+
      '<div class="ft-grid"><div><a class="logo" href="'+(root||'./')+'">AD Lab</a><p class="small" style="margin-top:14px">Video Ad Creative Production</p></div>'+
      '<div class="ft-cols">'+
        '<div><b>회사소개</b><a href="'+root+'about.html">회사소개</a><a href="'+root+'careers.html">채용</a></div>'+
        '<div><b>서비스</b><a href="'+root+'services.html">광고 소재 제작</a></div>'+
        '<div><b>칼럼</b><a href="'+root+'blog/index.html">칼럼 전체</a></div>'+
        '<div><b>레퍼런스</b><a href="'+root+'portfolio.html">운영 사례</a></div>'+
        '<div><b>문의</b><a href="mailto:help@adlab.ai.kr">help@adlab.ai.kr</a></div>'+
      '</div></div>'+
      '<div class="ft-bottom"><div class="ft-links"><a href="'+root+'inquiry.html?type=consult">제작 문의 <span>↗</span></a><a href="'+root+'services.html">서비스 소개 <span>↗</span></a></div><div class="ft-mark" aria-hidden="true">AD Lab</div></div>'+
      '<address class="ft-addr"><span>서울특별시 강남구 강남대로 338</span></address>'+
      '<p class="copy"><span>© AD Lab. All rights reserved.</span><a href="#privacy" data-privacy>개인정보 처리방침</a></p>'+
    '</div></footer>';
    var PRIVACY='<h2 class="pv-t">개인정보 처리방침</h2><p class="pv-lead">주식회사 어베일은 개인정보 보호법 등 관계 법령을 준수하며 이용자의 개인정보를 안전하게 보호합니다.</p><h2>1. 개인정보의 처리 목적</h2><p>제작 문의 접수와 상담, 샘플 제작 및 결과 안내, 회사·서비스 소개자료와 견적 제공을 위해 개인정보를 처리합니다. 별도로 동의한 경우에만 회사 소식, 이벤트 등 광고성 정보를 제공합니다.</p><h2>2. 처리하는 개인정보 항목</h2><p>문의 과정에서 브랜드(회사)명, 담당자명, 연락처, 이메일, 제품·쇼핑몰 링크, 월 광고 예산, 문의 내용, 샘플 제작용 소스(기존 소재, 제품 이미지 등)가 수집될 수 있습니다.</p><h2>3. 처리 및 보유 기간</h2><p>개인정보는 수집·이용 목적 달성 시 지체 없이 파기합니다. 문의·상담 정보는 접수일로부터 1년 보관 후 파기하며, 관계 법령에 따라 보존할 필요가 있는 경우에는 해당 기간 동안 분리하여 보관합니다. 샘플 제작용으로 받은 소스는 샘플 제작 후 폐기합니다.</p><h2>4. 개인정보의 제3자 제공</h2><p>회사는 원칙적으로 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 동의가 있거나 법령에 특별한 규정이 있는 경우에만 제공합니다.</p><h2>5. 처리업무의 위탁</h2><p>원활한 서비스 제공을 위하여 문의 접수와 데이터 저장 업무를 Google LLC(Google Forms)에 위탁하고 있으며, 호스팅 등 일부 업무를 추가로 위탁할 수 있습니다. 수탁자가 개인정보를 안전하게 처리하도록 관리·감독합니다.</p><h2>6. 파기 절차 및 방법</h2><p>보유 기간 경과 또는 처리 목적 달성 시 전자적 파일은 복구할 수 없는 방식으로 삭제하고 종이 문서는 분쇄 또는 소각합니다.</p><h2>7. 정보주체의 권리</h2><p>정보주체는 개인정보 열람, 정정·삭제, 처리정지, 동의 철회를 요청할 수 있으며 회사는 관계 법령에 따라 지체 없이 조치합니다.</p><h2>8. 안전성 확보 조치</h2><p>회사는 접근 권한 관리, 접근 통제, 전송구간 암호화(HTTPS) 등 기술적·관리적 보호조치를 시행합니다.</p><h2>9. 쿠키 및 분석 도구</h2><p>현재 이 웹사이트는 이용자 추적을 위한 쿠키나 분석 도구를 사용하지 않습니다. 도입하는 경우 본 방침을 통해 알려 드리며, 이용자는 브라우저 설정으로 쿠키 저장을 거부할 수 있습니다.</p><h2>10. 개인정보 보호책임자</h2><p>개인정보 보호 관련 문의는 홈페이지 제작 문의를 통해 접수할 수 있으며 회사는 신속하게 답변하고 처리하겠습니다.</p><h2>11. 권익침해 구제방법</h2><p>개인정보 침해에 대한 신고나 상담이 필요한 경우 개인정보침해 신고센터, 개인정보 분쟁조정위원회 등 관계 기관에 문의할 수 있습니다.</p><h2>12. 방침의 변경</h2><p>본 방침은 2026년 10월 18일부터 시행합니다. 법령 또는 서비스 변경에 따라 내용이 변경될 경우 홈페이지를 통해 공지합니다.</p>';
    var pv=document.createElement('div'); pv.className='pv'; pv.setAttribute('role','dialog'); pv.setAttribute('aria-modal','true'); pv.hidden=true;
    pv.innerHTML='<div class="pv-box"><button class="pv-x" type="button" aria-label="닫기">×</button><div class="pv-body legal">'+PRIVACY+'</div></div>';
    document.body.appendChild(pv);
    function pvOpen(e){ if(e) e.preventDefault(); pv.hidden=false; document.documentElement.classList.add('pv-lock'); pv.querySelector('.pv-body').scrollTop=0; }
    function pvClose(){ pv.hidden=true; document.documentElement.classList.remove('pv-lock'); }
    pv.addEventListener('click',function(e){ if(e.target===pv||e.target.classList.contains('pv-x')) pvClose(); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&!pv.hidden) pvClose(); });
    document.querySelectorAll('[data-privacy]').forEach(function(a){ a.addEventListener('click',pvOpen); });
  }

  /* 샘플 타일 */
  function tile(s,i){
    var t = el('div','tile');
    if (s.video){ var v=el('video'); v.src=root+s.video+'?v='+V; v.poster=root+s.poster+'?v='+V; v.muted=true; v.loop=true; v.autoplay=true; v.playsInline=true; v.setAttribute('muted',''); v.setAttribute('playsinline',''); t.appendChild(v); }
    else { var im=el('img'); im.src=root+s.poster+'?v='+V; im.alt='광고 소재 샘플 '+(i+1); im.loading='lazy'; t.appendChild(im); }
    return t;
  }
  var reel = document.querySelector('[data-reel]');
  if (reel){
    for (var r=0;r<2;r++){ CONFIG.samples.forEach(function(s,i){ var t=tile(s,i); if(r) t.setAttribute('aria-hidden','true'); reel.appendChild(t); }); }
  }

  /* 스테이지 배경 콜라주 / 고객사 카드 */
  document.querySelectorAll('[data-collage]').forEach(function(box){
    for (var k=0;k<2;k++){ CONFIG.samples.forEach(function(s,i){ box.appendChild(tile(s,i)); }); }
  });
  document.querySelectorAll('[data-cards]').forEach(function(box){
    var rev = box.dataset.cards==='rev';
    var tr = el('div','track'+(rev?' rev':''));
    var order = CONFIG.samples.slice(); if(rev) order.reverse();
    for (var k=0;k<2;k++){ order.forEach(function(s,i){ var c=el('div','card'); var im=el('img'); im.src=root+s.poster+'?v='+V; im.alt=''; im.loading='lazy'; c.appendChild(im); tr.appendChild(c); }); }
    box.appendChild(tr);
  });

  document.querySelectorAll('[data-news-img]').forEach(function(box){
    var i0=+box.dataset.newsImg;
    [i0,i0+1].forEach(function(i){ var s=CONFIG.samples[i%CONFIG.samples.length]; var im=el('img'); im.src=root+s.poster+'?v='+V; im.alt=''; im.loading='lazy'; box.appendChild(im); });
  });

  /* 히어로: 실제 작업물 휴대폰 3대 */
  document.querySelectorAll('[data-work]').forEach(function(box){
    [2,0,9].forEach(function(i,k){ var s=CONFIG.samples[i%CONFIG.samples.length]; var ph=el('div','phone p'+k); ph.appendChild(tile(s,i)); box.appendChild(ph); });
  });
  /* 흐르는 띠 */
  document.querySelectorAll('[data-ticker]').forEach(function(t){
    var words=t.dataset.ticker.split('|'); var inner=el('div','ticker-in');
    for (var k=0;k<4;k++){ words.forEach(function(w){ var sp=el('span'); sp.textContent=w; inner.appendChild(sp); var dot=el('i'); dot.setAttribute('aria-hidden','true'); inner.appendChild(dot); }); }
    t.appendChild(inner);
  });

  /* 고객사: 영상 소재 두 줄 */
  document.querySelectorAll('[data-reel-row]').forEach(function(row){
    var list=CONFIG.samples.slice(); if(row.dataset.reelRow==='rev') list.reverse();
    for (var k=0;k<2;k++){ list.forEach(function(s,i){ var t=tile(s,i); if(k) t.setAttribute('aria-hidden','true'); row.appendChild(t); }); }
  });
  /* 숫자 올라가기 */
  document.querySelectorAll('[data-count-to]').forEach(function(n){
    var to=+CONFIG[n.dataset.countTo]||0; n.textContent=to;
    if(!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    n.textContent='0';
    var o=new IntersectionObserver(function(es){ if(!es[0].isIntersecting) return; o.disconnect(); var t0=null; (function step(t){ if(!t0) t0=t; var k=Math.min(1,(t-t0)/1400); n.textContent=Math.round(to*(1-Math.pow(1-k,3))); if(k<1) requestAnimationFrame(step); })(performance.now()); },{threshold:.4});
    o.observe(n);
  });

  /* 포트폴리오 카드 */
  document.querySelectorAll('[data-cases]').forEach(function(box){
    var n = +box.dataset.cases || CONFIG.cases.length;
    CONFIG.cases.slice(0,n).forEach(function(c,i){
      var a = el('article','case');
      a.innerHTML = '<div class="thumb"><img alt="" loading="lazy"><span></span></div>'+
        '<div class="body"><div class="meta"><span></span><span></span></div><h3></h3>'+
        '<div><div class="big"></div><div class="big-l"></div></div><div class="subs"></div><p></p><div class="basis"></div></div>';
      a.querySelector('img').src = root+c.img+'?v='+V;
      a.querySelector('.thumb span').textContent = String(i+1).padStart(2,'0')+' / '+c.cat;
      var m=a.querySelectorAll('.meta span'); m[0].textContent=c.brand; m[1].textContent=c.cat;
      a.querySelector('h3').textContent=c.title;
      a.querySelector('.big').textContent=c.big; a.querySelector('.big-l').textContent=c.bigLabel;
      c.subs.forEach(function(s){ var x=el('span'); x.textContent=s; a.querySelector('.subs').appendChild(x); });
      a.querySelector('p').textContent=c.desc; a.querySelector('.basis').textContent=c.basis;
      box.appendChild(a);
    });
  });

  /* 페르소나 선택 */
  var tabs = document.querySelectorAll('.pt');
  if (tabs.length){
    tabs.forEach(function(t){
      t.addEventListener('click', function(){
        tabs.forEach(function(x){ x.setAttribute('aria-selected', x===t?'true':'false'); });
        document.querySelectorAll('.persona-panel').forEach(function(p){ p.hidden = p.id !== t.getAttribute('aria-controls'); });
      });
    });
  }

  /* 장면 배경 */
  var sbg=document.querySelector('.stage-bg');
  function media(src){ var isV=/\.(mp4|webm)$/i.test(src); var m=el(isV?'video':'img'); m.src=root+src+'?v='+V; if(isV){ m.poster=root+src.replace(/\.mp4$/,'_poster.jpg')+'?v='+V; m.muted=true; m.loop=true; m.autoplay=true; m.playsInline=true; m.setAttribute('muted',''); m.setAttribute('playsinline',''); } else { m.alt=''; m.decoding='async'; } return m; }
  if (sbg && CONFIG.shots){
    document.body.classList.add('has-shots');
    var map={hero:'.s-hero',approach:'#approach',capability:'#capability'};
    Object.keys(map).forEach(function(k,i){ if(!CONFIG.shots[k]) return; var d=el('div','shot'+(i===0?' on':'')); d.dataset.shot=k; d.appendChild(media(CONFIG.shots[k])); sbg.insertBefore(d, sbg.querySelector('.grain')); });
    sbg.insertBefore(el('div','shade'), sbg.querySelector('.grain'));
    if ('IntersectionObserver' in window){
      var so=new IntersectionObserver(function(es){ es.forEach(function(e){ if(!e.isIntersecting) return; var k=Object.keys(map).filter(function(x){ return document.querySelector(map[x])===e.target; })[0]; sbg.querySelectorAll('.shot').forEach(function(s){ s.classList.toggle('on', s.dataset.shot===k); }); }); },{rootMargin:'-45% 0px -45% 0px'});
      Object.keys(map).forEach(function(k){ var t=document.querySelector(map[k]); if(t) so.observe(t); });
    }
  }
  var cta=document.querySelector('.s-cta');
  if (cta && CONFIG.shots && CONFIG.shots.cta){ var ci=el('div','cta-img'); ci.setAttribute('aria-hidden','true'); ci.appendChild(media(CONFIG.shots.cta)); cta.insertBefore(ci, cta.firstChild); cta.classList.add('has-img'); }

  /* 헤더: 스크롤 시 배경 */
  var hdr=document.querySelector('.hd');
  if (hdr){
    var sw=document.querySelector('.stagewrap')||document.querySelector('.ab-hero'), ct=document.querySelector('.s-cta.has-img');
    var onS=function(){
      var y=window.scrollY, h=hdr.offsetHeight, inStage=false;
      [sw,ct].forEach(function(z){ if(!z) return; var r=z.getBoundingClientRect(); if(r.top<=h && r.bottom>h) inStage=true; });
      hdr.classList.toggle('scrolled', y>24 && !inStage);
      hdr.classList.toggle('over-dark', y>24 && inStage);
    };
    onS(); window.addEventListener('scroll',onS,{passive:true});
  }

  /* 등장 효과 · 숫자 행 강조 */
  if ('IntersectionObserver' in window){
    document.documentElement.classList.add('js');
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); },{threshold:.12, rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll('.rv').forEach(function(n){ io.observe(n); });
    var fo=new IntersectionObserver(function(es){ es.forEach(function(e){ e.target.classList.toggle('on', e.isIntersecting); }); },{rootMargin:'-22% 0px -22% 0px'});
    document.querySelectorAll('.fig').forEach(function(n){ fo.observe(n); });
  } else {
    document.querySelectorAll('.rv').forEach(function(n){ n.classList.add('in'); });
  }


  /* ===== 서비스 페이지: 스크롤 연동 동작 ===== */
  var svh=document.getElementById('svHero');
  if (svh){
    var phases=[
      {n:2640, u:'억', l:'고객사 매출(2025년 기준)', tiles:[0,1,2,3,4,5,6,7]},
      {n:100, u:'만+', l:'고성과 소재를 위해 학습한 영상', tiles:[8,9,10,11,12,13,14,15]},
      {n:180, u:'+', l:'함께 성과를 낸 브랜드', tiles:[2,5,8,11,14,1,4,7]}
    ];
    var grid=document.getElementById('svGrid'), numEl=document.getElementById('svNum'), unitEl=document.getElementById('svUnit'), labEl=document.getElementById('svLabel'), dots=[].slice.call(document.querySelectorAll('#svDots li'));
    var tiles=[]; var N=CONFIG.samples.length;
    for (var c=0;c<4;c++){
      var col=el('div','sv-col'); var track=el('div','sv-track');
      for (var rep=0;rep<2;rep++){ for (var k=0;k<N;k++){ var idx=(k+c*4)%N; var t=tile(CONFIG.samples[idx],idx); var b=t.querySelector('b'); if(b) b.remove(); if(rep) t.setAttribute('aria-hidden','true'); track.appendChild(t); } }
      track.style.animationDuration=(46+c*9)+'s'; track.style.animationDelay=(-c*7)+'s';
      col.appendChild(track); grid.appendChild(col);
    }
    var cur=-1, raf=null, shown=0, reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function setNum(to){ if(reduce){ numEl.textContent=to.toLocaleString('ko-KR'); shown=to; return; } var from=shown, t0=null; cancelAnimationFrame(raf); (function step(t){ if(!t0) t0=t; var k=Math.min(1,(t-t0)/700); shown=Math.round(from+(to-from)*(1-Math.pow(1-k,3))); numEl.textContent=shown.toLocaleString('ko-KR'); if(k<1) raf=requestAnimationFrame(step); })(performance.now()); }
    function apply(i){ if(i===cur) return; cur=i; var ph=phases[i]; setNum(ph.n); unitEl.textContent=ph.u; labEl.textContent=ph.l; dots.forEach(function(d,k){ d.classList.toggle('on',k===i); }); }
    function onScroll(){ var r=svh.getBoundingClientRect(), total=svh.offsetHeight-window.innerHeight, p=Math.min(.999,Math.max(0,-r.top/Math.max(1,total))); apply(Math.min(phases.length-1, Math.floor(p*phases.length))); }
    onScroll(); window.addEventListener('scroll',onScroll,{passive:true}); window.addEventListener('resize',onScroll);
  }
  var svs=[].slice.call(document.querySelectorAll('#svSteps li'));
  if (svs.length){
    /* 1→4 번호가 한 번씩 차례로 칠해지고 반복 (구간이 보이는 동안만) */
    var si=0, timer=null, shownNow=false, STEP=2800;
    function lit(i){ svs.forEach(function(x,k){ x.classList.toggle('on',k===i); }); }
    function startLoop(){ if(timer) return; lit(si); timer=setInterval(function(){ si=(si+1)%svs.length; lit(si); },STEP); }
    function stopLoop(){ clearInterval(timer); timer=null; }
    svs.forEach(function(x,k){ x.addEventListener('mouseenter',function(){ si=k; lit(k); }); });
    var wrap=document.getElementById('svSteps');
    if ('IntersectionObserver' in window){ new IntersectionObserver(function(es){ if(es[0].isIntersecting){ startLoop(); } else { stopLoop(); svs.forEach(function(x){ x.classList.remove('on'); }); si=0; } },{threshold:0,rootMargin:'-25% 0px -25% 0px'}).observe(wrap); }
    else { startLoop(); }
  }
  /* 진행 단계: 선이 채워지며 카드가 차례로 켜짐, 반복 */
  var procGrid=document.querySelector('.sv-proc-grid');
  if (procGrid){
    var pcs=[].slice.call(procGrid.querySelectorAll('.sv-p')), pi=-1, ptimer=null;
    function pstep(){ pi=(pi+1)%(pcs.length+1); procGrid.style.setProperty('--fill', (pi/pcs.length*100)+'%'); pcs.forEach(function(c,k){ c.classList.toggle('lit', k<pi); c.classList.toggle('now', k===pi-1); }); }
    function pstart(){ if(ptimer) return; pi=-1; pstep(); ptimer=setInterval(pstep,1500); }
    function pstop(){ clearInterval(ptimer); ptimer=null; }
    if ('IntersectionObserver' in window){ new IntersectionObserver(function(es){ if(es[0].isIntersecting) pstart(); else pstop(); },{threshold:0,rootMargin:'-18% 0px -18% 0px'}).observe(procGrid); } else { pstart(); }
  }
  document.querySelectorAll('.sv-card[data-tile]').forEach(function(c){ var sm=CONFIG.samples[+c.dataset.tile]; if(sm) c.style.setProperty('--shot','url('+root+sm.poster+'?v='+V+')'); });
  /* 모바일 하단 바 */
  var mbar = document.querySelector('.mbar');
  if (mbar){
    document.body.classList.add('has-mbar');
    var stop = document.querySelector('[data-mbar-stop]');
    if (stop && 'IntersectionObserver' in window){ new IntersectionObserver(function(es){ mbar.classList.toggle('hide', es[0].isIntersecting); },{threshold:.1}).observe(stop); }
  }
})();

/* about: 단어 등장, 카운트업, 스크롤 하이라이트 */
(function(){
  var h=document.querySelector('[data-words]');
  if(h){ var t=h.textContent.trim().split(' '); h.innerHTML=t.map(function(w,i){return '<span class="w"><span style="--i:'+i+'">'+w+'</span></span>';}).join(' '); setTimeout(function(){h.classList.add('on');},200); }
  var cs=[].slice.call(document.querySelectorAll('[data-ab-count]'));
  function run(el){ var to=+el.getAttribute('data-ab-count'),t0=null; (function f(ts){ t0=t0||ts; var p=Math.min((ts-t0)/1600,1); el.textContent=Math.round(to*(1-Math.pow(1-p,3))).toLocaleString('ko-KR'); if(p<1) requestAnimationFrame(f); })(performance.now()); }
  if(cs.length&&'IntersectionObserver' in window){ var io=new IntersectionObserver(function(es){es.forEach(function(e){ if(e.isIntersecting){ run(e.target); io.unobserve(e.target);} });},{threshold:.4}); cs.forEach(function(c){io.observe(c);}); } else cs.forEach(function(c){c.textContent=c.getAttribute('data-ab-count');});
  var big=document.querySelector('[data-lit]');
  if(big){ big.innerHTML=big.textContent.trim().split(' ').map(function(w){return '<span class="l">'+w+'</span>';}).join(' '); var ls=[].slice.call(big.querySelectorAll('.l'));
    function upd(){ var r=big.getBoundingClientRect(),vh=innerHeight; var p=(vh*.8-r.top)/(r.height+vh*.2); p=Math.max(0,Math.min(1,p)); var n=Math.round(p*ls.length); ls.forEach(function(x,i){x.classList.toggle('on',i<n);}); }
    addEventListener('scroll',upd,{passive:true}); upd(); }
})();

(function(){ var tb=document.querySelector('.tabs'); if(!tb) return; var ps=[].slice.call(document.querySelectorAll('.post[data-cat]'));
  tb.addEventListener('click',function(e){ var b=e.target.closest('button'); if(!b) return; [].forEach.call(tb.children,function(x){x.classList.toggle('on',x===b);}); var f=b.getAttribute('data-f'); ps.forEach(function(p){ p.classList.toggle('hide', f!=='all' && p.getAttribute('data-cat')!==f); }); }); })();

(function(){ var w=document.querySelector('[data-wall]'); if(w){ var h=''; for(var r=0;r<3;r++) for(var i=1;i<=16;i++){ var n=(i<10?'0':'')+i; if(r*16+i>20) break; h+='<img src="ads/ad'+n+'.webp" alt="" loading="lazy">'; } w.innerHTML=h; }
  var t=document.getElementById('pfTabs'); if(!t) return;
  t.addEventListener('click',function(e){ var b=e.target.closest('button'); if(!b) return; [].forEach.call(t.children,function(x){x.classList.toggle('on',x===b);}); var f=b.getAttribute('data-f'); [].forEach.call(document.querySelectorAll('.case'),function(c){ var m=c.querySelector('.meta'); var cat=m?m.textContent:''; c.style.display=(f==='all'||cat.indexOf(f)>-1)?'':'none'; }); }); })();

(function(){ var bs=[].slice.call(document.querySelectorAll('.pc')); if(!bs.length) return; var res=document.querySelector('.pchk-res'), n=document.getElementById('pcn');
  bs.forEach(function(b){ b.addEventListener('click',function(){ b.setAttribute('aria-pressed', b.getAttribute('aria-pressed')==='true'?'false':'true'); var c=bs.filter(function(x){return x.getAttribute('aria-pressed')==='true';}).length; n.textContent=c; res.hidden=c===0; }); }); })();
