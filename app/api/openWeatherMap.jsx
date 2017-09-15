var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d0744f97376662a577a42292784c610c';
//API key: d0744f97376662a577a42292784c610c


module.exports = {
  //returns a promise.
  getTemp: function(location){
    // in ``, everthing is excecuted or evaluated.
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=metric`;
    console.log(requestUrl);
    return axios.get(requestUrl).then(
      function(res){

        if (res.data.cod && res.data.message){
          throw new Error('ERROR: '+ lcoation + ' not found. ');
        }else{
          var reqLocation = location.replace(/[^a-zA-Z]/g, "").toLowerCase();
          var resLocation = res.data.name.replace(/[^a-zA-Z]/g, "").toLowerCase();
          if (reqLocation.indexOf(resLocation) === -1 && resLocation.indexOf(reqLocation) == -1 ){
            throw new Error("Can not find " + location + "." +
              '\nClosest Mathc: ' + res.data.name + ", " + res.data.sys.country);
          }else {
            return res.data.main.temp;
          }
        }
      }, function(res){
        //throw new Error(res.data.message);
        throw new Error('ERROR: weather request');

      }
    );
  }
};
