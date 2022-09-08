import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { ReactDOM } from "react";

import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { List } from "@mui/material";

const Detail = () => {
  const [details, setDetail] = useState([]);
  const [count, setCount] = useState(0);
  const [ele, setele] = useState([]);
  const { pageno, playerId } = useParams();
  const params = useParams();

  // console.log(params.playerId);
  const navigate = useNavigate();
  const previous = () => {
    navigate(-1);
  };

  const location = useLocation()

  console.log(location.state)

  // const getNavigatedData =()=>{
    

  // }






  // const pageno =2
  // const playerId = id
  // console.log(pageno);
  const player = parseInt(playerId);
  // console.log(typeof player);
  // console.log(player);

  useEffect(() => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players/?page=${pageno}&per_page=${25}`
      )
      .then((res) => {
        setDetail(res.data.data);
      });
  }, [pageno]);

  const nextFunc = () => {
    const Pid = details.map((item, index) => item.id);
    // console.log(Pid[5])
    // console.log(id);
    // console.log(playerId)
    const current_id = details.findIndex((item) => item.id == playerId);
    // console.log(current_id);
    // console.log(Pid[current_id+7])
    setCount((item) => item + 1);
    // console.log(player);

    const element = Pid[current_id + 1];
    if (current_id == 24) {
      return 0;
    }
    params.playerId = element;

    navigate(`/detail/${pageno}/${params.playerId}`)

    // console.log(params.playerId);
    // console.log(typeof element);
  };

  const navigateTo=()=>{
    navigate(`/detail/${pageno}/${playerId}`)
  }

  const navNEXT =()=>{
    details
    .filter((item) => {
      if (item.id == params.playerId) {
        return item;
      }
    })
    .map((item) => {
  
  return item
  
    }).forEach(item => navigate(`/detail/${pageno}/${item.id}`) 
    ).setDetail(item=>item.id)

  
  }


  // console.log(player);

  const prevFunc = () => {
    // console.log("prev");
    const Pid = details.map((item, index) => item.id);
    //    console.log(Pid[1])
    // console.log(params.id);
    const current_id = details.findIndex((item) => item.id == params.playerId);
    // console.log(current_id);

    setCount((item) => item - 1);
    // console.log("hello" + count);

    // const index = current_id + count;
    // console.log(index);

    if (current_id == 0) {
      return 0;
    }

    params.playerId = Pid[current_id - 1];

    navigate(`/detail/${pageno}/${params.playerId}`)

    //   const C_id = details.filter((item,index)=>{
    //         if(item.index==current_id+count){
    //             return console.log(item.id)
    //         }
    //     })
    //     console.log(C_id)
  };

  const Togallery = ()=>{
    navigate("/")

  }

  const ToList = ()=>{
    navigate(`/list`)

  }

  // window.addEventListener('keyup',(e)=> {
    // if(e.keyCode == 39){
      // console.log("hello")
      // nextFunc()
    // }
  //   else if(e.keyCode ==37){
  //     console.log("bye")
  //     prevFunc()
  //   }
    // return 0
  // })

  // console.log("hello");
  // console.log(playerId)
  return (
    <>

      <div className="p_detail">
        <div className="btn_container">


        <Button variant="contained" onClick={Togallery}>
            TO-Gallery
          </Button>
{/* 
          <Button variant="contained" onClick={navNEXT}>
            next
          </Button> */}
          
          

          <Button variant="contained" onClick={previous}>
            Move-Back
          </Button>
          <br/>
          {/* <Button variant="contained" onClick={navigateTo}> TO-PLAYER-PAGE</Button> */}

          <Button variant="contained" onClick={ToList}>
            TO-List
          </Button>
          {/* <span className="btn"  onClick={navigateTo}></span> */}
        </div>

        <div className="grid1">
          {details
            .filter((item) => {
              if (item.id == params.playerId) {
                return item;
              }
            })
            .map((item) => {
              const { id, first_name, team, position, last_name } = item;
              return (
                <>
                <div>
                  {/* <button className="btn" onClick={prevFunc}> */}
                    <span className="btn"  onClick={prevFunc}>
                    
                    {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
                    
                PREVIOUS
                    </span>
                    
                    </div>

                    
                  {/* </button> */}
                  
                  <div className="details" key={details.id}>
                    <div className="detail_box" key={details.id}>


                <div className="head" key={details.id}>
                   <h1 className="pname">
                      {first_name.toUpperCase()} {last_name.toUpperCase()} 
                    </h1>
                </div >
                <div className="des_box" key={details.id}>

                <span className="idid" > ID : {id}</span>
{/* 
                    <h1 className="pname">
                      {first_name.toUpperCase()} {last_name.toUpperCase()}
                    </h1> */}
                    <p className="description">
                      {/* {" "} */}
                      {`I play the position ${position}, I play for ${
                        team.name
                      }, of city ${
                        team.city
                      } and my division is ${team.division}`}
                    </p>
                  </div>
                  </div>
                  </div>
                  <div>
                  <span className="btn" onClick={nextFunc}>
                    NEXT
                  </span>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Detail;
