import React, { useEffect } from 'react'
import fb from './firebase';

const ChangeStatus = (props) => {

  const id = props.match.params.id;

    useEffect(() => {
      fb.firestore().collection('prescriptions').doc(id).update({
      status : 'scaned'
    })
  }, [id])

  return (
    <div>
      coucou
    </div>
  )
}

export default ChangeStatus
