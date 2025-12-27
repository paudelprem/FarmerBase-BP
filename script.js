/* DATE */
const d=new Date();
document.getElementById("engDate").innerText=
  d.toLocaleDateString("en-GB",{day:"2-digit",month:"long",year:"numeric"});

const nepDigits=['०','१','२','३','४','५','६','७','८','९'];
const nepNum=n=>n.toString().split('').map(x=>nepDigits[x]||x).join('');
const nepMonths=["बैशाख","जेठ","असार","साउन","भदौ","असोज","कार्तिक","मंसिर","पुष","माघ","फागुन","चैत"];
document.getElementById("nepDate").innerText=
  nepNum(d.getFullYear()+57)+" "+nepMonths[(d.getMonth()+4)%12]+" "+nepNum(d.getDate());

/* TOC */
const toc=document.getElementById("tocList");
document.querySelectorAll(".proposal h2,.proposal h3").forEach((h,i)=>{
  h.id="sec"+i;
  const li=document.createElement("li");
  li.style.marginLeft=h.tagName==="H3"?"20px":"0";
  li.innerHTML=`<a href="#${h.id}">${h.innerText}</a>`;
  toc.appendChild(li);
});

/* INCOME / EXPENSE */
let income=0, expense=0;
document.querySelectorAll(".income").forEach(i=>income+=+i.innerText||0);
document.querySelectorAll(".amount:not(.income)").forEach(e=>expense+=+e.innerText||0);

document.getElementById("totalIncome").innerText=income.toLocaleString("ne-NP");
document.getElementById("totalExpense").innerText=expense.toLocaleString("ne-NP");

const diff=income-expense;
document.getElementById("profitLoss").innerText=
  (diff>=0?"नाफा: ":"नोक्सान: ")+Math.abs(diff).toLocaleString("ne-NP");

document.getElementById("incomeBarVal").innerText=income.toLocaleString("ne-NP");
document.getElementById("expenseBarVal").innerText=expense.toLocaleString("ne-NP");

/* TREND */
const ti=[...document.querySelectorAll(".trend-income")].map(x=>+x.innerText||0);
const te=[...document.querySelectorAll(".trend-expense")].map(x=>+x.innerText||0);
const trend=ti.at(-1)>ti[0]?"आय बढ्दो प्रवृत्तिमा छ।":"आय स्थिर छ।";
document.getElementById("trendSummary").innerHTML=`<li>${trend}</li>`;

/* SIGN UPLOAD */
const up=document.getElementById("signUpload");
if(up){
  up.onchange=e=>{
    const f=e.target.files[0];
    if(!f)return;
    const r=new FileReader();
    r.onload=()=>{
      signImage.src=r.result;
      signImage.style.display="block";
      textSign.style.display="none";
    };
    r.readAsDataURL(f);
  };
}
