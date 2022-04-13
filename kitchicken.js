function msg(){  
     
   }  
function changeText2() { 
    
   var data = JSON.parse(localStorage.getItem("shoppingList"));
   var quant = JSON.parse(localStorage.getItem("quantList"));
   if (data == null) data = [];
   if (quant == null) quant = [];
   
   var itemAdd = document.getElementById('item').value;
   var counter = document.getElementById('quantity').value;
   
   if (itemAdd != "" && counter != "" && counter != 0){
      data.push(itemAdd);
      quant.push(counter);
   }
  // old works 
  var list = document.getElementById("myList"); 
  list.innerHTML ='';
   let x = 0;
   
   data.forEach((item)=>{
     let li = document.createElement("li");
     li.innerText = item + " " + quant[x];
     list.appendChild(li);
     x = x+1
   })
   
   localStorage.setItem("shoppingList", JSON.stringify(data));
   localStorage.setItem("quantList", JSON.stringify(quant));
}
function showList(){
   var data = JSON.parse(localStorage.getItem("shoppingList"));
   var quant = JSON.parse(localStorage.getItem("quantList"));
   var list = document.getElementById("myList"); 
   list.innerHTML ='';
   let x = 0;
   
   data.forEach((item)=>{
     let li = document.createElement("li");
     li.innerText = item + " " + quant[x];
     list.appendChild(li);
     x = x+1
   })
   
}


function clearStorage(){
   localStorage.clear();
   let list = document.getElementById("myList"); 
   while (list.firstChild) {
      list.removeChild(list.firstChild)
   }
   
}
