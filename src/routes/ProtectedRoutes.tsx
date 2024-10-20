import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/store";

type Props = {
  children: React.ReactNode;
};

const ProtectedRoutes = ({ children }: Props) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default ProtectedRoutes;
