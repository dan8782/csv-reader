import React, { useEffect, useState } from 'react';
import './App.css'

function TablePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('csvData')) || [];
        setData(localStorageData.slice(1)); //slice убирает первую строку с хедером(name,phone etc)
        console.log(localStorageData)
    }, []);

    return (
        <div className='page-table-view'>
            <button className='btn btn-table'>
                <div className='btn__title'>
                    Загрузить новый файл
                </div>
            </button>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="name-address"><div className='th__text'>Имя</div></th>
                            <th className="phone"><div className='th__text'>Номер телефона</div></th>
                            <th className="email"><div className='th__text'>Email</div></th>
                            <th className="bday"><div className='th__text'>Дата рождения</div> </th>
                            <th className="name-address"><div className='th__text'>Адрес</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="name-address">
                                    <div className='t__text'>
                                        {row[0]}
                                    </div>
                                </td>
                                <td className="phone">
                                    <div className='t__text'>
                                        {row[1]}
                                    </div>
                                </td>
                                <td className="email">
                                    <div className='t__text'>
                                        {row[2]}
                                    </div>
                                </td>
                                <td className="bday">
                                    <div className='t__text'>
                                        {row[3]}
                                    </div>
                                </td>
                                <td className="name-address">
                                    <div className='t__text'>
                                        {row[4]}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default TablePage;