import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from '../../services/api'
import './filme.css';
import {toast} from 'react-toastify';

function Filme(){
    const {id} = useParams();
    const navigation = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: process.env.REACT_APP_API_KEY,
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Filme não encontrado")
                navigation("/", {replace: true});
                return;
            })
        }
        loadFilme();

        return () =>{
            console.log('componente desmontado')
        }
    }, [navigation, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeFlix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilmes = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id)
        if (hasFilmes){
            toast.warn("Filme já existe na lista");
            return;
        }
        filmesSalvos.push(filme);
        toast.success(`${filme.title} \n Salvo com sucesso`)
        localStorage.setItem("@primeFlix", JSON.stringify(filmesSalvos));
    }

    if (loading){
        return(
            <div className="filme-info">
                <h1>carregando detahes...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average}</strong>

            <div className="bnt-area">
                <button className="bnt-bnt" onClick={salvarFilme}>Salvar</button>
                <button className="bnt-bnt" ><a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} trailer`}>Trailer</a></button>
            </div>
        </div>
    )
}
export default Filme;