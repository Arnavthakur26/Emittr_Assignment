import { getLanguages } from "../../src/api";
export function fetchLanguages() {
  return async function (dispatch) {
    const languages = await getLanguages();
    dispatch({ type: "SET_LANGUAGES", payload: languages });
  };
}
