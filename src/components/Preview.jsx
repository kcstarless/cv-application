// Preview.jsx

export function PreviewGeneral({ data, highlight }) {
    return (
        <div className="general">
            <div className="profile">
                <h1 className={(highlight.field  === 'firstname') || (highlight.field  ==='lastname') ? 'highlight' : ''}>
                    {data.firstname + ' ' + data.lastname } 
                </h1>
                <div className="title">
                    <p className={highlight.field  === 'title' ? 'highlight' : ''}>
                        {data.title}
                    </p>
                </div>
                <div className="about">
                    <p className={highlight.field  === 'about' ? 'highlight' : ''}>
                        {data.about}
                    </p>
                </div>
            </div>
            <div className="contact">
                <p className={highlight.field  === 'email' ? 'highlight' : ''}>
                    {data.email}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                </p>
                <p className={highlight.field  === 'phone' ? 'highlight' : ''}>
                    {data.phone}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                </p>
                <p className={highlight.field  === 'web' ? 'highlight' : ''}>
                    {data.web}
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                </p>
                <p className={highlight.field  === 'github' ? 'highlight' : ''}>
                    {data.github}
                    <svg viewBox="0 0 128 128" width="24px"><g fill="#e8eaed"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g></svg>
                </p>
            </div>
        </div>
    );
}

export function PreviewEducation({ data, highlight }) {
    return (
        <div className="education">
            <h4>Education</h4>
            {data.map(education => (
                <div key={education.id} className='item'>
                    {['studied', 'institute'].map(field => (
                        <p 
                            key={field} 
                            className={`${field} ${highlight.field === field && highlight.id === education.id ? 'highlight' : ''}`}
                        >
                            {education[field]}
                        </p>
                    ))}
                    {/* Combine startDate and completionDate on the same line */}
                    <p 
                        className={`date-range ${highlight.field === 'startDate' || highlight.field === 'completionDate' ? 'highlight' : ''}`}
                    >
                        {formatDate(education.startDate)} ~ {formatDate(education.completionDate)}
                    </p>
                </div>
            ))}
        </div>
    );
}

export function PreviewExperience({ data, highlight }) {
    return (
        <div className="experience">
            <h4>Experience</h4>
            {data.map(experience => (
                <div key={experience.id} className='item'>
                   {['organization', 'role'].map(field => (
                        <p 
                            key={field} 
                            className={`${field} ${highlight.field === field && highlight.id === experience.id ? 'highlight' : ''}`}
                        >
                            {experience[field]}
                        </p>
                    ))}
                    {/* Combine fromDate and toDate on the same line */}
                    <p 
                        className={`date-range ${highlight.field === 'fromDate' || highlight.field === 'toDate' ? 'highlight' : ''}`}
                    >
                        {formatDate(experience.fromDate)} ~ {formatDate(experience.toDate)}
                    </p>
                </div>
            ))}
        </div>
    );
}

export function PreviewSkill({ data, highlight}){
    return (
        <div className="skills">
            <h4>Skills</h4>
            {data.map(skill => (
                <div key={skill.id}>
                    {['skillName'].map(field => (
                        <p key={field} className={ highlight.field === field && highlight.id === skill.id ? 'highlight' : ''}>
                            {skill[field]}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
}
// const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
};
