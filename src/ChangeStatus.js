import React, { useEffect } from 'react'
import fb from './firebase';

const ChangeStatus = (props) => {
      const id = props.match.params.id;
/*       const id = 'PXl9JBptuLOd4kqNfrIE'   */
      useEffect(() => {
      fb.firestore().collection('prescriptions').doc(id).update({
      status : 'scaned'
    })
  }, [])

  return (
    <div>
      coucou
    </div>
  )
}

export default ChangeStatus
