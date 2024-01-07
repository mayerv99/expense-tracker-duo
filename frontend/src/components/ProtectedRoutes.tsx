import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export default function ProtectedRoutes({ children }: Props) {
  const navigate = useNavigate();

  const isAuthenticated = false;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  });

  return <>{children}</>;
}
