import React, { useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingApi } from '../redux/greetings/greetings';

const Greeting =() => {
  const greeting = useSelector((state) => state.greetingsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchGreetingApi());
  }, [dispatch]);

  const refreshPage = () =>{
    window.location.reload(false);
  }
    return (
        <div className="mt-20 flex flex-col items-center">
          <p className=" font-bold">{ greeting }</p>
          <button onClick={refreshPage} className="bg-sky-500 p-2 mt-4 rounded text-slate-50">Get another greeting</button>
      </div>
    );
}

export default Greeting