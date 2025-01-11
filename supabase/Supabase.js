import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function getCategoriasApi() {
  const data = await supabase.from("categorias").select("*");
  const response = data.data;

  return response;
}

export async function getWebsitesApi() {
  const data = await supabase.from("websites").select("*");
  const response = data.data;
  return response;
}

export async function getAppsApi() {
  const data = await supabase.from("apps").select("*");
  const response = data.data;
  return response;
}

export async function getTestimonialsApi() {
  const data = await supabase.from("testimonials").select("*");
  const response = data.data;
  return response;
}
