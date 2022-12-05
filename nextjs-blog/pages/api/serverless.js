/* 
   Serverless Function (also known as Lambdas) 
   Useful when handling input form validation, etc...
*/

// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    /*
       This handler runs server-side, so is not part of
       the client-side bundle sent to the browser
    */
    res.status(200).json({ text: 'Hello' });
}

// Access this api call at <endpoint>/api/serverless