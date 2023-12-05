import React from "react";
import { Container, Image } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function Home() {

    return (
        <div>

            <MenuSistema style={{ zIndex: 1 }} />

            <div style={{ position: 'fixed', top: 55, left: 0, width: '100%', height: '100%', margin: 0, padding: 0 }}>
                <Image src='PlanoDeFundo.jpg' size='massive' style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(8px)' }} />

                <Container style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'orange', fontFamily: 'Bubblebody neue', textShadow: '1px 1px 2px #888888' }}>
                    <h1 style={{ fontSize: '15em', margin: 0 }}>Come+</h1>
                    <p style={{ fontSize: '1.8em', margin: '0 auto', color: 'white', fontFamily: 'Nunito Sans' }}>O elo que une o alimento ao coração</p>
                </Container>

            </div>
        </div>
    )
}
