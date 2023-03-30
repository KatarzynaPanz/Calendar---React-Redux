import styled, { css } from "styled-components";

const StyledTitle = styled.h1`
  text-align: center;
  margin-top: 40px;
  color: #006666;
`;

const StyledDiv = styled.div`
  width: 450px;
  height: 350px;
  border: 1px solid #339999;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  background-color: #339999;
  border-radius: 10px;
  padding-top: 20px;
`;

const FieldName = styled.label`
  margin-left: 20px;
  width: 100px;
  font-size: 13px;
  margin-top: 10px;
  padding-top: 10px;
  font-weight: bold;
`;

const FieldContainer = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  border: 1px solid black;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 10px;
  width: 270px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px #006666;
  background-color: white;
  border-style: none;
  font-weight: bold;
  &:focus-visible {
    outline: 1px solid #0075ff;
  }
  &:hover {
    box-shadow: 0 0 3px 3px #00ffff;
  }
`;

const SubmitInput = styled.input`
  padding: 8px;
  //margin-top: 16px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 7px;
  background-color: #006666;
  color: white;
  font-weight: bold;
  border: none;
  &:hover {
    background-color: #003333;
    border: 1px solid #00ffff;
    box-shadow: 0 0 3px 3px #00ffff;
  }
`;

const StyledList = styled.ul`
  color: red;
  margin-left: 500px;
  list-style-type: none;
  margin-top: 10px;
`;

const StyledMeetingElement = styled.li`
  border: 1px solid black;
  border-radius: 10px;
  width: 200px;
  margin: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  font-size: 12px;
  text-align: center;
  background-color: yellow;
`;

const StyledMeetingsList = styled.ul`
  display: flex;
  margin-top: 20px;
  list-style-type: none;
  flex-wrap: wrap;
`;

const StyledItemsList = styled.ul`
  list-style-type: none;
`;

const ClosingElement = styled.p`
  text-align: right;
  padding-top: 4px;
  padding-right: 8px;
  cursor: pointer;
  margin-left: 170px;
`;

export {
  StyledTitle,
  StyledDiv,
  FieldName,
  StyledInput,
  FieldContainer,
  SubmitInput,
  StyledList,
  StyledMeetingElement,
  StyledMeetingsList,
  StyledItemsList,
  ClosingElement,
};
