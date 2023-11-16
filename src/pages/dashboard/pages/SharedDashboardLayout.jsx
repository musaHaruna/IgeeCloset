import { Outlet } from 'react-router-dom'

import { Navbar } from '../../../components/global'
import DashboardLinks from '../../../components/dashboard/DashboardLinks'
import Wrapper from '../../../assets/css/Dashboard'
const SharedDashboardLayout = () => {
  return (
    <main className='container dashboard'>
      <Navbar />

      <Wrapper>
        <DashboardLinks />
        <div className='dashboard-page'>
          <Outlet />
        </div>
      </Wrapper>
    </main>
  )
}
export default SharedDashboardLayout
