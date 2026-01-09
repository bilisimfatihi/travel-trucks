const ErrorState = ({ message, onRetry }) => {
  return (
    <div style={{ textAlign: "center", padding: "64px 0" }}>
      <p>{message}</p>
      {onRetry && (
        <button className="search-button" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorState;
