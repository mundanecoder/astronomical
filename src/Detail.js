import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import {Button} from "@mui/material";
import { useParams } from "react-router-dom";
import { List } from "@mui/material";

const Detail = () => {
  const [details, setDetail] = useState([]);
  const [team,setTeam] = useState([])
  const [count, setCount] = useState(0);
  const { pageno, playerId } = useParams();
  const [person , setPerson] = useState(playerId)
  const [pageNO, setpageNO] = useState(parseInt(pageno));
  const params = useParams();

  var i =0;

  

  console.log(params.playerId);
  const navigate = useNavigate();
  const previous = () => {
    navigate(-1);
  };

  const location = useLocation()
  console.log(typeof( pageNO))

  // var pageNO=pageno
  console.log(parseInt(pageno))

  // console.log(location.state)

  const player = parseInt(playerId);
  // console.log(typeof player);
  // console.log(player);
  console.log("hello")

  useEffect(() => {

    axios
    .get(`https://www.balldontlie.io/api/v1/players/${playerId}` )
    .then((res1)=>{
      setPerson(res1.data)
      setTeam(res1.data.team)
      console.log(res1.data)
      console.log(res1.data.team)
    });





    axios
      .get(
        `https://www.balldontlie.io/api/v1/players/?page=${pageno}&per_page=${25}`
      )
      .then((res) => {
        setDetail(res.data.data);
        // console.log("hello")
        console.log(res.data.data)
      });


     


  }, [pageno,params.playerId]);

  const nextFunc = () => {
    const Pid = details.map((item, index) => item.id);
    console.log(Pid[5])
    // console.log(Pid);
    // console.log(playerId)
    const current_id = details.findIndex((item) => item.id == playerId);
    // console.log(current_id);
    // console.log(Pid[current_id+7])
    // setCount((item) => item + `1`);
    console.log(Pid[i=i+1]);

    const element = Pid[ (current_id ==24 ? Pid.indexOf(Pid[i++]) : current_id + 1)];
    console.log(element)
    


    // if (current_id == 26) {
    //   return 0;
    // }


    if(current_id==24){

      // set
      setpageNO(item=>item+1)
      // pageNO = pageNO+1;

      console.log(pageNO)
    }

    console.log(current_id)

    params.playerId = element;

    navigate(`/detail/${ current_id ==24? pageNO+1 :pageNO}/${params.playerId}`)

    console.log(playerId);
    // console.log(typeof element);
  };

  // const navigateTo=()=>{
  //   navigate(`/detail/${pageno}/${playerId}`)
  // }

  // const navNEXT =()=>{
  //   details
  //   .filter((item) => {
  //     if (item.id == params.playerId) {
  //       return item;
  //     }
  //   })
  //   .map((item) => {
  
  // return item
  
  //   }).forEach(item => navigate(`/detail/${pageno}/${item.id}`) 
  //   ).setDetail(item=>item.id)

  
  // }


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
console.log(person)


  return(
    <>
    <div className="p_detail">

    <div className="btn_container">


       <Button variant="contained" onClick={Togallery}>
          TO-Gallery
        </Button>

         
          
          

         <Button variant="contained" onClick={previous}>
        Move-Back
          </Button>
        <br/>
                 {/* <Button variant="contained" onClick={navigateTo}> TO-PLAYER-PAGE</Button> */}

         <Button variant="contained" onClick={ToList}>
           TO-List
          </Button>
          
        </div>

  <div className="grid1">
                <div>
                
                  <span className="btn"  onClick={prevFunc}>
                    PREVIOUS
                    </span>
                    
                </div>

                <div className="details">
                <div className="detail_box" >

                <div className="head"> 
                 <h1 className="pname">
                     {person.first_name} {person.last_name} 

                  </h1>
              </div >

              <div className="des_box">

                 <span className="idid" > ID : {person.id}</span>
                    <h1 className="pname">
                    
                    </h1> 
                      <p className="description">
                  {" "}
                     {`I play the position ${person.position}, I play for ${
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
                

  </div>
    </div>
    </>
  )
};

export default Detail;
