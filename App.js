import "./App.css";
import Cardboard from "/cardboard";
import Nav from "/Nav";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return tickets ? (
    <div>
      <Nav />
      <Cardboard />
    </div>
  ) : (
    console.error("Something went wrong")
  );
};

export default App;