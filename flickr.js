var parameters = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=ca1c85ed9f3ad2ede37e7994c0ec5b05&user_id=155922632@N05&format=json&nojsoncallback=1",
  "method": "GET",
  "headers": {}
}

$.ajax(parameters).done(function (data) {
  $.each( data.photos.photo, function( index, itemData ) {
    var farmId = itemData.farm;
    var serverId = itemData.server;
    var id = itemData.id;
    var secret = itemData.secret;
    var divid1 = id + "-column";
    var $div1 = $( '<div id=' + divid1 + ' class="col-md-4 flickr-img"></div>' );
    $( "#flickr" ).append( $div1 );
    var divid2 = id + "-thumbnail";
    var $div2 = $( '<div id=' + divid2 + ' class="thumbnail"></div>' );
    $( '#' + divid1 + '' ).append( $div2 );
    var $newimg = $( '<img class="flickr" src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>' );
    //newdiv2 = document.createElement( "div" ), existingdiv1 = document.getElementById( "foo" );
    $( '#' + divid2 + '' ).append( $newimg  );
    //$("#flickr").append('<img class="flickr" src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
  });
});
