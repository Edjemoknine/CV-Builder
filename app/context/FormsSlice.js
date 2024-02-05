const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  data: {},
  currentStep: 1,
};
const formsSlice = createSlice({
  name: "formsSlice",
  initialState,
  reducers: {
    addNewInf(state, { payload }) {
      state.data = { ...state.data, ...payload };
    },
    nextStep(state, { payload }) {
      state.currentStep += 1;
    },
    prevStep(state, { payload }) {
      state.currentStep -= 1;
    },
  },
});

export const { addNewInf, nextStep, prevStep } = formsSlice.actions;
export default formsSlice.reducer;
