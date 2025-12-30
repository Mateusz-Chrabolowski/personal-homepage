import "./Loading.css";

function Loading() {
  return (
    <div className="loading" aria-live="polite">
      <div className="loading__spinner" aria-hidden="true" />
      <p className="loading__text">Please wait, projects are being loaded…</p>
    </div>
  );
}

export default Loading;
