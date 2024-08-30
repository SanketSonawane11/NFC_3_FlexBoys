import React from 'react'

const Contact = () => {
  return (
    <div>
<iframe
  src="http://localhost:3000" // URL of the second React app
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
  }}
  title="Second React App"
/>

    </div>
  )
}

export default Contact