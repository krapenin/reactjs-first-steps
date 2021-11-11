import React from "react";

export default function User({id,user,title,completed}) {
    return (
        <>
        <tr>
            <td>{id}</td>
            <td>{user}</td>
            <td>{title}</td>
            <td>{completed}</td>
        </tr>
        </>
    );
}