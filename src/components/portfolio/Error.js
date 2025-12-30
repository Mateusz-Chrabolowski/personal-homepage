import "./Error.css";

function Error({ githubUsername }) {
  return (
    <div className="error">
      <p className="error__title">Ooops! Something went wrong…</p>
      <p className="error__desc">
        Sorry, failed to load GitHub projects.
        {githubUsername ? " You can check them directly on GitHub." : ""}
      </p>

      {githubUsername && (
        <a
          className="error__button"
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noreferrer"
        >
          Go to GitHub
        </a>
      )}
    </div>
  );
}

export default Error;
