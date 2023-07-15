import { useSession } from "next-auth/react";

export function useAccount() {
  const { data: session, status }: any = useSession();
  const isAdmin =
    status === "authenticated" &&
    session?.address === process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

  return { session, status, isAdmin };
}
