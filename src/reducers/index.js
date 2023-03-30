const initState = {
  meetings: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "loadMeetings":
      const data = action.payload;
      console.log(data);
      return { ...state, meetings: data };
    case "saveMeeting":
      const meeting = action.payload;
      console.log(meeting);
      return { ...state, meetings: [...state.meetings, meeting] };
    case "removeMeeting":
      console.log(action.payload);
      const currMeetings = state.meetings.filter(
        (meeting) => meeting.id != action.payload
      );
      console.log(currMeetings);
      return {
        ...state,
        meetings: currMeetings,
      };
      
  }
  return state;
};

export default reducer;
