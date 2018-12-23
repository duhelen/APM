import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      {
        'id': 1,
        'productName': 'Oven',
        'productColor': 'Black',
        'availability': 'In Stock',
        'description': 'Samsung',
        'price': 199.95,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/6622/liftarn-Washing-machine-1.png',
        'tags': [''],
        'productType': 'Appliances'
      },
      {
        'id': 2,
        'productName': 'Washer',
        'productColor': 'White',
        'availability': 'In Stock',
        'description': 'Samsung',
        'price': 199.95,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/6622/liftarn-Washing-machine-1.png',
        'tags': [''],
        'productType': 'Appliances'
      },
      {
        'id': 3,
        'productName': 'Dryer',
        'productColor': 'White',
        'availability': 'In Stock',
        'description': 'Samsung',
        'price': 199.95,
        'starRating': 3.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/6622/liftarn-Washing-machine-1.png',
        'tags': [''],
        'productType': 'Appliances'
      },
      {
        'id': 4,
        'productName': 'Sweater',
        'productColor': 'Orange',
        'availability': 'In Stock',
        'description': 'Burberry',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/213607/Pullover-lineart.png',
        'productType': 'Clothing'
      },
      {
        'id': 5,
        'productName': 'Cardigan',
        'productColor': 'Red',
        'availability': 'In Stock',
        'description': 'Burberry',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/213607/Pullover-lineart.png',
        'productType': 'Clothing'
      },
      {
        'id': 6,
        'productName': 'Scarf',
        'productColor': 'Cream',
        'availability': 'In Stock',
        'description': 'Burberry',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/213607/Pullover-lineart.png',
        'productType': 'Clothing'
      },
      {
        'id': 7,
        'productName': 'Pie',
        'productColor': 'Yellow',
        'availability': 'In Stock',
        'description': 'Apple',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/310794/1543137483.png',
        'tags': [''],
        'productType': 'Foods'
      },
      {
        'id': 8,
        'productName': 'Cake',
        'productColor': 'Brown',
        'availability': 'In Stock',
        'description': 'Chocolate',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/310794/1543137483.png',
        'tags': [''],
        'productType': 'Foods'
      },
      {
        'id': 9,
        'productName': 'Cookie',
        'productColor': 'White',
        'availability': 'In Stock',
        'description': 'White Chocolate',
        'price': 8.9,
        'starRating': 4.8,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/310794/1543137483.png',
        'tags': [''],
        'productType': 'Foods'
      },
      {
        'id': 10,
        'productName': 'Cutting Board',
        'productColor': 'Green',
        'availability': 'In Stock',
        'description': 'Plastic',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/301017/1524791345.png',
        'productType': 'HomeGoods'
      },
      {
        'id': 11,
        'productName': 'Dehydrator',
        'productColor': 'Gray',
        'availability': 'In Stock',
        'description': 'Nesco',
        'price': 111.55,
        'starRating': 3.7,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/301017/1524791345.png',
        'productType': 'HomeGoods'
      },
      {
        'id': 12,
        'productName': 'Knife',
        'productColor': 'Brown',
        'availability': 'In Stock',
        'description': 'Fukinawa',
        'price': 11.55,
        'starRating': 3.7,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/301017/1524791345.png',
        'productType': 'HomeGoods'
      },
      {
        'id': 13,
        'productName': 'Necklace',
        'productColor': 'Platinum',
        'availability': 'In Stock',
        'description': 'Platinum',
        'price': 135.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/208870/artifact-necklace-imperial.png',
        'productType': 'Jewelry'
      },
      {
        'id': 14,
        'productName': 'Earrings',
        'productColor': 'Silver',
        'availability': 'In Stock',
        'description': 'Silver',
        'price': 235.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/208870/artifact-necklace-imperial.png',
        'productType': 'Jewelry'
      },
      {
        'id': 15,
        'productName': 'Ring',
        'productColor': 'Clear',
        'availability': 'In Stock',
        'description': 'Diamond',
        'price': 6635.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/208870/artifact-necklace-imperial.png',
        'productType': 'Jewelry'
      },
      {
        'id': 16,
        'productName': 'Pumps',
        'productColor': 'Purple',
        'availability': 'In Stock',
        'description': '5 Inches',
        'price': 55.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/215041/Schuhe-lineart.png',
        'productType': 'Shoes'
      },
      {
        'id': 17,
        'productName': 'Loafers',
        'productColor': 'Brown',
        'availability': 'In Stock',
        'description': 'Soft',
        'price': 85.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/215041/Schuhe-lineart.png',
        'productType': 'Shoes'
      },
      {
        'id': 18,
        'productName': 'Sneakers',
        'productColor': 'Black',
        'availability': 'In Stock',
        'description': 'Nike',
        'price': 35.95,
        'starRating': 4.6,
        'imageUrl': 'https://openclipart.org/image/800px/svg_to_png/215041/Schuhe-lineart.png',
        'productType': 'Shoes'
      }
    ];

    return { products };
  }
}
