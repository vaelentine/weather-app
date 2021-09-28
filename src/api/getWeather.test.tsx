import getWeather from './getWeather'
import axios from 'axios'
import mockWeather from '__mocks__/mockWeather'
import mockCityNotFound from '__mocks__/mockCityNotFound'

jest.mock('axios')

describe('getWeather', () => {
  describe('successful query', () => {
    it('should return a weather response', async () => {
      // given
      const city = 'Portland'
      const mockResponse = mockWeather

      // when
      axios.get.mockImplementation(() => Promise.resolve(mockResponse))
      const result = await getWeather(city)

      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(result).toEqual(mockResponse)
    })
  })
  describe('unsuccessful query', () => {
    it('should handle an error', async () => {
      const city = 'NotARealPlace'
      const mockResponse = mockCityNotFound

      axios.mockRejectedValueOnce(mockResponse)
      const result = await (getWeather(city))

      expect(axios.get).toHaveBeenCalledTimes(1)
      expect(result).toEqual(mockResponse)
    })
  })
})
