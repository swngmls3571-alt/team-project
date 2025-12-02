// import { Heart, ShoppingCart } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// export function ProductCard({ product, onAddToCart, onViewDetail }) {
//   const discount = product.originalPrice
//     ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
//     : 0;

//   return (
//     <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
//       {/* Badge */}
//       {product.isNew && (
//         <div className="absolute top-2 left-2 z-10 bg-pink-600 text-white px-3 py-1 rounded-full text-sm">
//           NEW
//         </div>
//       )}
//       {discount > 0 && (
//         <div className="absolute top-2 right-2 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
//           -{discount}%
//         </div>
//       )}

//       {/* Favorite Button */}
//       <button className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pink-50">
//         <Heart className="w-5 h-5" />
//       </button>

//       {/* Image */}
//       <div 
//         className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer"
//         onClick={() => onViewDetail(product)}
//       >
//         <ImageWithFallback
//           src={product.image}
//           alt={product.name}
//           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4">
//         <p className="text-sm text-gray-500">{product.brand}</p>
//         <h3 
//           className="mt-1 mb-2 line-clamp-2 cursor-pointer hover:text-pink-600"
//           onClick={() => onViewDetail(product)}
//         >
//           {product.name}
//         </h3>

//         {/* Rating */}
//         <div className="flex items-center gap-1 mb-2">
//           {[...Array(5)].map((_, i) => (
//             <span key={i} className={i < product.rating ? "text-yellow-400" : "text-gray-300"}>
//               ★
//             </span>
//           ))}
//           <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
//         </div>

//         {/* Price */}
//         <div className="flex items-center gap-2 mb-3">
//           <span className="text-lg text-pink-600">
//             {product.price.toLocaleString()}원
//           </span>
//           {product.originalPrice && (
//             <span className="text-sm text-gray-400 line-through">
//               {product.originalPrice.toLocaleString()}원
//             </span>
//           )}
//         </div>

//         {/* Add to Cart Button */}
//         <button
//           onClick={() => onAddToCart(product)}
//           className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
//         >
//           <ShoppingCart className="w-4 h-4" />
//           장바구니 담기
//         </button>
//       </div>
//     </div>
//   );
// }
import { Star, ShoppingCart, Heart } from "lucide-react";

export default function ProductCard({ product, onAddToCart, onViewDetail }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">
            NEW
          </span>
        )}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-pink-600">
          <Heart className="w-4 h-4" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
          <button
            onClick={() => onViewDetail(product)}
            className="bg-white text-black text-sm px-6 py-2 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
          >
            상세보기
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="text-xs text-gray-500 mb-1">{product.brand}</div>
        <h3 className="font-medium text-gray-900 mb-2 truncate">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-400 ml-1">({product.reviews || 0})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">{product.price.toLocaleString()}원</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="p-2 bg-black text-white rounded-full hover:bg-pink-600 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}