import React from "react";
import AppNavBar from "../../components/appnavbar.jsx";
import {useState,useEffect} from "react"
import axios from "axios";
import MatchDataPage from "./match-data.jsx";
function MatchImportancePage() {
    const [currentweek, setcurrentweek] = useState({});
    const[loading,setLoading] = useState(false);
  
    const getWeek = async()=>{
      await axios.get(`${process.env.REACT_APP_URL}/api/weeks/getWeek`).then(res=>{
        setcurrentweek(res.data.week_no);
        setLoading(true);
    
      }).catch(err => console.log(err))
    };
    useEffect(() => {
        getWeek();
    }, [])
    //console.log(currentweek);
    return (
      <div>
        <AppNavBar/>
        {loading ?
        <div className="mt-5">
            <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Order of Importance Week {currentweek}</h1>
            <div className="row">
              <div className="col-8"> 
                <MatchDataPage  Week={currentweek}/>
              </div>
              <div className="col-4"> 
                <MatchDataPage  Week={currentweek}/>
              </div>
            </div>
        </div>
        :
        <p>Loading...</p>
        }
      </div>
    );
  }
  export default MatchImportancePage;