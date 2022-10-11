import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";

const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkb2FqY3J3cml2cXlub3hwd3Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ4MTM3MzEsImV4cCI6MTk4MDM4OTczMX0.FoGoWrxBwzDxqual6kg3ZnghjG9lsP4DEK3ktOYGFGs";
const supabaseUrl = "https://adoajcrwrivqynoxpwvx.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
