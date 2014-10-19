$(document).ready(function(){
var message;
var messages = [{id:"1",title:"Lorem Ipsum",initiated_by:"+447903236073",created_at:"2014-10-18 14:49:01",updated_at:"2014-10-18 14:49:01",deleted_at:null},{id:"2",title:"Lorem Ipsum",initiated_by:"+447903236073",created_at:"2014-10-18 14:49:01",updated_at:"2014-10-18 14:49:01",deleted_at:null},{id:"3",title:"Lorem Ipsum",initiated_by:"+447903236073",created_at:"2014-10-18 14:49:01",updated_at:"2014-10-18 14:49:01",deleted_at:null},{id:"4",title:"Lorem Ipsum",initiated_by:"+447903236073",created_at:"2014-10-18 14:49:01",updated_at:"2014-10-18 14:49:01",deleted_at:null},{id:"5",title:"Lorem Ipsum",initiated_by:"+447903236073",created_at:"2014-10-18 14:49:01",updated_at:"2014-10-18 14:49:01",deleted_at:null}];

for (var i = 0; i < messages.length; i++){
    console.log(messages[i]);
    $("#listOfMessages").append("<div class='messageThreadPreview' id='" + messages[i].id + "'> <img src='img/avatar.png' class='messageImage'> <div class='messageContent'> <h5>" + messages[i].initiated_by + "</h5><p>" + messages[i].title + "</p></div></div>"); 
}
    
    
$(".messageThreadPreview").click(function(){
    $(".messages").html("");
    var messageIdToFetch = $(this).attr('id'); 
    console.log("Message ID to fetch = " + messageIdToFetch);
    var message = [{"id":"1","title":"Lorem Ipsum","initiated_by":"+447903236073","created_at":"2014-10-18 14:49:01","updated_at":"2014-10-18 14:49:01","deleted_at":null,"messages":[{"id":"1","twilio_id":"0","thread_id":"1","phone_number":"+44 1404 565051","detected_language":"EN","message":"Singlesriracha. Mlkshk gastropub Odd Future selvage Cosby sweater Etsy, flannel deep v.","created_at":"2014-10-18 14:49:01","updated_at":"2014-10-18 14:49:01","deleted_at":null},{"id":"2","twilio_id":"0","thread_id":"1","phone_number":"+44 790 323 6073","detected_language":"EN","message":"Cliche blog Tonx yr drinking vinegar selfies. Blue Bottle literally butcher chillwave Truffaut.","created_at":"2014-10-18 14:49:01","updated_at":"2014-10-18 14:49:01","deleted_at":null}]}];
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
