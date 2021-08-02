import React, {useEffect , useState} from 'react'
import './covid.css'


const Covid = () => {

        const [data,setData]=useState([])

        const getCovidData = async () =>{
        try {
            const res = await fetch('https://api.covid19india.org/data.json'); 
            const actualData = await res.json();
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0])
        } catch (err) {
            console.log(err);
        }
       }
       
    useEffect(() => {
      getCovidData();
    }, []);

    return (
        <>
        <section>
            <h1 class="blinking">🔴Live</h1>
            <h2>Covid-19 Tracker</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <p><span>Our</span>Country</p>
                        <p>India</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card1">
                        <p><span>Total</span>Confirmed</p>
                        <p>{data.confirmed}</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card2">
                        <p><span>Total</span>Recovered</p>
                        <p>{data.recovered}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card3">
                        <p><span>Total</span>Active</p>
                        <p>{data.active}</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card4">
                        <p><span>Total</span>Death</p>
                        <p>{data.deaths}</p>
                    </div>
                </div>
                <div class="column">
                    <div class="card5">
                        <p><span>Last</span>Updated</p>
                        <p>{data.lastupdatedtime}</p>
                    </div>
                </div>
            </div>
           
        </section>
           
        </>
    )
}

export default Covid
