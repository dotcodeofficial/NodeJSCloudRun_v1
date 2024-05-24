import axios from 'axios';

class bearerToken {

    constructor() {
        this.bearerToken = this.generateBearerToken();
        this.generatedTime = Date.now();
        this.expired = (this.generatedTime + (this.bearerToken.expires_in * 1000) < Date.now());
    }

    get getBearerToken() {
            var temp = this.generateBearerToken();
            console.log("AAAAAAAAAAA"+temp);
            return temp;
        

        return this.bearerToken;
    }



    get generateBearerToken() {
        var clientID = '9cd44b6e64f0485aa79e5c0bd0bfda13';
        var clientSecret = 'adadf5f5c1fb4f32a408c6251048bf9b';

        let formData = new FormData();
        formData.append('grant_type', 'client_credentials');
        formData.append('user', clientID);
        formData.append('password', clientSecret);
        formData.append('scope', 'basic');

        return axios.post('https://oauth.fatsecret.com/connect/token', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64')
            }
        }).then((response) => {
            //console.log(response.data);
            this.bearerToken = response.data;
            this.generatedTime = Date.now();
            return response.data;
        })
        .catch((error) => {
            //console.log(error);
            return error;
        });

    }

}

export default bearerToken;