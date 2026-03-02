import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const [fileName, setFileName] = useState('Supports PDF, DOCX, JPG, PNG up to 10MB');
    const [isUploading, setIsUploading] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(`Selected: ${e.target.files[0].name}`);
        } else {
            setFileName('Supports PDF, DOCX, JPG, PNG up to 10MB');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);

        // Simulating processing delay
        setTimeout(() => {
            navigate('/results');
        }, 2000);
    };

    return (
        <main className="container">
            <div className="section-header">
                <h2>Upload Documents</h2>
                <p>Upload your college syllabus pdf</p>
            </div>

            <div className="upload-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="category">Document Category</label>
                        <select id="category" name="category" className="form-control" required>
                            <option value="" disabled>Select a category...</option>
                            <option value="syllabus">Syllabus</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject / Course</label>
                        <input type="text" id="subject" name="subject" className="form-control"
                            placeholder="e.g. Computer Science 101" required />
                    </div>

                    <div className="form-group">
                        <label>Upload File</label>
                        <div className="file-upload-wrapper" style={{ position: 'relative' }}>
                            <input type="file" id="exam-file" name="exam-file" accept=".pdf,.doc,.docx,.png,.jpg" onChange={handleFileChange} required
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }} />
                            <i className="fa-solid fa-cloud-arrow-up upload-icon"></i>
                            <h4 style={{ color: 'var(--secondary-navy)' }}>Choose a file or drag it here</h4>
                            <p className="file-name-display">{fileName}</p>
                        </div>
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }} disabled={isUploading}>
                        {isUploading ? (
                            <><i className="fa-solid fa-spinner fa-spin"></i> AI is mapping your syllabus to GATE 2026...</>
                        ) : (
                            'Upload Document'
                        )}
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Upload;
