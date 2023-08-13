const btn=document.querySelector("#btn");
const ul=document.querySelector("#ul-id");


btn.addEventListener("click",myfun);

function myfun(){
    btn.classList.toggle("btn_run")
    ul.classList.toggle("ul_run")
}

var typed = new Typed('#type', {
    strings: ["ក្លែយជាសមាជិក សូមចុច Sub", "មានភាពងាយស្រូួលសូមមេត្តា",
    "ក្លែយជាសមាជិក សូមចុច Sub", "មានភាពងាយស្រូួលសូមមេត្តា"],
    typeSpeed: 100,
  });
