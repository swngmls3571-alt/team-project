// import { X, Minus, Plus, Trash2 } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// export function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) {
//   const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (!isOpen) return null;

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 z-50"
//         onClick={onClose}
//       />

//       {/* Cart Panel */}
//       <div className="fixed right-0 top-0 h-full w-full lg:w-[400px] bg-white z-50 shadow-xl flex flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <h2 className="text-xl">장바구니 ({items.length})</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Items */}
//         <div className="flex-1 overflow-y-auto p-4">
//           {items.length === 0 ? (
//             <div className="flex flex-col items-center justify-center h-full text-gray-500">
//               <p>장바구니가 비어있습니다</p>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div key={item.id} className="flex gap-4 border-b pb-4">
//                   <ImageWithFallback
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded"
//                   />
//                   <div className="flex-1">
//                     <p className="text-sm text-gray-500">{item.brand}</p>
//                     <h3 className="text-sm mb-2 line-clamp-2">{item.name}</h3>
//                     <p className="text-pink-600">{item.price.toLocaleString()}원</p>

//                     {/* Quantity Controls */}
//                     <div className="flex items-center gap-2 mt-2">
//                       <button
//                         onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                         className="p-1 border rounded hover:bg-gray-100"
//                       >
//                         <Minus className="w-4 h-4" />
//                       </button>
//                       <span className="w-8 text-center">{item.quantity}</span>
//                       <button
//                         onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
//                         className="p-1 border rounded hover:bg-gray-100"
//                       >
//                         <Plus className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => onRemoveItem(item.id)}
//                         className="ml-auto p-1 text-red-600 hover:bg-red-50 rounded"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         {items.length > 0 && (
//           <div className="border-t p-4 space-y-4">
//             <div className="flex justify-between">
//               <span>총 금액</span>
//               <span className="text-xl text-pink-600">{total.toLocaleString()}원</span>
//             </div>
//             <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
//               결제하기
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              장바구니
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-500">
                <ShoppingBag className="w-12 h-12 mb-4 text-gray-300" />
                <p>장바구니가 비어있습니다.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-1 hover:bg-gray-100 px-2"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 px-2"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-medium">{(item.price * item.quantity).toLocaleString()}원</p>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 self-start"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="flex justify-between mb-4 text-lg font-bold">
                <span>총 결제금액</span>
                <span>{total.toLocaleString()}원</span>
              </div>
              <button className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                주문하기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}