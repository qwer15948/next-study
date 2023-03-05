import React from 'react'
import { Header } from 'semantic-ui-react';
import Gnb from './Gnb';

export default function Top() {
  return (
    <div>
      <div style={{display: "flex"}}>
        <div style={{flex: "100px 0 0"}}>

        </div>

        <Header as="h1">호냐냑</Header>
      </div>
      <Gnb></Gnb>
    </div>
  );
}
