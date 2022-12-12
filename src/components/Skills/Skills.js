import React from 'react'
import "./style.css"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Skills() {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section_title'>Skills</h2>
        <span className='section_subtitle'>My technical level</span>
        <div className='skills_container container grid'>
            <div className='skills_content'>
                <h3 className='skills_title'>Frontend Developer</h3>
                <div className='skills_box'>
                    <div className='skills_group'>
                        <div className='skills_data'>
                            
                            <div>
                                <h3 className='skills_name'>HTML</h3>
                                <span className='skills_level'>Basic</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                        
                            <div>
                                <h3 className='skills_name'>CSS</h3>
                                <span className='skills_level'>Advanced</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                        
                            <div>
                                <h3 className='skills_name'>CSS</h3>
                                <span className='skills_level'>Advanced</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                        
                            <div>
                                <h3 className='skills_name'>JavaScript</h3>
                                <span className='skills_level'>Basic</span>
                            </div>
                            </div>
                        </div>
                        <div className='skills_group'>
                        <div className='skills_data'>
                            <div>
                                <h3 className='skills_name'>React Js</h3>
                                <span className='skills_level'>Intermediate</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                            <div>
                                <h3 className='skills_name'>Bootstrap</h3>
                                <span className='skills_level'>Intermediate</span>
                            </div>
                        </div>
                        <div className='skills_data'>
                            <div>
                                <h3 className='skills_name'>Git</h3>
                                <span className='skills_level'>Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Skills
