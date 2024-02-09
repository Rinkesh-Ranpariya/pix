import { Route, Routes } from "react-router-dom";
import {
  LiveWallpapers,
  Login,
  Quotes,
  Ringtons,
  Settings,
  Users,
  Wallpaper,
  PageNotFound,
  ForgotPassword,
} from "../pages";
import AuthRoutes from "./AuthRoutes";
import Dashboard from "../pages/dashboard";
import { useSelector } from "react-redux";
import ResetPassword from "../pages/resetPassword";
const RouteProvider = () => {
  const loginstate = useSelector((state) => state.login);
  console.log(loginstate, "loginstate abc");
  const authRoutes = [
    {
      path: "/",
      component: <Dashboard />,
      userAccessable: loginstate?.userInfo?.isAdmin,
    },
    {
      path: "/wallpapers",
      component: <Wallpaper />,
      userAccessable: true,
    },
    {
      path: "/live-wallpapers",
      component: <LiveWallpapers />,
      userAccessable: true,
    },
    {
      path: "/ringtones",
      component: <Ringtons />,
      userAccessable: true,
    },
    {
      path: "/quotes",
      component: <Quotes />,
      userAccessable: true,
    },
    {
      path: "/users",
      component: <Users />,
      userAccessable: true,
    },
    {
      path: "/settings",
      component: <Settings />,
      userAccessable: true,
    },
  ];
  console.log(authRoutes, "authRoutes");
  return (
    <Routes>
      {authRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={true}
          element={<AuthRoutes>{route.component}</AuthRoutes>}
        />
      ))}
      <Route exact={true} path="/login" element={<Login />} />
      <Route
        exact={true}
        path="/forgot-password"
        element={<ForgotPassword />}
      />
      <Route exact={true} path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RouteProvider;
