import React, {useState} from 'react'
import { Form } from 'react-bootstrap'


const Search = ({ getQuery }) => {
  const [text, setText] = useState('avengers')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <Form className='search'>
        <Form.Group>
            <Form.Label>Search</Form.Label>
            <Form.Control  
            value={text}
            onChange={ e => onChange(e.target.value)}/> 
        </Form.Group>
    </Form>
  )
}

export default Search