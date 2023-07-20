import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const DashFooter = () => {

    const navigate =  useNavigate()
    const { pathname } = useLocation()

        const onGoHomeclicked = () => navigate('/dash')

        let goHomeButton = null

        if(pathname !== '/dash'){
            goHomeButton = (
                <button 
                    className=''
                    title='Home'
                    onClick={onGoHomeclicked}>
                    <FontAwesomeIcon icon={faHouse} />
                </button>
            )
        }

    const content = (
            <footer>
                {goHomeButton}
                <p> Current User:</p>
                <p> status :</p>
            </footer> 
    )
    return content
}

export default DashFooter
