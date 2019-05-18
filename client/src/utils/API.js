import axios from 'axios';

export default {
    getUpcoming: function() {
       return axios.get('https://launchlibrary.net/1.3/launch/next/25')   
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
    unfollowLaunch: function(data, userId) {
        return axios.put('/api/user/' + userId, data)
    },
    addUserImg: function(data, userId){
        return axios.put('/api/user/image/' + userId, data);
    }
}