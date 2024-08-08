import React from "react";
import { useParams } from "react-router-dom";

function user() {
    const {userid} = useParams()
    return(
        <div className="bg-gray-600 text-white text-3xl p-4 ">user: {userid}</div>
    )
}

export default user