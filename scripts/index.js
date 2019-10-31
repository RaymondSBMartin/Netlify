$( document ).ready(function() {
                   
$( document ).on('change', '.pet', enableOther); 


 function enableOther () { 
    var pet = $(".pet").val();
   
   if (pet == "other") {
     $(".other").removeAttr("disabled"); 
   }
   else{
     $(".other").prop('disabled')
   }
  }
});
                    