export const mockGeolocation = {
    getCurrentPosition: jest.fn()
        .mockImplementationOnce(success => Promise.resolve(success({
            coords: {
                latitude: 46.378333,
                longitude: 13.836667,
            },
        }))),
    watchPosition: jest.fn(),
}

// global.navigator.geolocation = mockGeolocation