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
var menu = document.getElementById("MenuBtn");
var content = document.getElementById("content");


menu.addEventListener("click",function(){
    this.classList.toggle("active");
    var nav = this.nextElementSibling;
    if(nav.style.display==="block"){
        content.style.maxHeight = 115 +"px";
        nav.style.display="none";
        }
    else{
        nav.style.display="block";
        content.style.maxHeight = content.scrollHeight + 110 +"px";
        content.style.height = content.scrollHeight + 110 +"px";
        }
    })

var navbar = document.getElementById("nav").querySelectorAll('li');
for(var i=0;i<navbar.length;i++)
{
    navbar[i].addEventListener("mouseover",function(){
        this.classList.toggle("active");
        this.style.cursor="pointer";    
        if(this.firstElementChild!=null)
        {
            this.firstElementChild.style.display = "block";
        }
    })
    navbar[i].addEventListener('mouseout',function(){            
        this.classList.toggle("active");
        if(this.firstElementChild!=null)
        {
            this.firstElementChild.style.display = "none";
        }
    })
}
