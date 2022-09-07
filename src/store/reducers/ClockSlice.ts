import { IClock } from "../../models/IClock"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid";


interface IClockState {
    clockList: IClock[];
}

const getLocalTime = (): string => {
    const localtime = (new Date().getTimezoneOffset()) / -60;

    return localtime <= 0 ? `${localtime}` : `+${localtime}`
}

const initialState: IClockState = {
    clockList: [
        {
            id: uuidv4(),
            timezone: getLocalTime()
        },
        {
            id: uuidv4(),
            timezone: getLocalTime()
        }
    ]
}


export const clockSlice = createSlice({
    name: "clock",
    initialState,
    reducers: {
        addClock(state) {
            state.clockList = [...state.clockList, {
                id: uuidv4(),
                timezone: getLocalTime()
            }]
        },
        deleteClock(state, action: PayloadAction<string>) {
            state.clockList = state.clockList.filter(clock => clock.id !== action.payload)
        },
        changeTimezone(state, action: PayloadAction<IClock>) {
            state.clockList = state.clockList.map(clock =>
                clock.id === action.payload.id
                    ? { ...clock, timezone: action.payload.timezone }
                    : clock
            )
        }
    }
})

export const { addClock, deleteClock, changeTimezone } = clockSlice.actions;
export default clockSlice.reducer;