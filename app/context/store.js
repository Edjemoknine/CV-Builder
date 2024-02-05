import FormsSlice from "./FormsSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: FormsSlice,
});

export default store;
