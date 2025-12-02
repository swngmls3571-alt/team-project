// import { X } from "lucide-react";
// import { useState } from "react";

// export function LoginModal({ isOpen, onClose, onLogin }) {
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   if (!isOpen) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (isSignUp) {
//       if (password !== confirmPassword) {
//         alert("비밀번호가 일치하지 않습니다.");
//         return;
//       }
//       if (!name.trim()) {
//         alert("이름을 입력해주세요.");
//         return;
//       }
//     }
    
//     if (!email.trim() || !password.trim()) {
//       alert("이메일과 비밀번호를 입력해주세요.");
//       return;
//     }

//     onLogin(email, isSignUp ? name : email.split("@")[0]);
//     setEmail("");
//     setPassword("");
//     setName("");
//     setConfirmPassword("");
//   };

//   const toggleMode = () => {
//     setIsSignUp(!isSignUp);
//     setEmail("");
//     setPassword("");
//     setName("");
//     setConfirmPassword("");
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 z-50"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-xl z-50 p-6">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl">{isSignUp ? "회원가입" : "로그인"}</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {isSignUp && (
//             <div>
//               <label className="block text-sm mb-2">이름</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//                 placeholder="이름을 입력하세요"
//               />
//             </div>
//           )}

//           <div>
//             <label className="block text-sm mb-2">이메일</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//               placeholder="example@email.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2">비밀번호</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//               placeholder="비밀번호를 입력하세요"
//             />
//           </div>

//           {isSignUp && (
//             <div>
//               <label className="block text-sm mb-2">비밀번호 확인</label>
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//                 placeholder="비밀번호를 다시 입력하세요"
//               />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors"
//           >
//             {isSignUp ? "회원가입" : "로그인"}
//           </button>
//         </form>

//         {/* Social Login */}
//         {!isSignUp && (
//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">또는</span>
//               </div>
//             </div>

//             <div className="mt-6 space-y-3">
//               <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
//                 <svg className="w-5 h-5" viewBox="0 0 24 24">
//                   <path
//                     fill="#4285F4"
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                   />
//                   <path
//                     fill="#34A853"
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   />
//                   <path
//                     fill="#FBBC05"
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   />
//                   <path
//                     fill="#EA4335"
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   />
//                 </svg>
//                 Google로 로그인
//               </button>

//               <button className="w-full flex items-center justify-center gap-3 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
//                 <svg className="w-5 h-5" fill="#03C75A" viewBox="0 0 24 24">
//                   <path d="M13.5 14.5h2.5v-8h-2.5v8zm-5.5-8v8h2.5v-8H8zm13.5 0H18v8h2.5v-8h1.5v-2.5h-1.5v-1c0-.83.17-1.5 1.5-1.5v-2.5c-2.5 0-4 1.67-4 4v1h-2.5v2.5h2.5z" />
//                 </svg>
//                 카카오로 로그인
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Toggle Sign Up / Login */}
//         <div className="mt-6 text-center">
//           <button
//             type="button"
//             onClick={toggleMode}
//             className="text-sm text-gray-600 hover:text-pink-600 transition-colors"
//           >
//             {isSignUp
//               ? "이미 계정이 있으신가요? 로그인"
//               : "계정이 없으신가요? 회원가입"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
import { X, Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 인증 로직 대신 간단한 처리
    onLogin(email, name || email.split("@")[0]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 m-4 transition-all transform">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">✨ BEAUTÉ</h2>
          <p className="text-gray-500">{isLogin ? "환영합니다! 다시 오셨군요." : "아름다운 여정을 시작하세요."}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <input
                type="text"
                placeholder="이름"
                className="w-full pl-4 pr-4 py-3 border rounded-xl focus:outline-none focus:border-black transition-colors"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="이메일 주소"
              className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:border-black transition-colors"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:border-black transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group">
            {isLogin ? "로그인" : "회원가입"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          {isLogin ? "계정이 없으신가요? " : "이미 계정이 있으신가요? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-black font-bold hover:underline"
          >
            {isLogin ? "회원가입" : "로그인"}
          </button>
        </div>
      </div>
    </div>
  );
}