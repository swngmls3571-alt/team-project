
// import { Instagram, Facebook, Twitter } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-12 mt-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <h3 className="text-2xl font-bold mb-4">✨ BEAUTÉ</h3>
//             <p className="text-gray-400">
//               당신의 아름다움을 위한 최고의 선택.<br/>
//               프리미엄 뷰티 큐레이션 샵
//             </p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">고객 서비스</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li><a href="#" className="hover:text-white">자주 묻는 질문</a></li>
//               <li><a href="#" className="hover:text-white">배송 안내</a></li>
//               <li><a href="#" className="hover:text-white">반품/교환</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">회사 소개</h4>
//             <ul className="space-y-2 text-gray-400">
//               <li><a href="#" className="hover:text-white">브랜드 스토리</a></li>
//               <li><a href="#" className="hover:text-white">채용 정보</a></li>
//               <li><a href="#" className="hover:text-white">제휴 문의</a></li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">뉴스레터 구독</h4>
//             <div className="flex gap-2">
//               <input 
//                 type="email" 
//                 placeholder="이메일 주소" 
//                 className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1 outline-none focus:ring-1 focus:ring-gray-600"
//               />
//               <button className="bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200">
//                 구독
//               </button>
//             </div>
//             <div className="flex gap-4 mt-6">
//               <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
//               <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
//               <Twitter className="w-5 h-5 cursor-pointer hover:text-sky-500" />
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
//           &copy; 2025 BEAUTÉ. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <div className="container mx-auto px-4 text-center">
        {/* 불필요한 링크 목록 삭제하고 로고만 중앙 정렬 */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">✨ BEAUTÉ</h3>
          <p className="text-gray-400">
            당신의 아름다움을 위한 최고의 선택.<br/>
            프리미엄 뷰티 큐레이션 샵
          </p>
        </div>

        {/* SNS 아이콘 */}
        <div className="flex justify-center gap-6 mb-8">
          <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
          <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
          <Twitter className="w-5 h-5 cursor-pointer hover:text-sky-500" />
        </div>

        <div className="border-t border-gray-800 pt-8 text-gray-500 text-sm">
          &copy; 2025 BEAUTÉ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}