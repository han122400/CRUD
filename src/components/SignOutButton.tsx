import { signOut } from '@/auth'

export function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut({ redirectTo: '/login' })
      }}
    >
      <button
        type="submit"
        className="bg-white text-red-900 font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        title="로그아웃"
      >
        Sign Out
      </button>
    </form>
  )
}
