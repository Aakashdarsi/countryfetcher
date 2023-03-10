import React from 'react'

export default function Error() {
    return (
        <div className='container'>
            <div className="d-flex flex-row justify-content-center my-3">
                <div className="d-flex flex-column justify-content-center">
                    <div class="alert alert-danger" role="alert">
                        404 Error !!! Requested Resource not Found!!!!!!
                    </div>
                </div>
            </div>
        </div>
    )
}
