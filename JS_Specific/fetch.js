const fetch = require("node-fetch");

const featureFlagToggle = (property,value,flagKey) => {
    const headers = {
     'Content-Type': 'application/json',
      Accept: 'application/json'
    }
    const postBody = {
      entityContext:{}
    }
    postBody.entityContext[property] = value;
    postBody.flagKey = flagKey;

    fetch('https://configr.testmgmt.devappdirect.me/api/v1/evaluation/public/flag',{
      method : 'POST',
      headers,
      body : JSON.stringify(postBody),
      cache : 'no-store',
      credentials : 'omit'
    })
    .then(function(response){
        if(response.status !== 200){
            console.log('Error with Feature Flag Service.Status Code : ' + response.status)
            return;
        }

        response.json().then(function(data){
            console.log(data)
        })
    })
    .catch(function(err){
        console.log('Fetch Feature Flag Service Error', err)
    });
  }
 
  featureFlagToggle('username','mohit123','checkout_custom_attribute');