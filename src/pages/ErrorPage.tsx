import { ErrorPageProps } from "../interfaces/errorPagePropsInterface";
import { Space } from 'antd';

function ErrorPage({ errorMessage }: ErrorPageProps): JSX.Element {
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
    <Space direction="vertical" size="middle" style={contentStyle}>
      <h1>Oops!</h1>
      <p>{errorMessage || "An unexpected error has occurred."}</p>
    </Space>
  );
}

export default ErrorPage;
