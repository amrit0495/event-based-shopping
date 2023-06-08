import { StylesContext } from '@material-ui/styles';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { eventSelection, results, themeBasedProducts } from '../constants/constants';
import './results.css';

const Results = ({value, radioValue, counter}) => {
    const [res, setResult]=useState([]);
    const [page, setPage]=useState(0);
    const [showPackage, setShowPackage]=useState([]);
    useEffect(()=>{
        const result = eventSelection.find(key => key.name === radioValue).theme;
        setResult(results[result]);
    },[]);

    const handleOnClick = (item) => {
        setPage(1);
        const themeID = themeBasedProducts[item.id];
        setShowPackage(themeID);
    }
    return <div>
        {page===0 && <div className='center'>
            <p>Results based on your Options Selected</p>
            {value.getDate()}{radioValue}{counter}
        </div>}
        {page===0 && 
        <div className='scroll-div'>
             {res.map((item, index) => {
            return <div className='result-div' key={index} onClick={()=>handleOnClick(item)}>
                <p>Theme: {item.theme}</p>
                <img className='themeCSS' src={item.image} alt="image" />
            </div>
        })}
        </div>
           }

        {page===1 && <div className='scroll-div'>
            <div>Your cart Value</div>
            <div>Items will get delivered in next 24 hours of your selected date</div>
            {   
                showPackage.map(item => {
                    return Object.keys(item).map(key => {
                        return <div className='item-css'>
                        <p>{item[key].name}</p>
                        <img className='themeCSS' src={item[key].image} alt="image" />
                        <div><button>+</button> {item[key].count} <button>-</button></div>
                        
            </div>

                    })  
                })
            }

            </div>}
    </div>;
}

export default Results;