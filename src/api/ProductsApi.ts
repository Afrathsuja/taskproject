import apiApp from "./index";

const endpoint = "categories";

const ProductsApi = {

    list: (): Promise<any> => {
        return new Promise((resolve, reject) => {
            apiApp()
                .get(`/lend/api/products`)
                .then(response => {

                    resolve(response.data);

                })
                .catch(error => {
                    reject(error);
                });
        });
    },
    getOne: (id: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            apiApp()
                .get(`/lend/api/products/${id}`)
                .then(response => {

                    resolve(response.data);

                })
                .catch(error => {
                    reject(error);
                });
        });
    },
}

export default ProductsApi;