import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';

function App() {
  const [fields, updateFields] = useState(
    {
      upload: 'Lets start upload your resume->',
      experience: '7 years/ 0 years remote',
      mobile_no: '+355 434 234 242 3',
      name: 'John Doe',
      availability: 'Full time',
      email:'v4vishnu14@gmail.com'
    }
  );

  return (
    <div className="container">
      <Profile fields={fields} updateFields={updateFields}/>
    </div>
  );
}

export default App;