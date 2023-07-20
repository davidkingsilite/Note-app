import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";


const notesAdapter = createEntityAdapter({
    sortComparer: (a,b) => (a.completed === b.completed)? 0 : a.completed ? 1: -1
})

const initialState = notesAdapter.getInitialState()

export const notesApiSlice = apiSlice.injectEndpoints({

endpoints: builder => ({
    getNotes: builder.query({
        query: () => '/notes',
        validateStatus: (response, result) => {
            return response.status === 200 && !result.isError
        },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedNotes = responseData.map(note => {
                    note.id = note._id
                    return note
                });
                return notesAdapter.setAll(initialState, loadedNotes)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids){
                    return [
                        {type: 'Note', id: 'List' },
                        ...result.ids.map(id => ({ type: 'Note', id }))
                    ]
                } else return [{ type: 'Note', id: 'LIST' }]
            }
        }),
    }),
})

export const {
    useGetNotesQuery
} = notesApiSlice


// return the query result object
export const selectNotesResult = notesApiSlice.endpoints.getNotes.select()

// create memoized data
const selectNotesData = createSelector(
    selectNotesResult,
    notesResult => notesResult.data //normalize state objects with ids and entities
)

//get notes create these selectors and we rename them with aliase using destructuring

export const {
    selectAll: selectAllNotes,
    selectById: selectNoteById,
    selectIds: selectNoteIds
    // pass in a selector return the notes sclice of state
} = notesAdapter.getSelectors(state => selectNotesData(state) ?? initialState)





 



















