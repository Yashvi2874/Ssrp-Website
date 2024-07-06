import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';

export default function Collaborators_slider() { 
return ( 
	<div className='Carousel'> 
	<Carousel> 
		<Carousel.Item interval={2000}> 
		<img className="d-block w-100" src='/assets/images/about_images/Collaborators/kjsit image 1.jpg' alt="KJSIT"/>  
		</Carousel.Item> 
		<Carousel.Item interval={2000}> 
		<img className="d-block w-100" src='/assets/images/about_images/Collaborators/kjsit image 2.jpg' alt="KJSIT"/> 
		</Carousel.Item> 
	</Carousel> 
	</div> 
); 
}
