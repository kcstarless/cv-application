import { Experience } from './Experience';
import { v4 as uuidv4 } from 'uuid';

export function ExperienceList({ data, onChange, setHighlight }) {
  const handleExperienceChange = (id, newExperience) => {
    const updatedData = data.map((exp) => (exp.id === id ? { ...exp, ...newExperience } : exp));
    onChange(updatedData);
  };

  const addExperience = () => {
    const newExperience = { id: uuidv4(), organization: '', role: '', fromDate: '', toDate: '' };
    onChange([newExperience, ...data, ]);
  };

  const deleteExperience = (id) => {
    const updatedData = data.filter((exp) => exp.id !== id);
    onChange(updatedData);
  };

  return (
    <div>
      <button type="button" className="btn tertiary" onClick={addExperience}>
        Add Experience
      </button>
      <br />
      <br />
      {data.map((experience) => (
        <div key={experience.id}>
          <Experience
            id={experience.id}
            data={experience}
            onChange={(newExperience) => handleExperienceChange(experience.id, newExperience)}
            setHighlight={(highlight) => setHighlight(highlight)} // Ensure highlight function is passed correctly
          />
          <button type="button" className="btn secondary" onClick={() => deleteExperience(experience.id)}>
            Delete
          </button>
          <br />
          <br />
        </div>
      ))}

    </div>
  );
}
