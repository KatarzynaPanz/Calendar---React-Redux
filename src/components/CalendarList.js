import React from 'react';
import {
  StyledMeetingElement,
  StyledMeetingsList,
  StyledItemsList,
  ClosingElement,
} from "../style/StyledElements";

class CalendarList extends React.Component {
  render() {
    return <StyledMeetingsList>{this.renderMeetingsList()}</StyledMeetingsList>;
  }

  renderMeetingsList() {
    return this.props.meetings.map((item) => this.renderMeetingsItem(item));
  }

  handleClick = (e) => {
    e.preventDefault();
    const { removeMeeting } = this.props;
    const meetingEl = e.target.parentElement.parentElement;
    console.log(meetingEl.id);
    removeMeeting(meetingEl.id);
  };

  renderMeetingsItem(itemData) {
    return (
      <StyledMeetingElement key={itemData.id} id={itemData.id}>
        <StyledItemsList>
          <ClosingElement onClick={this.handleClick}>x</ClosingElement>
          <li>{itemData.date}</li>
          <li>{itemData.time}</li>
          <li>
            <a href={`mailto: ${itemData.email}`}>
              {itemData.firstName} {itemData.lastName}
            </a>
          </li>
        </StyledItemsList>
      </StyledMeetingElement>
    );
  }
}

export default CalendarList;
