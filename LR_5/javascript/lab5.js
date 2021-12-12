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
            panel.style.maxHeight = 900 +"px";
            panel.style.height = 900 +"px";
        }
        else
        {           
            panel.style.maxHeight = panel.scrollHeight +"px";           
        }
    })
}

$(document).ready(function () {
    $('#many_info').fadeToggle();
    $('h2').hover(function (e) {
        $('h2').addClass("Italic");
    });
    $('#anim-block').click(function (e) {
        $('#anim-block')
            .animate({ top: '50%' }, "slow")
            .animate({ height: '50px', width: '50px' }, "slow")
            .animate({ left: '25px' }, "slow")
            ;

    });
    $('#checkbox_1').click(function (e) {
        $('#many_info').fadeToggle("slow");
    })
});


