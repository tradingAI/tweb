import { Action, ActionType } from 'store/global/constant'


export function setIsAdmin(is: boolean): Action {
    return {
        type: ActionType.SetIsAdmin,
        is,
    };
}
