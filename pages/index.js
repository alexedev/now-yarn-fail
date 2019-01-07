// @flow

import React from 'react';

import dynamic from 'next/dynamic';
const App = dynamic(() => import('../src/components/App'), {
  ssr: false
});

const Index = () => <App />;

export default Index;
