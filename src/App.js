import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './main';

function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Tanszéki weblap" scroll>
            <Navigation>
                <a href="/home">Kezdőlap</a>
                <a href="/about">Rólunk</a>

            </Navigation>
        </Header>
        <Drawer title="Tanszéki weblap">
            <Navigation>
                <a href="http://kmf.uz.ua/hu/">Főiskola weboldala</a>
                <a href="/contact">Elérhetőségeink</a>

            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
