import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export async function saveUrl(url: string) {
  const { data: insertData, error: insertError } = await supabase
    .from("urls")
    .insert([{ url: url }]);

  if (insertError) {
    console.error("Error inserting data:", insertError);
    return { data: null, error: insertError };
  }
  return insertData;
}
