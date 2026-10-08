const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const form=document.getElementById("trialForm");
form?.addEventListener("submit",e=>{
  e.preventDefault();
  const name=new FormData(form).get("student");
  alert(`Thank you, ${name}! Your free-trial request has been captured in this demo. Connect the form to your email/CRM/WhatsApp for real submissions.`);
  form.reset();
});

const modal=document.getElementById("portalModal");
const title=document.getElementById("modalTitle");
const text=document.getElementById("modalText");
const portalCopy={
 student:["Student Portal","Access classes, assignments, attendance, progress and learning resources."],
 coach:["Coach Portal","Manage students, sessions, assignments, notes and progress reports."],
 admin:["Admin Portal","Manage academy operations, users, courses, payments and analytics."]
};
document.querySelectorAll(".portal").forEach(btn=>btn.addEventListener("click",()=>{
 const data=portalCopy[btn.dataset.portal]; title.textContent=data[0]; text.textContent=data[1]; modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
}));
document.querySelector(".close-modal")?.addEventListener("click",()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")});
modal?.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("open")});
