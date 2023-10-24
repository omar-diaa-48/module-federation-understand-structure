import { mount as mountCart } from 'cart/CartShow';
import { mount as mountProducts } from 'products/ProductsIndex';

console.log('Container!');

mountProducts(document.querySelector('#prod-products'))
mountCart(document.querySelector('#prod-cart'))