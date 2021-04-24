export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER FINSIHED DEVELOPMENT
    token: "BQCZ3jOaOyfgQEVOaq8pCQbNAdYQFIoYDvcvCCdCc6rP5L-GlCBBArXsJHFfryhujDCgWegP6myAgeAhJLekZCVHBr_KXphnhjz8hz1Ocmk25WH8UPfAeV-2lyaooJthTjnHVKzigGt3P8sVbShUu08ktZkkBm87"
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }
}

export default reducer;