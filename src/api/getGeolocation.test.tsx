import { getGeoLocation } from './getGeolocation'
import { mockGeolocation } from '__mocks__/mockGeolocation'
describe('Geolocation api', () => {
    describe('location data given', () => {
        it('returns location latitude and longitude', async() => {

              global.navigator.geolocation = mockGeolocation;
            const location = await getGeoLocation()
            console.log(location)
            expect(location).toEqual({lat:51.1, lon:45.3})
        })
    })
})