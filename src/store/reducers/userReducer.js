import {FETCH_USERS} from '../actions/fetchUsers';

const userReducer=(state={}, action)=>{
   
    switch(action.type){
        case FETCH_USERS:
            fetch('https://reqres.in/api/users')
            .then(res=>res.json())
            .then(res=>res.data=action.payload)
            return action.payload;
        default: 
        return state;
    }
}
export default userReducer;