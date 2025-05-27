import React from 'react';
import { Container, Header } from './App.styled';
import Card from './components/Card';
import GhostCard from './components/GhostCard';

function App() {
  return (
    <>
      <Header>Quote Keeper</Header>
      <Container>
        <Card quote="Float like a butterfly, sting like a bee" />
        <Card quote="Float like a butterfly, sting like a bee" />
        <Card quote="Float like a butterfly, sting like a bee" />
        <Card quote="Float like a butterfly, sting like a bee" />
        <Card quote="Float like a butterfly, sting like a bee" />
        <GhostCard />
      </Container>
    </>
  );
}

export default App;
