/**
 * Supabase client singleton for browser-side use.
 * Only the anon key is used here — safe to expose publicly.
 * The service role key lives in the FastAPI backend only.
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
) {
  console.warn(
    "[Supabase] NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY " +
      "is not set. Auth features will not work until these are configured in .env.local."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type { User, Session } from "@supabase/supabase-js";
