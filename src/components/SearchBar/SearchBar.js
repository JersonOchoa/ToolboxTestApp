import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { reverseText } from "../../redux/actions/dataActions";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBar.css";

const SearchBar = (props) => {
    const { reverseText } = props;

    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        reverseText(text);
        setText("");
    };

    return (
        <div className="searchBar">
            <Form className="searchBar__form" onSubmit={handleSubmit}>
                <Form.Control
                    type="text"
                    placeholder="Insert Text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </div>
    );
};

const mapActionsToProps = {
    reverseText,
};

export default connect(null, mapActionsToProps)(SearchBar);
