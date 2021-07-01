import React, {forwardRef} from 'react'

function User(props,labelRef) {
    return (
        <div>
                <input type="text" ref={labelRef} />
        </div>
    )
}

export default forwardRef (User);
