import { HashRouter , Routes, Route } from 'react-router-dom'
import {
  Error,
  Explore,
  Landing,
  Closet,
  FAQ,
  Home,
  ProtectedRoute,
  ProtectedRouteSellOnIgee,
  SingleCloset,
  WomenCategory,
  MenCategory,
  SellOnIgeeCloset,
} from './pages/Index'
import {
  BankInfo,
  DeliveryAddress,
  Notifications,
  Offers,
  Profile,
  Purchases,
  SharedDashboardLayout,
  UserCloset,
} from './pages/dashboard/pages'
import ProductDetail from './pages/ProductDetail'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Landing />}>
          <Route index element={<Home />} />
          <Route path='explore' element={<Explore />} />
          <Route path='closet' element={<Closet />} />
          <Route path='closet/women' element={<WomenCategory />} />
          <Route path='closet/men' element={<MenCategory />} />
          <Route path='closet/item/:id' element={<ProductDetail />} />
          <Route path='closet/:id' element={<SingleCloset />} />
          {/* <Route path='faq' element={<FAQ />} /> */}
          <Route path='*' element={<Error />} />
          <Route
            path='sell-on-igee-closet'
            element={
              <ProtectedRouteSellOnIgee>
                <SellOnIgeeCloset />
              </ProtectedRouteSellOnIgee>
            }
          ></Route>
        </Route>
        <Route
          path='user'
          element={
            <ProtectedRoute>
              <SharedDashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Profile />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='purchases' element={<Purchases />} />
          <Route path='bank-information' element={<BankInfo />} />
          <Route path='offer' element={<Offers />} />
          <Route path='closet' element={<UserCloset />} />
          <Route path='delivery-address' element={<DeliveryAddress />} />
        </Route>
      </Routes>
      <ToastContainer position='top-center' />
    </HashRouter>
  )
}

export default App
