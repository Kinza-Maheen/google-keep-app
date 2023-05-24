import React from "react";
import {DeleteOutlined} from '@ant-design/icons';

const Note=(props)=>{

const deleteNode=()=>{
    props.deleteItem(props.id);
}

    return(
        <>
        <div className="note">
            <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <div className="more-container">
            <DeleteOutlined className="more" onClick={deleteNode} />
            </div>
        </div>
        </>
    )
}

export default Note;