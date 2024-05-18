import { PayloadAction } from "@reduxjs/toolkit";
import { IServer } from "./type";

export const serverReducer = {
  changeServerIndex(state: IServer, action: PayloadAction<string[]>) {
    state.server = action.payload[0];
    state.listServer = action.payload;
  }
}