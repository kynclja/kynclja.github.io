const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            $(entry.target).addClass("show");
        }
        // else{
        //     $(entry.target).removeClass("show");
        // }
    });
});

const hiddenElem = document.querySelectorAll(".hidden");
hiddenElem.forEach((el) => observer.observe(el));
