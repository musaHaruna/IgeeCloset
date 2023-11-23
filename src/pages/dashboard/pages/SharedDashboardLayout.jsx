import { Outlet } from 'react-router-dom'

import { Navbar } from '../../../components/global'
import DashboardLinks from '../../../components/dashboard/DashboardLinks'
import Wrapper from '../../../assets/css/Dashboard'
const SharedDashboardLayout = () => {
  return (
    <main>
      <div className='sticky'>
        <Navbar />
      </div>

      <main className='container dashboard'>
        <Wrapper>
          <DashboardLinks />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </Wrapper>
      </main>
    </main>
  )
}
export default SharedDashboardLayout
