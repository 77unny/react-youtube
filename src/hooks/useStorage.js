import * as axios from 'axios';
import {useEffect, useState} from 'react';

export default function useStorage(key, count) {
	const [data, setData] = useState();

	useEffect(() => {
		const getFetchData = async () => {
			const response = await axios(`${process.env.REACT_APP_POPULAR}?part=snippet&chart=mostPopular&maxResults=${count}&key=${process.env.REACT_APP_API_KEY}`)
			setData(response.data)
		}
		const getStorage = localStorage.getItem(key);
		if (getStorage) {
			setData(JSON.parse(getStorage));
		} else {
			getFetchData()
		}
	}, [key, count]);

	useEffect(() => {
		const getStorage = localStorage.getItem(key);
		if (getStorage !== data) {
			localStorage.setItem(key, JSON.stringify(data));
		}
	}, [key, data]);

	return data
}