
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Role = "employee" | "manager";

interface UserContextType {
  role: Role | null;
  setRole: (role: Role) => void;
  name: string;
  avatarUrl: string;
  isAuthenticated: boolean;
  logout: () => void;
}

const defaultContext: UserContextType = {
  role: null,
  setRole: () => {},
  name: "",
  avatarUrl: "",
  isAuthenticated: false,
  logout: () => {},
};

const UserContext = createContext<UserContextType>(defaultContext);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role | null>(null);
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (role) {
      setIsAuthenticated(true);
      if (role === "employee") {
        setName("John Doe");
        setAvatarUrl("https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff");
      } else {
        setName("Jane Manager");
        setAvatarUrl("https://ui-avatars.com/api/?name=Jane+Manager&background=0D8ABC&color=fff");
      }
    } else {
      setIsAuthenticated(false);
      setName("");
      setAvatarUrl("");
    }
  }, [role]);

  const logout = () => {
    setRole(null);
  };

  return (
    <UserContext.Provider
      value={{
        role,
        setRole,
        name,
        avatarUrl,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
