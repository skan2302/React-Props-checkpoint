import React from 'react';
import ProfileComponent from './profile/ProfileComponent';
import './App.css';


const profile= {fullname:"Mouhamed",bio:"blalalallalala",profession:"student"}
  
function App() {
  return (
    <div className="App">
      <ProfileComponent profile={profile}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc96kcLicYy25CFi7P_ocMargwSC_vjRxIMg&usqp=CAUs'alt='avatar'/>
      </ProfileComponent>
    </div>
  )
}


export default App;
