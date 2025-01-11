import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function signUpApi(name, email, password) {
  const data = await supabase.auth.signUp({
    name: name,
    email: email,
    password: password,
  });
  const response = data.data;

  return response;
}

export async function signInApi(email, password) {
  const data = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  const response = data.data;
  return response;
}

export async function oAuthGoogleApi() {
  const data = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  const response = data.data;
  return response;
}

export async function signOutApi() {
  const data = await supabase.auth.signOut();

  const response = data.data;
  return response;
}
