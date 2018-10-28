import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import selectBook from '../actions/index'


class BookList extends Component {
    constructor(props) {
        super(props)
    }

    bookListItem(book) {
        return (
            <li onClick={() => { this.props.selectBook(book) }}
                key={book.title}
                className="list-group-item">
                {book.title}
            </li>
        );
    }

    render() {
        return (<ul className="list-group">{
            this.props.books.map((book) => this.bookListItem(book))
        }</ul>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

