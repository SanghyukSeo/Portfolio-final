$("document").ready(function(){


    var cursor = $(".cursor");
    $(window).mousemove(function(e){

        $(".cursor").css({top : e.clientY-cursor.height()/2,
            left : e.clientX-cursor.width()/2});
    });
    
        
    $(".name h1").hover(function(){
        $(".cursor").css("width", "14vw");
        $(".cursor").css("height", "14vw");
        $(".name h1").css("font-style","italic");
        $(".name h1").css("font-style","italic");
        $(".cursor").css("mix-blend-mode", "difference");
        $(".cursor").css("box-shadow", "0 0 30px rgb(251, 251, 251), inset 0 0 20px  rgba(0, 0, 0,0.4)");
        $(".cursor").css("filter", "blur(.6px)");
    }
        , function(){
            $(".cursor").css("width", "3vw");
            $(".cursor").css("height", "3vw");
            $(".name h1").css("font-style","normal");
            $(".name2 h1").css("color","transparent");
            $(".name2 h1").css("font-style","normal");
            $(".cursor").css("mix-blend-mode", "soft-light");
            $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
            $(".cursor").css("filter", "blur(.6px)");
    });
    

    $(".nav_links").hover(function(){
        $(".cursor").css("width", "5vw");
        $(".cursor").css("height", "5vw");
        $(".cursor").css("filter", "blur(0px)");
        }, function(){
            $(".cursor").css("width", "3vw");
            $(".cursor").css("height", "3vw");
            $(".cursor").css("filter", "blur(.6px)");
      });
    $(".arrow-container").hover(function(){
        $(".cursor").css("width", "12vw");
        $(".cursor").css("height", "12vw");
        $(".cursor").css("background-color","rgb(255, 255, 255);");
        $(".cursor").css("mix-blend-mode", "multiply");
        $(".cursor").css("filter", "blur(.6px)");
        }, function(){
        $(".cursor").css("width", "3vw");
        $(".cursor").css("height", "3vw");
        $(".cursor").css("background-color", "rgb(255, 255, 255)");
        $(".cursor").css("mix-blend-mode", "soft-light");
        $(".cursor").css("filter", "blur(.6px)");
      });


        $(".marquee").hover(function(){
            $(".cursor").css("width", "8vw");
            $(".cursor").css("height", "8vw");
            $(".cursor").css("background-color","rgb(200, 200, 200);");
            $(".cursor").css("mix-blend-mode", "color-dodge");
            $(".cursor").css("box-shadow", "0 0 0 1px rgb(141, 141, 141)");
            $(".cursor").css("filter", "blur(5px)");
            }, function(){
                $(".cursor").css("width", "3vw");
                $(".cursor").css("height", "3vw");
            $(".cursor").css("mix-blend-mode", "soft-light");
            $(".cursor").css("filter", "blur(.6px)");
            $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
          });
          
        $(".poster").hover(function(){
            $(".cursor").css("width", "8vw");
            $(".cursor").css("height", "8vw");
            $(".cursor").css("background-color", "rgb(255, 255, 255)");
            $(".cursor").css("mix-blend-mode", "difference");
            $(".cursor").css("filter", "blur(5px)");
            $(".cursor").css("box-shadow", "0 0 0 1px rgb(141, 141, 141)");
            }, function(){
                $(".cursor").css("width", "3vw");
                $(".cursor").css("height", "3vw");
                $(".cursor").css("background-color", "rgb(255, 255, 255)");
            $(".cursor").css("mix-blend-mode", "soft-light");
            $(".cursor").css("filter", "blur(.6px)");
            $(".cursor").css("filter", "blur(.6px)");
            $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
          });
        $(".arrow-container2").hover(function(){
            $(".cursor").css("width", "10vw");
            $(".cursor").css("height", "10vw");
            $(".cursor").css("background-color","rgb(200, 200, 200);");
            $(".cursor").css("mix-blend-mode", "color-dodge");
            $(".cursor").css("filter", "blur(5px)");
            $(".cursor").css("box-shadow", "0 0 0 1px rgb(141, 141, 141)");
            }, function(){
                $(".cursor").css("background-color", "rgb(255, 255, 255)");
                $(".cursor").css("width", "3vw");
                $(".cursor").css("height", "3vw");
            $(".cursor").css("mix-blend-mode", "soft-light");
            $(".cursor").css("filter", "blur(.6px)");
            $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
          });

          
        $(".exploded").hover(function(){
            $(".cursor").css("box-shadow", "0 0 0 0");
            $(".cursor").css("filter", "blur(5px)");
            $(".cursor").css("mix-blend-mode", "screen");
            $(".cursor").css("background-color", "rgba(200,200,200,.9)");
            }, function(){
                $(".cursor").css("mix-blend-mode", "soft-light");
                $(".cursor").css("background-color", "rgb(255,255,255);");
                $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
                $(".cursor").css("filter", "blur(.6px)");
          });
          
        $(".fooda").hover(function(){
            $(".cursor").css("box-shadow", "0 0 0 0");
            $(".cursor").css("filter", "blur(5px)");
            $(".cursor").css("mix-blend-mode", "screen");
            $(".cursor").css("background-color", "rgba(200,200,200,.9)");
            }, function(){
                $(".cursor").css("mix-blend-mode", "soft-light");
                $(".cursor").css("background-color", "rgb(255,255,255);");
                $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
                $(".cursor").css("filter", "blur(.6px)");
          });

        $(".block").hover(function(){
            $(".cursor").css("box-shadow", "0 0 0 0");
            $(".cursor").css("filter", "blur(5px)");
            $(".cursor").css("mix-blend-mode", "screen");
            $(".cursor").css("background-color", "rgba(150,150,150,.9)");
            }, function(){
                $(".cursor").css("mix-blend-mode", "soft-light");
                $(".cursor").css("background-color", "rgb(255,255,255);");
                $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
                $(".cursor").css("filter", "blur(.6px)");
          });


        $(".atandt").hover(function(){
            $(".cursor").css("mix-blend-mode", "screen");
            $(".cursor").css("background-color", "rgba(10,106,249,.9)");
            $(".cursor").css("box-shadow", "0 0 0 0");
            $(".cursor").css("filter", "blur(5px)");
            }, function(){
                $(".cursor").css("mix-blend-mode", "soft-light");
                $(".cursor").css("background-color", "rgb(255,255,255);");
                $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
                $(".cursor").css("filter", "blur(.6px)");
          });
          
        $(".nemo").hover(function(){            
            $(".cursor").css("mix-blend-mode", "screen");
            $(".cursor").css("background-color", "rgba(127,255,212,1)");
            $(".cursor").css("box-shadow", "0 0 0 0");
            $(".cursor").css("filter", "blur(5px)");
            }, function(){
                $(".cursor").css("mix-blend-mode", "soft-light");
                $(".cursor").css("background-color", "rgb(255, 255, 255)");
                $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
                $(".cursor").css("filter", "blur(.6px)");
          });
          
        $(".aesop").hover(function(){
            $(".cursor").css("background-color", "rgb(85,85,85);");
            $(".cursor").css("filter", "blur(5px)");
            }, function(){
                $(".cursor").css("background-color", "rgb(255, 255, 255)");
                $(".cursor").css("filter", "blur(.6px)");
          });
        $(".pencil-sharpener").hover(function(){
            $(".cursor").css("mix-blend-mode", "screen");
            $(".cursor").css("background-color", "rgba(240,109,15,.9);");
            $(".cursor").css("box-shadow", "0 0 0 0");
            $(".cursor").css("filter", "blur(5px)");
            }, function(){
                $(".cursor").css("mix-blend-mode", "soft-light");
                $(".cursor").css("background-color", "rgb(255,255,255);");
                $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
                $(".cursor").css("filter", "blur(.6px)");
          });
          $(".minus").hover(function(){
            $(".cursor").css("mix-blend-mode", "screen");
            $(".cursor").css("background-color", "rgba(240,109,15,.9);");
            $(".cursor").css("box-shadow", "0 0 0 0");
            $(".cursor").css("filter", "blur(5px)");
              }, function(){
                $(".cursor").css("mix-blend-mode", "soft-light");
                $(".cursor").css("background-color", "rgb(255,255,255);");
                $(".cursor").css("box-shadow", "0 0 1px rgb(251, 251, 251), inset 0 0 10px  rgba(0, 0, 0, 0.3)");
                $(".cursor").css("filter", "blur(.6px)");
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