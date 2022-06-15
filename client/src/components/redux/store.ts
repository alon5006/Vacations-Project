import { configureStore, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { AppUser } from '../../models/user'
import { Vacation } from '../../models/vacation'

const initialState = { id: 0, firstName: '', lastName: '', email: '', password: '', isAdmin: 'user', token: '' } as AppUser | null

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAppUser(state, action: PayloadAction<AppUser | null>) {
      if (action.payload) {
        state!.id = action.payload.id
        state!.firstName = action.payload.firstName
        state!.lastName = action.payload.lastName
        state!.email = action.payload.email
        state!.password = action.payload.password
        state!.isAdmin = action.payload.isAdmin
        state!.token = action.payload.token
      }
    }
  },
})




export const { setAppUser } = userSlice.actions

const initialStateVacation = { id: 0, destination: '', startDate: '', endDate: '', price: '', description: '', image: '', amountOfFollowers: 0 } as Vacation | null

const vacationSlice = createSlice({
  name: 'vacation',
  initialState: initialStateVacation,
  reducers: {
    setVacation(state, action: PayloadAction<Vacation | null>) {
      if (action.payload){
        state!.id = action.payload.id
        state!.destination = action.payload.destination
        state!.startDate = action.payload.startDate
        state!.endDate = action.payload.endDate
        state!.price = action.payload.price
        state!.description = action.payload.description
        state!.image = action.payload.image
        state!.amountOfFollowers = action.payload.amountOfFollowers
      }
    }
  },
})

export const { setVacation } = vacationSlice.actions;


export interface StoreReducers {
  userReducer: Slice<AppUser | null>
  vacationReducer: Slice<Vacation | null>
}

const store = configureStore({ reducer: { userReducer: userSlice.reducer, vacationReducer: vacationSlice.reducer }})
export default store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types
