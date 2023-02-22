
import Image from 'next/image'
import NavLink from './NavLink'
import Router,{useRouter} from "next/router";
import classNames from 'classnames';

const Nav = () =>{
    const { route } = useRouter();
    const routes = {
      resource: ['/resource'],
      intake: ['/', '/details']
    };
    console.log({route}, route === '/')

    return(
        <header className="border-b border-gray-primary">
        <nav className="flex justify-between m-auto max-w-screen-lg">

        <Image
          data-cy="VG logo"
          onClick={() => Router.push('/resource')}
          src={'../../icons/logo.svg'}
          alt="VG Logo"
          width={200}
          height={200}
          className="cursor-pointer"
        />
  
      <div className="text-black-primary space-between flex">
        <NavLink href="/resource" isActive={routes.resource.includes(route)}>Resource Hub</NavLink>
        <NavLink href="/" isActive={routes.intake.includes(route)}>Intake Process</NavLink>
    </div>
        </nav>
        </header>
    );
}
export default Nav