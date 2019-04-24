import {FORM_DATA} from './types';


export function getName(name) {
    return function(dispatch) {
        dispatch({
            type: FORM_DATA,
            payload: name
        })
    }
}