import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAccount } from "@src/hooks";
import { IRouteGuardProvider } from "./types";

export function RouteGuardProvider({ children }: IRouteGuardProvider) {
  const router = useRouter();
  const { isAdmin, status } = useAccount();

  const protectedRoutes = ["/admin"];
  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (!pathIsProtected) {
      return;
    }
    if (status !== "loading" && !isAdmin && pathIsProtected) {
      router.push("/");
    }
  }, [status, isAdmin, pathIsProtected, router]);

  if ((status === "loading" || !isAdmin) && pathIsProtected) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-primaryHover border-primary border-double rounded-full animate-spin" />
      </div>
    );
  }

  return children;
}
