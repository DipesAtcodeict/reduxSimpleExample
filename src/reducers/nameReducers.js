import {FORM_DATA} from '../actions/types';

const initialState = {
    firstname: '',
    lastname: ''
}

export default function(state=initialState, action) {
    switch(action.type){
        case FORM_DATA:
            return{
                firstname: action.payload.firstname,
                lastname: action.payload.lastname
            }
        default:
            return state;
    }
}