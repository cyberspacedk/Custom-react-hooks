import React from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";

import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

import {Toggle} from './components/Toggle';
import {Increment} from './components/Increment'
import {Mount} from './components/Mount';
import {Hover} from './components/Hover';
import {NavWrapper} from './components/Nav'; 
import {Cookie} from './components/Cookie';
import {Script} from './components/Script';
import {PageProvider} from './state';


function App() {
  return (
    <PageProvider>
      <div>
        <Header>
          <Menu />
          <h1>Header</h1>
        </Header>

        <NavWrapper />

        <Container>
          {/* hooks playground */}
          <h2>Super Cool</h2>
          <Toggle />
          <Increment />
          <Mount />
          <Cookie />
          <Hover />
          <Script />
          {/* end */}
          
          <CardGrid>
            <Card style={{ background: "var(--purp)" }}>
              <h3>Some card</h3>
              <img src={purp} alt="pic"/>
            </Card>
            <Card style={{ background: "var(--blue)" }}>
              <h3>Some card</h3>
              <img src={blue} alt="pic"/>
            </Card>
            <Card style={{ background: "var(--black)" }}>
              <h3>Some card</h3>
              <img src={black} alt="pic"/>
            </Card>
            <Card style={{ background: "var(--green)" }}>
              <h3>Some card</h3>
              <img src={green} alt="pic"/>
            </Card>
          </CardGrid>

        </Container>
      </div>
    </PageProvider>
  );
}

export default App;
