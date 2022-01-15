$("#name").keyup(function(e){
  e.preventDefault();
  
  var name=$("#name").val().length;
  console.log(name);
  var residence=$.trim($(".selected").text());
 /// var radio_val=$('input[type=radio][name=radio]').val();
 
console.log(residence);
//console.log(radio_val);
  var step1_completed = 0;
   if ($("#private").prop("checked") || $("#commercial").prop("checked")) {
   // do something
   console.log('test');
   step1_completed= step1_completed + 1;
}
  if(name > 0){
  
  step1_completed= step1_completed + 1;
  }
  
  if(residence == 'Place of residence*'){
  
  
  }
  else{
  step1_completed= step1_completed + 1;
  
  }
  
  
  if(step1_completed == 0){
  $("#progressbar-div").css("width","10%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step1_completed == 1){
  $("#progressbar-div").css("width","17%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step1_completed == 2){
  $("#progressbar-div").css("width","24%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');
//$("#step1").hide();
 // $("#step2").show();
  //$("#step3").hide();
  }
  
  if(step1_completed == 3){
  $("#progressbar-div").css("width","30%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');
$("#step1").hide();
  $("#step2").show();
  $("#step3").hide();
  }
  
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  $(".radio").click(function(e){
  e.preventDefault();
  
  var name=$("#name").val().length;
  console.log(name);
  var residence=$.trim($(".selected").text());
 /// var radio_val=$('input[type=radio][name=radio]').val();
 
console.log(residence);
//console.log(radio_val);
  var step1_completed = 0;
   if ($("#private").prop("checked") || $("#commercial").prop("checked")) {
   // do something
   console.log('test');
   step1_completed= step1_completed + 1;
}
  if(name > 0){
  
  step1_completed= step1_completed + 1;
  }
  
  if(residence == 'Place of residence*'){
  
  
  }
  else{
  step1_completed= step1_completed + 1;
  
  }
  
  
  if(step1_completed == 0){
  $("#progressbar-div").css("width","10%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step1_completed == 1){
  $("#progressbar-div").css("width","17%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step1_completed == 2){
  $("#progressbar-div").css("width","24%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');
//$("#step1").hide();
 // $("#step2").show();
  //$("#step3").hide();
  }
  
  if(step1_completed == 3){
  $("#progressbar-div").css("width","30%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');
$("#step1").hide();
  $("#step2").show();
  $("#step3").hide();
  }
  
  
  });
  
  
  
  
  
  $("#residence").change(function(e){
  e.preventDefault();
  
  var name=$("#name").val().length;
  var residence=$("#residence").val();
  var step1_completed = 0;
  
  if(name > 0){
  
  step1_completed= step1_completed + 1;
  }
  
  if(residence == 0){
  
  
  }
  else{
  step1_completed= step1_completed + 1;
  
  }
  
  if(step1_completed == 0){
  $("#progressbar-div").css("width","10%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step1_completed == 1){
  $("#progressbar-div").css("width","20%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step1_completed == 2){
  $("#progressbar-div").css("width","30%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');
  
  }
  
  
  });



   $(".option").click(function(e){
  e.preventDefault();
  setTimeout(function(){ var name=$("#name").val().length;
  var residence=$.trim($(".selected").text());
console.log(residence);
  var step1_completed = 0;
   if ($("#private").prop("checked") || $("#commercial").prop("checked")) {
   // do something
   console.log('test');
   step1_completed= step1_completed + 1;
}
  if(name > 0){
  
  step1_completed= step1_completed + 1;
  }
  
  if(residence == 'Place of residence*'){
  
  
  }
  else{
  step1_completed= step1_completed + 1;
  
  }
  
  if(step1_completed == 0){
  $("#progressbar-div").css("width","10%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step1_completed == 1){
  $("#progressbar-div").css("width","17%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step1_completed == 2){
  $("#progressbar-div").css("width","24%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');
//$("#step1").hide();
 // $("#step2").show();
  //$("#step3").hide();
  }
  
  if(step1_completed == 3){
  $("#progressbar-div").css("width","30%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');
$("#step1").hide();
  $("#step2").show();
  $("#step3").hide();
  }
  
  
   } , 100);
  
  
  
  });

  $("#vehicle").change(function(e){
  e.preventDefault();
  
  var vehicle=$("#vehicle").val();
  var license=$("#license").val();
  var step2_completed = 0;
  
  
  
  if(vehicle == 'Required class of driving License*'){
    
    step2_completed= step2_completed + 1;
    }
    
    if(license == 'Required type of driving License*'){
    
    
    }
    else{
    step2_completed= step2_completed + 1;
    
    }
  
  if(step2_completed == 0){
  $("#progressbar-div").css("width","30%");
  $("#step2-btn").attr('disabled',true);
  $("#step2-btn").css('background-color','brown');
  }
  
  if(step2_completed == 1){
  $("#progressbar-div").css("width","45%");
  $("#step2-btn").attr('disabled',true);
  $("#step2-btn").css('background-color','brown');
  }
  
  if(step2_completed == 2){
  $("#progressbar-div").css("width","60%");
  $("#step2-btn").attr('disabled',false);
  $("#step2-btn").css('background-color','#fe5454');
  $("#step1").hide();
  $("#step2").hide();
  $("#step3").show();
  
  }
  
  
  });
  $("#license").change(function(e){
  e.preventDefault();
  
  var vehicle=$("#vehicle").val();
  var license=$("#license").val();
  var step2_completed = 0;
  
  
  
  if(vehicle == 0){
  
  
  }
  else{
  step2_completed= step2_completed + 1;
  
  }
  if(license == 0){
  
  
  }
  else{
  step2_completed= step2_completed + 1;
  
  }
  
  
  if(step2_completed == 0){
  $("#progressbar-div").css("width","30%");
  $("#step2-btn").attr('disabled',true);
  $("#step2-btn").css('background-color','brown');
  }
  
  if(step2_completed == 1){
  $("#progressbar-div").css("width","45%");
  $("#step2-btn").attr('disabled',true);
  $("#step2-btn").css('background-color','brown');
  }
  
  if(step2_completed == 2){
  $("#progressbar-div").css("width","60%");
  $("#step2-btn").attr('disabled',false);
  $("#step2-btn").css('background-color','#fe5454');
  }
  

  $(".interior").click(function(e){
    e.preventDefault();
    setTimeout(function(){ var headingbox=$("#headingbox").val().text();
    var license=$.trim($(".head-box").text());
  console.log(license);
    var step2_completed = 0;
    
    if(headingbox == 'Required class of driving License*'){
    
    step2_completed= step2_completed + 1;
    }
    
    if(license == 'Required type of driving License*'){
    
    
    }
    else{
    step2_completed= step2_completed + 1;
    
    }
    
    if(step2_completed == 0){
    $("#progressbar-div").css("width","30%");
    $("#step2-btn").attr('disabled',true);
    $("#step2-btn").css('background-color','brown');
    }
    
    if(step2_completed == 1){
    $("#progressbar-div").css("width","45%");
    $("#step2-btn").attr('disabled',true);
    $("#step2-btn").css('background-color','brown');
    }
    
    if(step2_completed == 2){
    $("#progressbar-div").css("width","60%");
    $("#step2-btn").attr('disabled',false);
    $("#step2-btn").css('background-color','#fe5454');
  $("#step1").hide();
    $("#step2").hide();
    $("#step3").show();
    
    } }, 100);
    
    
    
    });
  
  
  });
  $("#address").change(function(e){
  e.preventDefault();
  
  var address=$("#address").val();
  console.log(address)
  var DOB = $("#DOB").val();
  
  console.log(address);
  console.log(DOB);
  var step3_completed = 0;
  
  if(address== 0){}
  
  else{
  
  step3_completed= step3_completed + 1;
  }
  
  if(DOB == 0){
  
  
  }
  else{
  step3_completed= step3_completed + 1;
  
  }
  
  
  if(step3_completed == 0){
  $("#progressbar-div").css("width","60%");
  $("#step3-btn").attr('disabled',true);
  $("#step3-btn").css('background-color','brown');
  }
  
  if(step3_completed == 1){
  $("#progressbar-div").css("width","80%");
  $("#step3-btn").attr('disabled',true);
  $("#step3-btn").css('background-color','brown');
  }
  
  if(step3_completed == 2){
  $("#progressbar-div").css("width","100%");
  $("#step3-btn").attr('disabled',false);
  $("#step3-btn").css('background-color','#fe5454');
  }
  
  console.log(step3_completed);
  });
  
  $("#DOB").change(function(e){
  e.preventDefault();
  
  var address=$("#address").val();
  var DOB = $("#DOB").val();
  var step3_completed = 0;
  
  if(address== 0){}
  
  
  else{step3_completed= step3_completed + 1;
  }
  
  if(DOB == 0){
  
  
  }
  else{
  step3_completed= step3_completed + 1;
  
  }
  
  
  if(step3_completed == 0){
  $("#progressbar-div").css("width","60%");
  $("#step3-btn").attr('disabled',true);
  $("#step3-btn").css('background-color','brown');
  }
  
  if(step3_completed == 1){
  $("#progressbar-div").css("width","80%");
  $("#step3-btn").attr('disabled',true);
  $("#step3-btn").css('background-color','brown');
  }
  
  if(step3_completed == 2){
  $("#progressbar-div").css("width","100%");
  $("#step3-btn").attr('disabled',false);
  $("#step3-btn").css('background-color','#fe5454');
  }
  
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  $("#step1-btn").click(function(e){
  e.preventDefault();
  
  
  var name=$("#name").val();
  var residence=$("#residence").val();
  var step1_error='no';
  
  if(name == null || name == ''){
  var step1_error='yes';
  
  }
  
  if(residence == null || residence == ''){
  var step1_error='yes';
  
  }
  
  if(step1_error == 'no')
  {
  
  $("#step1").hide();
  $("#step2").show();
  $("#step3").hide();
  
  
  $("#step1-btn").css('background-color','#fe5454');
  $("#step1-btn").attr('disabled',false);
  }
  
  else{
  $("#step1-btn").css('background-color','brown');
  $("#step1-btn").attr('disabled',true);
  }
  
  });
  
 

  $("#step2-btn").click(function(e){
    e.preventDefault();
    
    
    var vehicle=$("#vehicle").val();
    var license=$("#license").val();
    var step2_error='no';
    
    if(vehicle == null || vehicle == ''){
    var step2_error='yes';
    
    }
    
    if(license == null || license == ''){
    var step2_error='yes';
    
    }
    
    if(step2_error == 'no')
    {
    
    
    $("#step2-btn").css('background-color','#fe5454');
    $("#step2-btn").attr('disabled',false);
    }
    
    else{
    $("#step2-btn").css('background-color','brown');
    $("#step2-btn").attr('disabled',true);
    }
    
    });
   
// tilll here-----------------------------------------------

  $("#step2-bck-btn").click(function(e){
  e.preventDefault();
  $("#step1").show();
  $("#step2").hide();
  $("#step3").hide();
  
  
  })


    $("#step3-bck-btn").click(function(e){
  e.preventDefault();
  $("#step1").hide();
  $("#step2").show();
  $("#step3").hide();
  
  
  })
  
  $(".name-input").click(function(){


    $(this).css('border-color','#FF5454');
  })

  $(".private").click(function(){


$(this).css('background-color','#FF6A6A');

$(".commercial").css('background-color','lightgray');
})
  $(".private").click(function(){


    $(this).css('color','#FFFFFF');

$(".commercial").css('color','#727272');
})

$(".commercial").click(function(){


$(this).css('background-color','#FF6A6A');
$(".private").css('background-color','lightgray');
})

$(".commercial").click(function(){


$(this).css('color','#FFFFFF');
$(".private").css('color','#727272');
})

  
  
  const selected = document.querySelector(".selected");
  const optionsContainer = document.querySelector(".options-container");
  
  const optionsList = document.querySelectorAll(".option");
  
  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });
  
  optionsList.forEach(o => {
    o.addEventListener("click", () => {
      selected.innerHTML = o.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    });
  });
  
  

  const heading = document.querySelector(".heading-box");
  const option = document.querySelector(".option-box");
  
  const menuList = document.querySelectorAll(".menu");
  
  heading.addEventListener("click", () => {
    option.classList.toggle("active");
  });
  
  menuList.forEach(o => {
    o.addEventListener("click", () => {
      heading.innerHTML = o.querySelector("label").innerHTML;
      option.classList.remove("active");
    });
  });   


  

  const head = document.querySelector(".head-box");
  const choice = document.querySelector(".choice-box");
  
  const interiorList = document.querySelectorAll(".interior");
  
  head.addEventListener("click", () => {
    choice.classList.toggle("active");
  });
  
  interiorList.forEach(o => {
    o.addEventListener("click", () => {
      head.innerHTML = o.querySelector("label").innerHTML;
      choice.classList.remove("active");
    });
  }); 

  

  const chief = document.querySelector(".chief-box");
  const inner = document.querySelector(".inner-box");
  
  const insideList = document.querySelectorAll(".inside");
  
  chief.addEventListener("click", () => {
    inner.classList.toggle("active");
  });
  
  insideList.forEach(o => {
    o.addEventListener("click", () => {
      chief.innerHTML = o.querySelector("label").innerHTML;
      inner.classList.remove("active");
    });
  });  


  

  const leader = document.querySelector(".leader-box");
  const minor = document.querySelector(".minor-box");
  
  const outsideList = document.querySelectorAll(".outside");
  
  leader.addEventListener("click", () => {
    minor.classList.toggle("active");
  });
  
  outsideList.forEach(o => {
    o.addEventListener("click", () => {
      leader.innerHTML = o.querySelector("label").innerHTML;
      minor.classList.remove("active");
    });
  });  




























 $(".menu").click(function(e){
  e.preventDefault();
  setTimeout(function(){ 
  var vehicle=$.trim($(".heading-box").text());
  var license=$.trim($(".head-box").text());
console.log(vehicle);
console.log(license);
  var step2_completed = 0;
  
  
  
  if(vehicle == 'Required class of driving License*'){
  
  
  }
  else{
  step2_completed= step2_completed + 1;
  
  }
  
  if(license == 'Required type of driving License*'){
  
  
  }
  else{
  step2_completed= step2_completed + 1;
  
  }
  
 
  if(step2_completed == 0){
  $("#progressbar-div").css("width","30%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step2_completed == 1){
  $("#progressbar-div").css("width","45%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step2_completed == 2){
  $("#progressbar-div").css("width","60%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');
$("#step1").hide();
  $("#step2").hide();
  $("#step3").show();
  
  } }, 100);
  
  
  
  });
  
  
  
  
  
  
  
  
  
  
  $(".interior").click(function(e){
  e.preventDefault();
  setTimeout(function(){ 
  var vehicle=$.trim($(".heading-box").text());
  var license=$.trim($(".head-box").text());
console.log(vehicle);
console.log(license);
  var step2_completed = 0;
  
  
  
  if(vehicle == 'Required class of driving License*'){
  
  
  }
  else{
  step2_completed= step2_completed + 1;
  
  }
  
  if(license == 'Required type of driving License*'){
  
  
  }
  else{
  step2_completed= step2_completed + 1;
  
  }
  
  
  if(step2_completed == 0){
  $("#progressbar-div").css("width","30%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step2_completed == 1){
  $("#progressbar-div").css("width","45%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step2_completed == 2){
  $("#progressbar-div").css("width","60%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');
$("#step1").hide();
  $("#step2").hide();
  $("#step3").show();
  
  } }, 100);
  
  
  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  $(".inside").click(function(e){
  e.preventDefault();
  setTimeout(function(){ 
  var address=$.trim($(".chief-box").text());
  var dob=$.trim($(".leader-box").text());
console.log(address);
console.log(dob);
  var step3_completed = 0;
  
  
  
  if(address == 'Available proof of current address*'){
  
  
  }
  else{
  step3_completed= step3_completed + 1;
  
  }
  
  if(dob == 'Available proof of DOB*'){
  
  
  }
  else{
  step3_completed= step3_completed + 1;
  
  }
  
 
  if(step3_completed == 0){
  $("#progressbar-div").css("width","60%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step3_completed == 1){
  $("#progressbar-div").css("width","80%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step3_completed == 2){
  $("#progressbar-div").css("width","100%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');

  
  } }, 100);
  
  
  
  });
  
  
  
  
   $(".outside").click(function(e){
  e.preventDefault();
  setTimeout(function(){ 
  var address=$.trim($(".chief-box").text());
  var dob=$.trim($(".leader-box").text());
console.log(address);
console.log(dob);
  var step3_completed = 0;
  
  
  
  if(address == 'Available proof of current address*'){
  
  
  }
  else{
  step3_completed= step3_completed + 1;
  
  }
  
  if(dob == 'Available proof of DOB*'){
  
  
  }
  else{
  step3_completed= step3_completed + 1;
  
  }
  

  if(step3_completed == 0){
  $("#progressbar-div").css("width","60%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step3_completed == 1){
  $("#progressbar-div").css("width","80%");
  $("#step1-btn").attr('disabled',true);
  $("#step1-btn").css('background-color','brown');
  }
  
  if(step3_completed == 2){
  $("#progressbar-div").css("width","100%");
  $("#step1-btn").attr('disabled',false);
  $("#step1-btn").css('background-color','#fe5454');

  
  } }, 100);
  
  
  
  });