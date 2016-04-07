var posLat = 1;
var posLong = 2;

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//

var onSuccessGeo = function(position) {
    console.log('Latitude: ' + position.coords.latitude + '\n' +
            'Longitude: ' + position.coords.longitude + '\n' +
            'Altitude: ' + position.coords.altitude + '\n' +
            'Accuracy: ' + position.coords.accuracy + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
            'Heading: ' + position.coords.heading + '\n' +
            'Speed: ' + position.coords.speed + '\n' +
            'Timestamp: ' + position.timestamp + '\n');
    posLat = position.coords.latitude;
    posLong = position.coords.longitude;
    $('#geolocation').text('Pos: '+posLat+', '+posLong);
    $('#geolocation').show();
}

// onError Callback receives a PositionError object
//
function onErrorGeo(error) {
    console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
}

var loc = {
    findLocation: function () {
        navigator.geolocation.getCurrentPosition(onSuccessGeo, onErrorGeo);
    }
}
