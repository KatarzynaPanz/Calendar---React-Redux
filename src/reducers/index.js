const initState = {
  meetings: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "loadMeetings":
      const data = action.payload;
      console.log(data);
      return { ...state, meetings: data};
    case "saveMeeting":
      const meeting = action.payload;
      return {...state, meetings:[...state.meetings, meeting]};
  }
  return state;
};

export default reducer;
