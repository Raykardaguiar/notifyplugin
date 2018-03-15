//$.fn.notify({"type": "success", "title": "Salvo com Sucesso", "message": "alterações realizadas com sucesso"})

(function( $ ){

  $.fn.notify = function(method) {

    /* MOUNT THE STRUCTURE */ 
    var notifyBody = $("<div></div>").attr("id", "notify");

    $("body").append(notifyBody);
    var message = $("<div></div>").attr("class", "notify-title");

    notifyBody.append(message);

    notifyIcon = $("<div><i class='fa' aria-hidden='true'></i></div>").addClass("nicon");
    message.prepend(notifyIcon);

    var notifySlideOne = $('<div></div>').addClass("slide-one");

    notifyBody.append(notifySlideOne);

    var spanNotify = $('<span></span>')
    var titleNotify = $('<div></div>').addClass("notify-title-text");
    titleNotify.append(spanNotify)

    message.append(titleNotify); 
        
    var notifySlideTwo = $('<div></div> ').addClass("slide-two");
    notifyBody.append(notifySlideTwo);
     /*END MOUNT THE STRUCTURE */ 


    /* RECEIVE THE METHODS*/
    var nType = method.type;
    var nTitle = method.title;
    var nMessage = method.message;
     /* RECEIVE THE METHODS*/

    var nIcone = $("#notify .fa")
    spanNotify.append(nTitle)
    /* SUCCESS */
    if(nType == "success"){

      $(".slide-one").addClass("notify-success");
      $(".slide-two").addClass("notify-success");
   
      nIcone.addClass("far fa-check-circle");
  
    } 
    /* END SUCCESS */

     /* DANGER */
    else if(nType == "danger" ){

      nIcone.addClass("fa-exclamation-circle");
      $(".slide-one").addClass("notify-danger");
      $(".slide-two").addClass("notify-danger");

    } 
     /* END DANGER */

    /* WARN */
    else if(nType == "warn" ){

      nIcone.addClass("fa-info-circle");
      $(".slide-one").addClass("notify-warn");
      $(".slide-two").addClass("notify-warn");

    } 
    /*END WARN */

    else {

        $.error(' O Metodo ' +  nType + ' inexistente')

    }

   setTimeout(function(){ 

    $("#notify").remove()
    $(".nicon").remove()


    }, 2000);

  };
 
})( jQuery );