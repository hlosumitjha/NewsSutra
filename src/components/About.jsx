import React from 'react';
import sumitImage from '../assets/SUMIT_PHOTO.jpeg'; // Replace with the actual path to Sumit's photo

const About = () => {
  return (
    <div className="container my-5">
      
      <div className="card text-light" style={{ backgroundColor: '#000000', borderRadius: '10px' }}>
        <div className="card-body">
          <div className="d-flex ">
            <img
              src={sumitImage} // Add Sumit's image path here
              alt="Sumit Kumar Jha"
              style={{ width: '150px', height: '130px', borderRadius: '40%' }}
              className="me-4 my-3 border border-danger border-3"
            />
            <div>
              <h2 className="card-title mb-2">Developer: Sumit Kumar Jha</h2>
              <p className="card-text mb-4">
                Sumit Kumar Jha is a Full Stack Developer who developed NewsSutra as part of his practice projects. He has experience working with a range of technologies and frameworks.
              </p>
              <h4 className="mb-3">Technologies Used:</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{ backgroundColor: '#ffffff' }}>React.js</li>
                <li className="list-group-item" style={{ backgroundColor: '#ffffff' }}>Node.js</li>
                <li className="list-group-item" style={{ backgroundColor: '#ffffff' }}>Express.js</li>
                <li className="list-group-item" style={{ backgroundColor: '#ffffff' }}>MongoDB</li>
                <li className="list-group-item" style={{ backgroundColor: '#ffffff' }}>Bootstrap</li>
                <li className="list-group-item" style={{ backgroundColor: '#ffffff' }}>JavaScript</li>
                <li className="list-group-item" style={{ backgroundColor: '#ffffff' }}>API Integration</li>
              </ul>
              <p className="mt-3 text-light">
                Want to know more or view his other projects? Check out his GitHub:
                <a href="https://github.com/hlosumitjha" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-light ms-2">
                  <strong>GitHub</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
