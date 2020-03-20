export interface State {
    isAdmin: boolean
}

export enum ActionType {
    SetIsAdmin = 'SetIsAdmin',
}

interface SetIsAdminAction {
    type: ActionType.SetIsAdmin
    is: boolean
}

export type Action = SetIsAdminAction
