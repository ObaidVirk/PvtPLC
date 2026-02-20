import { redirect } from 'next/navigation'

// Registration is disabled  access is admin-only via .env.local credentials.
export default function SignupPage() {
  redirect('/login')
}
