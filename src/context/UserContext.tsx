
import { createContext, useContext, useState, ReactNode } from "react";

type Role = "employee" | "manager";

interface UserContextType {
  role: Role;
  setRole: (role: Role) => void;
  name: string;
  avatarUrl: string;
}

const defaultContext: UserContextType = {
  role: "employee",
  setRole: () => {},
  name: "John Doe",
  avatarUrl: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
};

const UserContext = createContext<UserContextType>(defaultContext);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>("employee");
  const [name] = useState("John Doe");
  const [avatarUrl] = useState("https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff");

  return (
    <UserContext.Provider
      value={{
        role,
        setRole,
        name,
        avatarUrl,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
