import React from "react";
import { connect } from "react-redux";

const Item = (props) => {
    const { text, reversed, palindrome } = props[0];
    return (
        <div className="app__resultsList">
            <p>
                Text: {text} | Reversed: {reversed} | Palindrome: {palindrome}
            </p>
        </div>
    );
};

const Results = (props) => {
    const {
        data: { listResults },
    } = props;

    return (
        <div>
            <div className="app__results">
                <h4>Results:</h4>
                {listResults &&
                    listResults.map((item, index) => {
                        return <Item key={index} {...item} />;
                    })}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

export default connect(mapStateToProps)(Results);
