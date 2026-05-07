import { cookies } from "next/headers";

export const userService = {
  getSession: async () => {
    try {
      const cookieStore = await cookies();

      const res = await fetch("http://localhost:5000/api/auth/get-session", {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const session = await res.json();

      if (session === null) {
        return { data: null, error: new Error("No session found") };
      }
      return { data: session, error: null };
    } catch (error) {
      console.error("Error fetching session:", error);
      return { data: null, error: error };
    }
  },
};
