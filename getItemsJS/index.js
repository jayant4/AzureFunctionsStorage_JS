// const {AzureFunction, Context, HttpRequest} = require("@azure/functions");

module.exports = async function (context, req) {
    const loadedProducts = context.bindings.inputItems;
    let tempArray = [];
    loadedProducts.forEach(element => {
        let itemObject = {
            task: element.task,
            id: element.id,
            isCompleted: element.isCompleted
        }
        tempArray.push(itemObject);
    });

    context.res = {
        status: 200,
        headers: { "Content-Type": "application/json" },
        body: {
            products: tempArray
        }
    };

};
