import {motion} from 'framer-motion';
import '../styles/Storyline.css';
import storyline from '../storyline.json';
import FadeIn from '../components/FadeIn';
import { useLanguage } from '../context/LanguageContext';

const typeIcon = {
    life:      '◈',
    education: '◉',
    work:      '◆',
};

const containerVariants = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
};

const entryVariants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

function Storyline() {
    const { language } = useLanguage();
    return (
        <>
            <FadeIn><h3>{language == 'US' ? "storyline" : "história"}</h3></FadeIn>
            <motion.div
                className="timeline-wrapper"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.08 }}
            >
                <div className="timeline-line" />
                {storyline.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`timeline-entry ${index % 2 === 0 ? 'left' : 'right'}`}
                        variants={entryVariants}
                    >
                        <div className="timeline-content">
                            <span className="timeline-date">{item.date[language]}</span>
                            <h4 className="timeline-title">{item.title[language]}</h4>
                            <span className="timeline-subtitle">{item.subtitle[language]}</span>
                            <p className="timeline-description">{item.description[language]}</p>
                            {item.current && <span className="timeline-badge">{language == 'US' ? "current" : "presente"}</span>}
                        </div>
                        <div className="timeline-connector">
                            <div className="connector-line" />
                            <div className={`timeline-dot ${item.current ? 'dot-current' : ''}`}>
                                {typeIcon[item.type]}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
}

export default Storyline;
