import LogoImg from "./"

function ProfileCard(props){
     const {titulo , arroba , img } =props;

     function handleClick(){
        console.log("click en el boton");
     };
     
        return (
            <div className="card">
                <div className="card-img">
                    <figure className="image is-1by1">
                    <img src={img} alt="logo"/>   
                    </figure>
                    <div className="card-content">
                        <div className="media-content">
                        <h3 className="title is-4">Titulo: {titulo}</h3>
                        <p className="subtitle is-4">{arroba}</p>

                        </div>
                        <p>Likes 0</p>
                        <button onClick={handleClick} >+</button>
                    </div>

                </div>
                
                
            </div>



            )
            };

export default ProfileCard;