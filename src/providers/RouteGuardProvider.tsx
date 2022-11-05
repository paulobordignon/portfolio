import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { IRouteGuardProvider } from "./types";

export function RouteGuardProvider({ children }: IRouteGuardProvider) {
  const router = useRouter();

  const { data: session, status }: any = useSession();
  const isAdmin =
    status === "authenticated" &&
    session?.address === "0x6585d1ba166aeBF1e6A88f816e3024BF324D21ad";

  const protectedRoutes = ["/admin"];
  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
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
