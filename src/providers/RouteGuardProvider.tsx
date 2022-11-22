import { useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner } from "@src/components";
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
    return <Spinner height="h-screen" width="w-screen" />;
  }

  return children;
}
