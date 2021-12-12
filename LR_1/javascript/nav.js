var btn = document.getElementsByClassName("button");
for(var i=0;i<btn.length;i++)
{      
       
    btn[i].addEventListener("click",function(){
        for(var i=0;i<btn.length;i++)
        { 
            btn[i].classList.remove("active");
        } 
        this.classList.toggle("active");
             
    })
    
}
