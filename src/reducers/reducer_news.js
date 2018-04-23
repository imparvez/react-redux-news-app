import { FETCH_NEWS } from '../actions/index';

export default function(state = null, action){
	console.log('Action received: ', action);
	switch(action.type) {
		case FETCH_NEWS:
			return [ action.payload ]; // same as state.concat([action.payload.data]);
	}
	return state;
}