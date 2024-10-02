

const loc= document.querySelector(".loc");

const wet=document.querySelector(".wet");
const spd= document.querySelector(".spd");

async function weather(){
    try{
    let resolve = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bhilai?key=2PHVH3TVPZLUDSPN9BHVGNKVC");
    let json =await resolve.json();
    console.log(json);
    loc.textContent +=json.address;
    wet.textContent +=json.currentConditions.conditions;
    spd.textContent +=json.address;
}catch(err){
    console.log("Error fetching y");
}
}
weather()








const fic = false;
const barTop = document.querySelector('#bar_op');

const topOffset = barTop.offsetTop; // Get the initial offset position of the .bar_top

window.addEventListener('scroll', function() {
        if (window.scrollY > topOffset) {
            barTop.classList.add('fixed'); // Add the fixed class when scrolled past the topOffset
        } else {
            
            barTop.classList.remove('fixed'); // Remove the fixed class when above topOffset
        }
});

const a = document.querySelectorAll("a");
let lena= a.length;
for(let i=1;i<=lena;i++){
       a[i-1].addEventListener("click",function(){    
            const cont=["HOME","CONTACT","JOURNEY"];
            console.log(`.${cont[i-1]}`);
            for(let m=1;m<=lena;m++){
            if(m==i){
                document.querySelector(`.${cont[m-1]}`).style.display = "block";
                document.querySelector(`.${cont[m-1]}b`).style.border="solid white";
                
               }else{   
                document.querySelector(`.${cont[m-1]}`).style.display = "none"
                document.querySelector(`.${cont[m-1]}b`).style.border="";
               }
            }
        })
     
}

onmousemove=function(e){
    const ms = document.querySelector(".top");    
    const ms2 = document.querySelector(".bottom");    
    ms.style.backgroundPosition =`${e.clientX/1000}% ${e.clientY/10}%`;
    ms2.style.backgroundPosition =`${e.clientX/1000}% ${e.clientY/10}%`;
}
