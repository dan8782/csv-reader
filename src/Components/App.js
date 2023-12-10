import { useNavigate } from "react-router-dom";
import { useRef,useState } from 'react';
import { handleFileUpload } from "../utils";
import './App.css';

function App() {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const [customAlert, setCustomAlert] = useState(null);

    const handleFileChange = handleFileUpload(fileInputRef, setCustomAlert, navigate);

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
