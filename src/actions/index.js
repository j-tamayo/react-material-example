export const LOGIN = 'LOGIN';

export function login(userName, password) {
    const actions = {
        type: LOGIN,
        userName,
        password,
    };

    return actions;
}