import { Skill } from './Skill';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

export function SkillList({ data, onChange, setHighlight }) {
    const handleSkillChange = (id, newSkill) => {
        const updatedData = data.map((skill) => (skill.id === id ? { ...skill, ...newSkill } : skill));
        onChange(updatedData);
    };

    const addSkill = () => {
        const newSkill = { id: uuidv4(), skillName: '' };
        onChange([newSkill, ...data]);
    };

    const deleteSkill = (id) => {
        const updatedData = data.filter((skill) => skill.id !== id);
        onChange(updatedData);
    };

    return (
        <div>
            <button type="button" className='btn tertiary' onClick={addSkill}>
                Add Skill
            </button>
            <br /><br />
            {data.map((skill) => (
                <div key={skill.id}>
                    <Skill
                        // id={skill.id}
                        data={skill}
                        onChange={(newSkill) => handleSkillChange(skill.id, newSkill)}
                        setHighlight={(highlight) => setHighlight(highlight)} // Ensure highlight function is passed correctly
                    />
                    <button type="button" className='btn secondary' onClick={() => deleteSkill(skill.id)}>
                        Delete
                    </button>
                    <br />
                    <br />
                </div>
            ))}

        </div>
    );
}
