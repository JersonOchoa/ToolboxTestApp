import axiosInstance from "../../util/axios";
import { requestsTest } from "../../util/requests";
import { ADD_RESULT } from "../actions";

export const reverseText = (originalText) => (dispatch) => {
    axiosInstance
        .post(requestsTest.fetchTextReversed, { text: originalText })
        .then((res) => {
            const { text, palindrome } = res.data;
            dispatch({
                type: ADD_RESULT,
                payload: [
                    {
                        text: originalText,
                        reversed: text,
                        palindrome: palindrome.toString(),
                    },
                ],
            });
        })
        .catch((err) => console.log(err));
};
