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
    $('#start_anim').click(function (e) {
        $('#plane__text')
            .css( 'text-transform',' lowercase')
            .animate({ left: '200px' }, "slow")
            .animate({ top: '250px' }, "slow",function () {
                $('#plane__text').css('font-weight', 'bold');})
            .animate({ left: '180px' }, "slow")
            .animate({ top: '280px' }, "slow",function () {
                $('#plane__text').css('text-decoration', 'underline');})
            .fadeToggle("slow")
           ;
            
    });
});


