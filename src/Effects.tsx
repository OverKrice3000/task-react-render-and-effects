import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';
import { set } from 'husky';

export function Effects(props: { sourceId: string }) {
    const [msg, setMsg] = useState('-1');
    useEffect(() => {
        setMsg('-1');
        let callback = (payload: Number) => {
            setMsg(String(payload));
        };
        subscribe(props.sourceId, callback);
        return () => {
            unsubscribe(props.sourceId, callback);
        };
    }, [props.sourceId]);
    return <div>{props.sourceId + ': ' + msg}</div>;
}
