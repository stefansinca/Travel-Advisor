import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
        //request
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY, //API from RAPIDAPI KEY
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getWeatherData = async (lat, lng) => {
    try {
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find',
        {
        params: { lon: lng, lat: lat, },
          headers: {
            'X-RapidAPI-Key': rocess.env.REACT_APP_RAPID_API_TRAVEL_API_KEY, //API from RAPIDAPI KEY
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
          }
        })

        return data;
    } catch (error) {
        console.log(error)
    }
}
