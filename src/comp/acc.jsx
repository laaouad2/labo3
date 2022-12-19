import React from 'react'
import { useParams , useNavigate } from 'react-router-dom';







const Home = () => {
    const {id} = useParams();
    const navigate = useNavigate();


    
    const toCounter = () => {
        navigate('/counter');
    }
    const toReverse = () => {
        navigate('/reverse');
    }



    return(
       <>
       <div>
        <button className='Home' onClick={toCounter}>Counter Lab </button>
        </div>
        <div>
        <button className='Home' onClick={toReverse}> Reverse string Lab </button>
    
    </div>
    </> 
    )
}

export default Home