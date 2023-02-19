
import Image from 'next/image'
import NavLink from './NavLink'
import Router,{useRouter} from "next/router";
import classNames from 'classnames';

const Nav = () =>{
    const { route } = useRouter();
    console.log({route}, route === '/')

    return(
        <header className="border-b border-gray-primary">
        <nav className="flex justify-between m-auto max-w-screen-lg">

        <Image
          data-cy="VG logo"
          onClick={() => Router.push('/')}
          src={'../../icons/logo.svg'}
          alt="VG Logo"
          width={200}
          height={200}
          className="cursor-pointer"
        />
  
      <div className="text-black-primary space-between flex">
            <NavLink href="/resource" isActive={route === '/resource'}>Resource Hub</NavLink>
            <NavLink href="/" isActive={route === '/'}>Intake Process</NavLink>
    </div>

        </nav>
        </header>
    );
}
export default Nav