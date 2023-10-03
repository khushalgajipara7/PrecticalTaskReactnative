const ApiCall = async ({
    url,
    method = 'POST',
    body,
    callback = () => { },
}) => {

    const rawResponse = await fetch(url, {
        method,
        body: body,
    })
        .then(r => {
            var res = JSON.parse(r.status)
            console.log('res --', res.status);
            if (res === 401) {
                return r.json();
            } else if (res === 402) {
                return { status: 402 };
            } else if (res === 422) {
                return { status: 422 }
            } else if (res >= 500) {
                return { status: 500 }
            } else {
                return r.json();
            }
        })
        .catch((e) => {
            console.log('Errrrr ==========', e);
            return null;
        });

    if (rawResponse) {
        callback(rawResponse);
        return rawResponse;
    } else {
        return null;
    }
};

export default {
    ApiCall,
};
