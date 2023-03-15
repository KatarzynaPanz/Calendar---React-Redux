const apiUrl = "http://localhost:3005/meetings";

export const loadMeetingsAction = (data) => {
  return {
    type: "loadMeetings",
    payload: data,
  };
};

export const saveMeetingAction = (meetingData) => {
  return {
    type: "saveMeeting",
    payload: meetingData,
  };
};
