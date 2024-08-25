import { useState, useEffect } from 'react';

export function General({ data, onChange, setHighlight }) {
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
        setHighlight({ field: id });
    };

    const handleBlur = () => {
        setHighlight({ field: '' }); // Clear highlight when focus is lost
    };

    const toggleEditing = () => setIsEditing(prev => !prev);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='general-form'>
                <button type="button" className="btn primary" onClick={toggleEditing}>
                    {isEditing ? 'Save' : 'Edit Profile'}
                </button>
                {['firstname', 'lastname', 'email', 'phone', 'web', 'github'].map(field => (
                    <div key={field}>
                        <label htmlFor={field}>
                            {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <br />
                        <input
                            type={field === 'email' ? 'email' : field === 'web' || field === 'github' ? 'url' : 'text'}
                            id={field}
                            value={formData[field] || ''}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} // Handle blur to remove highlight
                            disabled={!isEditing}
                            className={formData.id === setHighlight.id && setHighlight.field === field ? 'highlight' : ''}
                        />
                    </div>
                ))}
                
                <h3>Profession Title</h3>
                <div>
                    <label htmlFor='title'>Title</label>
                    <br />
                    <input
                        type='text'
                        id='title'
                        value={formData.title || ''}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur} // Handle blur to remove highlight
                        disabled={!isEditing}
                        className={formData.id === setHighlight.id && setHighlight.field === 'title' ? 'highlight' : ''}
                    />
                </div>
                <div>
                    <label htmlFor='about'>About</label>
                    <br />
                    <textarea
                        id='about'
                        value={formData.about || ''}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur} // Handle blur to remove highlight
                        disabled={!isEditing}
                        className={formData.id === setHighlight.id && setHighlight.field === 'about' ? 'highlight' : ''}
                    />
                </div>
                <button type="submit" style={{ display: 'none' }}></button>
            </form>
        </div>
    );
}
