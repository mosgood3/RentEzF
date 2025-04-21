'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function resetPassword(formData: FormData) {
  // Retrieve the new password and its confirmation from the submitted form.
  const newPassword = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  // Check that the passwords match.
  if (newPassword !== confirmPassword) {
    // Here you might want to handle the error differently,
    // e.g., return a message to the UI.
    throw new Error("Passwords do not match.");
  }

  // Create your Supabase client instance.
  const supabase = await createClient();

  // Update the user's password.
  // IMPORTANT: The user must be authenticated at this point.
  // Typically, the reset password link from Supabase automatically logs the user in.
  const { error } = await supabase.auth.updateUser({ password: newPassword });

  if (error) {
    console.error("Error updating password:", error.message);
    // You might redirect to an error page or return a message here.
    throw new Error("Failed to update password.");
  }

  // Upon successful update, redirect the user to a confirmation page.
  redirect('/login');
}
