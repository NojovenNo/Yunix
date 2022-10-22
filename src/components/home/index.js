import React from "react"
import LoadingPag from "./loadingPage"
import HomePag from "./HomePage";

function Inteface() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <React.Fragment>{loading ? <LoadingPag /> : <HomePag />}</React.Fragment>;
};

export default Inteface;
