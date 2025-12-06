# 세션 정보 확인 가이드

## 개요

이 프로젝트는 NextAuth.js를 사용하여 인증을 구현하며, 세션 정보를 확인하는 두 가지 방법을 제공합니다.

## 1. Server 측에서 세션 확인

**서버 컴포넌트**에서는 `auth()` 함수를 사용합니다.

```tsx
import { auth } from '@/auth'

export default async function ServerComponent() {
  // Server 측에서 세션 정보 확인
  const session = await auth()

  if (session?.user) {
    // 로그인된 경우 - 세션 정보가 존재
    return (
      <div>
        <p>환영합니다, {session.user.name}님!</p>
        <p>이메일: {session.user.email}</p>
      </div>
    )
  }

  // 로그인 안된 경우 - 세션 정보가 없음
  return <p>로그인이 필요합니다.</p>
}
```

### 사용 예시

- `src/components/Navbar.tsx` - 네비게이션바에서 로그인 상태 확인
- `src/components/ServerAuthExample.tsx` - Server 측 세션 확인 예제

## 2. Client 측에서 세션 확인

**클라이언트 컴포넌트**에서는 `useSession()` 훅을 사용합니다.

```tsx
'use client'

import { useSession } from 'next-auth/react'

export function ClientComponent() {
  // Client 측에서 세션 정보 확인
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>로딩 중...</p>
  }

  if (session?.user) {
    // 로그인된 경우 - 세션 정보가 존재
    return (
      <div>
        <p>환영합니다, {session.user.name}님!</p>
        <p>이메일: {session.user.email}</p>
      </div>
    )
  }

  // 로그인 안된 경우 - 세션 정보가 없음
  return <p>로그인이 필요합니다.</p>
}
```

### 사용 예시

- `src/components/ClientAuthExample.tsx` - Client 측 세션 확인 예제

## 3. 네비게이션바 기능

`Navbar` 컴포넌트는 세션 상태에 따라 다른 UI를 표시합니다:

### 로그인된 경우 (세션 정보 존재)

- ✅ 사용자 프로필 이미지 표시
- ✅ 사용자 이름 표시
- ✅ 사용자 이메일 표시
- ✅ "Add Topic" 버튼 표시
- ✅ "Sign Out" 버튼 표시

### 로그인 안된 경우 (세션 정보 없음)

- ✅ "Sign In" 버튼만 표시

## 4. 설정 파일

### AuthProvider 설정

`src/components/AuthProvider.tsx` - SessionProvider를 래핑하는 클라이언트 컴포넌트

### Layout 설정

`src/app/layout.tsx` - AuthProvider로 앱 전체를 래핑하여 useSession() 사용 가능하게 설정

### Auth 설정

`src/auth.ts` - NextAuth 설정 (Google, GitHub OAuth)

## 5. 주요 차이점

| 구분          | Server 측        | Client 측                       |
| ------------- | ---------------- | ------------------------------- |
| 함수/훅       | `auth()`         | `useSession()`                  |
| 컴포넌트 타입 | Server Component | Client Component ('use client') |
| 비동기        | async/await 필요 | 훅 사용                         |
| 로딩 상태     | 없음             | status로 확인 가능              |
| 사용 시점     | 서버 렌더링 시   | 클라이언트에서 실시간           |

## 6. 예제 컴포넌트 사용법

페이지에서 예제 컴포넌트를 import하여 사용할 수 있습니다:

```tsx
import { ServerAuthExample } from '@/components/ServerAuthExample'
import { ClientAuthExample } from '@/components/ClientAuthExample'

export default function ExamplePage() {
  return (
    <div className="space-y-4">
      <ServerAuthExample />
      <ClientAuthExample />
    </div>
  )
}
```
