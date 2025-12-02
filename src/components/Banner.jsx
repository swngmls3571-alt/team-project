// import { ImageWithFallback } from "./figma/ImageWithFallback";

// export function Banner() {
//   return (
//     <div className="relative h-[400px] lg:h-[500px] overflow-hidden bg-gradient-to-r from-pink-50 to-purple-50">
//       <div className="container mx-auto px-4 h-full flex items-center">
//         <div className="grid lg:grid-cols-2 gap-8 w-full items-center">
//           <div className="z-10">
//             <h2 className="text-4xl lg:text-6xl mb-4">
//               새로운 겨울 컬렉션
//             </h2>
//             <p className="text-lg lg:text-xl text-gray-700 mb-6">
//               피부를 위한 특별한 케어, 지금 만나보세요
//             </p>
//             <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors">
//               지금 쇼핑하기
//             </button>
//           </div>
//           <div className="hidden lg:block">
//             <ImageWithFallback
//               src="https://images.unsplash.com/photo-1620815166537-693bf38d9fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBza2luY2FyZXxlbnwxfHx8fDE3NjQ2MDM0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//               alt="Cosmetics"
//               className="w-full h-[400px] object-cover rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// front/src/components/Banner.jsx
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative h-[500px] flex items-center bg-[#f8f5f2] overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 z-10 lg:pr-12 text-center lg:text-left">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium mb-6">
            NEW COLLECTION 2025
          </span>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
              Inner Glow
            </span>
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            자연 유래 성분으로 완성하는 진정한 아름다움. 
            당신만을 위한 프리미엄 스킨케어 루틴을 경험해보세요.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 mx-auto lg:mx-0 group">
            지금 쇼핑하기
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000')] bg-cover bg-center opacity-50 lg:opacity-100 mask-image-gradient" />
      </div>
    </section>
  );
}