import React from "react";

const Education = () => {
    return (
        <section className="light" id="education">
            <h2>Education</h2>
            <div className="education-grid">
                <div className="education-cell">
                    <h3>University of XYZ</h3>
                    <p>Bachelor of Science in Computer Science</p>
                    <p>Graduated in 2020</p>
                </div>
                <div className="education-cell">
                    <h3>ABC College</h3>
                    <p>Master of Business Administration</p>
                    <p>Graduated in 2018</p>
                </div>
                <div className="education-cell">
                    <h3>DEF University</h3>
                    <p>Bachelor of Arts in English</p>
                    <p>Graduated in 2016</p>
                </div>
                <div className="education-cell">
                    <h3>GHI College</h3>
                    <p>Associate of Science in Biology</p>
                    <p>Graduated in 2014</p>
                </div>
            </div>
        </section>
    );
};


export default Education;