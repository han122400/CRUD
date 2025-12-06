import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/auth'
import { SignOutButton } from './SignOutButton'

export default async function Navbar() {
  // Server 측에서 세션 정보 확인
  const session = await auth()

  return (
    <nav className="flex justify-between items-center bg-red-900 px-8 py-4 shadow-lg">
      <Link
        className="text-white text-lg font-bold hover:text-yellow-200 transition-colors"
        href="/"
      >
        MongoDB CRUD
      </Link>
      <div className="flex items-center gap-4">
        {/* 로그인된 경우 - 세션 정보가 존재 */}
        {session?.user && (
          <>
            {/* 사용자 정보 표시 */}
            <div className="flex items-center gap-3 bg-red-800 px-4 py-2 rounded-lg">
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name || 'User'}
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              )}
              <div className="flex flex-col">
                <span className="text-white font-medium text-sm">
                  {session.user.name || '사용자'}
                </span>
                {session.user.email && (
                  <span className="text-gray-300 text-xs">
                    {session.user.email}
                  </span>
                )}
              </div>
            </div>
            {/* 프로필 버튼 */}
            <Link
              className="bg-purple-600 text-white font-bold px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
              href="/profile"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Profile
            </Link>
            <Link
              className="bg-yellow-200 text-red-900 font-bold px-4 py-2 rounded-md hover:bg-yellow-300 transition-colors"
              href="/addTopic"
            >
              Add Topic
            </Link>
            {/* Sign Out 버튼 표시 */}
            <SignOutButton />
          </>
        )}
        {/* 로그인 안된 경우 - 세션 정보가 없음 */}
        {!session && (
          <Link
            className="bg-yellow-200 text-red-900 font-bold px-6 py-2 rounded-md hover:bg-yellow-300 transition-colors"
            href="/login"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
