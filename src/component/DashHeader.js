import React from 'react'
import { Link } from 'react-router-dom'

const DashHeader = () => {
    const content = (
        <header>
            <div>
                <Link to="/dash">
                    <h1> Tech Notes</h1>
                </Link>
                <nav>
                    {/*add nav link later */}
                </nav>
            </div>
        </header>
    )
    return content
}

export default DashHeader
