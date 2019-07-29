import React from 'react';

import QRCode from 'react-native-qrcode';
import {Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Menu({translateY}){
    return(
        <Container style={{opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
        }),
        }}>
            <Code>
                <QRCode 

                    value="http://rocketseat.com.br"
                    size={80}
                    fgColor="#FFF"
                    bgColor="#8b10ae"
                
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff" />
                    <NavText>Me Ajuda</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff" />
                    <NavText>Perfil</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff" />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>

                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff" />
                    <NavText>Configurações do app</NavText>
                </NavItem>

               
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>Sair do App</SignOutButtonText>
            </SignOutButton>

        </Container>
    );
}