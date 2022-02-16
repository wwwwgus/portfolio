$('.wrap').fullpage({
    navigation:true,
    anchors:['1page' , '2page' , '3page' , '4page' , '5page'],
    afterLoad:function(){
        $('#video').trigger('play');
    }
});



$('.img1').colorbox({rel:'img1'});
// rel: - 묶어서 보여줌
$('.youtube').colorbox({iframe:true , innerWidth:1200 , innerHeight:720 , rel:'img1'})
