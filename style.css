body{
  font-family:"Noto Sans Devanagari","Kalimati",system-ui;
  margin:0;
  background:#f4f6f8;
}

h1,h2,h3{margin-top:24px}

/* LETTERHEAD */
.letterhead{
  text-align:center;
  border-bottom:2px solid #000;
  padding:10px;
}
.letterfoot{
  text-align:center;
  border-top:1px solid #000;
  padding:6px;
  font-size:11px;
}

/* COVER */
.cover{
  text-align:center;
  padding:60px 40px;
  page-break-after:always;
}
.sign-name{
  font-family:"Segoe Script",cursive;
  font-size:24px;
}

/* TOC */
.toc{padding:40px;page-break-after:always}
.toc ul{list-style:none;padding:0}

/* NUMBERING */
.proposal{padding:40px;counter-reset:h2}
.proposal h2{counter-reset:h3}
.proposal h2::before{
  counter-increment:h2;
  content:counter(h2, nepali) ". ";
}
.proposal h3::before{
  counter-increment:h3;
  content:counter(h2, nepali) "." counter(h3, nepali) " ";
}

/* TABLES */
.budget,.summary,.trend{
  width:80%;
  margin:20px auto;
  border-collapse:collapse;
}
.budget th,.budget td,
.summary th,.summary td,
.trend th,.trend td{
  border:1px solid #333;
  padding:8px;
}

/* CHART */
.ie-chart{
  display:flex;
  justify-content:center;
  gap:80px;
  height:220px;
}
.ie-bar{
  width:120px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:center;
}
.income-bar::before{
  content:"";width:100%;height:140px;background:#4caf50;
}
.expense-bar::before{
  content:"";width:100%;height:90px;background:#f44336;
}

/* ANNEX */
.annex{padding:40px;counter-reset:annex;page-break-before:always}
.annex h3::before{
  counter-increment:annex;
  content:"Annex–" counter(annex, lower-nepali) " : ";
}

/* PAGE BREAK */
.page-break{page-break-before:always}

/* PRINT */
@media print{
  @page{
    size:A4;
    margin:20mm;
    @bottom-center{
      content:counter(page, nepali);
    }
  }
  .letterhead,.letterfoot{
    position:fixed;left:0;right:0;background:#fff;
  }
  .letterhead{top:0}
  .letterfoot{bottom:0}
  iframe{display:none}
}
