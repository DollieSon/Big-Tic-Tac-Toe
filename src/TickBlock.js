import { useState } from "react";

const TickBlock = ({State, ChangeState}) => {

    
    
    return ( 
        <button className="Square" onClick={ChangeState}>
            <p>{State}</p>
        </button>
     );
}
 
export default TickBlock;