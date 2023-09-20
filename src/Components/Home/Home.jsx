import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FidgetSpinner } from  'react-loader-spinner'

const Home = () => {
    const navigation =useNavigation()
    return (
        <div>
            <Header></Header>
            {
                navigation.state==="loading" ? <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={['#ff0000', '#00ff00', '#0000ff']}
                backgroundColor="#F4442E"
              />
              :<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;