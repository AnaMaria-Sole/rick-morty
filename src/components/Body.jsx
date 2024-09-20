import React from 'react'
import TheCharacter  from './TheCharacter'
import { Div } from './styles'

export default function Body(props) {

    console.log(props.charList)
  return (
    <>
        <h1>Rick and Morty Characters (dead or alive)</h1>
        <Div>
            {props.charList.map((char, id)=> <TheCharacter key={id} char={char}/>)}
        </Div>
    </>
  )
}