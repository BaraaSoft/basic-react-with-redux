import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class BookDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.book) {
            return (<div>
                <h2>Select your favorite book!</h2>
            </div>);
        }
        return (<div>
            <h1>{this.props.book.title}</h1>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails)