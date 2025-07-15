import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/auth/user", { credentials: "include" })
      .then(async (res) => {
        if (res.ok) {
          setUser(await res.json());
        } else {
          setUser(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  const login = (provider: string) => {
    window.location.href = `/auth/${provider}`;
  };

  const logout = () => {
    window.location.href = "/logout";
  };

  return {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
  };
}
