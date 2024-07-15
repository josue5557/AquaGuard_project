import React from 'react';
import { Navbar, Container, Nav, Image, Card } from 'react-bootstrap';
import { AuthButton } from '@bundly/ic-react';
import './customNavbar.css'; // Asegúrate de que la ruta sea correcta
import { img1, background1, background2,img2,img3,img4,img5 } from './links';


export function AboutUs() {
  return (
    <>
      <header>
        <AuthButton></AuthButton>
        <Navbar bg="dark" variant="dark" className="mb-4 navbar-custom">
          <Container>
            <Image src={img1} roundedCircle width="150" height="150" className="mr-2" />
            <Navbar.Brand className="navbar-brand-design">Mi Aplicación de Sensores</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/" className="nav-link">Inicio</Nav.Link>
              <Nav.Link href="/datos" className="nav-link">Lectura de Datos</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

            <main className="pt-5 p-8" style={{ backgroundImage:`url(${background1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-4xl mx-auto text-center position-relative">
                    <Image src={img2} width="300" height="300" />
                </div>
            </main>

            <main className="pt-5 p-8" style={{ backgroundImage:`url(${background2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-4xl mx-auto">
                    <Card className="mb-4 card-custom">
                        <Card.Body>
                            <Card.Title className="section-title">¿QUIÉNES SOMOS?</Card.Title>
                            <Card.Text className="section-content">
                                Somos un equipo comprometido con la mejora de la calidad del agua y la sostenibilidad
                                ambiental en Aguascalientes, México. Nuestra misión es enfrentar los desafíos críticos
                                de tratamiento de aguas residuales mediante soluciones innovadoras y ecológicas.
                            </Card.Text>
                            <Image src= {img3} alt="Quienes Somos" fluid />
                        </Card.Body>
                    </Card>

                    <Card className="mb-4 card-custom">
                        <Card.Body>
                            <Card.Title className="section-title">PROBLEMÁTICA</Card.Title>
                            <Card.Text className="section-content">
                                Detectamos que existe una gran problemática en la primera etapa de tratamiento del agua en
                                las plantas tratadoras, la cual consiste en el desbordamiento del tanque de agua residual o
                                contaminada y el agotamiento del agua residual en el tanque. Por otro lado, no existe un
                                sistema de monitoreo en tiempo real del estado del agua en el proceso de filtrado.
                            </Card.Text>
                            <Image src={img4} alt="Problemática" fluid />
                        </Card.Body>
                    </Card>

                    <Card className="mb-4 card-custom">
                        <Card.Body>
                            <Card.Title className="section-title">SOLUCIÓN</Card.Title>
                            <Card.Text className="section-content">
                                El Sistema Integrado de Filtración y Biorremediación (SIFB) soluciona desafíos en plantas
                                tratadoras de agua de Aguascalientes al eliminar eficientemente metales pesados y partículas
                                grandes, monitorear niveles de agua, salinidad y pH, prevenir desbordamientos con sensor
                                ultrasónico, y promover sostenibilidad con biofiltros de algas y plantas vivas, optimizando
                                el tratamiento y la gestión del agua.
                            </Card.Text>
                            <Image src={img5} alt="Solución" fluid />
                        </Card.Body>
                    </Card>
                </div>
            </main>
        </>
    );
}
