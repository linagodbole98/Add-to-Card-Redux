import { ADD_TO_CART,REMOVE_TO_CART } from '../constants'
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data} //adding new items
            ]
            case  REMOVE_TO_CART:
            console.warn("reducer",action)
            state.pop()//item remove ho rha
            return [
                ...state,
               
            ]
            // console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        default:
            return state
    }


}
