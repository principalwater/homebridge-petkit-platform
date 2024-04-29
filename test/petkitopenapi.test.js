// Import necessary modules
const axios = require('axios');
const PetkitOpenAPI = require('../lib/petkitopenapi');
const CountryUtil = require('../util/countryutil');

// Mock the axios.post method
jest.mock('axios');

describe('PetkitOpenAPI', () => {
  describe('getEndpointWithCountryCode', () => {
    it('should return endpoint if countryCode is provided', async () => {
      // Mocked response data
      const mockCountryCode = 'US';
      const mockEndpoint = 'http://api.petkt.com/latest';
      
      // Mock the CountryUtil class and its method
      jest.spyOn(CountryUtil.prototype, 'getEndPointWithCountryCode').mockResolvedValueOnce(mockEndpoint);

      // Create an instance of PetkitOpenAPI
      const petkitOpenAPI = new PetkitOpenAPI('username', 'password', mockCountryCode, console);

      // Call the method and expect the resolved value to match the mocked response
      const endpoint = await petkitOpenAPI.getEndpointWithCountryCode(mockCountryCode);
      expect(endpoint).toEqual(mockEndpoint);
    });

    it('should return default endpoint if countryCode is not provided', async () => {
      // Mocked response data
      const mockEndpoint = 'http://api.petkt.com/latest';
      
      // Mock the CountryUtil class and its method
      jest.spyOn(CountryUtil.prototype, 'getEndPointWithCountryCode').mockResolvedValueOnce(mockEndpoint);

      // Create an instance of PetkitOpenAPI without countryCode
      const petkitOpenAPI = new PetkitOpenAPI('username', 'password', undefined, console);

      // Call the method and expect the resolved value to match the default endpoint
      const endpoint = await petkitOpenAPI.getEndpointWithCountryCode(undefined);
      expect(endpoint).toEqual(mockEndpoint);
    });    
  });
});
