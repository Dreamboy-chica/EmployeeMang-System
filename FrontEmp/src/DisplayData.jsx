import React from 'react';
import { useLocation } from 'react-router-dom';

const DisplayData = () => {
    const location = useLocation();
    const { data } = location.state || { data: null };

    return (
        <div>
            {data ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Dept</th>
                            <th>Sal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data._id}</td>
                            <td>{data.name}</td>
                            <td>{data.dept}</td>
                            <td>{data.sal}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

export default DisplayData;
