import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='bg-dark text-center text-white'>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                2022 Copyright © 
                <a className='text-white' href='https://github.com/minosh00/CSSE_Procurement-Construction-Industry'>
                    &nbsp;SE3070_WE_59
                </a>
            </div>
        </MDBFooter>
    );
}