import React from 'react'
import { useEffect,useState } from 'react'
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import Resource from './Resource'
import '../resources.css'
function Resources(props) {
    const[value,setValue]=useState('')
    const[lemon,setLemon]=useState('')
    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
            .then((response)=>{
                const result=response.data
                setValue(result)
            })
    },[])
    useEffect(()=>{
      value.data&&value.data.forEach((ele)=>{
            const a=document.getElementById(ele.id)
            if(a){
            a.style.backgroundColor=ele.color
      }})
    },[value])
    return (
        <div className='main'>
            {
              (value.data&& !lemon)&&value.data.map((ele,i)=>{
                    return (<div onClick={()=>setLemon(ele.id)} id={ele.id}class='items'><Link to={`/resources/${ele.id}`} id={i}><p>{ele.name}</p><p>{ele.year}</p></Link>
                    </div>)
                })
            }
            <Route path='/resources/:id'  render={()=>{            
                        return <Resource flag={lemon}/>
                    }}/>
        </div>
    )
}

export default Resources
