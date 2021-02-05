import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import SearchBar from "../SearchBar";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { reverseText } from "../../../redux/actions/dataActions";

const mockStore = configureStore();

describe("React Redux component", () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({ listResults: [] });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <SearchBar />
            </Provider>
        );
    });

    it("Render without crashing", () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});
