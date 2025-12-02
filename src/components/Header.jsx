// import { Search, ShoppingCart, User, Heart, Menu, LogOut, Plus } from "lucide-react";
// import { useState } from "react";

// // export function을 사용하여 Named Export로 내보냅니다.
// export function Header({ cartCount, onCartClick, onLoginClick, onSearchChange, searchQuery, user, onLogout, onAddProductClick }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showUserMenu, setShowUserMenu] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className="container mx-auto px-4">
//         {/* Top Bar */}
//         <div className="flex items-center justify-between py-4">
//           <button
//             className="lg:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <Menu className="w-6 h-6" />
//           </button>

//           <h1 className="text-2xl lg:text-3xl">제목없음</h1>

//           <div className="flex items-center gap-4">
//             <button className="hidden lg:block hover:text-pink-600 transition-colors">
//               <Search className="w-5 h-5" />
//             </button>
//             <button className="hover:text-pink-600 transition-colors">
//               <Heart className="w-5 h-5" />
//             </button>
            
//             {/* User Menu */}
//             <div className="relative">
//               <button
//                 onClick={() => (user ? setShowUserMenu(!showUserMenu) : onLoginClick())}
//                 className="hover:text-pink-600 transition-colors"
//               >
//                 <User className="w-5 h-5" />
//               </button>
              
//               {user && showUserMenu && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
//                   <div className="px-4 py-2 border-b">
//                     <p className="text-sm">{user.name}</p>
//                     <p className="text-xs text-gray-500">{user.email}</p>
//                   </div>
//                   <button
//                     onClick={() => {
//                       onLogout();
//                       setShowUserMenu(false);
//                     }}
//                     className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
//                   >
//                     <LogOut className="w-4 h-4" />
//                     로그아웃
//                   </button>
//                 </div>
//               )}
//             </div>
            
//             <button
//               onClick={onCartClick}
//               className="relative hover:text-pink-600 transition-colors"
//             >
//               <ShoppingCart className="w-5 h-5" />
//               {cartCount > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                   {cartCount}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Search Bar (Mobile) */}
//         <div className="lg:hidden pb-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="제품 검색..."
//               value={searchQuery}
//               onChange={(e) => onSearchChange(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//             />
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className={`lg:block ${isMenuOpen ? 'block' : 'hidden'} pb-4 lg:pb-0`}>
//           <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 lg:gap-8 pb-4">
//             <li>
//               <a href="#" className="hover:text-pink-600 transition-colors">
//                 신상품
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-600 transition-colors">
//                 스킨케어
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-600 transition-colors">
//                 메이크업
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-600 transition-colors">
//                 향수
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-600 transition-colors">
//                 헤어케어
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-pink-600 transition-colors">
//                 세일
//               </a>
//             </li>
//             {user && (
//               <li>
//                 <button 
//                   onClick={onAddProductClick}
//                   className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
//                 >
//                   <Plus className="w-4 h-4" />
//                   상품 등록
//                 </button>
//               </li>
//             )}
//           </ul>
//         </nav>

//         {/* Search Bar (Desktop) */}
//         <div className="hidden lg:block pb-4">
//           <div className="max-w-2xl mx-auto relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="제품 검색..."
//               value={searchQuery}
//               onChange={(e) => onSearchChange(e.target.value)}
//               className="w-full pl-12 pr-4 py-3 border rounded-full focus:outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
import { Search, ShoppingCart, User } from "lucide-react";

// 모든 스타일(className, style)이 제거되고, 순수 마크업만 남은 가장 간결한 구조입니다.
export function Header({ cartCount, onCartClick, onLoginClick, onSearchChange, searchQuery }) {
  return (
    <header>
      <div>
        {/* 상단 핵심 영역 */}
        <div style={{border:'solid 2px black'}}>
          
          {/* 로고 */}
          <h1>헤더.jsx</h1>

          {/* 아이콘 그룹 */}
          <div>
            
            {/* 검색 버튼 */}
            <button>
              <Search style={{ width: '20px', height: '20px' }} />
              <span>검색</span>
            </button>
            
            {/* 사용자/로그인 버튼 */}
            <button onClick={onLoginClick}>
              <User style={{ width: '20px', height: '20px' }} />
              <span>로그인</span>
            </button>
            
            {/* 장바구니 버튼 */}
            <button onClick={onCartClick}>
              <ShoppingCart style={{ width: '20px', height: '20px' }} />
              <span>장바구니</span>
              {cartCount > 0 && (
                <span>({cartCount})</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

