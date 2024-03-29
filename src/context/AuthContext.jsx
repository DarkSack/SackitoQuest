import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [sessionUser, setSessionUser] = useState([]);

  async function signInWithDiscord() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "discord",
      });
      localStorage.setItem("provider", "Discord");
      if (error) throw new Error("Error al iniciar sesión con Discord");
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function signInWithTwitch() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "twitch",
      });
      localStorage.setItem("provider", "Twitch");
      if (error) throw new Error("Error al iniciar sesión con Twitch");
      return data;
    } catch (error) {
      console.error(error.message);
    }
  }

  async function signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.log(error);
        throw new Error("Ha ocurrido un error al cerrar sesión");
      }
      localStorage.clear();
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    const handleAuthStateChange = async (e, session) => {
      try {
        const currentPath = window.location.pathname;
        if (session == null) {
          navigate("/", { replace: true });
        } else if (currentPath === "/") {
          navigate("/home", { replace: true });
        } else {
          setSessionUser(session);
          localStorage.setItem("SQconnected", true);
          await supabase.from("users").upsert([
            {
              user_id: session.user.id,
              nickname: session.user.user_metadata.nickname,
              email: session.user.email,
              name: session.user.user_metadata.name,
              avatar_url: session.user.user_metadata.avatar_url,
            },
          ]);
          setUser(session?.user?.user_metadata);
          localStorage.setItem(
            "SQuserInfo",
            JSON.stringify(session?.user?.user_metadata)
          );
        }
      } catch (error) {
        console.log("Error", error);
      }
    };
    const { data: AuthListener, error } = supabase.auth.onAuthStateChange(
      handleAuthStateChange
    );

    if (error) {
      console.error("Error", error);
    }

    return () => {
      if (AuthListener && AuthListener.unsubscribe) {
        AuthListener.unsubscribe();
      }
    };
  }, [navigate]);
  return (
    <AuthContext.Provider
      value={{
        signInWithDiscord,
        signInWithTwitch,
        signOut,
        user,
        sessionUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};
