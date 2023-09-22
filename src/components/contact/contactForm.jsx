import { React, useState } from "react";

import "./styles/contactForm.css";

function ContactForm() {
  const [inputs, setInputs] = useState({});

  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    setTextarea(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return(
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
        </label>
        <textarea value={textarea} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ContactForm;