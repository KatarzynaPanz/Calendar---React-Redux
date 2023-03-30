import React from "react";
import {
  StyledTitle,
  StyledDiv,
  FieldName,
  StyledInput,
  FieldContainer,
  SubmitInput,
  StyledList,
} from "../style/StyledElements";

class CalendarForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    errors: [],
  };

  render() {
    return (
      <>
        <StyledTitle>Meetings Calendar</StyledTitle>
        <StyledList>{this.renderErrors()}</StyledList>
        <StyledDiv>
          <form action="" onSubmit={this.handleSubmit}>
            <FieldContainer>
              <FieldName>Date: </FieldName>
              <StyledInput
                name="date"
                onChange={this.handleFieldChange}
                value={this.state.date}
                placeholder="YYYY-MM-DD"
              />
            </FieldContainer>
            <FieldContainer>
              <FieldName>Hour: </FieldName>
              <StyledInput
                name="time"
                onChange={this.handleFieldChange}
                value={this.state.time}
                placeholder="HH:MM"
              />
            </FieldContainer>

            <FieldContainer>
              <FieldName>Name: </FieldName>
              <StyledInput
                name="firstName"
                onChange={this.handleFieldChange}
                value={this.state.firstName}
                placeholder="name"
              />
            </FieldContainer>
            <FieldContainer>
              <FieldName>Last name: </FieldName>
              <StyledInput
                name="lastName"
                onChange={this.handleFieldChange}
                value={this.state.lastName}
                placeholder="last name"
              />
            </FieldContainer>
            <FieldContainer>
              <FieldName>Email: </FieldName>
              <StyledInput
                name="email"
                onChange={this.handleFieldChange}
                value={this.state.email}
                placeholder="name@mail.pl"
              />
            </FieldContainer>
            <div>
              <SubmitInput type="submit" value="save" />
            </div>
          </form>
        </StyledDiv>
      </>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({
      errors,
    });

    if (errors.length === 0) {
      this.saveMeeting();
      this.clearFormFields();
    }
  };

  validateForm() {
    const errors = [];

    if (!this.isDateCorrect()) {
      errors.push("Correct the entered date");
    }

    if (!this.isTimeCorrect()) {
      errors.push("Correct the entered hour");
    }

    if (!this.isFirstNameCorrect()) {
      errors.push("Correct the entered name");
    }

    if (!this.isLastNameCorrect()) {
      errors.push("Correct the entered last name");
    }

    if (!this.isEmailCorrect()) {
      errors.push("Correct the entered email");
    }

    return errors;
  }

  isDateCorrect() {
    const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

    return pattern.test(this.state.date);
  }

  isTimeCorrect() {
    const pattern = /^[0-9]{2}:[0-9]{2}$/;

    return pattern.test(this.state.time);
  }

  isFirstNameCorrect() {
    return this.state.firstName.length > 0;
  }

  isLastNameCorrect() {
    return this.state.lastName.length > 0;
  }

  isEmailCorrect() {
    const pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;

    return pattern.test(this.state.email);
  }

  handleFieldChange = (e) => {
    if (this.isFieldNameCorrect(e.target.name)) {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  saveMeeting() {
    const { saveMeeting } = this.props;

    if (typeof saveMeeting === "function") {
      saveMeeting(this.getFieldsData());
    }
  }

  clearFormFields() {
    const fieldsData = this.getFieldsData();
    for (const prop in fieldsData) {
      fieldsData[prop] = "";
    }

    this.setState(fieldsData);
  }

  getFieldsData() {
    const fieldsData = Object.assign({}, this.state);
    delete fieldsData["errors"];

    return fieldsData;
  }

  isFieldNameCorrect(name) {
    const fieldsData = this.getFieldsData();

    return typeof fieldsData[name] !== "undefined";
  }

  renderErrors() {
    return this.state.errors.map((err, index) => <li key={index}>{err}</li>);
  }
}

export default CalendarForm;
