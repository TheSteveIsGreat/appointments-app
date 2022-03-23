const AxiosContainer = (props) => {
  const { children, loading, error } = props;
  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      {children}
    </div>
  );
};
export default AxiosContainer;