import HomeButton from './HomeButton';
import HomeMain from './HomeMain';
import '../homepage.css';



function Homepage() {
    console.log(2)
    return ( 
        <div className="mainHome">
            {/* <img src="" alt="" /> */}
            <h1>Titre</h1>
            <HomeButton />
        </div>
     );
}

export default Homepage;