import React, { Component } from 'react';
import './Section.css';
class Section extends Component {
    state = {  }
    render() { 
        return ( 
        <section id="info-container">    
          <div id="Education">
          <p>I have studied at:</p>
          <ul>
            <li>IES BEZMILIANA</li>
            <li>Minnesota University</li>
          </ul>
          </div>
          <div id="work-experience">
          <p>I have worked at:</p>
          <div id="works_list">
            <ul>
              <li>Github as Engineer during 2018 and there I have to
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </li>
              <li>Jetbrains as Project manager during 2019 and I'm still working there. My work consist in
                  A assumenda autem dolorem doloremque
              </li>
            </ul>
          </div>
          </div>
        </section>
         );
    }
}
 
export default Section;