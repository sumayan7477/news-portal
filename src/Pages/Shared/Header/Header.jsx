import moment from 'moment/moment';
import logo from '../../../assets/logo.png';
const Header = () => {
    return (
        <div className='text-center mt-16 mb-10 flex flex-col gap-3'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D ,YYYY")}</p>
        </div>
    );
};

export default Header;