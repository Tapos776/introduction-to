const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div>
            <div className="userAll">
                <h3>Phone Name: {phones.phone_name}</h3>
                <img src={phones.image} alt="Phone" />
                <h4>{phones.slug}</h4>
            </div>
        </div>
    );
};

export default Phones;