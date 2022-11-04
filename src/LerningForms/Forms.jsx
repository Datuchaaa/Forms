import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// const optionValue = [
//   { value: "grapefruit", label: "Grapefruit" },
//   { value: "lime", label: "Lime" },
//   { value: "coconut", label: "Coconut" },
//   { value: "mango", label: "Mango" },
//   { value: "limon", label: "Limon" },
// ];

const Forms = () => {
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  //   const [error, setError] = useState("");

  //   const handleChange = ({ target }) => {
  //     setSelectValue(target.value);
  //   };
  // useEffect(() => {
  //   console.log(inputValue, passwordValue);
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ inputValue, passwordValue });
    setIsSubmited(true);
  };

  const handleTryAgain = () => {
    setIsSubmited(false);
    setInputValue("");
    setPasswordValue("");
  };

  return (
    <div>
      <h1>Forms</h1>
      {!isSubmited ? (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail" hidden>
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="Txt"
              value={inputValue}
              onChange={({ target }) => setInputValue(target.value)}
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password"
              type="password"
              value={passwordValue}
              onChange={({ target }) => setPasswordValue(target.value)}
            />
          </FormGroup>{" "}
          <Button color="success">Submit</Button>
        </Form>
      ) : (
        <div>
          <h2>Thanks For Submited</h2>
          <p>{`თქვენი მეილი არის (${inputValue}),  პაროლი კი (${passwordValue})`}</p>
          <Button onClick={handleTryAgain} color="primary">
            Try again
          </Button>
        </div>
      )}
      {/* <Button color="primary">Magic</Button> */}

      {/* <form action="">
        <select
          kay={optionValue.id}
          value={selectValue}
          onChange={handleChange}
        >
          {optionValue.map(({ value, label }, index) => (
            <option kay={index} value={value}>
              {label}
            </option>
          ))}
        </select>
      </form> */}
    </div>
  );
};

export default Forms;
