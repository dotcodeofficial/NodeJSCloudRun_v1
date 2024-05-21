 class fatSecretRequestParameters {
    constructor(method, search_expression, format) {
        this.method = method;
        this.search_expression = search_expression;
        this.format = format;
    }

    get getParameters() {
        switch(this.method) {
        case 'food.get.v4':
            return '?method='+ this.method + '&food_id='+ this.search_expression + '&format='+ this.format;
        case 'foods.search':
            return '?method='+ this.method + '&search_expression=' + this.search_expression + '&format='+ this.format;
        }
    }
    
}

export default fatSecretRequestParameters;