// App.jsx

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { General } from './components/General';
import { EducationList } from './components/EducationList';
import { ExperienceList } from './components/ExperienceList';
import { SkillList } from './components/SkillList';
import { PreviewGeneral, PreviewEducation, PreviewExperience, PreviewSkill } from './components/Preview';
import { defaultGenData, defaultEduData, defaultExpData, defaultSkillData } from './components/defaultValues';

function App() {
    const [selectedContent, setSelectedContent] = useState('General');
    const [highlight, setHighlight] = useState({ field: null, id: null });

    const [genData, setGenData] = useState(defaultGenData);
    const [skillData, setSkillData] = useState(defaultSkillData);
    const [eduData, setEduData] = useState(defaultEduData);
    const [expData, setExpData] = useState(defaultExpData);

    const handleMenuClick = (content) => setSelectedContent(content);

    const handleGenChange = (data) => setGenData(data);
    const handleSkillChange =(data) => setSkillData(data);
    const handleEduChange = (data) => setEduData(data);
    const handleExpChange = (data) => setExpData(data);

    const renderContent = () => {
        switch (selectedContent) {
            case 'General':
                return <General data={genData} onChange={handleGenChange} setHighlight={setHighlight} />;
            case 'Skills':
                return <SkillList data={skillData} onChange={handleSkillChange} setHighlight={setHighlight} />;
            case 'Education':
                return <EducationList data={eduData} onChange={handleEduChange} setHighlight={setHighlight} />;
            case 'Experience':
                return <ExperienceList data={expData} onChange={handleExpChange} setHighlight={setHighlight} />;
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <div className="sidebar">
                <Sidebar onMenuClick={handleMenuClick} />
            </div>
            <div className="sidebar-extended">
                {renderContent()}
            </div>
            <div className="preview">
                <div className="header">
                    
                    <h1>
                        CV CREATOR
                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ca571d">
                        <path d="m499-259 364-363-81-80-363 363 80 80Zm-280 48q-88-6-133.5-40.5T40-349q0-60 51-98t142-46q44-4 65.5-16t21.5-33q0-29-29-44.5T194-609l5-60q89 9 135 41t46 86q0 46-37.5 75T238-433q-69 5-103.5 26T100-349q0 35 30.5 54.5T222-271l-3 60Zm299 18L353-358l398-397q14-14 31.5-13.5T814-755l102 101q14 14 14 32t-14 32L518-193Zm-159 33q-17 4-30-9t-9-30l33-159 165 165-159 33Z"/></svg>
                    </h1>
                    {/* <h2>Preview</h2> */}
                </div>

                <div className="resume">
                    <PreviewGeneral data={genData} highlight={highlight} />
                    <PreviewSkill data={skillData} highlight={highlight} />
                    <PreviewEducation data={eduData} highlight={highlight} />
                    <PreviewExperience data={expData} highlight={highlight} />
                </div>
            </div>
        </div>
    );
}

export default App;
