/* ============================================================
   AD Lab v2 공통 스크립트 — 숫자·사례·샘플은 CONFIG에서만 수정
   ============================================================ */
var CONFIG = {
  formUrl: 'https://forms.gle/hiVqT1a8VHmTjyti8',
  threads: 'https://www.threads.com/@leo.adlab',
  // 샘플: video를 넣으면 영상, 비어 있으면 poster 이미지
  samples: (function(){ var a=[]; for(var i=1;i<=16;i++){ var n=String(i).padStart(2,'0'); a.push({poster:'ads/ad'+n+'.webp', video:''}); } return a; })(),
  // 포트폴리오 (진짜마케팅 형식). 숫자·문구는 실제 값으로 교체
  cases: [
    { brand:'알파셀', cat:'건강 · 웰니스', title:'결론 한 줄을 입력하세요', big:'0%', bigLabel:'대표 지표 (예: 구매 ROAS)', subs:['CTR 0%','CPA 0원','소재 0편'], desc:'어떤 소재 방향이 이겼는지, 무엇을 바꿨는지 2~3문장으로 적습니다.', basis:'집계 기준: 매체 · 기간 · 집계 범위', img:'ads/ad03.webp' },
    { brand:'헥사큐', cat:'카테고리', title:'결론 한 줄을 입력하세요', big:'0%', bigLabel:'대표 지표', subs:['지표 0','지표 0'], desc:'어떤 소재 방향이 이겼는지, 무엇을 바꿨는지 2~3문장으로 적습니다.', basis:'집계 기준: 매체 · 기간 · 집계 범위', img:'ads/ad07.webp' },
    { brand:'플루', cat:'카테고리', title:'결론 한 줄을 입력하세요', big:'0건', bigLabel:'대표 지표', subs:['지표 0','지표 0'], desc:'어떤 소재 방향이 이겼는지, 무엇을 바꿨는지 2~3문장으로 적습니다.', basis:'집계 기준: 매체 · 기간 · 집계 범위', img:'ads/ad11.webp' },
    { brand:'잉코', cat:'카테고리', title:'결론 한 줄을 입력하세요', big:'0원', bigLabel:'대표 지표', subs:['지표 0','지표 0'], desc:'어떤 소재 방향이 이겼는지, 무엇을 바꿨는지 2~3문장으로 적습니다.', basis:'집계 기준: 매체 · 기간 · 집계 범위', img:'ads/ad05.webp' },
    { brand:'글리너', cat:'카테고리', title:'결론 한 줄을 입력하세요', big:'0%', bigLabel:'대표 지표', subs:['지표 0','지표 0'], desc:'어떤 소재 방향이 이겼는지, 무엇을 바꿨는지 2~3문장으로 적습니다.', basis:'집계 기준: 매체 · 기간 · 집계 범위', img:'ads/ad14.webp' }
  ],
  // 장면 배경: 이미지(png/jpg)나 영상(mp4)을 media 폴더에 넣고 경로만 바꾸면 됩니다.
  // 장면 배경: media 폴더의 jpg를 mp4로 바꾸면 영상으로 재생됩니다.
  shots: { hero:'media/hero.mp4', approach:'media/approach.mp4', capability:'media/numbers.mp4', cta:'media/cta.mp4' },
  clients: 180,           // 함께한 브랜드 수 (숫자만 바꾸면 됩니다)
  version: '20261017clay3'
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
      '<div class="ctas"><a class="btn red sm" href="'+root+'inquiry.html?type=consult">제작 문의</a></div>'+
    '</div></header>';
  }

  /* 푸터 */
  var ft = document.querySelector('[data-ft]');
  if (ft){
    ft.outerHTML = '<footer class="ft"><div class="wrap">'+
      '<div class="ft-grid"><div><a class="logo" href="'+(root||'./')+'">AD Lab</a><p class="small" style="margin-top:14px">Video Ad Creative Production</p></div>'+
      '<div class="ft-cols">'+
        '<div><b>회사소개</b><a href="'+root+'about.html">회사소개</a><a href="'+root+'careers.html">채용</a></div>'+
        '<div><b>서비스</b><a href="'+root+'services.html#creative">광고 소재 제작</a></div>'+
        '<div><b>칼럼</b><a href="'+root+'blog/index.html">칼럼 전체</a></div>'+
        '<div><b>레퍼런스</b><a href="'+root+'portfolio.html">운영 사례</a></div>'+
        '<div><b>SNS</b><a href="'+CONFIG.threads+'" target="_blank" rel="noopener">Threads</a></div>'+
      '</div></div>'+
      '<div class="ft-bottom"><div class="ft-links"><a href="'+root+'inquiry.html?type=consult">제작 문의 <span>↗</span></a><a href="'+root+'services.html">서비스 소개 <span>↗</span></a></div><div class="ft-mark" aria-hidden="true">AD Lab</div></div>'+
      '<p class="copy"><span>© AD Lab. All rights reserved.</span><a href="#privacy" data-privacy>개인정보 처리방침</a></p>'+
    '</div></footer>';
    var PRIVACY='<h2 class="pv-t">개인정보 처리방침</h2><p class="pv-lead">주식회사 어베일(이하 "회사")은 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고, 관련한 고충을 신속하게 처리하기 위해 다음과 같이 처리방침을 정합니다.</p>'+'<h2>1. 수집하는 개인정보 항목</h2><p>회사는 제작 문의 및 샘플 신청, 채용 문의를 처리하기 위해 아래 정보를 수집합니다.</p><ul><li><b>필수 항목</b>: 브랜드(회사)명, 담당자 이름, 이메일, 연락처, 문의 내용</li><li><b>선택 항목</b>: 직책, 업종, 월 광고 예산, 제품·쇼핑몰 링크, 알게 된 경로, 참고 소재 및 제품 이미지</li></ul><h2>2. 개인정보의 수집 및 이용 목적</h2><ul><li>제작 문의 접수, 상담, 샘플 제작 및 결과 안내</li><li>견적 안내, 계약 체결 및 이행, 영상 소재 제작·전달</li><li>서비스 개선을 위한 문의 내용 분석 (개인을 식별할 수 없는 형태로 활용)</li></ul><h2>3. 개인정보의 보유 및 이용 기간</h2><ul><li>제작 문의·상담 정보: 문의 접수일로부터 1년 보관 후 파기합니다.</li><li>계약 체결 시: 계약 및 대금 결제, 거래 기록에 관한 정보는 「전자상거래 등에서의 소비자보호에 관한 법률」 등 관계 법령에 따라 해당 기간(계약·청약철회 기록 5년, 대금결제·재화 공급 기록 5년, 소비자 불만·분쟁처리 기록 3년) 보관합니다.</li><li>샘플 제작용으로 제공받은 소스(기존 소재, 제품 이미지 등): 샘플 제작 목적에 사용한 뒤 지체 없이 폐기합니다. 다만 계약이 체결된 경우 계약 이행 기간 동안 보관합니다.</li></ul><h2>4. 개인정보의 제3자 제공</h2><p>회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 근거가 있거나 수사기관이 법령에 정한 절차에 따라 요구하는 경우는 예외로 합니다.</p><h2>5. 개인정보 처리의 위탁</h2><p>회사는 원활한 서비스 제공을 위해 아래와 같이 개인정보 처리를 위탁하고 있습니다.</p><ul><li><b>수탁자</b>: Google LLC (Google Forms, Google Workspace)</li><li><b>위탁 업무</b>: 제작 문의 접수 및 응답 데이터 저장·관리</li><li><b>이전되는 국가 및 시기</b>: 미국 등 Google 데이터센터 소재 국가, 문의 접수 시점에 네트워크를 통한 전송</li><li><b>보유 및 이용 기간</b>: 위 3항의 기간과 같음</li></ul><h2>6. 개인정보의 파기 절차 및 방법</h2><ul><li>보유 기간이 끝났거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다.</li><li>전자적 파일 형태의 정보는 복구할 수 없는 방법으로 삭제하고, 출력물은 분쇄하거나 소각합니다.</li></ul><h2>7. 이용자의 권리와 행사 방법</h2><p>이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요구할 수 있으며, 아래 개인정보 보호책임자에게 문의 양식으로 요청하시면 지체 없이 조치하겠습니다.</p><h2>8. 개인정보의 안전성 확보 조치</h2><ul><li>개인정보에 접근할 수 있는 사람을 최소한으로 제한합니다.</li><li>개인정보가 담긴 계정에 접근 권한 관리와 비밀번호 보호 조치를 적용합니다.</li><li>개인정보 처리 시스템에 대한 접근 통제를 하고, 전송 구간은 암호화(HTTPS)합니다.</li></ul><h2>9. 자동 수집 장치의 설치·운영 및 거부</h2><p>회사 웹사이트는 현재 이용자를 추적하기 위한 쿠키나 광고용 식별자를 사용하지 않습니다. 향후 도입할 경우 본 방침을 통해 사전에 알려 드립니다.</p><h2>10. 개인정보 보호책임자</h2><ul><li><b>책임자</b>: HyokyungWoo (대표)</li><li><b>문의 방법</b>: <a href="'+root+'inquiry.html?type=consult" style="text-decoration:underline">제작 문의 페이지</a>의 문의 양식에 "개인정보 관련 문의"라고 남겨 주세요.</li></ul><p>기타 개인정보 침해에 대한 신고나 상담은 아래 기관에 문의하실 수 있습니다.</p><ul><li>개인정보분쟁조정위원회 (kopico.go.kr / 1833-6972)</li><li>개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)</li><li>대검찰청 (spo.go.kr / 국번없이 1301)</li><li>경찰청 사이버수사국 (ecrm.police.go.kr / 국번없이 182)</li></ul><h2>11. 처리방침의 변경</h2><p>이 처리방침은 2026년 10월 18일부터 적용됩니다. 내용이 변경되는 경우 시행 7일 전부터 본 페이지를 통해 알려 드립니다.</p>';
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
