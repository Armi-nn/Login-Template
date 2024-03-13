import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function LoginRgister() {
    const [pageType,setPageType]=useState('login')
    const handelPageType=()=>{
        setPageType(pageType=='login'?'register':'login')
    }
  return (
    <>
    {pageType=='login'?<Login handelPageType={handelPageType}/>:<Register handelPageType={handelPageType}/>}
    </>
  )
}
