import React from 'react'

import './Layout.scss'

import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <section>
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          <span className="html-tag">&lt;html&gt;</span>
          <br />
          <span className="body-tag">&lt;body&gt;</span>
        </span>
        <Outlet />
        <span className="tags bottom-tags">
          <span className="body-tag">&lt;/body&gt;</span>
          <br />
          <span className="html-tag">&lt;/html&gt;</span>
        </span>
      </div>
    </section>
  )
}

export default Layout
