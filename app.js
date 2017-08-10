var coors = {
	'antofa' : {lat: -23.6523600, lng: -70.3954000},
	'serena' : {lat: -29.9045300, lng: -71.2489400},
	'stgo' : {lat: -33.4569400, lng: -70.6482700},
	'conce' : {lat: -36.8269900, lng: -73.0497700},
	'valdi' : {lat: -39.8142200, lng: -73.2458900}
};

var url = 'https://crossorigin.me/https://api.darksky.net/forecast/c903a81550ef81008ab5a622353f915c/'

var image = {
  'clear-day': 'https://cdn2.iconfinder.com/data/icons/weather-109/1024/Clear_Day-256.png',
  'clear-night': 'https://cdn2.iconfinder.com/data/icons/weather-109/1024/Clear_Night-256.png',
  'rain': 'https://cdn2.iconfinder.com/data/icons/weather-109/1024/Rain-256.png',
  'snow': 'https://cdn2.iconfinder.com/data/icons/weather-109/1024/Snow-256.png',
  'sleet': 'https://cdn2.iconfinder.com/data/icons/weather-109/1024/Hail-256.png',
  'wind': 'https://cdn2.iconfinder.com/data/icons/weather-109/1024/Wind-256.png',
  'fog': 'https://cdn2.iconfinder.com/data/icons/weather-109/1024/Fog-256.png',
  'cloudy': 'https://cdn2.iconfinder.com/data/icons/weather-109/1024/Cloudy-256.png',
  'partly-cloudy-day': 'https://cdn2.iconfinder.com/data/icons/weather-109/1024/Partly_Cloudy_Day-256.png',
  'partly-cloudy-night': 'https://cdn2.iconfinder.com/data/icons/weather-109/1024/Storm_Partly_Cloudy_Night-256.png'

}

var map;
      
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.3583374, lng: -70.1416453},
          zoom: 8
        });
      }
 

$('select').on('change',function(e){

	coorz = coors[$(this).val()]

 	map.setCenter(coorz);
 	var marker = new google.maps.Marker({
  		position: coorz,
  		map: map
	});

  $.ajax({
    url: url + coorz.lat + ',' + coorz.lng + '?exclude=[minutely,hourly,daily,alerts,flags]&lang=es&units=auto'
  }).done(function(data){
    console.log(data);
    $('#resumen').text(parseInt(data.currently.temperature)+ '° ' +data.currently.summary)
    $('#icono').attr('src',image[data.currently.icon])
  })

  

 });



