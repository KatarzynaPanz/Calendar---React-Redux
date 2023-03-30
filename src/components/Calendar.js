import React from 'react';

import CalendarList from './CalendarList'
import CalendarForm from './CalendarForm';
import {
  loadMeetingsAction,
  saveMeetingAction,
  removeMeetingAction,
} from "../actions/calendar";
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

  removeMeetingFromApi = (id, e) => {
    const options = {
      method: "DELETE",
    };
    fetch(`${this.apiUrl}/${id}`, options)
      .then(() => {
        this.props.onRemove(id);
      })
      .catch((err) => console.error(err))
      .finally(console.log("Zakończone!"));
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
        <CalendarForm saveMeeting={this.sendMeetingToApi} />
        <CalendarList
          meetings={this.props.meetings}
          removeMeeting={this.removeMeetingFromApi}
        />
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
  onRemove: removeMeetingAction,
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);