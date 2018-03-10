var parameters = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=d94a18423a8d68cf3cab925bc8944aa7&user_id=56029449@N02&format=json&nojsoncallback=1",
  "method": "GET",
  "headers": {}
}

$.ajax(parameters).done(function (data) {
  $.each( data.photos.photo, function( index, itemData ) {
    var farmId = itemData.farm;
    var serverId = itemData.server;
    var id = itemData.id;
    var secret = itemData.secret;
    $("#flickr").append('<img class="flickr" src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
  });
});
