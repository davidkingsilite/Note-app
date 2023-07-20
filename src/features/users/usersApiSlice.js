import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";


const usersAdapter = createEntityAdapter({})

const initialState = usersAdapter.getInitialState()


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedUsers = responseData.map(user => {
                    user.id = user._id
                    return user
                });
                return usersAdapter.setAll(initialState, loadedUsers)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids){
                    return [
                        {type: 'User', id: 'List' },
                        ...result.ids.map(id => ({ type: 'User', id }))
                    ]
                } else return [{ type: 'User', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetUsersQuery
} = usersApiSlice


// return the query result object
export const selectUsersResult = usersApiSlice.endpoints.getUsers.select()

// create memoized data
const selectUsersData =  createSelector(
    selectUsersResult,
    usersResult => usersResult.data //normalize state objects with ids and entities
)

//get users create these selectors and we rename them with aliase using destructuring

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds
    // pass in a selector return the user sclice of state
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)



 



















