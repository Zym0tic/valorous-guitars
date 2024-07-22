import React from 'react'
import { Link } from 'react-router-dom'

function GetStarted() {
  return (
    <div>
          <Link to="/main/custombuildform" className="active">
              <button className="bg-accent hover:bg-header text-accent2 font-bold py-2 px-4 rounded">
                Get Started on your Custom Build
              </button>
            </Link>
    </div>
  )
}

export default GetStarted