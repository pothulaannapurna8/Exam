import React from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
    const handleDownloadPlan = () => {
        alert('Your GATE Bridge Plan has been generated!');
    };

    return (
        <main className="container">
            <div className="section-header">
                <h2>Evaluation Results</h2>
                <p>View priority and status of uploaded materials and expected tasks.</p>
            </div>

            <div className="table-container">
                <table className="results-table">
                    <thead>
                        <tr>
                            <th>Subject/Topic</th>
                            <th>Relevance</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ backgroundColor: 'var(--priority-high)' }}>
                            <td><strong>Data Structures & Algorithms</strong></td>
                            <td><strong>Both (GATE & College)</strong></td>
                            <td>Evaluated</td>
                            <td><Link to="/resources" style={{ color: 'var(--primary-navy)' }}><i className="fa-solid fa-arrow-right"></i> View</Link></td>
                        </tr>
                        <tr style={{ backgroundColor: 'var(--priority-medium)' }}>
                            <td><strong>Engineering Mathematics</strong></td>
                            <td><strong>GATE Only</strong></td>
                            <td>Pending</td>
                            <td><Link to="/resources" style={{ color: 'var(--primary-navy)' }}><i className="fa-solid fa-arrow-right"></i> View</Link></td>
                        </tr>
                        <tr style={{ backgroundColor: 'var(--priority-low)' }}>
                            <td><strong>Software Engineering</strong></td>
                            <td><strong>College Only</strong></td>
                            <td>Action Needed</td>
                            <td><Link to="/resources" style={{ color: 'var(--primary-navy)' }}><i className="fa-solid fa-arrow-right"></i> View</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button id="download-plan-btn" className="btn" onClick={handleDownloadPlan}
                    style={{ padding: '1rem 2rem', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(46, 204, 113, 0.4)' }}>
                    <i className="fa-solid fa-download" style={{ marginRight: '8px' }}></i> Download Personalized Study Plan
                </button>
            </div>

            <div className="topic-of-day"
                style={{ marginTop: '3rem', background: 'var(--bg-white)', borderRadius: 'var(--border-radius)', padding: '2rem', boxShadow: 'var(--box-shadow)', textAlign: 'center', border: '2px solid var(--primary-green)' }}>
                <h3 style={{ color: 'var(--primary-navy)', marginBottom: '1rem' }}>
                    <i className="fa-solid fa-star" style={{ color: '#f1c40f' }}></i> Topic of the Day
                </h3>
                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}><strong>Operating Systems: Memory Management</strong></p>
                <p style={{ marginBottom: '1.5rem', color: '#555' }}>Master the core concepts of paging, segmentation, and virtual memory. This topic is highly relevant for both GATE and College exams.</p>
                <Link to="/resources" className="btn">Go to Resources <i className="fa-solid fa-arrow-right" style={{ marginLeft: '5px' }}></i></Link>
            </div>
        </main>
    );
};

export default Results;
