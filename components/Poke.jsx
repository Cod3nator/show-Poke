import Link from 'next/link'
import React from 'react'

const Poke = ({name,id}) => {
  const pokeName=name.toString();
  return (
    <div>
<Link href={`poke/${id}`}>{name}</Link>
    </div>
  )
}

export default Poke