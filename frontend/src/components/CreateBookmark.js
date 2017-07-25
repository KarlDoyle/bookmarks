import React from 'react';
import Loader from './Loader';

import '../assets/button.css';

const placeholder = 'http:example.com';


const CreateBookmark = (props) => {
  return (
    props.loading ? Loader : <form onSubmit={props.handleSubmit}>
      <input type='url' placeholder={placeholder} name='link' onChange={props.handleChange} required/>
      <button type="submit" className="button button--default">Add Link</button>
    </form>
  )
}


export default CreateBookmark;