import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="nav">
    <nav className="navbar">
        <div class="logoo">
            Erasmus
        </div>    
            <ul class="nav-link">
                <li class="nav-links"><a href="/"> Home</a></li>
                <li class="nav-links"><a href="Projects">Projects</a></li>
                <li class="nav-links"><a href="About">About</a></li>
                <li class="nav-links"><a href="About">Contact</a></li>
                <li class="nav-links"><a href="About">Resume</a></li>

            </ul> 
    </nav>
</div>
  )
}

export default Sidebar