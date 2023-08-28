import { ErrorPageProps } from "../interfaces/errorPagePropsInterface";
import { Space } from 'antd';

function ErrorPage({ errorMessage }: ErrorPageProps): JSX.Element {
  return (
    <Space direction="vertical" size="middle">
      <h1>Oops!</h1>
      <p>{errorMessage || "An unexpected error has occurred."}</p>
    </Space>
  );
}

export default ErrorPage;
