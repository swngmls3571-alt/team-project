// import { X, Star, ShoppingCart, Heart, MessageCircle, ThumbsUp } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { useState } from "react";

// export function ProductDetail({
//   product,
//   onClose,
//   onAddToCart,
//   reviews,
//   onAddReview,
//   onAddComment,
//   onLikeReview,
//   currentUser,
// }) {
//   const [selectedRating, setSelectedRating] = useState(5);
//   const [reviewComment, setReviewComment] = useState("");
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [replyComment, setReplyComment] = useState("");

//   if (!product) return null;

//   const productReviews = reviews.filter((r) => r.productId === product.id);
//   const averageRating = productReviews.length > 0
//     ? productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length
//     : 0;

//   const handleSubmitReview = (e) => {
//     e.preventDefault();
//     if (!currentUser) {
//       alert("리뷰를 작성하려면 로그인이 필요합니다.");
//       return;
//     }
//     if (!reviewComment.trim()) {
//       alert("리뷰 내용을 입력해주세요.");
//       return;
//     }
//     onAddReview(product.id, selectedRating, reviewComment);
//     setReviewComment("");
//     setSelectedRating(5);
//   };

//   const handleSubmitComment = (reviewId) => {
//     if (!currentUser) {
//       alert("댓글을 작성하려면 로그인이 필요합니다.");
//       return;
//     }
//     if (!replyComment.trim()) {
//       alert("댓글 내용을 입력해주세요.");
//       return;
//     }
//     onAddComment(reviewId, replyComment);
//     setReplyComment("");
//     setReplyingTo(null);
//   };

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className="fixed inset-0 bg-black bg-opacity-50 z-50"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-xl z-50 overflow-y-auto">
//         {/* Header */}
//         <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
//           <h2 className="text-xl">제품 상세</h2>
//           <button
//             onClick={onClose}
//             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <div className="p-6">
//           {/* Product Info */}
//           <div className="grid md:grid-cols-2 gap-8 mb-8">
//             <div>
//               <ImageWithFallback
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//             </div>
//             <div>
//               <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
//               <h1 className="text-2xl mb-4">{product.name}</h1>
              
//               {/* Rating */}
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`w-5 h-5 ${
//                         i < Math.round(averageRating)
//                           ? "fill-yellow-400 text-yellow-400"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//                 <span className="text-sm text-gray-600">
//                   {averageRating.toFixed(1)} ({productReviews.length} 리뷰)
//                 </span>
//               </div>

//               {/* Price */}
//               <div className="mb-6">
//                 <div className="flex items-center gap-3">
//                   <span className="text-3xl text-pink-600">
//                     {product.price.toLocaleString()}원
//                   </span>
//                   {product.originalPrice && (
//                     <span className="text-lg text-gray-400 line-through">
//                       {product.originalPrice.toLocaleString()}원
//                     </span>
//                   )}
//                 </div>
//                 {product.originalPrice && (
//                   <span className="text-sm text-red-600">
//                     {Math.round(
//                       ((product.originalPrice - product.price) / product.originalPrice) * 100
//                     )}
//                     % 할인
//                   </span>
//                 )}
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => {
//                     onAddToCart(product);
//                     alert("장바구니에 추가되었습니다.");
//                   }}
//                   className="flex-1 bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
//                 >
//                   <ShoppingCart className="w-5 h-5" />
//                   장바구니 담기
//                 </button>
//                 <button className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
//                   <Heart className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Product Description */}
//               <div className="mt-6 p-4 bg-gray-50 rounded-lg">
//                 <h3 className="mb-2">제품 정보</h3>
//                 <p className="text-sm text-gray-600">
//                   {product.brand}의 {product.name}은(는) 피부에 필요한 영양을 공급하여 건강하고
//                   아름다운 피부로 가꾸어줍니다. 매일 사용하기 좋은 제품입니다.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Reviews Section */}
//           <div className="border-t pt-8">
//             <h2 className="text-xl mb-6">고객 리뷰 ({productReviews.length})</h2>

//             {/* Write Review */}
//             <div className="mb-8 p-6 bg-gray-50 rounded-lg">
//               <h3 className="mb-4">리뷰 작성</h3>
//               <form onSubmit={handleSubmitReview}>
//                 {/* Rating */}
//                 <div className="mb-4">
//                   <label className="block text-sm mb-2">별점</label>
//                   <div className="flex gap-2">
//                     {[1, 2, 3, 4, 5].map((rating) => (
//                       <button
//                         key={rating}
//                         type="button"
//                         onClick={() => setSelectedRating(rating)}
//                         className="transition-transform hover:scale-110"
//                       >
//                         <Star
//                           className={`w-8 h-8 ${
//                             rating <= selectedRating
//                               ? "fill-yellow-400 text-yellow-400"
//                               : "text-gray-300"
//                           }`}
//                         />
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Comment */}
//                 <div className="mb-4">
//                   <label className="block text-sm mb-2">리뷰 내용</label>
//                   <textarea
//                     value={reviewComment}
//                     onChange={(e) => setReviewComment(e.target.value)}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//                     rows={4}
//                     placeholder="제품에 대한 솔직한 리뷰를 작성해주세요."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
//                 >
//                   리뷰 등록
//                 </button>
//               </form>
//             </div>

//             {/* Reviews List */}
//             <div className="space-y-6">
//               {productReviews.length === 0 ? (
//                 <p className="text-center text-gray-500 py-8">
//                   아직 리뷰가 없습니다. 첫 번째 리뷰를 작성해보세요!
//                 </p>
//               ) : (
//                 productReviews.map((review) => (
//                   <div key={review.id} className="border rounded-lg p-6">
//                     <div className="flex items-start justify-between mb-3">
//                       <div>
//                         <div className="flex items-center gap-2 mb-1">
//                           <span>{review.userName}</span>
//                           <div className="flex">
//                             {[...Array(5)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className={`w-4 h-4 ${
//                                   i < review.rating
//                                     ? "fill-yellow-400 text-yellow-400"
//                                     : "text-gray-300"
//                                 }`}
//                               />
//                             ))}
//                           </div>
//                         </div>
//                         <p className="text-sm text-gray-500">{review.date}</p>
//                       </div>
//                     </div>

//                     <p className="mb-4">{review.comment}</p>

//                     {/* Review Actions */}
//                     <div className="flex items-center gap-4 mb-4">
//                       <button
//                         onClick={() => onLikeReview(review.id)}
//                         className="flex items-center gap-1 text-sm text-gray-600 hover:text-pink-600 transition-colors"
//                       >
//                         <ThumbsUp className="w-4 h-4" />
//                         도움돼요 ({review.likes})
//                       </button>
//                       <button
//                         onClick={() => setReplyingTo(review.id)}
//                         className="flex items-center gap-1 text-sm text-gray-600 hover:text-pink-600 transition-colors"
//                       >
//                         <MessageCircle className="w-4 h-4" />
//                         댓글 ({review.comments.length})
//                       </button>
//                     </div>

//                     {/* Comments */}
//                     {review.comments.length > 0 && (
//                       <div className="ml-8 space-y-3 mb-4">
//                         {review.comments.map((comment) => (
//                           <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
//                             <div className="flex items-center gap-2 mb-1">
//                               <span className="text-sm">{comment.userName}</span>
//                               <span className="text-xs text-gray-500">{comment.date}</span>
//                             </div>
//                             <p className="text-sm">{comment.comment}</p>
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {/* Reply Form */}
//                     {replyingTo === review.id && (
//                       <div className="ml-8 mt-4">
//                         <div className="flex gap-2">
//                           <input
//                             type="text"
//                             value={replyComment}
//                             onChange={(e) => setReplyComment(e.target.value)}
//                             className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-pink-600"
//                             placeholder="댓글을 입력하세요..."
//                           />
//                           <button
//                             onClick={() => handleSubmitComment(review.id)}
//                             className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
//                           >
//                             등록
//                           </button>
//                           <button
//                             onClick={() => {
//                               setReplyingTo(null);
//                               setReplyComment("");
//                             }}
//                             className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
//                           >
//                             취소
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { X, Star, ShoppingCart, Heart, Send, ThumbsUp } from "lucide-react";
import { useState } from "react";

export default function ProductDetail({ product, onClose, onAddToCart, reviews, onAddReview, onAddComment, onLikeReview, currentUser }) {
  const [activeTab, setActiveTab] = useState("info");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [replyText, setReplyText] = useState("");
  const [activeReplyId, setActiveReplyId] = useState(null);

  if (!product) return null;

  const productReviews = reviews.filter(r => r.productId === product.id);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    onAddReview(product.id, rating, comment);
    setComment("");
    setRating(5);
  };

  const handleSubmitComment = (reviewId) => {
    onAddComment(reviewId, replyText);
    setReplyText("");
    setActiveReplyId(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0 bg-black/60 transition-opacity" onClick={onClose} />
        
        <div className="inline-block w-full max-w-4xl my-8 text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl overflow-hidden relative">
          <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>

          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto bg-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 max-h-[80vh] overflow-y-auto">
              <div className="mb-6">
                <p className="text-pink-600 font-medium mb-2">{product.brand}</p>
                <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-black font-bold">{product.rating}</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500">리뷰 {productReviews.length}개</span>
                </div>
                <div className="flex items-end gap-3 mb-6">
                  <span className="text-3xl font-bold">{product.price.toLocaleString()}원</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through mb-1">
                      {product.originalPrice.toLocaleString()}원
                    </span>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    className="flex-1 bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    장바구니 담기
                  </button>
                  <button className="p-4 border border-gray-200 rounded-xl hover:border-pink-200 hover:text-pink-600 transition-colors">
                    <Heart className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-4">상품 리뷰</h3>
                
                {currentUser ? (
                  <form onSubmit={handleSubmitReview} className="mb-8 bg-gray-50 p-4 rounded-xl">
                    <div className="flex gap-2 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setRating(star)}
                          className={`hover:scale-110 transition-transform ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          <Star className="w-6 h-6 fill-current" />
                        </button>
                      ))}
                    </div>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="상품평을 작성해주세요..."
                      className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-black"
                      rows="3"
                      required
                    />
                    <button type="submit" className="w-full bg-black text-white py-2 rounded-lg text-sm font-bold">
                      리뷰 등록
                    </button>
                  </form>
                ) : (
                  <p className="text-center py-4 bg-gray-50 rounded-xl text-gray-500 mb-8">
                    리뷰를 작성하려면 로그인이 필요합니다.
                  </p>
                )}

                <div className="space-y-6">
                  {productReviews.map((review) => (
                    <div key={review.id} className="border-b pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-xs">
                            {review.userName[0]}
                          </div>
                          <span className="font-medium">{review.userName}</span>
                        </div>
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                      
                      <div className="flex text-yellow-400 w-3 h-3 mb-2 gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{review.comment}</p>
                      
                      <div className="flex gap-4 mb-4">
                        <button 
                          onClick={() => onLikeReview(review.id)}
                          className="flex items-center gap-1 text-xs text-gray-500 hover:text-pink-600"
                        >
                          <ThumbsUp className="w-3 h-3" />
                          도움돼요 {review.likes}
                        </button>
                        <button 
                          onClick={() => setActiveReplyId(activeReplyId === review.id ? null : review.id)}
                          className="text-xs text-gray-500 hover:text-black"
                        >
                          댓글 달기
                        </button>
                      </div>

                      {/* Comments */}
                      {review.comments.length > 0 && (
                        <div className="bg-gray-50 p-3 rounded-lg space-y-3 ml-4">
                          {review.comments.map(comment => (
                            <div key={comment.id} className="text-sm">
                              <div className="flex justify-between mb-1">
                                <span className="font-bold text-xs">{comment.userName}</span>
                                <span className="text-xs text-gray-400">{comment.date}</span>
                              </div>
                              <p className="text-gray-600">{comment.comment}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Reply Form */}
                      {activeReplyId === review.id && currentUser && (
                        <div className="mt-3 ml-4 flex gap-2">
                          <input
                            type="text"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="댓글을 입력하세요..."
                            className="flex-1 px-3 py-2 border rounded-lg text-sm"
                          />
                          <button
                            onClick={() => handleSubmitComment(review.id)}
                            className="p-2 bg-black text-white rounded-lg"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}