import { useState, useEffect } from 'react';

export function Skill({ data, onChange, setHighlight }) {
    const [formData, setFormData] = useState(data);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        onChange(formData);
    }, [formData]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleFocus = (e) => {
        const { id } = e.target;
        setHighlight({ field: id, id: formData.id }); // Set highlight on focus
    };

    const handleBlur = () => {
        setHighlight({ field: null, id: null }); // Remove highlight on blur
    };

    const toggleEditing = () => setIsEditing(prev => !prev);

    const isHighlighted = (field) => {
        return formData.id === setHighlight.id && setHighlight.field === field;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setIsEditing(false); // Optionally save the changes and stop editing
    };

    return (
        <div>
            <form className="skill-form" onSubmit={handleSubmit}>
                {['skillName'].map(field => (
                    <div key={field}>
                        <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        <br />
                        <input
                            type='text'
                            id={field}
                            value={formData[field] || ''}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            className={isHighlighted(field) ? 'highlight' : ''}
                            disabled={!isEditing}
                        />
                    </div>
                ))}
                <button type="button" className="btn primary" onClick={toggleEditing}>
                    {isEditing ? 'Save' : 'Edit'}
                </button>
            </form>
        </div>
    );
}
