const axios = require('axios').default;
const qs = require('qs');

const API_SERVER_LIST_URL = "https://passport.petkt.com/v1/regionservers";

class CountryUtil {

    constructor(log) {
        this.log = log;
    }

    async getEndPointWithCountryCode(countryCode) {
        try {
            const response = await axios.get(API_SERVER_LIST_URL);
            const countryData = response.data.result.list.find(item => item.id === countryCode);
            return countryData ? countryData.gateway : "http://api.petkt.com/latest";
        } catch (error) {
            this.log.error(`Failed to get API server by country: ${error}`);
            return "http://api.petkt.com/latest"; // Default to a known configuration
        }
    }
}

module.exports = CountryUtil;
