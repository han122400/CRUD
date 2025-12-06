'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'

/**
 * Client 측 세션 정보 확인 예제
 * useSession() 훅을 사용하여 클라이언트 컴포넌트에서 세션 정보 접근
 */
export function ClientAuthExample() {
  // Client 측에서 세션 정보 확인
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="p-4 bg-gray-100 rounded-lg">
        <p className="text-gray-600">세션 정보 로딩 중...</p>
      </div>
    )
  }

  // 로그인된 경우 - 세션 정보가 존재
  if (session?.user) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="font-bold text-green-800 mb-2">
          ✅ 로그인됨 (Client 측)
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
        ❌ 로그인 안됨 (Client 측)
      </h3>
      <p className="text-sm text-gray-600">세션 정보가 존재하지 않습니다.</p>
    </div>
  )
}
