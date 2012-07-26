(function() {
  var inputs = document.getElementsByTagName('input');
  var i;
  for ( i = 0; i < inputs.length; i++ )
  {
    if ( inputs[i].type == 'password' )
      inputs[i].autocomplete = 'on';
  }
})();
