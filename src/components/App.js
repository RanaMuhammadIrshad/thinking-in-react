import React, { useState } from 'react'

import Menu from './Navigations/Menu'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import Books from './Books'
function App() {
  return (
    <div id="page-wrap">
      <Menu pageWrapId="page-wrap" />
      <Header title="By React" />
      <Books />
      <About />
      <Footer />
    </div>
  )
}

export default App
