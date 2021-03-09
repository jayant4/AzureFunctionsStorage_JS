module.exports = async function (context, req) {

    const itemToCreate = req.body;
    
    // Return a 400 (bad request) if there are issues.
    if (itemToCreate == null) {
        context.res = {
            status: 400,
            headers: { "Content-Type": "application/json" },
            body: "Product data must be present in request body and have the 'id' property set."
        }
        return;
    }
    
    //  Return the product back to the caller and also send to Cosmos DB via the out binding.
    context.bindings.items = itemToCreate;

    context.res = {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: { product: itemToCreate }
    };
};