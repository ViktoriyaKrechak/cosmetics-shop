import { UPDATE_ATTRIBUTES } from "../actions/attributesActions/actionTypes";
import initialStore from "../initialStore";

export default function attributesReducer(
  state = initialStore.attributes,
  { type, payload }
) {
  switch (type) {
    case UPDATE_ATTRIBUTES:
      const { id, ...restPayload } = payload;

      return {
        ...state,
        [id]: {
          ...state[id],
          ...restPayload,
        },
      };
    default:
      return state;
  }
}
