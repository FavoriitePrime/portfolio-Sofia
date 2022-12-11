import React from 'react'
import './Contacts.css'


const Contacts = function () {
    return (
        <>
            <div className='ConPage'>
                <div className='image AboutMe'/>
                <div className='containerH'>
                    <div className='flower'>
                        <div className='contacts'>
                            <p>
                                <a
                                    href='tel:89689948196'
                                >
                                    Telephone: {'8(968)994-81-96'}
                                </a>
                            </p>
                            <p>

                                <a
                                    href='mailto:keinarah@gmail.com'
                                >
                                    Email: keinarah@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Contacts }
