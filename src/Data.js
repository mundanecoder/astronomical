import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Players from "./Players";
import { Alert } from "@mui/material";
import { useNavigate, NavLink } from "react-router-dom";
import { Location, useLocation } from "react-router-dom";
import propic from "./card.jpg";
// import List from './List'

const Data = () => {
  var c = 0;

  const [myData, setBalls] = useState([]);
  const [pdata, setData] = useState([]);
  const [count, setCount] = useState([]);
  // const [stickyClass, page_changebar] = useState("");
  const [pageno, setpageno] = useState(1);
  const [playerId,setplayerId] = useState([0]);

  //// using hooks useState to store api data and update accordingly

  function getData(e) {
    setData(e.target.value);
    // const text = "e.taget.value"
  }

  const navigate = useNavigate();
  

    // setplayerId(item=>item = )
    console.log("clicked")

    const change = ()=>{
      myData
          .filter((players) => {
            const { first_name, id, last_name } = players;
            if (pdata == "") {
              return players;
            } else if (
              players.first_name.toLowerCase().includes(pdata.toLowerCase())
            ) {
              return players;
            }
          })
          .map((players) => {
            return players
            
          })
          // const sendData = (e)=>{

          navigate('/detail/${pageno}/${playerId}',{
            state:{
              hi:"hello",
              age:29
            }
          })
        // }
    }



   

  console.log(playerId)

  

  const nextpage = () => {
    if (pageno == 30) {
      //limiting the pages input to display on clicking
      return 0;
    }
    setpageno((item) => item + 1);
    // pageno=pageno+1;

    // console.log(c)
  };
  const prevPage = () => {
    if (pageno == 0) {
      return 0; //limiting the pages input to display on
    }
    setpageno((item) => item - 1);
  };

  // console.log(pageno)

  useEffect(() => {
    axios
      .get(
        `https://www.balldontlie.io/api/v1/players/?page=${pageno}&per_page=${25}`
      )
      .then((res) => setBalls(res.data.data));

    // passed parameters usig useparam hook using route(Pageno)
  }, [pageno]);

  const sortItem = (e) => {
    setBalls((item) => item.sort((a, b) => (a.id > b.id ? 1 : -1)));
    setCount((item) => item - 1);

    /// sorting array with compare method (sort) to display value sorted by specific property
  };
  const page_btn = document.querySelector(".pages_btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      page_btn.classList.add("pages_btn_fixed");
      console.log("hello");

    }
    else if(window.scrollY<180){

      page_btn.classList.remove("pages_btn_fixed");
    }
    return 0;
  });
  const Des = () => {
    /// sorting array with compare method (sort) to display value sorted by specific property

    setBalls((item) => item.sort((a, b) => (a.id > b.id ? -1 : 1)));
    setCount((item) => item - 1);
  };





  // const toComponent = ()=>{
  
    // onClick={toComponent}

  //   Navigate(`/detail/${pageno}/${playerId}`,{state:{pageNo : pageno, say:"hello"}})
  // }

  return (
    <>
    <div className="search_nav">
      <div className="sort">

      <span className="item" onClick={sortItem} placeholder="pos_sort">
      Ascending
        </span>
      </div>

      <div className="find">
        {/* <span className='G_view'><NavLink to={`/detail/${pageno}/${id} `}>Detailed_View</NavLink></span> */}
        {/* <h1>Get Input Box Value</h1> */}
        <input type="text" placeholder="search players" onChange={getData} />
        <h3 className="s_txt">You are looking for {pdata}</h3>

      </div>
        <div className="sort">
       
        <span className="item" onClick={Des}>
        Descending
        </span>
    </div>
      </div>
      <div className="pages_btn">
        <span className="page_change" onClick={prevPage}>
          prev-page
        </span>
        <span className="page_change" onClick={nextpage}>
          next-page
        </span>
      </div>

      

      <div className="grid">
        {myData
          .filter((players) => {
            const { first_name, id, last_name } = players;
            if (pdata == "") {
              return players;
            } else if (
              players.first_name.toLowerCase().includes(pdata.toLowerCase())
            ) {
              return players;
            }
          })
          .map((players) => {
            const { first_name, team, position, last_name } = players;
            // setplayerId(item=>item+1)

            const playerId = players.id;
            // console.log(playerId)

            // <NavLink to="/detail"></NavLink>

            // console.log(pageno)
            return (
              <NavLink to={`/detail/${pageno}/${playerId}`} onClick={change} >
                <div className="profile" key={myData.id}>
                  <div className="data_id">
                    <span className="name_id">{playerId}</span>
                  </div>
                  <div className="data_page">
                    <div className="profile_img">
                      {/* <img className='pro_pic' src=''>{propic}</img> */}
                    </div>
                    <div className="data_name">
                      <span className="name">
                        {first_name.toUpperCase()} {last_name.toUpperCase()}
                      </span>
                      <br />
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
      </div>
    </>
  );
};

export default Data;

{
  /* <p className='pos'>{JSON.stringify(team.city)}</p> */
}
{
  /* <p className='pos1'>{JSON.stringify(team.name)}</p> */
}
{
  /* <p className='pos'>{JSON.stringify(team.)}</p> */
}

{
  /* <p>{team}</p> */
}
