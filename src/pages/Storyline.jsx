import '../styles/Storyline.css';
import storyline from '../storyline.json';

const typeIcon = {
    life:      '◈',
    education: '◉',
    work:      '◆',
};

function Storyline() {
    return (
        <>
            <h3>storyline</h3>
            <div className="timeline-wrapper">
                <div className="timeline-line" />
                {storyline.map((item, index) => (
                    <div
                        key={item.id}
                        className={`timeline-entry ${index % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="timeline-content">
                            <span className="timeline-date">{item.date}</span>
                            <h4 className="timeline-title">{item.title}</h4>
                            <span className="timeline-subtitle">{item.subtitle}</span>
                            <p className="timeline-description">{item.description}</p>
                            {item.current && <span className="timeline-badge">current</span>}
                        </div>
                        <div className="timeline-connector">
                            <div className="connector-line" />
                            <div className={`timeline-dot ${item.current ? 'dot-current' : ''}`}>
                                {typeIcon[item.type]}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Storyline;
