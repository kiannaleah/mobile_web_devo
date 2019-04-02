import { getJSON, getLocation } from './utilties';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';

getJSON(baseURL).then(data => console.log(data));

getLocation()