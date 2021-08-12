
moveForward(25);

setScreen("logo");

onEvent("logo", "load", function( ) {
	console.log(" Evisi clicked");
});
setTimeout(function() {
  setScreen("home");
},4000);

// Buttons


onEvent("sb", "click", function( ) {
  open("https://www.google.com/search?q=" + getText("s"));
});

onEvent("bu1", "click", function( ) {

setScreen("about");
});
onEvent("b1", "click", function( ) {
 
  setScreen("Evisi");
});
onEvent("nextc1", "click", function( ) {
  
  setScreen("Altrozev");
});
onEvent("nextc2", "click", function( ) {
  
  setScreen("nexonev");
});
onEvent("nextc3", "click", function( ) {
  
  setScreen("sierra");
});
onEvent("nextc4", "click", function( ) {
  
  setScreen("ipace");
});
onEvent("nextc5", "click", function( ) {
  
  setScreen("kona");
});
onEvent("nextc6", "click", function( ) {
  
  setScreen("home");
});
onEvent("prec1", "click", function( ) {
  
  setScreen("Evisi");
});
onEvent("prec2", "click", function( ) {
  
  setScreen("Altrozev");
});
onEvent("prec3", "click", function( ) {
  
  setScreen("nexonev");
});
onEvent("prec4", "click", function( ) {
  
  setScreen("sierra");
});
onEvent("prec5", "click", function( ) {
   
  setScreen("ipace");
});
onEvent("bac1", "click", function( ) {
  
  setScreen("home");
});
onEvent("bac2", "click", function( ) {
  
  setScreen("home");
});
onEvent("b2", "click", function( ) {
   
  setScreen("evultra");
});
onEvent("backh", "click", function( ) {
   
  setScreen("home");
});
onEvent("nextb1", "click", function( ) {
   
  setScreen("bus");
});
onEvent("pre1", "click", function( ) {
   
  setScreen("evultra");
});
onEvent("homep1", "click", function( ) {
  
  setScreen("home");
});
onEvent("homep2", "click", function( ) {
   
  setScreen("home");
});
onEvent("homep3", "click", function( ) {
  
  setScreen("home");
});
onEvent("homep4", "click", function( ) {
  
  setScreen("home");
});
onEvent("homep5", "click", function( ) {
  
  setScreen("home");
}); 
onEvent("homep6", "click", function( ) {
   
  setScreen("home");
});
onEvent("homep7", "click", function( ) {
  
  setScreen("home");
}); 
onEvent("image10", "click", function( ) {
  
  setScreen("home");
});
onEvent("uno", "click", function( ) {
  
  setScreen("home");
});

onEvent("button78", "click", function( ) {
open("https://www.buses.tatamotors.com/products/brands/starbus/tata-urban-9-12m-ac-electric-bus/");
});

onEvent("button28", "click", function( ) {
open("https://www.hyundai.com/in/en/find-a-car/kona-electric/highlights.html?utm_source=Search-SOV&utm_medium=CPC&utm_campaign=KONA-AlwaysOn-2021&gclid=CjwKCAjwgISIBhBfEiwALE19SZwZ_6lzjHD2YEelxl8arj-mcotPr86_zG3K8KGoP9kojkcBzv_9axoCWRYQAvD_BwE");
});

//122222333333334444444444555555555
// buy

onEvent("buynex1", "click", function( ) {
   
 open("https://nexonev.tatamotors.com/");
   
}); 

onEvent("buyipac1", "click", function( ) {
   
 open("https://www.jaguar.com/jaguar-range/i-pace/index.html");
   
});
onEvent("biy14", "click", function( ) {
   
 open("https://olectra.com/electric-bus-k9/");
   
});


