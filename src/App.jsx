import React from 'react';
import norm from 'json-api-normalizer';
import build from 'redux-object';
const ex = `
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
    const [t1, st1] = React.useState('');
    const [t2, st2] = React.useState('');

    const j = tryParse(t2);
    const n = j && norm(j);
    const b = j && build(n, t1);

    return (
        <div>
            <label style={{ display: 'block'}}>
                Main resource name
                <input type="text" onChange={ev => st1(ev.target.value)} value={t1} />
            </label>
            <label style={{ display: 'block'}}>
                Data
                <textarea type="text" onChange={ev => st2(ev.target.value)} value={t2} />
            </label>
            <button onClick={() => {
                st1('postBlock')
                st2(ex)
            }}>Example</button>
            <button onClick={() => console.log(j ? b : 'not JSON input')}>Log to console</button>
        </div>
    );
};
