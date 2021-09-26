import { supabase } from "@/libs/supabase/client";
import { Auth } from "@supabase/ui";

export const useAuth = () => {
  const { user } = Auth.useUser();
  return {
    supabase,
    user,
  };
};
