import { createContext, useMemo, useReducer } from 'react';
import './App.css';
import UserList from './UserList';
import CreateUser from './CreateUser';
import { produce } from 'immer';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter((user) => user.active).length;
}

const initialState = {
    users: [
        {
            id: 1,
            username: 'rucy',
            email: 'khj2xx@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        },
    ],
};

function reducer(state, action) {
    const { users } = state;

    switch (action.type) {
        case 'CREATE_USER':
            // return {
            //     inputs: initialState.inputs,
            //     users: users.concat(action.user)
            // }
            return produce(state, (draft) => {
                draft.users.push(action.user);
            });
        case 'REMOVE_USER':
            // return {
            //     ...state,
            //     users: users.filter(user => user.id !== action.id)
            // }
            return produce(state, (draft) => {
                const index = draft.users.findIndex(
                    (user) => user.id === action.id,
                );
                draft.users.splice(index, 1);
            });
        case 'TOGGLE_USER':
            // return {
            //     ...state,
            //     users: users.map(user => user.id === action.id ? { ...user, active: !user.active} : user)
            // }
            return produce(state, (draft) => {
                const user = draft.users.find((user) => user.id === action.id);
                user.active = !user.activel;
            });
        default:
            return state;
    }
}

export const UserDispatch = createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const { users } = state;

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />
            <UserList users={users} />
            <div>활성 사용자 수 : {count}</div>
        </UserDispatch.Provider>
    );
}

export default App;
