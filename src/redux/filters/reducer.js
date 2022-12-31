import {COLORCHANGED, STATUSCHANGED} from './actionTypes'

const initialStart = {
    status: 'ALL',
    colors: [],
}

const reducer = (state = initialStart, action) => {
    switch(action.type) {
    case STATUSCHANGED:
        return {
            ...state,
            status: action.payload
        };

    case COLORCHANGED:
        const { color, changeType } = action.payload;
        switch (changeType) {
            case 'added':
                return {
                    ...state,
                    colors: [
                        ...state.colors,
                        color
                    ]
                }
            case 'remove':
                return {
                    ...state,
                    colors: state.colors.filter(existing => existing !== color)
                }
        
            default:
                return state;
        }

    default:
        return state;
    }
}
 
export default reducer;