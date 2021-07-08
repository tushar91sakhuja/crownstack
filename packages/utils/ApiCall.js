export async function getRequestApi(url){
    
    return fetch(
        url,
        {
            method: "GET",
           

        }

    // ).then((response) => {


    //     return response.text();


    // }).then((resText) => {
        
        

    //     return JSON.parse(resText);

    // })
    ).then((responseBody) => {

        return responseBody.json();
    });

}

export const URLS = {
    getSongs:"https://itunes.apple.com/search?term=Michael+jackson",
}