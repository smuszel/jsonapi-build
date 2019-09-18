import React from 'react';

export default () => {
    const [t1, st1] = React.useState('');
    const [t2, st2] = React.useState('');

    return <div>
        <input type="text" onChange={ev => st1(ev.target.value)} value={t1}/>
        <textarea type="text" onChange={ev => st2(ev.target.value)} value={t2} />
        <button onClick={() => console.log(t1, t2)}></button>
    </div>;
};
