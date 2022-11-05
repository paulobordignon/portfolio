import { useSession } from "next-auth/react";

export function useAccount() {
  const { data: session, status }: any = useSession();
  const isAdmin =
    status === "authenticated" &&
    session?.address === "0x6585d1ba166aeBF1e6A88f816e3024BF324D21ad";

  return { session, status, isAdmin };
}
