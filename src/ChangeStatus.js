import React, { useEffect, useState } from 'react'
import fb from './firebase';

const ChangeStatus = (props) => {
/*       const id = 'PXl9JBptuLOd4kqNfrIE'   */
  const [id, setId] = useState(props.match.params.id)

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
