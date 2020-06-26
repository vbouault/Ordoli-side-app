import React, { useEffect } from 'react';
import fb from './firebase';
import './App.css';


function App() {

    /* const id = window.location.href.split('/')[window.location.href.split('/').length - 1] */
    const id = 'PXl9JBptuLOd4kqNfrIE'  
    useEffect(() => {
        fb.firestore().collection('prescriptions').doc(id).update({
          status : 'ok'
        })
    }, [])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
