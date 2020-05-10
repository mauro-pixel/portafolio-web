import React from 'react';
import Hero from '../../components/hero/Hero.componenets';
import Content from '../../components/content/Content.components';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <p>Hola, me llamo Mauro. Soy un desarrollador completo con experiencia en  Angular, Express, Node JS, SQL, MYSQL, MongoDB y React.</p>
            <p>Mi sueño es algún día comenzar mi propio negocio y convertirme en emprendedor (actualmente trabajando en algunas ideas).</p>
            <p>Estoy constantemente aprendiendo cosas nuevas. actualmente esas cosas incluyen ganar más experiencia con MongoDB, React, Express JS y Node JS</p>
            </Content>
        </div>
    );

}

export default AboutPage;