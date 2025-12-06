import { auth } from '@/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function ProfilePage() {
  const session = await auth()

  // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
  if (!session?.user) {
    redirect('/login')
  }

  const { user } = session

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* 프로필 카드 */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* 헤더 배경 */}
          <div className="h-32 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

          {/* 프로필 이미지 */}
          <div className="relative px-8 pb-8">
            <div className="flex flex-col items-center -mt-16">
              {user.image ? (
                <div className="relative">
                  <Image
                    src={user.image}
                    alt={user.name || 'User'}
                    width={128}
                    height={128}
                    className="rounded-full border-8 border-white shadow-xl"
                  />
                  <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-4xl font-bold border-8 border-white shadow-xl">
                  {user.name?.charAt(0).toUpperCase() || 'U'}
                </div>
              )}

              <h1 className="mt-4 text-3xl font-bold text-gray-800">
                {user.name || '사용자'}
              </h1>

              {user.email && (
                <p className="mt-2 text-gray-600 flex items-center gap-2">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {user.email}
                </p>
              )}
            </div>

            {/* 사용자 정보 섹션 */}
            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                계정 정보
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {/* 이름 */}
                {user.name && (
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-white"
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
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">
                            이름
                          </p>
                          <p className="text-gray-800 font-semibold">
                            {user.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 이메일 */}
                {user.email && (
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">
                            이메일
                          </p>
                          <p className="text-gray-800 font-semibold">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 프로필 이미지 URL */}
                {user.image && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-600 font-medium">
                          프로필 이미지
                        </p>
                        <p className="text-gray-800 text-xs truncate">
                          {user.image}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 세션 만료 정보 */}
            {session.expires && (
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-yellow-800">
                      세션 만료 시간
                    </p>
                    <p className="text-xs text-yellow-700">
                      {new Date(session.expires).toLocaleString('ko-KR')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 액션 버튼 */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="flex-1 min-w-[150px] px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl text-center font-medium"
              >
                홈으로
              </Link>
              <Link
                href="/dashboard"
                className="flex-1 min-w-[150px] px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl text-center font-medium"
              >
                대시보드
              </Link>
              <Link
                href="/addTopic"
                className="flex-1 min-w-[150px] px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl text-center font-medium"
              >
                토픽 추가
              </Link>
            </div>
          </div>
        </div>

        {/* 추가 정보 카드 */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            계정 통계
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <p className="text-2xl font-bold text-purple-600">1</p>
              <p className="text-sm text-gray-600 mt-1">활성 세션</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-2xl font-bold text-blue-600">OAuth</p>
              <p className="text-sm text-gray-600 mt-1">로그인 방식</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <p className="text-2xl font-bold text-green-600">✓</p>
              <p className="text-sm text-gray-600 mt-1">인증 완료</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
