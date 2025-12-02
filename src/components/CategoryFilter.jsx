// export function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
//   return (
//     <div className="mb-8">
//       <div className="flex flex-wrap gap-2">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => onSelectCategory(category)}
//             className={`px-6 py-2 rounded-full transition-colors ${
//               selectedCategory === category
//                 ? "bg-pink-600 text-white"
//                 : "bg-gray-100 hover:bg-gray-200"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }
export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === category
              ? "bg-black text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
