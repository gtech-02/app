import React from 'react';
import './Footer.css'
import logoFooter from '../../assets/logo-footer.svg'


const Footer = () => {

    return(

        <footer className="text-center text-lg-start text-white text-sm" style={{ backgroundColor: 'rgb(33, 37, 41)' }}>
        <section className="justify-content-left p-1" style={{ backgroundColor: 'rgb(33, 37, 41)' }}>
            {/* Conteúdo do primeiro section omitido para brevidade */}
        </section>
    
        <section className="">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold"><img src= {logoFooter} alt="Logo" className="d-inline-block align-text-top logo-width"/></h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '0', backgroundColor: '#7c4dff', height: '2px' }} />
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                        </p>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        
                    </div>
    
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Informação</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '0', backgroundColor: '#7c4dff', height: '2px' }} />
                        <p>
                            <a href="#!" className="text-white">Sobre Drip Store</a>
                        </p>
                        <p>
                            <a href="#!" className="text-white">Segurança</a>
                        </p>
                        <p>
                            <a href="#!" className="text-white">Wishlist</a>
                        </p>
                        <p>
                            <a href="#!" className="text-white">Blog</a>
                        </p>
                        <p>
                            <a href="#!" className="text-white">Trabalhe conosco</a>
                        </p>
                        <p>
                            <a href="#!" className="text-white">Meus Pedidos</a>
                        </p>
                    </div>
    
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold">Categorias</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '0', backgroundColor: '#7c4dff', height: '2px' }} />
                        <p>
                            <a href="#!" className="text-white">Home Page</a>
                        </p>
                        <p>
                            <a href="#!" className="text-white">Produtos</a>
                        </p>
                        <p>
                            <a href="#!" className="text-white">Categorias</a>
                        </p>
                        <p>
                            <a href="#!" className="text-white">Meus Pedidos</a>
                        </p>
                    </div>
                    
    
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold">Contatos</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '0', backgroundColor: '#7c4dff', height: '2px' }} />
                        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p>(85) 3051-3411</p>
                    </div>
                </div>
            </div>
        </section>
    
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderTop: '2px solid #333'  // Definindo uma borda superior de 2px sólida na cor #333
}}>
            © 2024 Copyright - Digital College.
        </div>
    </footer>
    );

}
export default Footer