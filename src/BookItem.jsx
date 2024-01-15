import React, { useEffect } from "react";
import { useState } from "react";
import "./BookItem.css"


export default function BookItem(props){
    const [isExpanded, setIsExpanded] = useState(false);
    const isbn = props.isbn;

    const buttonOnClick = () => {
        setIsExpanded(!isExpanded);
    };

    const [itemInfo, setItemInfo] = useState(null);

    useEffect(() => {
        const URL = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=AIzaSyDoxEpJhcIJL7qvI_WO0rYk71KuO4AZ2ws`;

        fetch(URL).then((response) => response.json()).then((response) => {
            const volumeInfo = response.items[0].volumeInfo;
            setItemInfo({
                title: volumeInfo.title,
                author: volumeInfo.authors[0],
                description: volumeInfo.description
            })
        }).catch("error loading info" );
    }, []);

    return ( 
        itemInfo && (

            <div className="card"> 
                <div className="wrap">
                    <div>{itemInfo.title + " by " + itemInfo.author}</div>
                    <button onClick={buttonOnClick}> 
                        <img src="/button_style.svg" style={{ width: '20px', height: '20px'}}/> 
                    </button>
                </div>
                {
                    isExpanded && (
                        <div>
                            {itemInfo.description}
                        </div>
                    )
                }
            </div>

        )
    )
}