'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function forgotPassword(formData: FormData) {
  const email = formData.get('username') as string
  const supabase = await createClient()

  // Optionally, specify a URL where the user should be redirected
  // after clicking the reset link in their email.
  const redirectTo = `${process.env.NEXT_PUBLIC_URL}/login/reset-password`

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo,
  })

  if (error) {
    console.error('Error sending password reset email:', error.message)
    // You can choose to display an error message or redirect to an error page.
    redirect('/error')
  }

  // Redirect the user to a confirmation page instructing them to check their email.
  redirect('/login/forgot-password/confirmation')
}
