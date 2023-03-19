import React, { useState } from "react";
import "./Form.css";

const Form = () => {

  const Data = [{
    Name:"Soham",
    Email:"soham@gmail.com",
    Contact:"9665752438",
    Suggestion:"Add Local Storage Functionality",
  }
];



  const [userName, setUsername] = useState("");
  const [userEmail, setUseremail] = useState("");
  const [userContactNo, setUsercontactnumber] = useState("");
  const [userSuggestion, setUsersuggestion] = useState("");
  const [expense,setExpense] = useState(Data);




  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(userContactNo,userEmail,userName,userContactNo,userSuggestion);
    setExpense((prevExpense)=>{
      return [expense,...prevExpense];
    });
    

    console.log(Data);

    setUsercontactnumber("")
    setUseremail("");
    setUsername("");
    setUsersuggestion("");
  };

  const nameHandler = (event) => {
    setUsername(event.target.value);
  };
  const emailHandler = (event) => {
    setUseremail(event.target.value);
  };

  const suggestionHandler = (event) => {
    setUsersuggestion(event.target.value);
  };
  const contactHandler = (event) => {
    setUsercontactnumber(event.target.value);
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={submitHandler}>
        <h2>Feedback Form</h2>
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="For ex. Soham215"
          value={userName}
          id="username"
          onChange={nameHandler}
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="For ex. soham@gmail.com"
          value={userEmail}
          id="email"
          onChange={emailHandler}
        />

        <label htmlFor="">Contact Number</label>
        <input
          type="text"
          placeholder="For ex. 9665752439"
          id="contact"
          value={userContactNo}
          onChange={contactHandler}
        />

        <label htmlFor="">Suggestions/Comments</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Comment your thoughts!"
          value={userSuggestion}
          onChange={suggestionHandler}
        ></textarea>
        <button>Post</button>
      </form>
    </>
  );
};

export default Form;
