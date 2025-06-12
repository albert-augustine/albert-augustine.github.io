jQuery(document).ready(function() {
  jQuery('.nav-link').on('click', function() {
      // Remove 'active' class from all nav links
      jQuery('.nav-link').removeClass('active');
      
      // Add 'active' class to the clicked nav link
      jQuery(this).addClass('active');
  });
});
