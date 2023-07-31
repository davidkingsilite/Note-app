import React from 'react'
import { Link } from 'react-router-dom' 


const Welcome = () => {
    const date = new Date()
    const today =  new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)
    
    const content = (
        <section>
            <p>{today}</p>
            <h1> Welcome! </h1>
            <p> <Link to='/dash/notes'> TechNotes</Link> </p>
            <p> <Link to='/dash/users'> View User Settings</Link> </p>
            <p> <Link to='/dash/users/new'> Add new User</Link> </p>
            <p> <Link to='/dash/notes/new'> Add new Notes</Link> </p>
        </section>
        )

    return content
}

export default Welcome
