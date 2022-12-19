import { useStore } from "../../store/store";
import AppNavBar from "../../components/appnavbar.jsx";
import React, {  useEffect, useState } from "react";
import axios from "axios";
import ClubCard from "../../components/clubs/clubCard"
import "../clubs/clubs.css"

function ClubsPage() {

  const [ClubsData, setClubData] = useState({});
  const [Loading, setLoading] = useState(false);

  const getClubs = async() =>{
    await axios.get(`${process.env.REACT_APP_URL}/api/clubs/getClubs`).then(response =>{
      console.log("response: ", response);
      setClubData(response.data);
      setLoading(true);

    }).catch(err => console.log(err))

  };

  useEffect(()=> {
    getClubs();
  }, [])
  console.log(ClubsData);
    return(
        <div>
            <AppNavBar/>
            <div>
                <h1 style={{textAlign: "center", margin: "2em 0em 1em 0em"}}>Clubs Page </h1>
            </div>
            <div className="clubs-body">
            { ClubsData ?
                    (ClubsData.length > 0 ?
                      ClubsData.map((item) => {
                        
                        return(
                          <div key={item.name}> 
                            <ClubCard clubName = {item.name} >  </ClubCard>
                          </div>
                        );
                      }) : <></>)            :<></>
                   
                  }
            </div>
        </div>
    )
}
export default ClubsPage
