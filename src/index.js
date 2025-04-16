exports.handler = async (event, context) => {
    // Extract request details
    const headers = event.headers || {};
    const body = event.body || '';
    
    // Prepare response
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            received_headers: headers,
            received_body: body
        })
    };
    
    return response;
};