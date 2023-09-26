import Footer from "./Components/Uitlity/Footer";
import NavBarLogin from "./Components/Uitlity/NavBarLogin";
import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethoudPage from "./Page/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllordersPage from "./Page/Admin/AdminAllordersPage";
import AdminOrdersDetalisPage from "./Page/Admin/AdminOrdersDetalisPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserAllAddressPage from "./Page/User/UserAllAddressPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserProfilePage from "./Page/User/UserProfilePage";
import AdminEditProductsPage from "./Page/Admin/AdminEditProductsPage";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Page/Auth/VerifyPasswordPage";
import ResetPasswordPage from "./Page/Auth/ResetPasswordPage";
import AdminAddCouponPage from "./Page/Admin/AdminAddCouponPage";
import AdminEditCouponPage from "./Page/Admin/AdminEditCouponPage";

// index => يعني هاي الصفحة الرئيسية بدون ما احطلها مسار
function App() {
  return (
    <div className='font-["Almarai"] bg-gray-100'>
      <NavBarLogin />
      <div className="min-h-[calc(100vh-136px)]">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} /> 
          <Route path="/products/:id" element={<ProductDetalisPage />} /> 
          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/order/paymethoud" element={<ChoosePayMethoudPage />} /> 
          <Route path="/admin/allproducts" element={<AdminAllProductsPage />} /> 
          <Route path="/admin/allorders" element={<AdminAllordersPage />} /> 
          <Route path="/admin/orders/:id" element={<AdminOrdersDetalisPage />} /> 
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} /> 
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} /> 
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} /> 
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} /> 
          <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} /> 
          <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} /> 
          <Route path="/user/allorders" element={<UserAllOrdersPage />} /> 
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} /> 
          <Route path="/user/addresses" element={<UserAllAddressPage />} /> 
          <Route path="/user/add-address" element={<UserAddAddressPage />} /> 
          <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} /> 
          <Route path="/user/profile" element={<UserProfilePage />} /> 
          <Route path="/admin/editproduct/:id" element={<AdminEditProductsPage />} /> 
          <Route path="/user/forget-password" element={<ForgetPasswordPage />} /> 
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} /> 
          <Route path="/user/reset-password" element={<ResetPasswordPage />} /> 
        </Routes>
      </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
