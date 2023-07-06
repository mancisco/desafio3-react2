import React from 'react';

const Home = () => {
    const backgroundImage = 'img/1.jpg';
    return (
        <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ height: '60vh' }}>
                <div className="col-6 text-center text-white">
                    <h1 className="display-1">PokeDex</h1>
                    <p className="lead">
                        Encuentra el pokemon que buscas con sus estadisticas
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Home;