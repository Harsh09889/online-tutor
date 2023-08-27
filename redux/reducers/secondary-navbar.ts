import { FunctionComponent } from "react"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { NavItem } from "@/types/nav"

interface secondaryMenu {
  header: null | FunctionComponent
  items: NavItem[]
  headerProps: {[key: string]: any}
}

const initialState: secondaryMenu = {
  header: null,
  headerProps: {},
  items: [],
}

export const secondaryMenuSlice = createSlice({
  name: "secondaryMenu",
  initialState,
  reducers: {
    setSecondaryNavbar: (state, {payload: {items, header}}: PayloadAction<{items:NavItem[], header?: FunctionComponent}>) => {
      state.items = items
      state.header = header ? header : null
    },
  },
})

export const { setSecondaryNavbar } = secondaryMenuSlice.actions

const secondaryMenuReducer = secondaryMenuSlice.reducer

export default secondaryMenuReducer
