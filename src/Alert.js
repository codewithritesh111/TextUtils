import React from 'react'

export default function Alert(probes) {
    const alertF=()=>{
        probes.alertFunc(null)
    }
  return (
    probes.alert && <div>
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{probes.alert.type}</strong> {probes.alert.message}
            <button type="button" onClick={alertF} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
