import { auth } from '@/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth()

  // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard 대시보드</h1>

          {/* 세션 정보 카드 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              세션으로부터 사용자 정보 표시
            </h2>

            <div className="flex items-start gap-6">
              {/* 프로필 이미지 */}
              {session.user?.image && (
                <div className="flex-shrink-0">
                  <Image
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    width={100}
                    height={100}
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                </div>
              )}

              {/* 사용자 정보 */}
              <div className="flex-1">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="space-y-3">
                    {session.user?.name && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-600 w-20">
                          이름:
                        </span>
                        <span className="text-gray-800 font-medium">
                          {session.user.name}
                        </span>
                      </div>
                    )}

                    {session.user?.email && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-gray-600 w-20">
                          이메일:
                        </span>
                        <span className="text-gray-800">
                          {session.user.email}
                        </span>
                      </div>
                    )}

                    {session.user?.image && (
                      <div className="flex items-start gap-2">
                        <span className="text-sm font-semibold text-gray-600 w-20">
                          이미지:
                        </span>
                        <span className="text-gray-600 text-xs break-all">
                          {session.user.image}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 전체 세션 JSON 정보 */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              전체 세션 정보 (JSON)
            </h3>
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
          </div>

          {/* 세션 만료 정보 */}
          {session.expires && (
            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">세션 만료:</span>{' '}
                {session.expires}
              </p>
            </div>
          )}

          {/* 액션 버튼들 */}
          <div className="mt-8 flex gap-4">
            <a
              href="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              홈으로 이동
            </a>
            <a
              href="/profile"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center gap-2"
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
              프로필 보기
            </a>
            <a
              href="/addTopic"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              토픽 추가
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
