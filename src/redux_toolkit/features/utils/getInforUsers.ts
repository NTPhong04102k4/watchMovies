import React from "react";
import { useSelector, UseSelector } from "react-redux";
type GET_VALUE_USER ={
        name:string,
        sex:0|1
}

const GET_VALUE_USER=useSelector((state:any)=>state?.login);
export {GET_VALUE_USER}