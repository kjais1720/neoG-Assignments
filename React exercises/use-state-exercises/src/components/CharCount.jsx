import React, {useState} from 'react';

const CharCount = ()=>{
    const [count, setCount] = useState(0);
    const countExceededLimit = count => count > 10;

    return(
        <div clasName = "text-box">
            <div className="w-60 mr-x-auto mr-y-lg">
                <textarea style={{borderColor: countExceededLimit(count) && 'red'}} className="tr-input-item" cols = "30" rows = "5" onInput = {e => setCount(e.target.value.length)}>

                </textarea>
            </div>
            <div className="char-count txt-center">{
                countExceededLimit ? `You have typed ${count} characters` : `Limit crossed`
                }</div>
        </div>
    )
}

export default CharCount;