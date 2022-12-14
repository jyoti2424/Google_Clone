import React, { useState } from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from "@material-ui/core"
import { useHistory } from 'react-router-dom';
import { useStateProviderValue } from './StateProvider';
// import { actionType } from './reducer';

function Search({ hideButtons= false}) {
    const [state, dispatch]= useStateProviderValue();
    const [input, setInput]= useState("");
    const history= useHistory();
    const search= (e) =>{
        e.preventDefault();
        dispatch({
            type: "SET_SEARCH_TEAM",
            term: input
        });
        history.push("/search");
    };


  return (
    <form className='search'>
        <div className='search_input'>
            <SearchIcon className='inputIcon' />
            <input  value={input} onChange={(e) =>{setInput(e.target.value)}}  />
            <MicIcon />
        </div>
        {!hideButtons ? (
            <div className='search_btn'>
            <Button  type="submit" className='' onClick={search} variant="outlined">Search</Button>
        </div>
        ): (
            <div className='search_btn'>
            <Button className="btnHidden" type="submit"  onClick={search} variant="outlined">Search</Button>
        </div>
        )}   

    </form>
  );
}

export default Search;