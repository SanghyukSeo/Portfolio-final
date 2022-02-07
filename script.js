$("document").ready(function(){


    var cursor = $(".cursor");
    $(window).mousemove(function(e){
        $(".cursor").css({top : e.clientY-cursor.height()/2,
            left : e.clientX-cursor.width()/2});
    });
    
    let x=0;
    $(".arrow").click(function(){
        if(x%2==0){
        $(this).css({
            "transition-duration":".3s","transform":"rotate(90deg)"})

    }else{
        $(this).css({
            "transition-duration":".5s","transform":"rotate(0deg)"})
    }
    x++;
    });


    $(".grid:nth-child(1)").hover(function(){
        $('#text').html("&amp; Exploded view / Desk fan / 2021  &nbsp&nbsp&nbsp   &amp; Exploded view / Desk fan / 2021   &nbsp&nbsp&nbsp   &amp; Exploded view / Desk fan / 2021");
        });
    $(".grid:nth-child(2)").hover(function(){
        $('#text').html("&amp; Fooda / For restaurant / UX / 2021  &nbsp&nbsp&nbsp  &amp; Fooda / For restaurant / UX / 2021  &nbsp&nbsp&nbsp &amp; Fooda / For restaurant / UX / 2021  &nbsp&nbsp&nbsp  ");
        });
    $(".grid:nth-child(3)").hover(function(){
        $('#text').html("&amp; Nemo / Care-class robot / for children / 2019  &nbsp&nbsp&nbsp &amp; Nemo / Care-class robot / for children / 2019  &nbsp&nbsp&nbsp &amp; Nemo / Care-class robot ");
        });
    $(".grid:nth-child(4)").hover(function(){
        $('#text').html("&amp; Metal block / Handcraft / 2021  &nbsp&nbsp&nbsp  &amp; Metal block / Handcraft / 2021  &nbsp&nbsp&nbsp  &amp; Metal block / Handcraft / 2021  &nbsp&nbsp&nbsp   ");
        });
    $(".grid:nth-child(5)").hover(function(){
        $('#text').html("&amp; P5. Js / Digital interaction / 2021  &nbsp&nbsp&nbsp   &amp; P5. Js / Digital interaction / 2021  &nbsp&nbsp&nbsp   &amp; P5. Js / Digital interaction / 2021  &nbsp&nbsp&nbsp   ");
        });
    $(".grid:nth-child(6)").hover(function(){
       // $('.arrow-container2').css("background-color", "#6bb3ff;");
        $('#text').html("&amp; AT&T fidget toy / Connection project / 2021  &nbsp&nbsp&nbsp   &amp; AT&T fidget toy / Connection project / 2021  &nbsp&nbsp&nbsp  &amp; AT&T fidget toy / Connection project ");
            });
    $(".grid:nth-child(7)").hover(function(){
        $('.arrow-container2').css("background-color", "white");
        $('#text').html("&amp; What is ID? / Poster / Rhino 3D / 2021  &nbsp&nbsp&nbsp  &amp; What is ID? / Poster / Rhino 3D / 2021  &nbsp&nbsp&nbsp &amp; What is ID? / Poster / Rhino 3D / 2021  &nbsp&nbsp&nbsp   ");
            }); 
    $(".grid:nth-child(8)").hover(function(){
        $('#text').html("Marquee &nbsp&nbsp Marquee &nbsp&nbsp Marquee &nbsp&nbsp Marquee &nbsp&nbsp Marquee &nbsp&nbsp Marquee &nbsp&nbsp Marquee &nbsp&nbsp Marquee &nbsp&nbspMarquee &nbsp&nbspMarquee &nbsp&nbspMarquee &nbsp&nbsp");
            });
    $(".grid:nth-child(9)").hover(function(){
       // $('.arrow-container2').css("background-color", "#c6c6c6;");
        $('#text').html("&amp; Pencil sharpener / Solidworks design / 2021  &nbsp&nbsp&nbsp  &amp; Pencil sharpener / Solidworks design / 2021  &nbsp&nbsp&nbsp   &amp; Pencil sharpener / Solidworks ");
            });
    $(".grid:nth-child(10)").hover(function(){
        //$('.arrow-container2').css("background-color", "white");
        $('#text').html("&amp; MINUS / One-hand pepper grinder / 2021  &nbsp&nbsp&nbsp   &amp; MINUS / One-hand pepper grinder / 2021  &nbsp&nbsp&nbsp   &amp; MINUS / One-hand pepper grinder / 2021  &nbsp&nbsp&nbsp   ");
            });
    $(".grid:nth-child(11)").hover(function(){
        $('#text').html("Arrow &nbsp&nbsp  Arrow &nbsp&nbsp Arrow &nbsp&nbsp&amp; Arrow &nbsp&nbsp  Arrow &nbsp&nbsp  Arrow &nbsp&nbsp Arrow &nbsp&nbsp Arrow &nbsp&nbsp Arrow &nbsp&nbsp Arrow &nbsp&nbsp Arrow &nbsp&nbsp");
            });
    $(".grid:nth-child(12)").hover(function(){
       // $('.arrow-container2').css("background-color", "#648fbd;");
        $('#text').html("&amp; Cruise terminal Miami / Space analysis / 2019  &nbsp&nbsp&nbsp &amp; Cruise terminal Miami / Space analysis / 2019  &nbsp&nbsp&nbsp&amp; Cruise terminal Miami / ");
            });
    $(".grid:nth-child(15)").hover(function(){
        //$('.arrow-container2').css("background-color", "black");
        $('#text').html("&amp; Exploded view / Desk fan / 2021  &nbsp&nbsp&nbsp   ");
            });
    $(".grid:nth-child(16)").hover(function(){
        //$('.arrow-container2').css("background-color", "#e6d081;");
        $('#text').html("&amp; Exploded view / Desk fan / 2021  &nbsp&nbsp&nbsp   ");
            });


    
    $(".arrow-container2").hover(
        
        function(){
            $('.arrow-container2').css({"background-color": "transparent"});
        },

        function(e){
            $('.arrow-container2').css("background-color", "transparent");
        }
    )
        $(".arrow-container2").change(function(e){
        $('.arrow-container2').trigger('mouseleave');
    });

    $(".grid").mousemove(

        function(e) {
        var arrow2 = $(".arrow2");
        var x = (arrow2.offset().left) + (arrow2.width() / 2);
        var y = (arrow2.offset().top) + (arrow2.height() / 2);
        var rad = Math.atan2(e.pageX - x, e.pageY - y);
        var rot = (rad * (180 / Math.PI) * -1) + 90;
        
        arrow2.css({
          'transform': 'rotate(' + rot + 'deg)'
        });
    });


})