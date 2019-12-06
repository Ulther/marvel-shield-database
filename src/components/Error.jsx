import React from 'react';

function Error(props) {
    console.log(props);
    return (
<p className="errorMessage" >No matches found for <font className="errorSearchAttempt">{props.searchAttempt.toUpperCase()}</font> in S.H.I.E.L.D. database</p>
    );
}

export default Error;