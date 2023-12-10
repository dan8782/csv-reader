import React, {useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { parseCSV,displayCustomAlert } from '../utils';
import './App.css'

function TablePage() {
    const [data, setData] = useState([]);
    const [activeRow, setActiveRow] = useState(null);
    const [customAlert, setCustomAlert] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('csvData')) || [];
        setData(localStorageData.slice(1)); //slice убирает первую строку с хедером(name,phone etc)
    }, []);

    // подсветка по кликнутой строке
    function handleClick(index) {
        setActiveRow(index);
    }

    async function handleFileChange(event) {
        const file = event.target.files?.[0];
        fileInputRef.current.value = ''; // TODO УБРАТЬ ЭТО ГОВНО!!!!!!!
        if (file && file.name.endsWith('.csv')) {
            try {
                let info = await parseCSV(file);
                localStorage.setItem('csvData', JSON.stringify(info));
                console.log(info);
                navigate("/tableview");
            } catch (error) {
                console.error('Error parsing CSV:', error);
                displayCustomAlert('Error parsing CSV', setCustomAlert);
            }
        } else {
            displayCustomAlert('Неправильный формат файла, разрешены только файлы .CSV', setCustomAlert);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className='page-table-view'>
                        {customAlert}
            <button className='btn btn-table' onClick={handleButtonClick}>
                <div className='btn__title'>
                    Загрузить новый файл
                </div>
            </button>
            <input
                        type="file"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
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
                            <tr key={index} onClick={() => handleClick(index)} className={activeRow === index ? 'active' : ''}>
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