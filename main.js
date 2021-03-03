let expanded = false;

$(document).ready(function(){



   

    $('.infoSection').click(function(){
        
        $(this).siblings().slideToggle('fast');
    });



    $('#play').click(function () {
        $("#videoOverlay").fadeToggle('slow');
        
        if($('#videoOverlay').is(':visible')){
        
            $('iframe').attr('src', $('iframe').attr('src'));
       
        }

        if($(this).hasClass('overlaying')){
            $(this).attr('src', 'images/close.png');
        } else {
            $(this).attr('src', 'images/play.png');
        }

        $(this).toggleClass('overlaying');
       
    });

    $('#leaveVoicemail').click(function () {
        $("#voicemailOverlay").fadeIn('fast');
    });

    $('#voicemailOverlay').click(function () {
        $("#voicemailOverlay").fadeOut('fast');
    });


    $('.overview').click(function (){
        let posL;

        $(this).siblings('.scrollableContent').animate({ left: '74vw' }, 500);
        
    })

    $('.arrowLeft').click(function () {
        $(this).siblings('.scrollableContent').animate({ left: '1vw' }, 500)
    })

    $('.arrowRight').click(function () {
        $(this).parent('.scrollableContent').animate({ left: '74vw' }, 500);
    })


    $('.voicemailPlay').click(function(){
        let clickedTextElem = $(this);
        let clickedAudioElem = $(this).siblings('audio')[0];

        if(isPlaying(clickedAudioElem)){
            clickedAudioElem.pause();
            clickedAudioElem.currentTime = 0;
            clickedTextElem.html('Listen to the Voicemail')
            clickedTextElem.toggleClass('playing')

        } else {
            clickedAudioElem.play();
            clickedTextElem.html('Stop Voicemail')
            clickedTextElem.toggleClass('playing')
        }


       

    })

  

})



function isPlaying(audelem) {
   return!audelem.paused;
}


function audioEnded(v){
    console.log($('.voicemailPlay').html());
    $(v).siblings('.voicemailPlay').html('Listen to the Voicemail');
    $(v).siblings('.voicemailPlay').toggleClass('playing');
    
}