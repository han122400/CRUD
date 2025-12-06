import { signIn } from '@/auth'
import { FaGoogle, FaGithub } from 'react-icons/fa'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            환영합니다
          </h1>
          <p className="text-gray-600 text-sm">계정으로 로그인하세요</p>
        </div>

        <div className="space-y-4">
          <form
            action={async () => {
              'use server'
              await signIn('google', { redirectTo: '/' })
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3.5 rounded-xl hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-200 font-medium group"
            >
              <FaGoogle className="text-xl group-hover:scale-110 transition-transform" />
              <span>Google로 로그인</span>
            </button>
          </form>

          <form
            action={async () => {
              'use server'
              await signIn('github', { redirectTo: '/' })
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white px-6 py-3.5 rounded-xl hover:bg-gray-800 hover:shadow-lg transition-all duration-200 font-medium group"
            >
              <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
              <span>GitHub로 로그인</span>
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            로그인하면 서비스 이용약관 및 개인정보처리방침에 동의하게 됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}
