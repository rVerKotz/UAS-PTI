import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import { initClient, signIn, signOut, isSignedIn, getSheetData, appendSheetData } from './Sheet';

const SPREADSHEET_ID = '1PvFobn9hbFKllLTH4Sohgbozj6KiXYjVqnsWgV89D0Y';
const RANGE = 'Sheet1!A2:C2';

function Contact() {
  const [signedIn, setSignedIn] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
    initClient().then(() => {
      setSignedIn(isSignedIn());
      gapi.auth2.getAuthInstance().isSignedIn.listen(setSignedIn);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = [[formData.name, formData.email, formData.message]];
    appendSheetData(SPREADSHEET_ID, RANGE, values).then(response => {
      console.log('Data saved:', response);
      setFormData({ name: '', email: '', message: '' });
    }).catch(error => {
      console.error('Error saving data:', error);
    });
  };

  const handleSignIn = () => {
    signIn().catch(error => console.error('Error signing in:', error));
  };

  const handleSignOut = () => {
    signOut().catch(error => console.error('Error signing out:', error));
  };

  const loadSheetData = () => {
    getSheetData(SPREADSHEET_ID, RANGE).then(response => {
      setSheetData(response.result.values);
    }).catch(error => {
      console.error('Error loading data:', error);
    });
  };

  return (
    <div className="App">
      <h1>Google Sheets API with React</h1>
      {signedIn ? (
        <>
          <button onClick={handleSignOut}>Sign Out</button>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
          <button onClick={loadSheetData}>Load Data</button>
          <ul>
            {sheetData.map((row, index) => (
              <li key={index}>{row.join(', ')}</li>
            ))}
          </ul>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign In with Google</button>
      )}
    </div>
  );
}

export default Contact;