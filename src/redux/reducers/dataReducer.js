import { ADD_RESULT } from "../actions";

const initialState = {
    listResults: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RESULT:
            return {
                ...state,
                listResults: [action.payload, ...state.listResults],
            };

        default:
            return state;
    }
}
