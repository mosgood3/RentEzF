"use server";

import { revalidatePath } from 'next/cache';
import { createClient } from '@/utils/supabase/server';
import { supabaseAdmin } from '@/utils/supabase/admin';

export async function signUp(
  formData: FormData
): Promise<{ success: boolean; accountExists?: boolean; error?: string }> {
  const email = formData.get('username') as string;
  const password = formData.get('password') as string;
  const name = formData.get('fullname') as string;

  // 1️⃣ Preflight check: fetch a page of users and look for a match
  const { data: listResponse, error: listError } = await supabaseAdmin.auth.admin.listUsers({
    page: 1,
    perPage: 1,
  });
  if (listError) {
    return { success: false, error: listError.message };
  }
  const existingUser = listResponse.users.find((u) => u.email === email);
  if (existingUser) {
    return {
      success: false,
      accountExists: true,
      error: 'Please login',
    };
  }

  // 2️⃣ No existing user, proceed with signup
  const supabase = await createClient();
  const { error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });

  if (signUpError) {
    return { success: false, error: signUpError.message };
  }

  // 3️⃣ On success, revalidate layout and redirect
  revalidatePath('/', 'layout');
  return { success: true };
}
