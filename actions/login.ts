// actions.ts
'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function login(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    // Instead of rerouting, return error information.
    return { success: false, error: error.message };
  }

  // On success, you can still revalidate and redirect.
  revalidatePath('/', 'layout');
  // Return a success signal (or you could trigger a redirect on the client after checking the response)
  return { success: true };
}