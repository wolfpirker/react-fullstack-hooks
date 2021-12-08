
import React, { useContext } from 'react';
import { MyContext } from '../context';

const UserItem = () => {
    const context = useContext(MyContext);

    return (
        <>
            {context.active ?
                context.users.map((item) => (
                    <div key={item.id}>
                        <div>Name: {item.name} </div>
                    </div>
                ))
                : null
            }
            <hr />
            <button
                onClick={context.toggleActive}
            >
                Toggle it
            </button>
        </>
    )
}

export default UserItem;