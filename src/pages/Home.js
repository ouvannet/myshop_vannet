import React, {useState, useEffect} from 'react';
import axios from "axios";
import fireDb from "../firebase";
import {Link} from "react-router-dom";
import Telegram from 'telegram-send-message';
// import {Form, useNavigate, useParams} from "react-router-dom";
import "./Home.css";
import { set } from 'firebase/database';
import { toast } from 'react-toastify';

const Home = () => {

  // const {id}=useParams();
  const [data, setData]=useState({}); 
  const [disable, setDisable] = React.useState(false);
  const [count,setCount]=useState(0);
  const [total,settotal]=useState(0);
  const [state, setState] = React.useState({});
  const [arr, setArr] = React.useState([]);
  console.log(state);


  const boots=(tota)=>{
    axios({
      method: 'post',
      url: `https://api.telegram.org/bot5757025610:AAEUWeXpkq2HtgP_kRh_xJqbMmlRaVQREXQ/sendMessage`,
      data:{chat_id:-825548717,text: "\nTotal=> "+tota},
    })
    
  }
  window.onbeforeunload = function (e) {
    localStorage.clear();
  };    
  
  console.log(data);
  // console.log(count);
  // console.log(id);
  const handleIncrement=(pri,id,name,quan,cou)=>{
    setCount(count+1);
    var pri=parseInt(pri);
    console.log(cou);
    
    var gget=localStorage.getItem(name);
    var vall=parseInt(gget);
    if(vall>=0){
      
    }else{
      vall=0;
      
    }
    localStorage.setItem(name, vall+=1);
    
    const initialState = {
      count: 1,
      name: name,
      price: pri,
      quantity: 1,
      img:""
    }
    
    setState({...state, initialState});
    
    settotal(total+pri);
    localStorage.setItem("total",total);
    var arrr=initialState;
    console.log(arrr.name);
    console.log(arrr.price);

    arr.push(initialState);

    console.log(`price/${id}`);
    // fireDb.child(`price/${id}`).set(initialState, (err) => {
    //   if(err){
    //     toast.error(err);
    //     alert();
    //   }else{
      //     toast.success("Contact Added Successfully");
    //   }
    // });
  }
      console.log(state);
      console.log(arr);
      console.log(arr[1]);
  const handleDecrement=(pri,id,name,quan,cou)=>{
    setCount(count-1);
    var pri=parseInt(pri);

    var gget=localStorage.getItem(name);
    var vall=parseInt(gget);
    if(vall>=0){
      
    }else{
      vall=0;
      
    }
    localStorage.setItem(name, vall-=1);

    settotal(total-pri)

    for (let i = 0; i < arr.length; i++) {
      if(arr[i].name==name){
        
        console.log(arr[i]);
        arr.splice(i,1);
        

        break;
      }
      
    }
    console.log(`price/${id}`);
    // console.log(initialState);
    // fireDb.child(`price/${id}`).set(initialState, (err) => {
    //   if(err){
    //     toast.error(err);
    //     alert();
    //   }else{
    //     toast.success("Contact Added Successfully");
    //   }
    // });
  }
  useEffect(()=>{
    fireDb.child("price").on("value", (snapshot)=>{
      console.log(snapshot);
      if(snapshot.val()!==null){
        setData({...snapshot.val() });
      }else{
        setData({});
      }
    });
    return()=>{
      setData({});
    }
  },[]);

  const onDelete=(id)=>{
    if(window.confirm("Are you sure to delete it!")){
      fireDb.child(`contacts/${id}`).remove((err)=>{
        if(err){
          toast.error(err)
        }else{
          toast.success("Contact success delete!");
        }
      })
    }
  }
  return (
    <div className='out_card'>
      {count !==0 ?(
                    <button className='btn btn-view' onClick={()=>boots(total)}>{count}= ${total}</button>
                ): (
                    ""
                )}
        {/* <table className='styled-table'>
            <thead>
              <tr>
                <th style={{textAlign:"center"}}>No.</th>
                <th style={{textAlign:"center"}}>Name</th>
                <th style={{textAlign:"center"}}>Email</th>
                <th style={{textAlign:"center"}}>Contact</th>
                <th style={{textAlign:"center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              
              {Object.keys(data).map((id, index)=>{
                
                return(
                  <tr key={id}>
                    <th scope='row'>{index+1}</th>
                    <td>{data[id].name}</td>
                    <td>{data[id].email}</td>
                    <td>{data[id].contact}</td>
                    <td>
                      <Link to={`/update/${id}`}>
                        <button className='btn btn-edit'>Edit</button>
                      </Link>
                      <button className='btn btn-delete' onClick={() => onDelete(id)}>Delete</button>
                      <Link to={`/view/${id}`}>
                        <button className='btn btn-view'>View</button>
                      </Link>
                    </td>
                  </tr>
                );
              })};
            </tbody>
        </table> */}
        {Object.keys(data).map((id, index)=>{
          
                return(
                
                  <div className='card1'>
                      <div className='quan1'>{data[id].quantity-localStorage.getItem(data[id].name)}</div><div className='quan2'>{data[id].price} $</div>
                    <div className='card2' style={{"background":`url(${data[id].url})`,"background-size":"cover"}}>
                        {/* <img  height="100%" src={data[id].url}></img> */}
                      </div>
                      <span>{data[id].name}</span><br />
                      <div className='f-btn'>
                        {localStorage.getItem(data[id].name)< parseInt(data[id].quantity) ?(
                          <button className='btn btn-view' onClick={() => handleIncrement(data[id].price,id,data[id].name,data[id].quantity,data[id].count)} >+</button>
                        ): (
                          ""
                        )}
                        {localStorage.getItem(data[id].name)>0 ?(
                            <button className='btn btn-view' onClick={() => handleDecrement(data[id].price,id,data[id].name,data[id].quantity,data[id].count)}>-</button>
                        ): (
                            ""
                        )}
                    </div>
                  </div>
                )

              })}
    </div>
  )
}

export default Home