const initialState = {
  task: [
    {
      title: "Title 1",
      description: "Description 1",
    },
    {
      title: "Title 2",
      description: "Description 2",
    },
    {
      title: "Title 3",
      description: "Description 3",
    },
    {
      title: "Title 4",
      description: "Description 4",
    },
  ],
};

export const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    default:
      return state;
  }
};
