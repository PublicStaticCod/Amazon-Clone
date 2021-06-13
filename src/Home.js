import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/Rakshabandhan/D11399736_Rakshabandhan_Fest_Desktop-Header._CB1198675309_.jpg'
					alt=''
				/>

				<div className='home__row'>
					<Product
						id='11'
						title='Apple iPhone 11 (64GB) - (Product) RED'
						price={599}
						image='https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg'
						rating={5}
					/>
					<Product
						id='12'
						title='Apple iPhone XR (128GB) - Black'
						price={499}
						image='https://images-na.ssl-images-amazon.com/images/I/519KIlHA2wL._SY606_.jpg'
						rating={4}
					/>
					<Product
						id='13'
						title='Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model)'
						price={399}
						image='https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SX466_.jpg'
						rating={4}
					/>
				</div>

				<div className='home__row'>
					<Product
						id='12'
						title='Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey'
						price={1300}
						image='https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg'
						rating={5}
					/>
					<Product
						id='13'
						title='Samsung Galaxy Note 20 Ultra 5G (Mystic Bronze, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
						price={1100}
						image='https://www.gizmochina.com/wp-content/uploads/2020/07/Samsung-Galaxy-Note-20-Ultra-564x564.jpg'
						rating={5}
					/>

					<Product
						id='14'
						title='Dell Alienware 17 Alienware 17 17-inch Laptop (Core i7-4700MQ/16GB/1TB/Windows 8.1/2GB Graphics)'
						price={1300}
						image='https://images-na.ssl-images-amazon.com/images/I/41r3kyKO1xL.jpg'
						rating={5}
					/>
				</div>

				<div className='home__row'>
					<Product
						id='15'
						title='Samsung 138 cm (55 Inches) Wondertainment Series Ultra HD LED Smart TV UA55TUE60AKXXL (Titan Gray) (2020 model)'
						price={1300}
						image='https://images-na.ssl-images-amazon.com/images/I/81a5%2BITwX4L._SL1500_.jpg'
						rating={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
