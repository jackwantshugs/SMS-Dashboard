$(document).ready(function(){
    var $inputBox = $('.sendMessageBox');
    Mousetrap.bind('ctrl+enter', function(e) {    
        if(e.target === $inputBox[0]){
            var sentMessage = $inputBox.text();
            //console.log(sentMessage); // Where we can plug in the code to send message to be sent
            $.post( "http://jakemulley.webfactional.com/api/1.0/send", { number: "+447591658146", message: sentMessage } );
            $inputBox.html('');
            var dt = new Date();
            var time = dt.getHours() + ":" + dt.getMinutes();
            $(".messages").append("<div class='message sent'><p class='messageBody'>" + sentMessage + "</p><p class='messageMeta'>" + time + "</p></div");
        }
        else{
            e.preventDefault();
        }    
    });
});