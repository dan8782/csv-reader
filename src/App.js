import { useNavigate } from "react-router-dom";
import { useRef, useState } from 'react';
import Papa from 'papaparse'
import './App.css';

const CustomAlert = ({ message }) => {
    return (
        <div className="alert">
            <div className="alert__title">{message}</div>
        </div>
    );
};

function App() {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const [customAlert, setCustomAlert] = useState(null);

    async function handleFileChange(event) {
        const file = event.target.files?.[0];
        fileInputRef.current.value = ''; // TODO УБРАТЬ ЭТО ГОВНО!!!!!!!
        if (file && file.name.endsWith('.csv')) {
            try {
                let info = await parseCSV(file);
                console.log(info);
                navigate("/tableview");
            } catch (error) {
                console.error('Error parsing CSV:', error);
                displayCustomAlert('Error parsing CSV');
            }
        } else {
            displayCustomAlert('Неправильный формат файла, разрешены только файлы .CSV');
        }

    };

    // библиотека для парсинга csv to json
    function parseCSV(file) {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                complete: function (results) {
                    resolve(results.data);
                },
                error: function (error) {
                    reject(error);
                },
                encoding: "Windows-1251", // кодировка для русских символов
            });
        });
    }

    const displayCustomAlert = (message) => {
        setCustomAlert(<CustomAlert message={message} />);
        setTimeout(() => {
            setCustomAlert(null);
        }, 3000);
    };

    // имитирует клик на реальный инпут
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className='page'>
            {customAlert}
            <div className='container'>
                <div className='container-input'>
                    <div>
                        Выберите файл в формате CSV
                    </div>
                    <button className='btn' onClick={handleButtonClick}>
                        <div className='btn__title'>
                            Выберите файл
                        </div>
                    </button>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
