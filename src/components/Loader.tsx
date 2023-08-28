import { Space, Spin } from 'antd';

function Loader() {
  const contentStyle: React.CSSProperties = {
    width: '100%',
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    marginTop: '20px',
    marginBottom: '20px',
  };
  return (
    <Space direction="vertical" style={contentStyle} align='center'>
      <Spin size="large"/>
      <span>Loading...</span>
    </Space>
  );
}

export default Loader;
