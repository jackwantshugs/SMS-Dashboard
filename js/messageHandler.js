$(document).ready(function(){
var message;
var messages;
$.ajax({
  url: "demoDataMessageList.json",
  async: false,
  success: function(data) {
    messages = data;
  }
});

for (var i = 0; i < messages.length; i++){
    console.log(messages[i]);
    $("#listOfMessages").append("<div class='messageThreadPreview' id='" + messages[i].id + "'> <img src='img/avatar.png' class='messageImage'> <div class='messageContent'> <h5>" + messages[i].initiated_by + "</h5><p>" + messages[i].title + "</p></div></div>"); 
}
    
    
$(".messageThreadPreview").click(function(){
    $(".messages").html("");
    var messageIdToFetch = $(this).attr('id'); 
    var messageIDURL = "http://jakemulley.webfactional.com/api/1.0/thread/" + messageIdToFetch;
    var message;
    $.ajax({
        url: messageIDURL,
        async: false,
        success: function(data) {
            message = data;
        }
    });
    var sentReceived;
    for(var i = 0; i < message[0].messages.length; i++){
        console.log(message[0].messages[i].phone_number);
        if(message[0].messages[i].phone_number == "+44 1404 565051"){
            sentReceived = "Sent";
        }
        else{
            sentReceived = "Received";
        }
        $("#nameNumber").html(message[0].initiated_by);
        $(".messages").append("<div class='message " + sentReceived +"'><p class='messageBody'>" + message[0].messages[i].message + "</p><p class='messageMeta'>" + sentReceived + " at " + message[0].messages[i].created_at + "</p>");
    }
});    

});
