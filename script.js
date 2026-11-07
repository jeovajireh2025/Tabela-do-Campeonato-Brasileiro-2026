/* ---------- Dados (07/11/2026, após a 34ª rodada) ---------- */
// [pos, clube, código, P, J, V, E, D, SG, últimos5, risco Z4 em %, jogo a menos]
var TABELA = [
  [1,"Flamengo","FLA",76,34,23,7,4,42,"VVVVV",0,0],
  [2,"Palmeiras","PAL",73,34,21,10,3,39,"VEVVV",0,0],
  [3,"Cruzeiro","CRU",60,34,18,6,10,7,"VVVVD",0,0],
  [4,"Fluminense","FLU",57,34,16,9,9,13,"VVDDD",0,0],
  [5,"Athletico-PR","CAP",54,34,15,9,10,8,"DDEDV",0,0],
  [6,"Bahia","BAH",53,34,14,11,9,5,"DVEDV",0,0],
  [7,"Atlético-MG","CAM",50,34,14,8,12,4,"DDDVV",0,0],
  [8,"Bragantino","RBB",47,34,13,8,13,5,"VVDEV",0.05,0],
  [9,"Santos","SAN",47,34,12,11,11,1,"DEEVD",0.05,0],
  [10,"São Paulo","SAO",44,34,12,8,14,0,"EDEVV",0.05,0],
  [11,"Botafogo","BOT",42,34,11,9,14,-7,"VDDVE",1.4,0],
  [12,"Coritiba","CFC",42,34,11,9,14,-11,"DVDDE",5.5,0],
  [13,"Vasco","VAS",41,33,11,8,14,-7,"VDVDE",2.0,1],
  [14,"Mirassol","MIR",40,34,10,10,14,-9,"VDEVD",13.8,0],
  [15,"Vitória","VIT",38,34,10,8,16,-16,"DDEED",42.2,0],
  [16,"Internacional","INT",38,34,9,11,14,-4,"VDVDE",35.7,0],
  [17,"Corinthians","COR",37,34,9,10,15,-6,"EVDED",44.1,0],
  [18,"Grêmio","GRE",37,34,9,10,15,-9,"DVVDE",55.4,0],
  [19,"Remo","REM",29,34,6,11,17,-20,"DVDEE",99.9,0],
  [20,"Chapecoense","CHA",21,33,4,9,20,-35,"DDVDD",100,1]
];

// [data, mandante, gols mandante, gols visitante, visitante]
var RESULTADOS = {
  34: [
    ["06/11","Vitória",0,3,"Fluminense"],["05/11","Cruzeiro",3,2,"Bahia"],["05/11","Palmeiras",6,1,"Remo"],
    ["04/11","Botafogo",1,0,"Atlético-MG"],["04/11","São Paulo",0,0,"Corinthians"],["04/11","Athletico-PR",1,3,"Vasco"],
    ["04/11","Flamengo",3,1,"Grêmio"],["03/11","Internacional",1,0,"Coritiba"],["03/11","Chapecoense",1,2,"Mirassol"],
    ["02/11","Bragantino",2,1,"Santos"]
  ],
  33: [
    ["31/10","Coritiba",2,0,"Vitória"],["30/10","Corinthians",2,0,"Mirassol"],["29/10","Grêmio",2,0,"Athletico-PR"],
    ["29/10","Vasco",1,4,"Flamengo"],["29/10","Atlético-MG",0,1,"Cruzeiro"],["28/10","Bahia",3,2,"São Paulo"],
    ["28/10","Remo",2,1,"Botafogo"],["28/10","Bragantino",3,0,"Chapecoense"],["28/10","Fluminense",2,1,"Internacional"],
    ["28/10","Santos",0,0,"Palmeiras"]
  ],
  32: [
    ["26/10","Flamengo",3,2,"Atlético-MG"],["26/10","Coritiba",0,1,"Grêmio"],["24/10","Santos",1,1,"Bahia"],
    ["24/10","Chapecoense",2,1,"Fluminense"],["24/10","Palmeiras",2,0,"Bragantino"],["24/10","Vasco",3,2,"Corinthians"],
    ["24/10","Internacional",3,0,"Botafogo"],["24/10","Mirassol",1,1,"São Paulo"],["24/10","Vitória",1,1,"Athletico-PR"],
    ["23/10","Cruzeiro",1,0,"Remo"]
  ]
};

// [dia, hora, mandante, visitante, observação]
var PROXIMOS = [
  ["sáb., 14/11","18:30","Mirassol","Atlético-MG",""],
  ["sáb., 14/11","20:30","Chapecoense","Vasco","Jogo atrasado da 21ª rodada"],
  ["qua., 18/11","19:30","Coritiba","Santos",""],
  ["qua., 18/11","20:00","Remo","Chapecoense",""],
  ["qua., 18/11","20:30","Cruzeiro","Palmeiras",""],
  ["qua., 18/11","20:30","Flamengo","Athletico-PR",""],
  ["qua., 18/11","21:30","Corinthians","Botafogo",""],
  ["qua., 18/11","21:30","Grêmio","Bahia",""],
  ["qui., 19/11","19:30","Vasco","Internacional",""],
  ["qui., 19/11","19:30","Vitória","Bragantino",""],
  ["qui., 19/11","21:30","São Paulo","Fluminense",""]
];

/* ---------- Emblemas ilustrativos (desenho original, sem relação com os escudos oficiais) ---------- */
// nome: [cor base, cor do detalhe, motivo, sigla]
var EMBLEMAS = {
  "Flamengo":["#b3122b","#161616","h","FLA"],
  "Palmeiras":["#0f6b3a","#e9f2ec","d","PAL"],
  "Cruzeiro":["#1b4fb8","#f2f5fb","t","CRU"],
  "Fluminense":["#7a1630","#1d7a4a","v","FLU"],
  "Athletico-PR":["#c0272d","#1a1a1a","c","CAP"],
  "Bahia":["#2457b5","#d63a3a","o","BAH"],
  "Atlético-MG":["#1a1a1a","#f1f1f1","h","CAM"],
  "Bragantino":["#f1f1f1","#c8202f","d","RBB"],
  "Santos":["#f1f1f1","#1a1a1a","t","SAN"],
  "São Paulo":["#c8202f","#f1f1f1","c","SAO"],
  "Botafogo":["#1a1a1a","#f1f1f1","v","BOT"],
  "Coritiba":["#1d7a4a","#f1f1f1","o","CFC"],
  "Vasco":["#202020","#f1f1f1","d","VAS"],
  "Mirassol":["#f2c230","#1d7a4a","h","MIR"],
  "Vitória":["#b3122b","#161616","v","VIT"],
  "Internacional":["#c8202f","#f1f1f1","t","INT"],
  "Corinthians":["#161616","#f1f1f1","c","COR"],
  "Grêmio":["#2b78c9","#161616","o","GRE"],
  "Remo":["#1b4fb8","#f1f1f1","d","REM"],
  "Chapecoense":["#1d7a4a","#f1f1f1","v","CHA"]
};
var uidEscudo = 0;
function escudo(nome){
  var e = EMBLEMAS[nome];
  if (!e) return "";
  var id = "esc" + (++uidEscudo), c1 = e[0], c2 = e[1], det = "";
  if (e[2] === "v") det = '<rect x="14" y="0" width="14" height="32" fill="' + c2 + '"/>';
  if (e[2] === "d") det = '<polygon points="0,32 28,0 28,32" fill="' + c2 + '"/>';
  if (e[2] === "h") det = '<rect x="0" y="11" width="28" height="10" fill="' + c2 + '"/>';
  if (e[2] === "c") det = '<polygon points="0,15 14,25 28,15 28,23 14,33 0,23" fill="' + c2 + '"/>';
  if (e[2] === "t") det = '<rect x="0" y="0" width="28" height="10" fill="' + c2 + '"/>';
  if (e[2] === "o") det = '<circle cx="14" cy="16" r="9" fill="' + c2 + '"/>';
  var P = "M14 1.5 L26 5.5 V16 C26 24 20 29.5 14 31.5 C8 29.5 2 24 2 16 V5.5 Z";
  return '<svg class="escudo" viewBox="0 0 28 32" aria-hidden="true" focusable="false">' +
    '<defs><clipPath id="' + id + '"><path d="' + P + '"/></clipPath></defs>' +
    '<g clip-path="url(#' + id + ')"><rect width="28" height="32" fill="' + c1 + '"/>' + det + '</g>' +
    '<path d="' + P + '" fill="none" stroke="rgba(255,255,255,0.38)" stroke-width="1"/>' +
    '<text x="14" y="20" text-anchor="middle" font-size="9" fill="#ffffff" stroke="#0a0e16" stroke-width="2.2" paint-order="stroke" stroke-linejoin="round">' + e[3] + '</text>' +
    '</svg>';
}

/* ---------- Render ---------- */
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function norm(s){ return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""); }
function zona(pos){ return pos <= 5 ? "z-lib" : pos <= 9 ? "z-cond" : pos >= 17 ? "z-z4" : ""; }
function risco(v){
  if (v === 0) return '<span class="risk"><span class="meter"><i style="width:0"></i></span><b>0%</b></span>';
  var txt = v < 0.1 ? "<0,1%" : (v >= 99.9 && v < 100 ? "99,9%" : String(v).replace(".", ",") + "%");
  return '<span class="risk"><span class="meter"><i style="width:' + Math.max(v, 2) + '%"></i></span><b>' + txt + '</b></span>';
}

var filtro = "all", termo = "";
function renderTabela(){
  var html = "", n = 0;
  TABELA.forEach(function(r){
    if (filtro === "lib" && r[0] > 9) return;
    if (filtro === "z4" && r[0] < 17) return;
    if (termo && norm(r[1]).indexOf(termo) === -1) return;
    n++;
    var form = r[9].split("").map(function(c){ return '<i class="' + c + '">' + c + '</i>'; }).join("");
    html += '<tr class="' + zona(r[0]) + (r[0] === 1 ? " first" : "") + '">' +
      '<td class="pos num"><span>' + r[0] + '</span></td>' +
      '<td class="l"><span class="club">' + escudo(r[1], r[2]) + esc(r[1]) + (r[11] ? '<span class="pend">1 jogo a menos</span>' : '') + '</span></td>' +
      '<td class="pts num">' + r[3] + '</td>' +
      '<td class="num">' + r[4] + '</td><td class="num">' + r[5] + '</td><td class="num">' + r[6] + '</td><td class="num">' + r[7] + '</td>' +
      '<td class="num">' + (r[8] > 0 ? "+" + r[8] : r[8]) + '</td>' +
      '<td><span class="form" aria-label="Últimos cinco jogos">' + form + '</span></td>' +
      '<td>' + risco(r[10]) + '</td></tr>';
  });
  document.getElementById("corpo").innerHTML = html;
  document.getElementById("vazio").hidden = n > 0;
}

function renderResultados(rodada){
  var html = "", ultima = "";
  RESULTADOS[rodada].forEach(function(g){
    if (g[0] !== ultima){ html += '<li class="date">' + g[0] + '</li>'; ultima = g[0]; }
    var cls = g[2] > g[3] ? "hw" : g[3] > g[2] ? "aw" : "";
    html += '<li class="game"><span class="t h"><span>' + esc(g[1]) + '</span>' + escudo(g[1]) + '</span>' +
      '<span class="sc num ' + cls + '"><span class="a">' + g[2] + '</span> x <span class="b">' + g[3] + '</span></span>' +
      '<span class="t">' + escudo(g[4]) + '<span>' + esc(g[4]) + '</span></span></li>';
  });
  document.getElementById("resultados").innerHTML = html;
}

function renderProximos(){
  var html = "", ultimo = "";
  PROXIMOS.forEach(function(g){
    if (g[0] !== ultimo){ html += '<li class="date">' + g[0] + '</li>'; ultimo = g[0]; }
    html += '<li class="game"><span class="t h"><span>' + esc(g[2]) + '</span>' + escudo(g[2]) + '</span><span class="when num">' + g[1] + '</span><span class="t">' + escudo(g[3]) + '<span>' + esc(g[3]) + '</span></span>' +
      (g[4] ? '<span class="note">' + esc(g[4]) + '</span>' : '') + '</li>';
  });
  document.getElementById("proximos").innerHTML = html;
}

function ligarAbas(selector, attr, cb){
  var abas = document.querySelectorAll(selector);
  abas.forEach(function(b){
    b.addEventListener("click", function(){
      abas.forEach(function(x){ x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      cb(b.getAttribute(attr));
    });
  });
}
ligarAbas('.tab[data-f]', "data-f", function(v){ filtro = v; renderTabela(); });
ligarAbas('.tab[data-r]', "data-r", function(v){ renderResultados(v); });
document.getElementById("busca").addEventListener("input", function(e){ termo = norm(e.target.value.trim()); renderTabela(); });

renderTabela();
renderResultados(34);
renderProximos();
