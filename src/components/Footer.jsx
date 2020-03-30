import React from 'react'

const year = new Date().getFullYear()

function Footer () {
  return (
    <footer>
      <p>Copyright © {year}. Ratko Pokrajac</p>
    </footer>
  )
}

export default Footer
