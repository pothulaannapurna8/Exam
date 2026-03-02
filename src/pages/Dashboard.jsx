import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState(localStorage.getItem('userName') || 'SUNKAVALLI CHARAN RAM');
    const [userPhone, setUserPhone] = useState(localStorage.getItem('userPhone') || '+917893140112');
    const [completedTopics, setCompletedTopics] = useState(JSON.parse(localStorage.getItem('completedTopics') || '[]'));

    const handleDeleteAccount = () => {
        if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            localStorage.clear();
            navigate('/signin');
        }
    };

    const donutData = {
        labels: ['Completed', 'Pending', 'In Progress'],
        datasets: [{
            data: [18, 5, 2],
            backgroundColor: ['#2ecc71', '#f1c40f', '#3498db'],
            borderWidth: 0
        }]
    };

    const barData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Hours Studied',
            data: [2, 3.5, 1.5, 4, 2, 5, 3],
            backgroundColor: '#2c3e50',
            borderRadius: 4
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' }
        }
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            y: { beginAtZero: true }
        }
    };

    return (
        <main className="container">
            <div className="profile-header"
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', background: 'var(--bg-white)', padding: '2rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
                <div className="profile-image"
                    style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-green)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
                    <span>{userName.charAt(0).toUpperCase()}</span>
                </div>
                <div className="profile-info">
                    <h2 style={{ color: 'var(--primary-navy)', marginBottom: '0.2rem' }}>{userName.toUpperCase()}</h2>
                    <p style={{ color: '#666', fontSize: '1.1rem' }}>{userPhone}</p>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="stat-card">
                    <div className="stat-icon"><i className="fa-solid fa-file-arrow-up"></i></div>
                    <div className="stat-details"><h3>24</h3><p>Total Uploads</p></div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon"><i className="fa-solid fa-spinner"></i></div>
                    <div className="stat-details"><h3>5</h3><p>Pending Reviews</p></div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon"><i className="fa-solid fa-check-double"></i></div>
                    <div className="stat-details"><h3>18</h3><p>Evaluated Items</p></div>
                </div>
                <div className="stat-card">
                    <div className="stat-icon"><i className="fa-solid fa-fire"></i></div>
                    <div className="stat-details"><h3>7</h3><p>Day Streak</p></div>
                </div>
            </div>

            <div className="dashboard-panel" style={{ marginBottom: '2rem' }}>
                <ul className="activity-list">
                    <li className="activity-item" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                        <div style={{ color: 'var(--primary-navy)', fontSize: '1.2rem' }}><i className="fa-solid fa-chevron-right"></i></div>
                        <div className="activity-text">
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}><strong>Profile Information</strong></p>
                        </div>
                    </li>
                    <li className="activity-item" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #eee' }}>
                        <div style={{ color: 'var(--primary-navy)', fontSize: '1.2rem' }}><i className="fa-solid fa-circle-question"></i></div>
                        <div className="activity-text">
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}><strong>Help</strong></p>
                        </div>
                    </li>
                    <li className="activity-item" onClick={handleDeleteAccount} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0' }}>
                        <div style={{ color: '#e74c3c', fontSize: '1.2rem' }}><i className="fa-solid fa-trash"></i></div>
                        <div className="activity-text">
                            <p style={{ fontSize: '1.1rem', color: '#e74c3c' }}><strong>Delete My Account</strong></p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-panel">
                    <h3>Recent Activity</h3>
                    <ul className="activity-list">
                        <li className="activity-item">
                            <div className="activity-dot"></div>
                            <div className="activity-text">
                                <p><strong>You</strong> uploaded a new document "CS101 Midterm Notes"</p>
                                <small>2 hours ago</small>
                            </div>
                        </li>
                        <li className="activity-item">
                            <div className="activity-dot" style={{ backgroundColor: 'var(--priority-medium-text)' }}></div>
                            <div className="activity-text">
                                <p><strong>System</strong> marked "Physics Lab Report" as Evaluated</p>
                                <small>Yesterday at 4:30 PM</small>
                            </div>
                        </li>
                        <li className="activity-item">
                            <div className="activity-dot"></div>
                            <div className="activity-text">
                                <p><strong>You</strong> accessed resource "Past Paper Archive"</p>
                                <small>Oct 14, 2023</small>
                            </div>
                        </li>
                        <li className="activity-item">
                            <div className="activity-dot" style={{ backgroundColor: 'var(--priority-high-text)' }}></div>
                            <div className="activity-text">
                                <p><strong>Reminder</strong> Final Project submission due in 3 days</p>
                                <small>Oct 12, 2023</small>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="dashboard-panel">
                    <h3>Completed Topics</h3>
                    <ul className="activity-list" id="completed-topics-list">
                        {completedTopics.length > 0 ? (
                            completedTopics.map((topic, index) => (
                                <li key={index} className="activity-item">
                                    <div style={{ color: '#3498db', fontSize: '1.2rem', marginTop: '4px' }}><i className="fa-solid fa-circle-check"></i></div>
                                    <div className="activity-text">
                                        <p><strong>Completed:</strong> {topic}</p>
                                        <small>Just now</small>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="activity-item" style={{ color: '#666', fontStyle: 'italic' }}>No topics completed yet. Go to Resources to mark them done.</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="dashboard-content" style={{ marginTop: '1.5rem' }}>
                <div className="dashboard-panel">
                    <h3>Progress Overview</h3>
                    <div style={{ height: '300px' }}>
                        <Doughnut data={donutData} options={chartOptions} />
                    </div>
                </div>
                <div className="dashboard-panel">
                    <h3>Weekly Activity</h3>
                    <div style={{ height: '300px' }}>
                        <Bar data={barData} options={barOptions} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
