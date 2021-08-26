import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import '../resource.css'
function Resource(props) {
    const {flag}=props
    const[value,setValue]=useState('')
    useEffect(()=>{
        axios.get(`https://reqres.in/api/unknown/${flag}`)
            .then((response)=>{
                const result=response.data
                setValue(result)
            })
    },[])
    useEffect(()=>{
        const a=document.getElementById('item')
        if(a&&value.data){
        a.style.backgroundColor=value.data.color
    }},[value])
    return (
        <div>
            <div id='item' className='item'>
                <p>{value.data&&value.data.name}</p>
                <p>{value.data&&value.data.year}</p>
                <p>pantone Value - {value.data&&value.data.pantone_value}</p>
            </div>
        </div>
    )
}

export default Resource
