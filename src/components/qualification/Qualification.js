import React from 'react'
import "./qualification.css"
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

function Qualification() {
  return (
   <div className="qualification section">
        <h2 className='section_title'>Qualification</h2>
        <span className='section_subtitle'>My Personal Journey</span>

        <div className='qualification_container container'>
            <div className='qualification_tabs'>
                <div className='qualification_button qualification_active button_flex'>
                <span className='icons'><SchoolIcon /></span> Education
                </div>
                <div className='qualification_button button_flex'>
                  <span className='icons'><BusinessCenterIcon/> </span>Experience
                </div>
            </div>

            <div className='qualification_sections'>
              
              <div className='qualification_content'>

                <div className='qualification_data'>
                  <div>
                    <h3 className='qualification_title'>AccioJob</h3>
                    <span className='qualification_subtitle'>
                      Full Stack Developer
                    </span>
                    <div className='qualification_calendar'>
                      2022-Present
                    </div>
                  </div>
                  <div>
                    <span className='qualification_rounder'></span>
                    <span className='qualification_line'></span>
                  </div>
                </div>

                <div className='qualification_data'>
                  <div></div>
                <div>
                    <span className='qualification_rounder'></span>
                    <span className='qualification_line'></span>
                  </div>

                  <div>
                    <h3 className='qualification_title'>Goenka College</h3>
                    <span className='qualification_subtitle'>
                      M.Com
                    </span>
                    <div className='qualification_calendar'>
                      2021
                    </div>
                  </div>
                  
                </div>

                <div className='qualification_data'>
                  <div>
                    <h3 className='qualification_title'>AJC Bose College (Calcutta University)</h3>
                    <span className='qualification_subtitle'>
                      B.Com (H)
                    </span>
                    <div className='qualification_calendar'>
                      2016-2019
                    </div>
                  </div>
                  <div>
                    <span className='qualification_rounder'></span>
                    <span className='qualification_line'></span>
                  </div>
                </div>

                <div className='qualification_data'>
                  <div></div>
                <div>
                    <span className='qualification_rounder'></span>
                    <span className='qualification_line'></span>
                  </div>

                  <div>
                    <h3 className='qualification_title'>SHMD SCHOOL</h3>
                    <span className='qualification_subtitle'>
                      Commerce
                    </span>
                    <div className='qualification_calendar'>
                      2016
                    </div>
                  </div>
                  
                </div>

                                   
              </div>
            </div>



        </div>
   </div>
  )
}

export default Qualification
