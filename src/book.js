import React from 'react';

const Book = ({img, title, author, }) => {
    
    // const {img, title, author,} = props; 
   const clickHandler = () => {
     alert('Hello Tokyo');
   };
   const complexExample = (author) => {
    console.log(author);
   }
      return (
    <article className='Book' onMouseOver={()=>{
      console.log(title);
    }}>
    <img src={img}/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>button example</button>
    <button type="button" onClick={() => complexExample(author)}>more complex example</button>
    
    
    </article>
    
    );
  };
export default Book 