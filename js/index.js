// Heart icon Feature
let count=0
const heartIcons=document.getElementsByClassName("heart-icon")
const availableHearts=document.getElementById("available-hearts")

for(const heartIcon of heartIcons){
  heartIcon.addEventListener('click',function(){
  count++;
  availableHearts.innerText=count;
})
}

// Call Button Feature
let coins=parseInt(document.getElementById("available-coins").innerText)
const callButtons=document.getElementsByClassName("call-button")
const availableCoins=document.getElementById("available-coins")
for(const callButton of callButtons){
  callButton.addEventListener("click",function(){
      const serviceName=callButton.parentNode.parentNode.children[1].innerText
      const serviceNumber=callButton.parentNode.parentNode.children[3].innerText
      if(coins<20){
        alert("You do not have sufficient coins!")
        return;
      }
      else{
        alert("Calling "+serviceName+" "+serviceNumber+"...")
        coins-=20;
        availableCoins.innerText=coins;
       
        // History Feature
        const parentContainer=document.getElementById("callHistory-Container")
        const newDiv=document.createElement("div")
        newDiv.innerHTML=`        <div class="flex justify-between bg-[#fafafa] p-4 rounded-lg mx-5 mb-5">
          <div>
            <h3 class="font-semibold">${serviceName}</h3>
             <p class="text-gray-600">${serviceNumber}</p>
          </div>
          <p class="my-auto ">1:36:58 AM</p>
        </div>`
        parentContainer.appendChild(newDiv);
      }
  })
}

// Clear Button Feature
document.getElementById("clear-btn").addEventListener('click',function(){
    document.getElementById("callHistory-Container").innerHTML="";
})