import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageSwitch.css';

const languages = ["US", "PT"];

function LanguageSwitch() {
    const { language, setLanguage } = useLanguage();
    return (
        <div className='language-switch-slider'>
            {languages.map((lan) => {
                const isActive = lan == language;
                return (
                    <button
                        key={lan}
                        className={`language-switch-button ${isActive ? 'active' : ''}`}
                        onClick={() => setLanguage(lan)}
                    >
                        {lan}
                    </button>
                );
            })}
        </div>
    );
}

export default LanguageSwitch;