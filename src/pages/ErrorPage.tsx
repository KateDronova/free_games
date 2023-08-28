import { ErrorPageProps } from "../interfaces/errorPagePropsInterface";

function ErrorPage({ errorMessage }: ErrorPageProps): JSX.Element {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>{errorMessage || "An unexpected error has occurred."}</p>
    </div>
  );
}

export default ErrorPage;
