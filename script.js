require(["esri/config","esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function (esriConfig, Map, MapView, FeatureLayer) {

esriConfig.apiKey =  "AAPKdc25ad7513a24c46b92cd024b53471173ysex4xHWQwBw2IQ-kNnn5MYzM2Maqnuc7YbUYeHblfF461bYrN1hiCHw4m9SK0E"; 

const map = new Map({
          basemap: "arcgis-topographic" // Basemap layer service
        });

const view = new MapView({
          map: map,
          center: [-90.35, 38.65], // Longitude, latitude
          zoom: 11.5, // Zoom level
          container: "viewDiv" // Div element
        });
//STL Parks feature layer (polygons) 
const parksLayer = new FeatureLayer({
  url: "https://slustl.maps.arcgis.com/home/webmap/viewer.html?layers=309471f6db3242c8b1315bc5f07ca54a"
});
  
  map.add(parksLayer);
          
//STL Public Schools (points) 
const pubschoolLayer = new FeatureLayer({
  url: "https://slustl.maps.arcgis.com/home/webmap/viewer.html?layers=5458d0ba2a2341b59b5ae3b05d4d922f"
});
  
  map.add(pubschoolLayer);
  
 });
