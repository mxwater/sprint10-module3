// ✨ create your `quotesSlice` in this module

import { createSlice } from "@reduxjs/toolkit"
import { act } from "react"


let id = 1
const getNextId = () => id++
const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
}

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState: initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.displayAllQuotes = !state.displayAllQuotes
    },
    deleteQuote: (state, action) => {
      state.quotes = state.quotes.filter((quote) => {
        return quote.id != action.payload

      })
    },
    editQuoteAuthenticity: (state, action) => {
      state.quotes = state.quotes.map(quote => {
        if(quote.id === action.payload) {
          quote.apocryphal = !quote.apocryphal
        }
        return quote
      }) 
    },
    setHighlightedQuote: (state, action) => {
      state.highlightedQuote = !state.highlightedQuote ? action.payload : null
    },
    createQuote: (state, action) => {
      state.quotes.push({...action.payload, id: getNextId()})
    }
  }
})

export const {toggleVisibility, deleteQuote, editQuoteAuthenticity, setHighlightedQuote, createQuote} = quotesSlice.actions

export default quotesSlice.reducer
