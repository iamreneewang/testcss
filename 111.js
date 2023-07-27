
$(".option").on("click",function(){

    $(".option").removeClass("active");

    $(this).addClass("active");

    let pattern=$(this).find("img").attr("src");
    if(!pattern){

        $(".shirt-overlay").fadeOut();
    }else{

        $(".shirt-overlay").css("display","none");

        $(".shirt-overlay-pattern").css("background-image","url("+pattern+")");

        $(".shirt-overlay").fadeIn();
    }
})