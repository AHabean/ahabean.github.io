
$('#skills').waypoint(function(direction) {
    if (direction === 'down') {
        $('.progress-bar').width(function(){
            // this here refers to individual .progress-bar items
            return $(this).data('score');
        });
    }
  }, { offset: '10%', duration: 3000 });
  
  $('#skills').waypoint(function(direction) {
    if (direction === 'up') {
        $('.progress-bar').width(0);
    }
  }, { offset: '10px' });
