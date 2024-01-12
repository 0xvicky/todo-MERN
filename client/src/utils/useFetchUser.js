const useFetchUser = () => {
  const user = localStorage.getItem("user");
  return user;
};

export default useFetchUser;
