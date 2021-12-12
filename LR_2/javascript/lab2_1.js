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

var img = document.getElementById("picture");
img.addEventListener("mouseover",function(){
    this.style.transform = "scale(2.5)";

})
img.addEventListener("mouseout",function(){
    this.style.transform = "scale(1)";

})