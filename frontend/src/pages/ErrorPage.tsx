import error from '@/styles/Error.module.css';

function ErrorPage() {

  return (
    <div className={error.centerContent}>
      <div className={`container ${error.errorContainer}`}>
        <h1>
          404 
        </h1>
        <h1>
          PAGE NOT FOUND
        </h1>
      </div>
    </div>
  )
}

export default ErrorPage;
