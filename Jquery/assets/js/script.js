$(document).ready(function () {
    // console.log("sdsdsds");

    //    let elem = document.querySelector("h1");
    //    console.log(elem);

    // let elem = $("h1");
    // console.log(elem);
    // console.log(elem.text());
    // console.log(elem.text("Sagollar").text());
    // console.log(elem.html());
    // console.log(elem.text("<span>salam</span>"));
    // console.log(elem.html("<span>salam</span>"));
    //console.log(elem.html("salam").text());

    // $("button").click(function () {
    //     // console.log("test");
    //     //console.log(this);
    //     // $(this).css("background-color","red");

    // })

    //     $(".check").click(function () {
    //         // console.log("test");
    //         //console.log(this);
    //         $(this).css("background-color", "red")
    //     })

    //     $(".add").click(function () {
    //         // console.log("test");
    //         //console.log(this);
    //          $(this).css("background-color","magenta");
    //          $(this).next().css("background-color","magenta");
    // })

    // $(".content").hide();

    // $(".hide").click(function () {

    //     $(".content").slideUp(2000,function(){
    //         console.log("salam");
    //     });
      
    // })

    // $(".show").click(function () {

    //     $(".content").show(2000, function () {
    //         $(this).css("background-color", "blue");
    //     })


    // })

    // $(".toggle").click(function () {

    //     $(".content").toggle(2000);
    // })

    // $(".show").click(function () {

    //     $(".content").slideDown(2000, function () {
    //         $(this).css("background-color", "blue");
    //     });
    // })

    // $(".toggle").click(function () {

    //     $(".content").slideToggle(500);
    // })




    //SIDEBAR

    $(".open").click(function(){
        $(".open").addClass("d-none")
        $(".close").removeClass("d-none")
        $(".sidebar").css("transform","translate(0px)")
    })

    $(".close").click(function(){
        $(".open").removeClass("d-none")
        $(".close").addClass("d-none")
        $(".sidebar").css("transform","translate(-250px)")
    })



    $("li").each(function(){
        $("li").click(function(){
            $(".active").removeClass("active")
            $(this).addClass("active")

            $("p").each(function(){
                if($(this).attr("data-id") == $(".active").attr("data-id")){
                    $("p").addClass("d-none")
                    $(this).removeClass("d-none")
                }
            })
        })
    })


})