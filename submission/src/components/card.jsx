import React from "react";
import './cardStyle.css'

function Card({ id, title, date, content, onDelete, onArchive, archive }) {
    return(
        <>
            <div className="card">
                <h1 className="title">{title}</h1>
                <h5 className="date">{date}</h5>

                <p className="content">{content}</p>

                <button onClick={() => onDelete(id)}>
                    Delete
                </button>


                <button onClick={() => onArchive(id)}>
                    {archive ? "Munculkan" : "Arsipkan"}
                </button>
            </div>
        </>
    )
}

export default Card