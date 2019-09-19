import React from 'react';
import norm from 'json-api-normalizer';
import build from 'redux-object';

const exampleString = `
{
    "data": [
        {
            "type": "post-block",
            "relationships": {
                "question": {
                    "data": {
                        "type": "question",
                        "id": "295"
                    }
                }
            },
            "id": "2620",
            "attributes": {
                "text": "I am great!",
                "id": 2620
            }
        }
    ],
    "included": [
        {
            "type": "question",
            "id": "295",
            "attributes": {
                "text": "How are you?",
                "id": 295
            }
        }
    ]
}

`


window.build = build;
window.norm = norm;

const tryParse = str => {
    let res = false;

    try {
        res = JSON.parse(str);
    } catch {
    }

    return res;
}

export default () => {
    const [dataString, setDataString] = React.useState('');
    debugger

    const show = () => {
        const jsonInput = tryParse(dataString);
        if (jsonInput) {
            const normalized = norm(jsonInput);
            let maxLen = 0;
            let maxBuild = null
            Object.keys(normalized).forEach(k => {
                const currentBuild = build(normalized, k);
                const currentLength = JSON.stringify(currentBuild).length;
                if (currentLength > maxLen) {
                    maxLen = currentLength;
                    maxBuild = currentBuild;
                }
            });
            
            console.log('input', jsonInput);
            console.log('output', maxBuild);
        } else {
            console.log('not parsable input');
        }
    }

    return (
        <div>
            <label style={{ display: 'block'}}>
                Data
                <textarea type="text" onChange={ev => setDataString(ev.target.value)} value={dataString} />
            </label>
            <button onClick={() => {
                setDataString(exampleString)
            }}>Example</button>
            <button onClick={show}>Log to console</button>
        </div>
    );
};
