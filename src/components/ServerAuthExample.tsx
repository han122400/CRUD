import { auth } from '@/auth'
import Image from 'next/image'

/**
 * Server 측 세션 정보 확인 예제
 * auth() 함수를 사용하여 서버 컴포넌트에서 세션 정보 접근
 */
export async function ServerAuthExample() {
  // Server 측에서 세션 정보 확인
  const session = await auth()

  // 로그인된 경우 - 세션 정보가 존재
  if (session?.user) {
    return (
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-bold text-blue-800 mb-2">
          ✅ 로그인됨 (Server 측)
        </h3>
        <div className="flex items-center gap-3">
          {session.user.image && (
            <Image
              src={session.user.image}
              alt={session.user.name || 'User'}
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
          <div>
            <p className="font-semibold">{session.user.name}</p>
            <p className="text-sm text-gray-600">{session.user.email}</p>
          </div>
        </div>
      </div>
    )
  }

  // 로그인 안된 경우 - 세션 정보가 없음
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
      <h3 className="font-bold text-red-800 mb-2">
        ❌ 로그인 안됨 (Server 측)
      </h3>
      <p className="text-sm text-gray-600">세션 정보가 존재하지 않습니다.</p>
    </div>
  )
}
