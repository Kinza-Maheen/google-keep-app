import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from './CreateNote';
import Note from "./Note";

const App=()=>{
//storing,changing data or changing varible useSate is used;
const [addItem,setAddItem]=useState([]);

    const addNote =(note)=>{
        setAddItem((preData)=>{
            return [...preData,note]
        })
    }
    const onDelete=(id)=>{
        // alert('i amclicked');
        setAddItem((olddata)=>(
           olddata.filter((currdata,indx)=>{
                console.log('index,id:: ', id,'::', indx)
                return indx!=id;
            })
            
        ))
    }
    return(
        <>
        <Header/>
        <CreateNote
            passNote={addNote}
        /> 
            {addItem.map((val,index)=>{
                return <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                />
            }) }
        
        <Footer/>
        </>
    )
}

export default App;