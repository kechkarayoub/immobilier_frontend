import axios from 'axios';
import store from 'store';
export default class FundingService{

    getFundings() {
        const url = `${process.env.REACT_APP_API_URL}/${store.get("current_langue")}/api/funding/`;
        return axios.get(url).then(response => response.data);
    }
}