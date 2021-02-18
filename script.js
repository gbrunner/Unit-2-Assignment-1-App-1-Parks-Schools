require(["esri/config","esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {

esriConfig.apiKey =  "AAPKdc25ad7513a24c46b92cd024b53471173ysex4xHWQwBw2IQ-kNnn5MYzM2Maqnuc7YbUYeHblfF461bYrN1hiCHw4m9SK0E"; 

const map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });

const view = new MapView({
          map: map,
          center: [-118.805, 34.027], // Longitude, latitude
          zoom: 13, // Zoom level
          container: "viewDiv" // Div element
        });

 });
