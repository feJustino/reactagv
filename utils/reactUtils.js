import React from 'react'

function childrenWP(children, props){
  return React.Children.map(props.children,
    child => React.cloneElement(child, { ...props }))
}

export {childrenWP}
