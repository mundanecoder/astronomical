import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Detail = () => {
  const [details, setDetail] = useState([]);
  const [count, setCount] = useState(0);
  const [ele,setele] = useState([])
  const {pageno,playerId} = useParams()
  const params = useParams()

  
  

  console.log(params.playerId)
  const navigate = useNavigate();
  const previous = () => {
    navigate(-1);
  };
  // const pageno =2
  // const playerId = id
  console.log(pageno)
  const player= parseInt(playerId)
  console.log(typeof(player))
  console.log(player)




  useEffect(() => {
    axios
    .get(`https://www.balldontlie.io/api/v1/players/?page=${pageno}&per_page=${25}`)
    .then((res) => {setDetail(res.data.data);
      }
      
    );
  }, [pageno]);


  const nextFunc = () => {
    
    const Pid = details.map((item, index) => item.id);
    // console.log(Pid[5])
    // console.log(id);
    // console.log(playerId)
    const current_id = details.findIndex((item => item.id == playerId));
    // console.log(current_id);
    // console.log(Pid[current_id+7])
    setCount(item => item + 1);
    console.log(player)
    
    const element =(Pid[current_id+1])
    // if (current_id == 24) {
    //   return 0;
    // }
    params.playerId = element
    console.log(params.playerId)
    console.log(typeof(element))    

  };

  console.log(player)

  const prevFunc = () => {
    console.log("prev")
    const Pid = details.map((item, index) => item.id);
    //    console.log(Pid[1])
    // console.log(params.id);
    const current_id = details.findIndex((item => item.id == params.playerId));
    // console.log(current_id);

    setCount(item=> item - 1);
    // console.log("hello" + count);

    // const index = current_id + count;
    // console.log(index);

    if (current_id == 0) {
      return 0;
    }

    params.playerId = Pid[current_id - 1];

    //   const C_id = details.filter((item,index)=>{
    //         if(item.index==current_id+count){
    //             return console.log(item.id)
    //         }
    //     })
    //     console.log(C_id)
  };

  // console.log("hello");
  // console.log(playerId)
  return (
    <>
      <div className="btn_container">
        <Button variant="contained" onClick={previous}>
          To-Gallery-view
        </Button>
      </div>

      <div className="grid1">
        {
          details
            .filter((item) => {
              if (item.id ==params.playerId) {
                return item;
              }
            })
            .map((item) => {
              const { id, first_name, team, position, last_name } = item;
              return (
                <>
                  <button className="btn" onClick={prevFunc}>
                    previous
                  </button>
                  <div className="details">
                    <h1 className="pname">
                      {first_name.toUpperCase()} {last_name.toUpperCase()}
                    </h1>
                    <p className="description">
                      {" "}
                      {`I play the position ${position}, i play for ${JSON.stringify(
                        team.name
                      )} ,of city ${JSON.stringify(
                        team.city
                      )} and my division is ${JSON.stringify(team.division)}`}
                    </p>
                  </div>
                  <button className="btn" onClick={nextFunc}>
                    next
                  </button>
                </>
              )
            })
          
          }
      </div>
    </>
  )
}

export default Detail;
