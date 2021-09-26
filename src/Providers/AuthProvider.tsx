import { FC } from "react";
import { Auth } from "@supabase/ui";
import { supabase } from "@/libs/supabase/client";

export const AuthProvider: FC  = ({ children }) => {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      {children}
    </Auth.UserContextProvider>
  )
}