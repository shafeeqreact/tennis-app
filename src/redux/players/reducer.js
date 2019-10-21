import { GET_PLAYER, GET_PLAYERS, GET_ALL_PLAYERS } from "./types";
import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from "../thunk/types";

const initialState = {
    players: [],
    player: {},
    isLoading: true
}

const players = [
    { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" },
    { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg" },
    { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg" },
    { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg" },
    { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg" },
    { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg" }
];

const allPlayers = [
    { "id": 1, "email": "george.bluth@reqres.in", "first_name": "George", "last_name": "Bluth", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" },
    { "id": 2, "email": "janet.weaver@reqres.in", "first_name": "Janet", "last_name": "Weaver", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg" },
    { "id": 3, "email": "emma.wong@reqres.in", "first_name": "Emma", "last_name": "Wong", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg" },
    { "id": 4, "email": "eve.holt@reqres.in", "first_name": "Eve", "last_name": "Holt", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg" },
    { "id": 5, "email": "charles.morris@reqres.in", "first_name": "Charles", "last_name": "Morris", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg" },
    { "id": 6, "email": "tracey.ramos@reqres.in", "first_name": "Tracey", "last_name": "Ramos", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg" },
    { "id": 7, "email": "michael.lawson@reqres.in", "first_name": "Michael", "last_name": "Lawson", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg", "facebook_link": "https://facebook.com" },
    { "id": 8, "email": "lindsay.ferguson@reqres.in", "first_name": "Lindsay", "last_name": "Ferguson", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg", "twitter_link": "https://twitter.com" },
    { "id": 9, "email": "tobias.funke@reqres.in", "first_name": "Tobias", "last_name": "Funke", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg" },
    { "id": 10, "email": "byron.fields@reqres.in", "first_name": "Byron", "last_name": "Fields", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg" },
    { "id": 11, "email": "george.edwards@reqres.in", "first_name": "George", "last_name": "Edwards", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg" },
    { "id": 12, "email": "rachel.howell@reqres.in", "first_name": "Rachel", "last_name": "Howell", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg" }
];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return { ...state, players: [], isLoading: true, error: '' }
        case FETCH_REQUEST_SUCCESS:
            const players = [...state.players, ...action.payload];
            return { ...state, players, isLoading: false, error: '' }
        case FETCH_REQUEST_FAILURE:
            return { ...state, players: [], isLoading: false, error: action.payload }
        case GET_PLAYER:
            const player = allPlayers.filter(item => item.id == action.payload)[0];
            return { ...state, player, isLoading: false }
        case GET_PLAYERS:
            return { ...state, players, isLoading: false }
        case GET_ALL_PLAYERS:
            return { ...state, players: allPlayers, isLoading: false }
        default:
            return state;
    }
}