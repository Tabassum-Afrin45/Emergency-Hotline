let count=0
const heartIcons=document.getElementsByClassName("heart-icon")
const availableHearts=document.getElementById("available-hearts")

for(const heartIcon of heartIcons){
  heartIcon.addEventListener('click',function(){
  count++;
  availableHearts.innerText=count;
})
}