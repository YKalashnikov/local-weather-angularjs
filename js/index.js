var classApp = angular.module("weatherApp", []);

classApp.controller("weatherCtrl",function($scope, $http){
  var vm=$scope;
  vm.weatherApp={
    subheading:{
      name:"Check my codepen portfolio",
      link:"https://codepen.io/AK-47/"
    }
  };
  $http.get("https://freegeoip.net/json/").success(function(data){
    vm.region_name=data.region_name;
    vm.lat=data.latitude;
    vm.lon=data.longitude;
    vm.zip_code=data.zip_code;
    vm.ip=data.ip;

    var apiKey="06986e2720ce0175dc6f87d8b897dffd";

    var openWeatherUrl="https://fcc-weather-api.glitch.me/api/current?lat="+ vm.lat + "&lon="+vm.lon+ "&appid=" + apiKey;

    $http.get(openWeatherUrl).success(function(data){
      //console.log(openWeatherUrl);
      vm.description=data.weather[0].description;
      vm.speed=(2.237*data.wind.speed).toFixed(1) + "mph";
      //console.log(vm.speed);
      vm.tempatureC=(data.main.temp).toFixed() + "°C";
      vm.tempatureF=((data.main.temp * (9/5)) + 32).toFixed() + ("°F")
      vm.icon =data.weather[0].icon;
      vm.locationName=data.name;
      vm.humidity=data.main.humidity + "%";

      switch(vm.description){
        case "scattered clouds":{
          vm.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1458898257815-0ec6bfaa0ade?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f31381c0fb8995c1fafeac2aa259a80a&auto=format&fit=crop&w=1350&q=80')",
            "background-size":"cover",
            "background-attachment": "fixed",
            "background-position":"center"
          };
          break;
        }

        case "clear sky":{
          vm.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1495333258329-fe29ba3a7b4b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9974ace4f2976f6b0e0af09b83f425a&auto=format&fit=crop&w=668&q=80')",
            "background-size":"cover",
            "background-attachment": "fixed",
            "background-position":"center"

          };
          break;
        }
        case "few clouds":{
          vm.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1454994834218-5ffbb76c0e74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dddc4ee524eee04e325dbc73367391d8&auto=format&fit=crop&w=1651&q=80')",
            "background-size":"cover",
            "background-attachment": "fixed",
            "background-position":"center"
          };
          break;
        }
        case "broken clouds":{
          vm.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1440561360730-384048528ced?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bcbe3e0c46e4dd4ea9b8b345782e64bc&auto=format&fit=crop&w=2089&q=80')",
            "background-size":"cover",
            "background-attachment": "fixed",
            "background-position":"center"
          };
          break;
        }
        case "shower rain":{
          vm.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1431037242647-4c2c27cb5bb1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0f1a5177402b4e34fbbbc02cb6c1ca5a&auto=format&fit=crop&w=668&q=80')",
            "background-size":"cover",
            "background-attachment": "fixed",
            "background-position":"center"
          };
          break;
        }
        case "rain":{
          vm.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1504401774599-1b5378bfaae3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8dde55b26b124ab3852f8d56dca66d9&auto=format&fit=crop&w=748&q=80')",
            "background-size":"cover",
            "background-attachment": "fixed",
            "background-position":"center"
          };
          break;
        }
        case "thunderstorm":{
          vm.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1457528877294-b48235bdaa68?ixlib=rb-0.3.5&s=1a08d663fe7b15e6c0ffb707e23d5808&auto=format&fit=crop&w=1650&q=80')",
            "background-size":"cover",
            "background-attachment": "fixed",
            "background-position":"center"
          };
          break;
        }
        case "snow":{
          vm.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1482386308359-4d3ec385e0f7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc9d315f9fea77105fc9d10d300666b4&auto=format&fit=crop&w=1658&q=80')",
            "background-size":"cover",
            "background-attachment": "fixed",
            "background-position":"center"
          };
          break;
        }
        case "mist":{
          vm.weatherBackground = {
            "background": "url('https://unsplash.com/photos/x48QL8gNYZ8')",
            "background-size":"cover",
            "background-attachment": "fixed",
            "background-position":"center"
          };
          break;
        }

        default:
          vm.weatherBackground={
            "background":"url('https://images.unsplash.com/photo-1493056031322-de53294718a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e39858cf2c50922f18a4c6b2ebbc758&auto=format&fit=crop&w=1350&q=80')",
            "background-size":"cover",
            "background-attachment": "fixed",
            "background-position":"center"
          };
      }

    });
  })
});