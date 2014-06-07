window.onload = function () {
    'use strict';
    $(document).foundation();

    $(function() {
    var availableContacts = [
        'Julia Bode',
        'Tatjana Kiel',
        'Sophie Vo',
        'Eva Nesbach',
        'Daniel Opitz'
    ];
    $( "#multi-search-input" ).autocomplete({
      source: availableContacts
    });
  });
};
