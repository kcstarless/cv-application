import { Education } from './Education';
import { v4 as uuidv4 } from 'uuid';

export function EducationList({ data, onChange, setHighlight }) {
    const handleEducationChange = (id, newEducation) => {
        const updatedData = data.map(edu => edu.id === id ? { ...edu, ...newEducation } : edu);
        onChange(updatedData);
    };

    const addEducation = () => {
        const newEducation = { id: uuidv4(), studied: '', institute: '', startDate: '', completionDate: '' };
        onChange([newEducation, ...data]);
    };

    const deleteEducation = (id) => {
        const updatedData = data.filter(edu => edu.id !== id);
        onChange(updatedData);
    };

    return (
        <div>
            <button type="button" className="btn tertiary" onClick={addEducation}>
                Add Education
            </button>
            <br /><br />
            {data.map(education => (
                <div key={education.id}>
                    <Education
                        id={education.id}
                        data={education}
                        onChange={(newEducation) => handleEducationChange(education.id, newEducation)}
                        setHighlight={(highlight) => setHighlight(highlight)} // Pass the highlight object
                    />
                    <button type="button" className="btn secondary" onClick={() => deleteEducation(education.id)}>
                        Delete
                    </button>
                    <br />
                    <br />
                </div>
            ))}
        </div>
    );
}
