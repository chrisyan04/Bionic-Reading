// drop down effect
window.addEventListener('load', function() {
    var dropDownTitle = document.querySelector('.drop-down-title');
    dropDownTitle.classList.add('show');

    var navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function() {
    dropDownTitle.classList.toggle('title-fixed');

    /*var dropDownContent = document.querySelector('.drop-down-content');
    dropDownContent.classList.add('show');*/
  });
});
  