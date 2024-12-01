import React from 'react'
import HomeCatatan from './homeCatatan'

function HomePage() {
    return(
        <>
            <div className="container" style={{ display: 'flex', width: '80vw', alignItems: 'start', color: 'white', flexDirection: 'column', padding: '1em' }}>
                <HomeCatatan />
            </div>
        </>
    )
}

export default HomePage