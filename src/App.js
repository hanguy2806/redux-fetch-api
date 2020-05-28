import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import updateMovies from './store/actions/updateMovies';
import fetchUsers from './store/actions/fetchUsers';

function App(props) {
  return (
    <div className="App">
      REDUX MOVIE LIST
  <p>{props.movies.name}</p>
  <button onClick={props.updateMovies}>NEW MOVIE</button>
    <br/>

    {props.users.length === 0 ?
        <p>THERE ARE NO USERS</p> :
    props.users.map(user=>
      <div key={user.id}>
    <p>{user.first_name}</p>
    <b>{user.email}</b></div>)}
    <br/>
    <button onClick={props.fetchUsers}>FETCH USERS</button>
    </div>
  );
}


const MapStateToProps=(state)=>{
  return {
    movies: state.movies,
    users: state.users
  }
}
const MapDispatchToProps=(dispatch)=>{
  return {
    updateMovies: ()=>dispatch(updateMovies),
    fetchUsers: ()=>dispatch(fetchUsers)
  }
}

export default connect(MapStateToProps,MapDispatchToProps)(App);
