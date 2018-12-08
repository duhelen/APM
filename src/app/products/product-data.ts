import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product, Appliances, Foods, HomeGoods } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        'id': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2018',
        'description': 'Leaf rake with 48-inch wooden handle',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
        'tags': ['rake', 'leaf', 'yard', 'home']
      },
      {
        'id': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2018',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      },
      {
        'id': 5,
        'productName': 'Hammer',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2018',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
        'tags': ['tools', 'hammer', 'construction']
      },
      {
        'id': 8,
        'productName': 'Saw',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2018',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
      },
      {
        'id': 10,
        'productName': 'Video Game Controller',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2018',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
      }
    ];
    const appliances: Appliances[] = [
      {
        'id': 11,
        'productName': 'TV',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2018',
        'description': 'Leaf rake with 48-inch wooden handle',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
        'tags': ['rake', 'leaf', 'yard', 'home']
      },
      {
        'id': 12,
        'productName': 'TV2',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2018',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      },
      {
        'id': 15,
        'productName': 'TV3',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2018',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
        'tags': ['tools', 'hammer', 'construction']
      },
      {
        'id': 18,
        'productName': 'TV4',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2018',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
      },
      {
        'id': 19,
        'productName': 'TV5',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2018',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
      }
    ];
    const foods: Foods[] = [
      {
        'id': 21,
        'productName': 'Food1',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2018',
        'description': 'Leaf rake with 48-inch wooden handle',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
        'tags': ['rake', 'leaf', 'yard', 'home']
      },
      {
        'id': 22,
        'productName': 'Food2',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2018',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      },
      {
        'id': 25,
        'productName': 'Food3',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2018',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
        'tags': ['tools', 'hammer', 'construction']
      },
      {
        'id': 28,
        'productName': 'Food4',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2018',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
      },
      {
        'id': 29,
        'productName': 'Food5',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2018',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
      }
    ];
    const homegoods: HomeGoods[] = [
      {
        'id': 31,
        'productName': 'HomeGoods',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2018',
        'description': 'Leaf rake with 48-inch wooden handle',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
        'tags': ['rake', 'leaf', 'yard', 'home']
      },
      {
        'id': 32,
        'productName': 'HomeGoods',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2018',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
      },
      {
        'id': 35,
        'productName': 'HomeGoods',
        'productCode': 'TBX-0048',
        'releaseDate': 'May 21, 2018',
        'description': 'Curved claw steel hammer',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
        'tags': ['tools', 'hammer', 'construction']
      },
      {
        'id': 38,
        'productName': 'HomeGoods',
        'productCode': 'TBX-0022',
        'releaseDate': 'May 15, 2018',
        'description': '15-inch steel blade hand saw',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
      },
      {
        'id': 39,
        'productName': 'HomeGoods',
        'productCode': 'GMG-0042',
        'releaseDate': 'October 15, 2018',
        'description': 'Standard two-button video game controller',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
      }
    ];


    return { products, appliances, foods, homegoods };
  }
}
