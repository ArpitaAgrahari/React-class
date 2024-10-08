import { useState, useCallback } from 'react';
function UseCallbackchild({onIncrement}) {
        console.log('UseCallbackChild Render');
        return(
            <div>
                <button onClick={onIncrement}> Incremeent</button>
            </div>
        )

}
export default UseCallbackchild;