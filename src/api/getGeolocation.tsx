interface GeoLocation {
    lat: number,
    lon: number
}

async function getGeoLocation():Promise<Geolocation|null> {
    const location:any = {
    }
    if (!navigator.geolocation) {
        return null
    }
    else {
        navigator.geolocation.getCurrentPosition(
            async (position: GeolocationPosition) => {
                location.lat = position.coords.latitude,
                location.lon = position.coords.longitude
            })  
        return location
        }
}

export default getGeoLocation