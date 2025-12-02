// import { X, Upload } from "lucide-react";
// import { useState } from "react";

// export function AddProductModal({ isOpen, onClose, onAddProduct }) {
//   const [name, setName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [price, setPrice] = useState("");
//   const [originalPrice, setOriginalPrice] = useState("");
//   const [category, setCategory] = useState("스킨케어");
//   const [imageUrl, setImageUrl] = useState("");

//   if (!isOpen) return null;

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!name.trim() || !brand.trim() || !price) {
//       alert("필수 항목을 모두 입력해주세요.");
//       return;
//     }

//     const priceNum = parseInt(price);
//     const originalPriceNum = originalPrice ? parseInt(originalPrice) : undefined;

//     if (isNaN(priceNum) || priceNum <= 0) {
//       alert("올바른 가격을 입력해주세요.");
//       return;
//     }

//     if (originalPriceNum && originalPriceNum <= priceNum) {
//       alert("정가는 판매가보다 높아야 합니다.");
//       return;
//     }

//     onAddProduct({
//       name: name.trim(),
//       brand: brand.trim(),
//       price: priceNum,
//       originalPrice: originalPriceNum,
//       category,
//       image: imageUrl || "https://images.unsplash.com/photo-1620815166537-693bf38d9fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBza2luY2FyZXxlbnwxfHx8fDE3NjQ2MDM0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     });

//     // Reset form
//     setName("");
//     setBrand("");
//     setPrice("");
//     setOriginalPrice("");
//     setCategory("스킨케어");
//     setImageUrl("");
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 z-50"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] bg-white rounded-lg shadow-xl z-50 overflow-y-auto">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
//           <h2 className="text-xl">상품 등록</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <div className="p-6">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Product Name */}
//             <div>
//               <label className="block text-sm mb-2">
//                 제품명 <span className="text-red-600">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//                 placeholder="예: 히알루론산 수분 크림"
//               />
//             </div>

//             {/* Brand */}
//             <div>
//               <label className="block text-sm mb-2">
//                 브랜드 <span className="text-red-600">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={brand}
//                 onChange={(e) => setBrand(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//                 placeholder="예: HYDRA"
//               />
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block text-sm mb-2">
//                 카테고리 <span className="text-red-600">*</span>
//               </label>
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//               >
//                 <option value="스킨케어">스킨케어</option>
//                 <option value="메이크업">메이크업</option>
//                 <option value="향수">향수</option>
//                 <option value="헤어케어">헤어케어</option>
//               </select>
//             </div>

//             {/* Price */}
//             <div className="grid md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm mb-2">
//                   판매가 <span className="text-red-600">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   value={price}
//                   onChange={(e) => setPrice(e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//                   placeholder="45000"
//                   min="0"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm mb-2">정가 (선택)</label>
//                 <input
//                   type="number"
//                   value={originalPrice}
//                   onChange={(e) => setOriginalPrice(e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//                   placeholder="60000"
//                   min="0"
//                 />
//               </div>
//             </div>

//             {/* Image URL */}
//             <div>
//               <label className="block text-sm mb-2">이미지 URL (선택)</label>
//               <div className="space-y-2">
//                 <input
//                   type="url"
//                   value={imageUrl}
//                   onChange={(e) => setImageUrl(e.target.value)}
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//                   placeholder="https://example.com/image.jpg"
//                 />
//                 <div className="flex items-center gap-2 text-sm text-gray-500">
//                   <Upload className="w-4 h-4" />
//                   <span>이미지 URL을 입력하지 않으면 기본 이미지가 사용됩니다.</span>
//                 </div>
//               </div>
//             </div>

//             {/* Preview */}
//             {imageUrl && (
//               <div>
//                 <label className="block text-sm mb-2">이미지 미리보기</label>
//                 <img
//                   src={imageUrl}
//                   alt="Preview"
//                   className="w-full h-48 object-cover rounded-lg"
//                   onError={(e) => {
//                     e.currentTarget.src = "https://images.unsplash.com/photo-1620815166537-693bf38d9fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBza2luY2FyZXxlbnwxfHx8fDE3NjQ2MDM0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
//                   }}
//                 />
//               </div>
//             )}

//             {/* Buttons */}
//             <div className="flex gap-3">
//               <button
//                 type="submit"
//                 className="flex-1 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors"
//               >
//                 상품 등록
//               </button>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-6 py-3 border rounded-lg hover:bg-gray-50 transition-colors"
//               >
//                 취소
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
import { X, Upload, Plus } from "lucide-react";
import { useState } from "react";

export default function AddProductModal({ isOpen, onClose, onAddProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    category: "스킨케어",
    image: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({
      ...formData,
      price: Number(formData.price),
      originalPrice: Number(formData.price) * 1.2, // 임시 로직
    });
    setFormData({ name: "", brand: "", price: "", category: "스킨케어", image: "" });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 m-4">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-center">상품 등록</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">상품명</label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">브랜드</label>
              <input
                required
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
                value={formData.brand}
                onChange={(e) => setFormData({...formData, brand: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">가격</label>
              <input
                required
                type="number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">카테고리</label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option>스킨케어</option>
              <option>메이크업</option>
              <option>향수</option>
              <option>헤어케어</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">이미지 URL</label>
            <div className="flex gap-2">
              <input
                required
                type="url"
                placeholder="https://..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
              />
              <button type="button" className="p-2 border rounded-lg hover:bg-gray-50">
                <Upload className="w-5 h-5" />
              </button>
            </div>
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mt-6">
            <Plus className="w-5 h-5" />
            상품 등록하기
          </button>
        </form>
      </div>
    </div>
  );
}