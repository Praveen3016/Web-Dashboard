import React from 'react'

function PersonalInputComp(props) {
  return (
    <div className="compo d-flex flex-column">
    <label htmlFor="title ">{props.name}</label>
    <input type="text" className='inputit' disabled={props.disable} placeholder={props.palceholder} value={props.value} onChange={(e) => props.set(e.target.value)}  />
</div>
  )
}

export default PersonalInputComp
