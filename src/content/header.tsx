import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const App = () => {
  return (
    <>
      <div className="text-center mt-10">
        <Title level={2} style={{ textAlign: 'center', marginTop: '20px' }}>
          RAKOTOMALALA Fahasoavana Johann Luciano 23 ans
        </Title>
        <Paragraph
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}
        >
          Test
        </Paragraph>
      </div>
    </>
  );
};

export default App;
