const initialState = []

export const weatherDataReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CITY_WEATHER_DATA':
            return [
                action.payload, ...state
            ]
        default:
            return state
    }
}
