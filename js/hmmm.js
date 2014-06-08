window.onload = function () {
    'use strict';
    $(document).foundation();

    $(function() {
    var availableContacts = [{
            label: 'Kitty Kitten',
            icon: 'fa-user'
        },
        {
            label: 'Julia Bode',
            icon: 'fa-user'
        },
        {
            label: 'Tatjana Kiel',
            icon: 'fa-user'
        },
        {
            label: 'Sophie Vo',
            icon: 'fa-user'
        },
        {
            label: 'Eva Nesbach',
            icon: 'fa-user'
        },
        {
            label: 'Daniel Opitz',
            icon: 'fa-user'
        },
        {
            label: 'Favorite Animal',
            icon: 'fa-comment-o'
        }
    ];

    if ( $("#multi-search-input").length ) {
        $( "#multi-search-input" ).autocomplete({
            source: availableContacts,
            select: function (event, ui) {
                 $('#multi-search-input').val(ui.item.label);
                 return false;
            }
        }).data("ui-autocomplete")._renderItem = function (ul, item) {
             return $("<li></li>")
                 .data("item.autocomplete", item)
                 .append("<li><a href='./profile-overview.html'>" + item.label + "<i class='fa " + item.icon + " right'></i></a></li>")
                 .appendTo(ul);
         };
     }
  });
};
