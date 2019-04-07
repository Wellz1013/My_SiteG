$('#side-bar').click(function(e){
    e.preventDefault();
    e.stopPropagation();
    showSideBar();
  })
  $('.toggle-side-bar-btn').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      toggleSideBar();
  })
  function showSideBar(){
    var $sideBar = $('#side-bar');
    var $toggleSideBarBtn = $('.toggle-side-bar-btn');
    if( $sideBar.hasClass('active') == false){
      $sideBar.addClass('active');
    }
    if( $toggleSideBarBtn.hasClass('active') == false) {
      $toggleSideBarBtn.addClass('active');
    }
  }
  function hideSideBar() {
      var $sideBar = $('#side-bar');
      var $toggleSideBarBtn = $('.toggle-side-bar-btn');
      
      if ( $sideBar.hasClass('active') ) {
          $sideBar.removeClass('active');
      }
      
      if ( $toggleSideBarBtn.hasClass('active') ) {
          $toggleSideBarBtn.removeClass('active');
      }
  }
  function toggleSideBar() {
      var $sideBar = $('#side-bar');
      
      if ( $sideBar.hasClass('active') ) {
          hideSideBar();
      }
      else {
          showSideBar();
      }
  }
  