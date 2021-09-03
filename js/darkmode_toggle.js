$(window).ready(() => {
    const checkbox = document.getElementById('chk');
    const bg = document.getElementById("hero-container");
    const sections = document.querySelectorAll(".sections")
    const overlay = document.getElementById("overlay");
    const header = document.getElementById("hdr");

    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        header.classList.toggle("dark");
        sections.forEach(sections =>
            sections.classList.toggle("dark")
        )
        if (overlay !== null) {
            overlay.style.opacity = "1";
            setTimeout(function() {
                overlay.style.opacity = "0";
                bg.classList.toggle("dark");
            }, 400);
        }
    });



    /*$("card card-subtitle").removeClass("text-muted");*/

});

