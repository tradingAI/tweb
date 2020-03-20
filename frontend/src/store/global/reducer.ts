import { Action, ActionType, State } from 'store/global/constant'

const initialState: State = {
    isAdmin: false,
};

export function reducer(state = initialState, action: Action): State {
    switch (action.type) {
        case ActionType.SetIsAdmin: {
            const { is } = action
            return {
                ...state,
                isAdmin: is,
            }
        }
        default:
            return state;
    }
}
