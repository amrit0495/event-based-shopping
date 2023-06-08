import "./App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { eventSelection } from "./constants/constants";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Results from "./component/Results";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    icon: {
      borderRadius: "50%",
      width: 16,
      height: 16,
      boxShadow:
        "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
      backgroundColor: "#f5f8fa",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
      "$root.Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2,
      },
      "input:hover ~ &": {
        backgroundColor: "#ebf1f5",
      },
      "input:disabled ~ &": {
        boxShadow: "none",
        background: "rgba(206,217,224,.5)",
      },
    },
    checkedIcon: {
      backgroundColor: "#137cbd",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
      "&:before": {
        display: "block",
        width: 16,
        height: 16,
        backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
        content: '""',
      },
      "input:hover ~ &": {
        backgroundColor: "#106ba3",
      },
    },
  }));
  const [value, onChange] = useState(new Date());
  const [page, setPage] = useState(0);
  const handleChange = (value) => {
    setPage(value);
  };
  const [radioValue, setRadioValue] = React.useState(eventSelection[0].name);
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    if (counter === 0) {
      alert("Counter cannot go below zero!");
      return;
    }
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  function StyledRadio(props) {
    const classes = useStyles();

    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const submit = () => {
    setPage((prev) => prev + 1);
  };

  const getStarted = () => {
    setPage(1);
  };

  return (
    <div className="main-div">
      {page === 0 && (
        <div className="landing-page">
          {" "}
          <p>Welcome to event based Shopping App</p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => getStarted()}
          >
            Let's Get Started
          </Button>
        </div>
      )}
      {page === 1 && (
        <div className="center">
          <p>Select your Dates</p>
          <Calendar className="center" onChange={onChange} value={value} />
        </div>
      )}
      {page === 2 && (
        <div className="theme-page">
          <p>Select you theme</p>
          <RadioGroup
            defaultValue="female"
            aria-label="gender"
            name="customized-radios"
            className="radio-container"
            value={radioValue}
            onChange={handleRadioChange}
          >
            {eventSelection.map((event) => {
              return (
                <FormControlLabel
                  value={event.name}
                  control={<StyledRadio />}
                  label={event.name}
                />
              );
            })}
          </RadioGroup>
        </div>
      )}

      {page === 3 && (
        <div className='person-page'>
          {value.getDate()}
          {radioValue}

          <div>Number of Persons: {counter}</div>
          <div className="buttonsPreNext">
            <Button
              variant="contained"
              color="primary"
              className="buttonCSS"
              onClick={() => increase()}
            >
              Increase +1
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="buttonCSS"
              onClick={() => decrease()}
            >
              Decrease -1
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="buttonCSS"
              onClick={() => reset()}
            >
              Reset
            </Button>
            
          </div>
        </div>
      )}

      {page === 4 && (
        <div>
          <Results value={value} radioValue={radioValue} counter={counter} />
        </div>
      )}
      <div className="buttonsPreNext">
        {page > 1 && (
          <Button
            className="left-button"
            variant="contained"
            color="primary"
            onClick={() => handleChange(page - 1)}
          >
            prev
          </Button>
        )}
        {page >= 1 && page < 3 && (
          <div>
            <Button
              className="right-button"
              variant="contained"
              color="primary"
              onClick={() => handleChange(page + 1)}
            >
              next
            </Button>
          </div>
        )}
        {page === 3 && <Button
              variant="contained"
              className="right-button"
              color="primary"
              onClick={() => submit()}
            >
              Submit
            </Button>}
      </div>
    </div>
  );
}

export default App;
