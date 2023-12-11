import { useNavigate } from "react-router-dom";
import { useRef,useState,useCallback } from 'react';
import { handleFileUpload } from "../utils/utils.js";
import './App.css';

function App() {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const [customAlert, setCustomAlert] = useState(null);

    // чтобы функция не создавалась при каждом рендере
    const handleFileChange = useCallback(async (event) => {
        const file = event.target.files?.[0];
        await handleFileUpload(file, fileInputRef, setCustomAlert, navigate);
    }, [fileInputRef, setCustomAlert, navigate]);

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
