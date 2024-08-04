import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName("Ajay");
  },[])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="app">
        <UserContext.Provider value={{loggedInUser : 'Elon'}}>
            <Header />
        </UserContext.Provider>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <Suspense fallback={<Shimmer/>}>
         <About/>
        </Suspense> 
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<Shimmer/>}>
          <Grocery/>
        </Suspense> 
      },
      {
        path:"/restaurants/:resId",
        element: <Menu/>
      }
    ],
    errorElement: <Error/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
