/**
 * @copyright 2026 Adam Huras
 * @license Apache-2.0
 */


export function createProductModule(){

const repository new ProductRepository();
const service = new ProductService();
const controller = new ProductController();


return{
    repository,
    controller
}

}