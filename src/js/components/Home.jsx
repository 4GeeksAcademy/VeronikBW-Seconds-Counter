import '../../styles/index.css';
import First from './First';
import Second from './Second';
import Thrid from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';


//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center bg-black">
			<i className="counter fa-regular fa-clock px-2"></i>
			<Sixth />
			<Fifth />
			<Fourth />
			<Thrid />
			<Second />
			<First />
		</div>
	);
};

export default Home;