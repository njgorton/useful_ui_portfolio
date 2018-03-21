//============================CARD FLIP ON CLICK==============================

$('document').ready(function() {
  $('.card__btn--flip').on('click', function(e) {
    $(e.target).closest('.card').toggleClass('card__flip');
  });
});


//==============================NAV SCROLLING==================================

// HOME
$("#section-home").click(function() {  
  $('html, body').animate({
    scrollTop: $("#home").offset().top-70
  }, 1000);
  target.focus(); // Setting focus
  if (target.is(":focus")){ // Checking if the target was focused
    return false;
  } else {
    target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    target.focus(); // Setting focus
  };
  return false;
});

// SKILLS
$("#section-skills").click(function() { 
  $('html, body').animate({
    scrollTop: $("#skills").offset().top-65
  }, 1000);
  target.focus(); // Setting focus
  if (target.is(":focus")){ // Checking if the target was focused
    return false;
  } else {
    target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    target.focus(); // Setting focus
  };
  return false;
});

// ABOUT
$("#section-about").click(function() { 
  $('html, body').animate({
    scrollTop: $("#about").offset().top-85
  }, 1000);
  target.focus(); // Setting focus
  if (target.is(":focus")){ // Checking if the target was focused
    return false;
  } else {
    target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    target.focus(); // Setting focus
  };
  return false;
});

// PROJECTS
$("#section-projects").click(function() {  
  $('html, body').animate({
    scrollTop: $("#projects").offset().top-85
  }, 1000);
  target.focus(); // Setting focus
  if (target.is(":focus")){ // Checking if the target was focused
    return false;
  } else {
    target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    target.focus(); // Setting focus
  };
  return false;
});

// CONTACT
$("#section-contact").click(function() { 
  $('html, body').animate({
    scrollTop: $("#contact").offset().top-85
  }, 1000);
  target.focus(); // Setting focus
  if (target.is(":focus")){ // Checking if the target was focused
    return false;
  } else {
    target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    target.focus(); // Setting focus
  };
  return false;
});

// DOWN-ARROW
$("#down-arrow").click(function() { 
  $('html, body').animate({
    scrollTop: $("#skills").offset().top-65
  }, 1000);
  target.focus(); // Setting focus
  if (target.is(":focus")){ // Checking if the target was focused
    return false;
  } else {
    target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    target.focus(); // Setting focus
  };
  return false;
});

// UP-ARROW
$("#up-arrow").click(function() { 
  $('html, body').animate({
    scrollTop: $("#home").offset().top-65
  }, 1000);
  target.focus(); // Setting focus
  if (target.is(":focus")){ // Checking if the target was focused
    return false;
  } else {
    target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
    target.focus(); // Setting focus
  };
  return false;
});


//==========================ACTIVE STATE ON SCROLL=============================

// HOME --default active
$('#section-home').addClass("active");

// SKILLS
$('#skills').waypoint(function(direction) {
  if (direction === 'down') {
    $("nav a").removeClass("active");
    $("#section-skills").addClass("active");
  }
}, { offset: '66' });

$('#skills').waypoint(function(direction) {
  if (direction === 'up') {    
    $("nav a").removeClass("active");
    $("#section-home").addClass("active");
  }
}, { offset: '75%' });

// ABOUT
$('#about').waypoint(function(direction) {
  if (direction === 'down') {
    $("nav a").removeClass("active");
    $("#section-about").addClass("active");
  }
}, { offset: '86' });

$('#about').waypoint(function(direction) {
  if (direction === 'up') {    
    $("nav a").removeClass("active");
    $("#section-skills").addClass("active");
  }
}, { offset: '75%' });

// PROJECTS
$('#projects').waypoint(function(direction) {
  if (direction === 'down') {
    $("nav a").removeClass("active");
    $("#section-projects").addClass("active");
  }
}, { offset: '86' });

$('#projects').waypoint(function(direction) {
  if (direction === 'up') {    
    $("nav a").removeClass("active");
    $("#section-about").addClass("active");
  }
}, { offset: '75%' });

// CONTACT
$('#contact').waypoint(function(direction) {
  if (direction === 'down') {
    $("nav a").removeClass("active");
    $("#section-contact").addClass("active");
  }
}, { offset: '86' });

$('#contact').waypoint(function(direction) {
  if (direction === 'up') {    
    $("nav a").removeClass("active");
    $("#section-projects").addClass("active");
  }
}, { offset: '75%' });

