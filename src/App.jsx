import { useState } from "react";
// Header는 Named Import { Header } 방식으로 가져옵니다.
import { Header } from "./components/Header.jsx"; 
// 나머지는 Default Import로 가져옵니다.
import Banner from "./components/Banner.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";
import LoginModal from "./components/LoginModal.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import AddProductModal from "./components/AddProductModal.jsx";

// 상품 데이터를 1개만 남기고 정리했습니다.
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "히알루론산 수분 크림",
    brand: "HYDRA",
    price: 45000,
    originalPrice: 60000,
    image: "https://images.unsplash.com/photo-1686831757659-a7528ec36e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxza2luY2FyZSUyMGNyZWFtfGVufDF8fHx8MTc2NDYzNzg5NHww&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "스킨케어",
    rating: 5,
    isNew: true,
  }
];

// 리뷰 데이터도 1개만 남겼습니다.
const INITIAL_REVIEWS = [
  {
    id: 1,
    productId: 1,
    userName: "김민지",
    rating: 5,
    comment: "정말 촉촉하고 피부에 잘 맞아요! 건조한 겨울철에 딱이에요.",
    date: "2025-11-28",
    likes: 12,
    comments: [
      {
        id: 1,
        userName: "박서연",
        comment: "저도 같은 생각이에요! 강력 추천합니다.",
        date: "2025-11-29",
      },
    ],
  },
];

const CATEGORIES = ["전체", "스킨케어", "메이크업", "향수", "헤어케어"];

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "전체" || product.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleLogin = (email, name) => {
    setUser({ email, name });
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAddProduct = (newProduct) => {
    const product = {
      id: products.length + 1,
      ...newProduct,
      rating: 5,
      isNew: true,
    };
    setProducts(prev => [product, ...prev]);
    setIsAddProductModalOpen(false);
  };

  const handleAddReview = (productId, rating, comment) => {
    if (!user) return;
    
    const newReview = {
      id: reviews.length + 1,
      productId,
      userName: user.name,
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
      likes: 0,
      comments: [],
    };
    
    setReviews(prev => [newReview, ...prev]);
    
    const productReviews = [...reviews, newReview].filter(r => r.productId === productId);
    const avgRating = Math.round(
      productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length
    );
    
    setProducts(prev =>
      prev.map(p => (p.id === productId ? { ...p, rating: avgRating } : p))
    );
  };

  const handleAddComment = (reviewId, comment) => {
    if (!user) return;
    
    setReviews(prev =>
      prev.map(review => {
        if (review.id === reviewId) {
          const newComment = {
            id: review.comments.length + 1,
            userName: user.name,
            comment,
            date: new Date().toISOString().split("T")[0],
          };
          return {
            ...review,
            comments: [...review.comments, newComment],
          };
        }
        return review;
      })
    );
  };

  const handleLikeReview = (reviewId) => {
    setReviews(prev =>
      prev.map(review =>
        review.id === reviewId ? { ...review, likes: review.likes + 1 } : review
      )
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        cartCount={totalItems} 
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
        user={user}
        onLogout={handleLogout}
        onAddProductClick={() => setIsAddProductModalOpen(true)}
      />
      <Banner />

      <main className="container mx-auto px-4 py-12">
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {searchQuery && (
          <div className="mb-6">
            <p className="text-gray-600">
              "{searchQuery}" 검색 결과: {filteredProducts.length}개의 제품
            </p>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetail={setSelectedProduct}
              />
            ))}
          </div>
          
        )}
      </main>
      <>
      
      테스트
      </>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />

      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        reviews={reviews}
        onAddReview={handleAddReview}
        onAddComment={handleAddComment}
        onLikeReview={handleLikeReview}
        currentUser={user}
      />

      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
}