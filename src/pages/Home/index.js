import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';
//https://api.themoviedb.org/3/movie/now_playing?api_key=3b19b5ebcb67c869c82964a7885df5ec&language=pt-BR


function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: process.env.REACT_APP_API_KEY,
                    language: "pt-BR",
                    page: 1,
                }
            })
            //console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0,20));
            setLoading(false);
        }

        loadFilme();
    }, [])

    if (loading){
        return(
            <div className="loading">
                <h2>carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=> {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;