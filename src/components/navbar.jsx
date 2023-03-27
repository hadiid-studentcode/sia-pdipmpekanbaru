import Link from "next/link";
import Image from 'next/image';
import logo from '../../public/assets/img/pdipm.png';
import { useRouter } from 'next/router';



export default function Navbar() {



  const navigation = [

  ];



  return (
    <>

      <nav
        className="navbar navbar-light navbar-expand-md fixed-top navbar-shrink py-3"
        id="mainNav">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" href="/"><span>
            <Image
              src={logo}
              className="img-fluid"
              alt="logo pd ipm"
              width="50"
            />
            SIA PD IPM</span></Link><button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto">
              {navigation.map((item) => (
                <li key={item.name} className="nav-item">
                  <Link className={`${item.classLink}`} href={item.Link}>{item.name}</Link>
                </li>
              ))}
              
            </ul>
            <Link className="btn btn-primary shadow" role="button" href="signup.html"
            >Sign up</Link>
          </div>
        </div>
      </nav>


    </>
  );
}






