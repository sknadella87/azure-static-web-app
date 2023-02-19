import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children, user }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav user={user} />
      {children}
      <Footer className="" />
    </div>
    
  )
}
export default Layout