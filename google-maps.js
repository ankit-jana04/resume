function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 19.139478325490856, lng: 72.9308536033399};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Mumbai, India' // Title Location
    });
}