import React from "react";
import './hsearch.css';
import { useEffect, useState } from "react";

let API_Key =  "3b19b5ebcb67c869c82964a7885df5ec";
let base_url = "https://api.themoviedb.org/3";
let url;

const HSearch = ()=>{
    const [search,setSearch]=useState();

    const searchMovie=(evento)=>{
        if (evento.key == "Enter"){

        }
    }
    return (
        <>
        {/* <form>
            <div className="input-search">
                <input type="text" placeholder="ex:Matriz" className="input-text"></input>
                <button>Submite</button>
                
            </div>
        </form> */}
        </>
    )
}
export default HSearch;