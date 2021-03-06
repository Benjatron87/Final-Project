import axios from 'axios';
import { Last } from 'react-bootstrap/PageItem';

export default {
    getUpcoming: function() {
       return axios.get('https://launchlibrary.net/1.3/launch/next/50')   
    },
    getArticles: function(query) {
        return axios.get("https://spaceflightnewsapi.net/api/v1/articles?search=" + query)
    },
    getPast: function(date) {
        return axios.get('https://launchlibrary.net/1.3/launch/?startdate=' + date)
    },
    followLaunch: function(data, userId) {
        return axios.post('/api/user/' + userId, data);
    },
    getAgency: function(agency) {
        return axios.get('https://launchlibrary.net/1.4/agency/' + agency)
    },
    unfollowLaunch: function(data, userId) {
        return axios.put('/api/user/' + userId, data)
    },
    addUser: function(data){
        return axios.post('/api/user/', data);
    },
    getWeather: function(lat,long) {
        const APIkey = "3492e25a528a4ddab6b447654307061a"
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${APIkey}`)
    }
}