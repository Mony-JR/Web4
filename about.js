const click=document.querySelector("#btn");
const ul=document.querySelector("#ul-id");



click.addEventListener("click",myfun);

function myfun(){
    click.classList.toggle("bar-active")
    ul.classList.toggle("ul")
}
var typed = new Typed('#type', {
    strings: ["សូមស្វាគមន៍មកកាន់កំណែ Web1.0.1 របស់ខ្ញុំ <br>ប្រសិនបើអ្នកចង់សួរខ្ញុំ",
    "Wellcome to my Web 1.0.1 version <br> if what you want to ask me.",
    "សូមស្វាគមន៍មកកាន់កំណែ Web1.0.1 របស់ខ្ញុំ <br>ប្រសិនបើអ្នកចង់សួរខ្ញុំ"],
    typeSpeed: 100,
  });

  var typed= new Typed('.wel',{
    strings:["Wellcome","wellcome","Wellcome","wellcome","Wellcome"],
    typeSpeed:200,
  })