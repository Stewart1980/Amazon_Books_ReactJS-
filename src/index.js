import React from 'react'
import ReactDOM from 'react-dom'
import {books} from './books'
import Book from './book'
//CSS
import './index.css';

// const author = 'Yori Moriarty'
// const title = 'Tokyo Yakuza Familys'
// const img = 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5smwCNYiDnB_7SXxtT0Z2tpkPDnt7W7IdIzomPM0v86GOK0JRvDR-icOj_CoxSvp9NthK4RISP5nNCCFZeGRs8XIc68WCPkwtUvwNUq50&usqp=CAc'
function BookList() {
  return (
  <section className="booklist">
  {books.map((book, index) => {
    
    return <Book key={book.id} {...book}></Book>;

  })}
  </section>
  );
  }
    

  

ReactDOM.render(<BookList/>, document.getElementById('root')
);