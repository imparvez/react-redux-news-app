import axios from 'axios';

const API_KEY = '65864fbb61ef4b0cb32428b3c8a71bea';
const API_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;

export const FETCH_NEWS = 'FETCH_NEWS';

// action creator responsible to fetch weather api
export function fetchNews(newsCategory){
	return (dispatch) => {
		const url = `${API_URL}&category=${newsCategory}`;
		axios.get(url).then((resp) => {
			console.log('resp AC: ', resp)
			dispatch({ // action creator always have to return action, which is an object, and which will ALWAYS have a `type`
				type: FETCH_NEWS,
				payload: resp.data
			})
		})
	}
}

/*
payload: it is the optional property contains some additional data that describes this action
 */