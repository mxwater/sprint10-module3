import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleVisibility, deleteQuote, editQuoteAuthenticity, setHighlightedQuote } from '../state/quotesSlice'

export default function Quotes() {
  // const quotes = [{ // ✨ `quotes` must come from the Redux store
  //   id: 3,
  //   quoteText: "Be yourself; everyone else is already taken.",
  //   authorName: "Oscar Wilde",
  //   apocryphal: false,
  // }]
  // const displayAllQuotes = true // ✨ `displayAllQuotes` must come from the Redux store
  // const highlightedQuote = 3 // ✨ `highlightedQuote` must come from the Redux store

  const dispatch = useDispatch()

  const {quotes, displayAllQuotes, highlightedQuote} = useSelector((state) => state.quotesState )

  return (
    <div id="quotes">
      <h3>Quotes</h3>
      <div>
        {
          quotes
            ?.filter(qt => {
              return displayAllQuotes || !qt.apocryphal
            })
            .map(qt => (
              <div
                key={qt.id}
                className={`quote${qt.apocryphal ? " fake" : ''}${highlightedQuote === qt.id ? " highlight" : ''}`}
              >
                <div>{qt.quoteText}</div>
                <div>{qt.authorName}</div>
                <div className="quote-buttons">
                  <button onClick={() => {dispatch(deleteQuote(qt.id))}}>DELETE</button>
                  <button onClick={() => {dispatch(setHighlightedQuote(qt.id)) }}>HIGHLIGHT</button>
                  <button onClick={() => {dispatch(editQuoteAuthenticity(qt.id))}}>FAKE</button>
                </div>
              </div>
            ))
        }
        {
          !quotes?.length && "No quotes here! Go write some."
        }
      </div>
      {!!quotes?.length && <button onClick={() => {dispatch(toggleVisibility())}}>
        {displayAllQuotes ? 'HIDE' : 'SHOW'} FAKE QUOTES
      </button>}
    </div>
  )
}
