import React from 'react';

import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm';
import { loadMeetingsAction, saveMeetingAction } from "../actions/calendar";
import { connect } from "react-redux";

class Calendar extends React.Component {
  apiUrl = "http://localhost:3005/meetings";

  sendMeetingToApi = (meetingData) => {
    fetch(this.apiUrl, {
      method: "POST",
      body: JSON.stringify(meetingData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }

        throw new Error("Network error!");
      })
      .then((meetingData) => {
        this.props.onSave(meetingData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    fetch(this.apiUrl)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }

        throw new Error("Network error!");
      })
      .then((resp) => {
        this.props.onLoad(resp);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <section>
        <CalendarList meetings={this.props.meetings} />
        <CalendarForm saveMeeting={this.sendMeetingToApi} />
      </section>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    meetings: state.meetings,
  };
};

const mapActionToProps = {
  onLoad: loadMeetingsAction,
  onSave: saveMeetingAction,
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);