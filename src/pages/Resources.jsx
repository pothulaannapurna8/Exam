import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Resources = () => {
    const navigate = useNavigate();

    const handleDone = (topic) => {
        let completedTopics = JSON.parse(localStorage.getItem('completedTopics') || '[]');
        if (!completedTopics.includes(topic)) {
            completedTopics.push(topic);
            localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
        }
        navigate('/dashboard');
    };

    const location = useLocation();
    // If navigation state contains recommendations (from Results page), use them; otherwise fallback to hardcoded resources.
    const fallbackResources = [
        {
            topic: 'OS: Memory Management',
            icon: 'fa-microchip',
            youtube: 'https://youtube.com',
            notes: '#',
            pyqs: '#'
        },
        {
            topic: 'CN: TCP/IP Model',
            icon: 'fa-network-wired',
            youtube: 'https://youtube.com',
            notes: '#',
            pyqs: '#'
        },
        {
            topic: 'DBMS: Normalization',
            icon: 'fa-database',
            youtube: 'https://youtube.com',
            notes: '#',
            pyqs: '#'
        }
    ];
    const recommendations = location.state?.recommendations || [];
    // Transform recommendations into the same shape as fallbackResources for rendering.
    const dynamicResources = recommendations.map((rec, idx) => ({
        topic: rec.topic || `Recommendation ${idx + 1}`,
        icon: 'fa-solid fa-video', // generic icon for video recommendation
        youtube: rec.video?.url || '#',
        notes: '#',
        pyqs: '#'
    }));
    const resources = dynamicResources.length ? dynamicResources : fallbackResources;

    return (
        <main className="container">
            <div className="section-header">
                <h2>Study Resources</h2>
                <p>Access our curated collection of materials to help you succeed.</p>
            </div>

            <div className="resources-grid">
                {resources.map((res, index) => (
                    <div key={index} className="resource-card">
                        <div className="resource-icon" style={{ height: '80px', fontSize: '2.5rem' }}>
                            <i className={`fa-solid ${res.icon}`}></i>
                        </div>
                        <div className="resource-content">
                            <h3>{res.topic}</h3>
                            <div style={{ margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <a href={res.youtube} target="_blank" rel="noopener noreferrer" className="resource-link">
                                    <i className="fa-brands fa-youtube" style={{ color: '#ff0000', fontSize: '1.2rem' }}></i> Watch Lecture
                                </a>
                                <a href={res.notes} className="resource-link">
                                    <i className="fa-solid fa-file-pdf" style={{ color: 'var(--primary-navy)', fontSize: '1.2rem' }}></i> Download Notes
                                </a>
                                <a href={res.pyqs} className="resource-link">
                                    <i className="fa-solid fa-file-circle-question" style={{ color: 'var(--primary-green)', fontSize: '1.2rem' }}></i> View PYQs
                                </a>
                            </div>
                            <button className="btn btn-done" onClick={() => handleDone(res.topic)}
                                style={{ width: '100%', marginTop: 'auto' }}>I am Done</button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Resources;
