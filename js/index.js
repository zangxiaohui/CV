$(function(){

    $('#fullpage').fullpage({
		scrollingSpeed: 500,
		css3: true,
		resize: true,
		anchors: ["page1","page2","page3","page4","page5","page6"],
		verticalCentered: true,
		afterRender: function(){			
			$(".home").addClass("home_zoom");
			$(".aside").css({"top":($(".active").height()-$("aside").height())/2});
				
			$(".avatar").addClass("avatar2");
			$("header").animate({opacity:"1"},2000,function(){
				$("#home_info1").fadeIn(1000,function(){
					$(this).next().animate({width:"100%"},1000,function(){
						$("#home_info2").fadeIn(600,function(){
							$(this).next().fadeIn(600,function(){
								$(this).next().fadeIn(600,function(){
									$(this).next().fadeIn(600,function(){
										//$("aside").fadeIn(1000);
									});
								});
							});
						});
					});
				});
			});	
			$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
		},
		afterLoad: function(anchorLink,index){
			if(index==1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			}
			if(index==2){
				$("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
				$("#about .hd h1").after("<div class='title_en'><h2>Education</h2></div>");
				$(".title_en").animate({width:"130px"},1000,function(){
					$(".title_en h2").slideDown(500);
				});
				$("#about_info").animate({width:"100%",marginTop:"0",marginBottom:"0"},1000,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"},1000,function(){
						$("#about_info p").eq(1).animate({bottom:"0"},1000,function(){
							$("#about_info p").eq(2).animate({bottom:"0"},1000,function(){
								$("#about_info p").eq(3).animate({bottom:"0"},1000);
							});
						});
					});
				});	
			}
			if(index==3){
				$("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
				$("#profession h1").after("<div class='title_en'><h2>Professions</h2></div>");
				$(".title_en").animate({width:"130px"},1000,function(){
					$(".title_en h2").slideDown(500);
				});	
				$(".tag").addClass("skill_scale");
			}
			if(index==4){
				$("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
				$("#exp h1").after("<div class='title_en'><h2>Experience</h2></div>");
				$(".title_en").animate({width:"130px"},1000,function(){
					$(".title_en h2").slideDown(500);
				});	
				var i=-1;
				$(".timeline>li").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
                });
				$("#exp_list_to").fadeIn(1000).delay(600).fadeTo(400,0.3);
			}
			if(index==5){
				$("aside a").eq(4).addClass("selected").siblings().removeClass("selected");
				$("#project h1").after("<div class='title_en'><h2>Projects</h2></div>");
				$(".title_en").animate({width:"130px"},1000,function(){
					$(".title_en h2").slideDown(500);
				});	
				var i=-1;
				$(".works-list li").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
				})
			}
			if(index==6){
				$("aside a").eq(5).addClass("selected").siblings().removeClass("selected");
				$("#contact h1").after("<div class='title_en'><h2>Contact me</h2></div>");
				$(".title_en").animate({width:"130px"},1000,function(){
					$(".title_en h2").slideDown(500);
				});	
				var i=-1;
				$(".contact_head").addClass("b_to_t");
				$(".contact-list li").each(function(){
					var $this=$(this);
					if(!$this.hasClass("fade_in")){
						i++;
						setTimeout(function(){
					   $this.addClass("fade_in");
					   },200*i);
					}
				});
			}
		},
		onLeave:function(index , nextIndex, direction){
			if(index==2||index==3||index==4||index==5||index==6){
				$(".title_en").remove();	
			}
		}
	});
});
//侧边导航文字切换
	$("aside a").hover(function(){
		$(this).find("b").fadeToggle(200,"easeInOutCubic");
	})

// 技能明细切换
	$(".skill_list_content b").click(function(){
		$(".skill_int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skill_flag_scale");
			}
		});
		if($(this).siblings(".skill_int").is(":hidden")){
			$(this).siblings(".skill_int").slideDown(600);
			$(this).siblings(".skill_flag").addClass("skill_flag_scale");
		}else{
			$(this).siblings(".skill_int").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
		}
	})
	
//内容适应居中
	var size=$(function(){
		

	});


	$(window).resize(function(){
		
	});