window.onload = function () {
    'use strict';
    $(document).foundation();
};

$(function() {
    var availableContacts = [
        {
            label: 'Julia Bode',
            icon: 'fa-user'
        },
        {
            label: 'Tatjana Kiel',
            icon: 'fa-user'
        },
        {
            label: 'Eva Nesbach',
            icon: 'fa-user'
        },
        {
            label: 'Eva Davies',
            icon: 'fa-user'
        },
        {
            label: 'Daniel Opitz',
            icon: 'fa-user'
        },
        {
            label: '#jobs',
            icon: 'fa-comment-o'
        },
        {
            label: '#events',
            icon: 'fa-comment-o'
        },
        {
            label: '#hackathon',
            icon: 'fa-comment-o'
        },
        {
            label: '#networking',
            icon: 'fa-comment-o'
        },
        {
            label: '#research',
            icon: 'fa-comment-o'
        },
        {
            label: '#xing',
            icon: 'fa-comment-o'
        }
    ];

    var availableContactsNew = [ 'Sophie Vo', 'Julia Bode', 'Tatjana Kiel', 'Eva Nesbach', 'Eva Davies', 'Daniel Opitz'];

    if ( $("#multi-search-input").length ) {
        $( "#multi-search-input" ).autocomplete({
            source: availableContacts,
            sortResults: false,
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

    if ( $("#multi-search-input-new").length ) {
        $( "#multi-search-input-new" ).autocomplete({
            source: availableContactsNew,
            sortResults: false,
            select: function (event, ui) {
                 $('#multi-search-input-new').val(ui.item.label);
                 if ( ui.item.label === 'Sophie Vo' ) {
                    $('.hide').removeClass('hide');
                 }
                 return false;
            }
        });
     }

    $( "#dialog" ).dialog({
        autoOpen: false,
            show: {
                    effect: "slideDown",
                    duration: 300
                  },
            hide: {
                    effect: "slideUp",
                    duration: 300
                  }
    });
 
    $( "#opener" ).click(function() {
        $( "#dialog" ).dialog( "open" );
    });
});
