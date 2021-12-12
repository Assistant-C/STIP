var btn = document.getElementsByClassName("button");
for(var i=0;i<btn.length;i++)
{
    btn[i].addEventListener("click",function(){

        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        
        if(panel.style.maxHeight)  
        {
           panel.style.maxHeight = null;
        }
        else if(panel.id=== "content")
        {          
            panel.style.maxHeight = panel.scrollHeight + 15 +"px";
            panel.style.height = panel.scrollHeight +15 +"px";
        }
        else
        {           
            panel.style.maxHeight = panel.scrollHeight +"px";           
        }
    })
}
var array = [1, 2, 3, 4, 5]; 

 
    
    function setDelay(elements,y) {
        console.log(y);
    setTimeout(function(){
        generateRainbowText(elements,y);
    }, 700 * y);
    }
window.addEventListener("load", function() {
    var elements = document.getElementsByClassName("rainbowText");
    for (let i = 0; i < elements.length; i++) {
        console.log(elements);     
    for(let y=0;y<elements[i].innerText.length;y++)
    {
         
        setDelay(elements[i],y);
        
       
    }
      
    }
  });
  
  function generateRainbowText(element,y) {
    var text = element.innerText;
    element.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      
      let charElem = document.createElement("span");
      if(i==y)
      {      
      charElem.style.color = "hsl(" + (360 * i / text.length) + ",80%,50%)";
      charElem.style.fontSize = "24px";
    }else{
        charElem.style.color = "black";
    }
      charElem.innerHTML = text[i];
      element.appendChild(charElem);
    }
  }


 
