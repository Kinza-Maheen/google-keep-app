import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";


//for storing  data
const CreateNote=(props)=>{
const [expand,setExpand]=useState(false);

    const [note,setNote]=useState({
        title:'',
        content:''
    });
    const InputEvent=(event)=>{
        //obj destructuring
        const {name,value}=event.target;

        //when update setdata using spread operator
        setNote((preVal)=>{
            return{
             ...preVal,
            [name]:value
            //name=title or content..when match and return the actual value
        }
        })
    }
    const addEvent =()=>{
        props.passNote(note);
        setNote({
            title:'',
            content:''
        })
    }

    const expandIt=()=>{
        setExpand(true);

    }

    return(
        <>
        <div className="main_note">
          
            <form>
            {expand?
                <input 
                type="text" 
                name="title"
                value={note.title}
                onChange={InputEvent} 
                placeholder="Title" 
                autoComplete="off" /> : null}
                <textarea 
                rows='' 
                columns=''  
                name="content" 
                value={note.content} 
                onChange={InputEvent} 
                placeholder="Write A Note..."
                onClick={expandIt}></textarea>
                {expand?
                <div className="plus">
                <PlusOutlined className="plus_sign" onClick={addEvent}/>
                </div>:null}
            </form>
        </div>
        </>
    )
}

export default CreateNote;