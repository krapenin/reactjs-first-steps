import React from "react";

export default function StatusResult(data) {
    const {softwareCasa, softwareIdealista, status, casaActiveProperties, casaInactiveProperties, casaTotalProperties, office} = data.data;
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Office</th>
                <th>Software Casa</th>
                <th>Software Idealista</th>
                <th>Status of process</th>
                <th>Active properties in casa</th>
                <th>Inactive properties in casa</th>
                <th>Total properties in casa</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{office}</td>
                <td>{softwareCasa}</td>
                <td>{softwareIdealista}</td>
                <td>{status}</td>
                <td>{casaActiveProperties}</td>
                <td>{casaInactiveProperties}</td>
                <td>{casaTotalProperties}</td>
            </tr>
            </tbody>
        </table>
    )
}