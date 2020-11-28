import React from 'react'

import About from '../../Sections/About'
import Book from '../../Sections/Book'
import Features from '../../Sections/Features'
import Stories from '../../Sections/Stories'
import Tours from '../../Sections/Tours'

function Main() {
    return (
        <main>
            <About/>
            <Features/>
            <Tours/>
            <Stories/>
            <Book/>
        </main>
    )
}

export default Main;