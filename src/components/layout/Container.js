function Container({ children }) {
  return (
    <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 24px" }}>
      {children}
    </div>
  );
}

export default Container;
