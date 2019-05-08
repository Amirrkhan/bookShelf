import React from "react";

// COMPONENTS

import BookViewContainer from "../../containers/book-view/bookView";

const BookView = props => {
  return (
    <div>
      <BookViewContainer id={props.match.params.id} />
    </div>
  );
};

export default BookView;
