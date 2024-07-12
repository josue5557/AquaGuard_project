import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, Card, Image, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthButton } from '@bundly/ic-react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './customNavbar.css';

// Registro de los componentes de Chart.js
Chart.register(...registerables);

export function Home() {
    const [ph, setPh] = useState(7);
    const [tendenciasPh, setTendenciasPh] = useState('');
    const [conductividad, setConductividad] = useState({
        valor: 0.055,
        salinidadPureza: 'Agua pura',
        variaciones: 'Estable'
    });

    // Referencia para la instancia del gráfico
    const chartRef = useRef(null);

    const phData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'pH Agua Limpia',
                data: [7, 7.1, 7.2, 7.1, 7, 7.1],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'pH Agua Sucia',
                data: [6.5, 6.4, 6.6, 6.5, 6.4, 6.5],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ]
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newPh = (Math.random() * (7.0 - 6.8) + 6.8).toFixed(2);
            const tendenciaPh = newPh > ph ? 'Aumentando' : newPh < ph ? 'Disminuyendo' : 'Estable';
            setPh(newPh);
            setTendenciasPh(tendenciaPh);

            const baseConductividad = 0.055;
            const fluctuation = (Math.random() * (0.005) - 0.0025).toFixed(6);
            const newConductividadValor = (baseConductividad + parseFloat(fluctuation)).toFixed(6);

            setConductividad({
                valor: newConductividadValor,
                salinidadPureza: 'Agua pura',
                variaciones: 'Estable'
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [ph]);

    useEffect(() => {
        // Limpieza de la instancia del gráfico cuando el componente se desmonta
        return () => {
            if (chartRef.current && chartRef.current.chartInstance) {
                chartRef.current.chartInstance.destroy();
            }
        };
    }, []);

    return (
        <div className="home">
            <div className="parent-container">
                <AuthButton className="auth-button">Iniciar Sesión</AuthButton>
                <Navbar bg="dark" variant="dark" className="mb-4 navbar-custom">
                    <Container>
                        <Image src="https://internetcomputer.org/img/IC_logo_horizontal.svg" roundedCircle width="150" height="150" className="mr-2" />
                        <Navbar.Brand className="navbar-brand-design">Mi Aplicación de Sensores</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="nav-link">Inicio</Nav.Link>
                            <Nav.Link href="/datos" className="nav-link">Lectura de Datos</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <div className='min-vh-100 d-flex align-items-center justify-content-center bg-light' style={{ backgroundImage: 'url("https://global.discourse-cdn.com/business4/uploads/dfn/original/2X/d/d118475179adf31ed419566b5052467b00b8bb0a.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <Container className='text-center rounded p-5 shadow-lg'>
                        <h1 className='display-1 mb-5 section-title fadeInUp'>Lectura de sensores</h1>

                        <Row className="mb-4">
                            <Col md={6}>
                                <Card className='border-secondary shadow-sm'>
                                    <Card.Body>
                                        <Card.Title className='display-4 mb-4 section-title'>Agua Limpia</Card.Title>
                                        <Card.Text className='h4 section-content'>
                                            <p className='mb-3'>Información sobre agua limpia y su calidad.</p>
                                            <p className='mb-3'>pH: Un pH de 1 indica acidez extrema y es peligroso.</p>
                                            <p className='mb-3'>Conductividad: Para agua potable, el límite es 400 µS/cm.</p>
                                            <p className='mb-3'>Por qué es importante: Un pH bajo y alta conductividad indican contaminación.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='border-secondary shadow-sm'>
                                    <Card.Body>
                                        <Card.Title className='display-4 mb-4 section-title'>Agua Sucia</Card.Title>
                                        <Card.Text className='h4 section-content'>
                                            <p className='mb-3'>Información sobre agua sucia y su impacto ambiental.</p>
                                            <p className='mb-3'>pH: Un pH de 1 indica acidez extrema y es peligroso.</p>
                                            <p className='mb-3'>Conductividad: Límites varían, suele ser alto por contaminantes.</p>
                                            <p className='mb-3'>Por qué es importante: Alto pH y conductividad indican contaminación severa.</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col md={6}>
                                <Card className='border-secondary shadow-sm'>
                                    <Card.Body>
                                        <Card.Title className='display-4 mb-4 section-title'>Sensor de pH</Card.Title>
                                        <Card.Text className='h4 section-content'>
                                            <p className={`mb-3 ${tendenciasPh === 'Aumentando' ? 'fadeInUp' : 'fadeInDown'}`}>Valor actual de pH: {ph}</p>
                                            <p className='mb-3'>Tendencias: {tendenciasPh}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className='border-secondary shadow-sm'>
                                    <Card.Body>
                                        <Card.Title className='display-4 mb-4 section-title'>Sensor de conductividad</Card.Title>
                                        <Card.Text className='h4 section-content'>
                                            <p className='mb-3 fadeIn'>Valor actual de conductividad: {`${conductividad.valor} µS/cm`}</p>
                                            <p className='mb-3'>Salinidad: {conductividad.salinidadPureza}</p>
                                            <p className='mb-3'>Variaciones: {conductividad.variaciones}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col md={12}>
                                <Card className='border-secondary shadow-sm'>
                                    <Card.Body>
                                        <Card.Title className='display-4 mb-4 section-title'>Niveles de pH</Card.Title>
                                        <Card.Text className='h4 section-content'>
                                            <Line ref={chartRef} data={phData} />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}
