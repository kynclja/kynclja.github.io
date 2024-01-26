let isSetBiography = false;
let pos = $(window).scrollTop();

$(document).ready(function() {
    let height = screen.height;
    let maxHeight = $(document).height();
    let width = $(document).width();
    let clickedOnNavBarIcon = false;

    if (isPC() == true) {
        let newHeight = height - 100;
        $("#webStart").height(newHeight);
    }
    else {
        $("#webStart").height(height);
    }

    if (width <= 1185 || isPC() == false) {
        $(".navBarContent").addClass("invisible");
        $("#navBarIcon").removeClass("invisible");
        $("ul.navBar").css("justify-content", "flex-end");
        $("#navBarIcon").css("padding-right", "20px");
    }
    else {
        $(".navBarContent").removeClass("invisible");
        $("#navBarIcon").addClass("invisible");
        $("ul.navBar").css("justify-content", "center");
        $("#navBarIcon").css("padding", "0px");
    }

    if (width > 500) {
        let margin = $(".contentPart.myExpiriencesFlex div").width() - $(".contentPart.aboutMe").width() - 20;
        console.log(margin);
        $(".contentPart.aboutMe").css("margin-right", margin);
    }
    if (width <= 500) {
        let margin = "13%";
        console.log(margin);
        $(".contentPart.aboutMe").css("margin-right", margin);
    }
    if (width <= 420) {
        let margin = "10%";
        console.log(margin);
        $(".contentPart.aboutMe").css("margin-right", margin);
    }
    if (width <= 400) {
        let margin = "5%";
        console.log(margin);
        $(".contentPart.aboutMe").css("margin-right", margin);
    }
    if (width <= 360) {
        let margin = 0;
        console.log(margin);
        $(".contentPart.aboutMe").css("margin-right", margin);
    }


    $(window).scroll(function() {
        pos = $(window).scrollTop();
        if (pos >= 0.25 * maxHeight) {
            $("#upButton").addClass("visible");
            $("#upButton").removeClass("invisible");
        }
        else {
            $("#upButton").removeClass("visible");
            $("#upButton").addClass("invisible");
        }
    })
    $(window).on("resize", function() {
        let width = $(window).width();
        if (width <= 1185 || isPC() == false) {
            $(".navBarContent").addClass("invisible");
            $("#navBarIcon").removeClass("invisible");
            $("#navBarIcon").css("padding", "20px");
            $("ul.navBar").css("justify-content", "flex-end");
        }
        else if (width > 1185 && isPC() == true) {
            $(".navBarContent").removeClass("invisible");
            $("#navBarIcon").addClass("invisible");
            $("#navBarIcon").css("padding", "0px");
            $("ul.navBar").css("flex-direction", "row");
            $("ul.navBar").css("justify-content", "center");
            $("ul.navBar").css("align-items", "normal");
        }
        if (width > 500) {
            let margin = $(".contentPart.myExpiriencesFlex div").width() - $(".contentPart.aboutMe").width() - 20;
            console.log(margin);
            $(".contentPart.aboutMe").css("margin-right", margin);
        }
        if (width <= 500) {
            let margin = "13%";
            console.log(margin);
            $(".contentPart.aboutMe").css("margin-right", margin);
        }
        if (width <= 420) {
            let margin = "10%";
            console.log(margin);
            $(".contentPart.aboutMe").css("margin-right", margin);
        }
        if (width <= 400) {
            let margin = "5%";
            console.log(margin);
            $(".contentPart.aboutMe").css("margin-right", margin);
        }
        if (width <= 360) {
            let margin = 0;
            console.log(margin);
            $(".contentPart.aboutMe").css("margin-right", margin);
        }
    });

    //--------------------------------------------------on click--------------------------------------------------
    $("*").on("click", function(event) {
        let target = $(event.target);
        if (isSetBiography == true && target.is('.biography') == false && target.is('.downloadMenu') == false) {
            event.preventDefault();
            $("#downloadMenu").addClass("invisible");
            $("#downloadMenu").removeClass("visible");
            isSetBiography = false;
        }
        if (clickedOnNavBarIcon == true && target.is('#navBarIconBtn') == false && target.is('#aboutMe') == false && target.is('#myExpiriences') == false && target.is('#myProjects') == false) {
            event.preventDefault();
            $(".navBarContent").addClass("invisible");
            clickedOnNavBarIcon = false;
        }
    });
    $(".biography").on("click", function(event) {
        event.preventDefault();
        $("#downloadMenu").addClass("visible");
        $("#downloadMenu").removeClass("invisible");
        isSetBiography = true;
    });
    $("#upButton").on("click", function(event) {
        event.preventDefault();
        scrollTo(0, 0);
    });
    $("#aboutMeBtn").on("click", function(event) {
        event.preventDefault();
        document.getElementById("aboutMe").scrollIntoView();
    });
    $("#myExpiriencesBtn").on("click", function(event) {
        event.preventDefault();
        document.getElementById("myExpiriences").scrollIntoView();
    });
    $("#myProjectsBtn").on("click", function(event) {
        event.preventDefault();
        document.getElementById("myProjects").scrollIntoView();
    });
    $("#navBarIconBtn").on("click", function(event) {
        event.preventDefault();
        $(".navBarContent").removeClass("invisible");
        $("ul.navBar").css("flex-direction", "column");
        $("ul.navBar").css("justify-content", "center");
        $("ul.navBar").css("align-items", "flex-end");
        clickedOnNavBarIcon = true;
    });

    //--------------------------------------------------set variables--------------------------------------------------

    $("#navBarIcon").css("line-height", 1);
    $("div.navBar").height($("#navBarUl").height());
    $("#aboutMe").height($(".navBar").height());
    $("#myExpiriences").height($(".navBar").height());
    $("#myProjects").height($(".navBar").height());
});
function isPC() {
    // requirements to run
    // <script src="https://cdn.jsdelivr.net/npm/mobile-detect@1.4.5/mobile-detect.min.js"></script> 
    var isPC = false;
    try {
        var md = new MobileDetect(window.navigator.userAgent);
        if (md.phone() == null) {
            isPC = true;
        }
        else {
            isPC = false;
        }
    } catch (error) {
        console.error("something went wrong chek if all requirements are used right");
        isPC = false;
    }
    return isPC;
}
