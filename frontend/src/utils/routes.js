import { lazy } from "react";
import { Navigate } from "react-router-dom";

const PATH_NAMES = {
  ROOT: "/",
  HOME: "/home",
  FAVORITE: "/favorite",
  LISTENED: "/listened-song",
  UPLOADED: "/upload-music",
  NOTFOUND: "*",
};

// modules
const Home = lazy(() => import("../pages/Home"));
const Favorite = lazy(() => import("../pages/Favorite"));
const ListenedSong = lazy(() => import("../pages/ListenedSong"));
const Notfound = lazy(() => import("../pages/Page404"));
const UploadMusic = lazy(() => import("../pages/UploadMusic"));

const Config = [
  {
    path: PATH_NAMES.ROOT,
    exact: true,
    element: <Navigate to={PATH_NAMES.HOME} replace />,
  },
  {
    path: PATH_NAMES.HOME,
    exact: true,
    element: <Home />,
  },
  {
    path: PATH_NAMES.LISTENED,
    exact: true,
    element: <ListenedSong />,
  },
  {
    path: PATH_NAMES.FAVORITE,
    exact: true,
    element: <Favorite />,
  },
  {
    path: PATH_NAMES.UPLOADED,
    exact: true,
    element: <UploadMusic />,
  },
  {
    path: PATH_NAMES.NOTFOUND,
    exact: true,
    element: <Notfound />,
  },
];

export default Config;
