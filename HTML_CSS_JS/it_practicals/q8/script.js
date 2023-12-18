$(document).ready(function(){
    $("#restyle").click(function(){
        $("#header").css("text-align","center" );
        $("#course-img").attr({
            "src" : "https://spencerpauly.com/content/images/2022/07/header.jpeg",

        }).css({
            "border":"3px solid coral",
            "border-radius":"10px",
            "margin":"25px"
        });
        $(".header-2").css("color","coral");
        $(".para").css({
            "margin-top":"25px",
            "margin-bottom":"25px",
            "background-color":"#d6d6d6",
            "box-sizing":"box-border",
            "padding":"15px"
        });
        $("#restyle").css("background-color","#1a1a1a !important")
        
    })

})