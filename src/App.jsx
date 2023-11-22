import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Error,
  Explore,
  Landing,
  Closet,
  FAQ,
  Home,
  ProtectedRoute,
  SingleCloset,
  WomenCategory,
} from './pages/Index'
import {
  BankInfo,
  Notifications,
  Offers,
  Profile,
  Purchases,
  SharedDashboardLayout,
  UserCloset,
} from './pages/dashboard/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}>
          <Route index element={<Home />} />
          <Route path='explore' element={<Explore />} />
          <Route path='closet' element={<Closet />} />
          <Route path='closet/women' element={<WomenCategory />} />
          <Route path='closet/:id' element={<SingleCloset />} />

          <Route path='faq' element={<FAQ />} />
          <Route path='*' element={<Error />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
