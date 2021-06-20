//------Homework 9------//

//------Task 1------//

$('a[href^="https://"]').attr('target', '_blank');


//------Task 2------//


$('h2.head').css('background', 'green').find('.inner').css('fontSize', '35px');


//------Task 3------//


$('h3').each(function(){
  $(this).next().insertBefore($(this))
});



//------Task 4------//



  $('input[type=checkbox]').on('change', function() {
    if ($('input[type=checkbox]:checked').length > 3) {
      $(this).prop('checked', false);
      $('#check').text('Allowed only 3')
    }
  })
