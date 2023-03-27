import Image from 'next/image';
import markEmail from "../../public/assets/img/icon/mark_email_unread_FILL0_wght400_GRAD0_opsz48.svg";
import forwardToInbox from "../../public/assets/img/icon/forward_to_inbox_FILL0_wght400_GRAD0_opsz48.svg";
import contactEmail from "../../public/assets/img/icon/contact_mail_FILL0_wght400_GRAD0_opsz48.svg";
import presentation from "../../public/assets/img/illustrations/presentation.svg"
import webDevelopment from "../../public/assets/img/illustrations/web-development.svg"
import Link from "next/link";
import Head from 'next/head'
import Header from "../components/Header"
import { useRouter } from 'next/router';
import Navbarku from "../components/Navbar";


export default function Home() {

 
  return (
    <>

      <Head>

        <title>
          Home - SIA PD IPM Pekanbaru
        </title>
      </Head>
    <Navbarku/>
      <Header />


      <section>
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <div
                className="card border-light border-1 d-flex justify-content-center p-4">
                <div className="card-body">
                  <div
                    className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <Image src={markEmail} alt="surat masuk" />
                  </div>
                  <h1 id="jumlahsuratmasuk">100</h1>
                  <div>
                    <h4 className="fw-bold">Laporan Surat Masuk</h4>

                    <Link className="btn btn-sm px-0" href="/surat-masuk">
                      Learn More&nbsp;<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-right">
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg><br />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-light border-1 d-flex justify-content-center p-4">
                <div className="card-body">
                  <div
                    className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <Image src={forwardToInbox} alt="surat keluar" />
                  </div>
                  <h1>200</h1>
                  <div>
                    <h4 className="fw-bold">Laporan Surat Keluar</h4>

                    <Link className="btn btn-sm px-0" href="surat-keluar">
                      Learn More&nbsp;<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-right">
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg><br />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card border-light border-1 d-flex justify-content-center p-4">
                <div className="card-body">
                  <div
                    className="bs-icon-lg bs-icon-rounded bs-icon-secondary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-4 bs-icon">
                    <Image src={contactEmail} alt="permohonan surat" />
                  </div>
                  <h1>100</h1>
                  <div>
                    <h4 className="fw-bold">Laporan Permohonan Surat</h4>

                    <Link className="btn btn-sm px-0" href="/permohonan-surat">
                      Learn More&nbsp;<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-arrow-right">
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg><br />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container py-4 py-xl-5">
          <div className="row gy-4 gy-md-0">
            <div
              className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
              <div>
                <Image
                  src={presentation}
                  className="rounded img-fluid fit-cover"

                  width="800"
                  alt="presentation"
                />
              </div>
            </div>
            <div className="col">
              <div>
                <h3 className="fw-bold pb-md-4">
                  Features that make your team more&nbsp;<span className="underline">productive</span>
                </h3>
                <p className="text-muted py-4 py-md-0">
                  Venenatis leo imperdiet magna enim eu quisque, metus gravida
                  pulvinar morbi.
                </p>
                <div className="row gy-4 row-cols-2 row-cols-md-2">
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-warning">40+</span>
                      <p className="fw-normal text-muted">Amazing plugins</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-warning">100+</span>
                      <p className="fw-normal text-muted">Ready-to use templates</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-warning">123+</span>
                      <p className="fw-normal text-muted">Years of experience</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <span className="fs-2 fw-bold text-primary bg-warning">123+</span>
                      <p className="fw-normal text-muted">Years of experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 py-xl-5">
        <div className="container">
          <div
            className="bg-primary border rounded border-0 border-primary overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="text-white p-4 p-md-5">
                  <h2 className="fw-bold text-white mb-3">
                    Ut semper sed, aptent taciti conubia.
                  </h2>
                  <p className="mb-4">
                    Tincidunt laoreet leo, adipiscing taciti tempor. Primis
                    senectus sapien, risus donec ad fusce augue interdum.
                  </p>
                  <div className="my-3">
                    <Link className="btn btn-warning me-2 mt-2" role="button" href="#">Button</Link>
                    <Link className="btn btn-light mt-2" role="button" href="#">Button</Link>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 order-first order-md-last">
                <Image
                  className="fit-contain pt-5 pt-md-0"
                  src={webDevelopment}
                  alt="webDevelopment"
                  width="500"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container py-4 py-xl-5">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 className="display-6 fw-bold mb-4">
                Check out<br />
                our
                <span className="underline">amazing plans</span>
              </h2>

              <p className="text-muted">
                Curae hendrerit donec commodo hendrerit egestas tempus, turpis
                facilisis nostra nunc. Vestibulum dui eget ultrices.
              </p>
            </div>
          </div>
          <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <div className="card border-0 h-100">
                <div
                  className="card-body d-flex flex-column justify-content-between p-4">
                  <div>
                    <h6 className="fw-bold text-muted">Standard</h6>
                    <h4 className="display-5 fw-bold mb-4">$15</h4>
                    <ul className="list-unstyled">
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2" ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icon-tabler-check fs-5 text-primary">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none">

                          </path>
                          <path d="M5 12l5 5l10 -10"></path></svg></span><span>Lectus ut nibh quam, felis porttitor.</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2"><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icon-tabler-check fs-5 text-primary">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                          <path d="M5 12l5 5l10 -10"></path></svg></span><span>Ante nec venenatis etiam lacinia.</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2"><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icon-tabler-check fs-5 text-primary">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none">
                          </path>
                          <path d="M5 12l5 5l10 -10"></path></svg></span><span>Porta suscipit netus ad ac.</span>
                      </li>
                    </ul>
                  </div>
                  <Link className="btn btn-primary" role="button" href="#">Button</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-warning border-2 h-100">
                <div
                  className="card-body d-flex flex-column justify-content-between p-4">
                  <span
                    className="badge bg-warning position-absolute top-0 end-0 rounded-bottom-left text-uppercase text-primary">Most Popular</span>
                  <div>
                    <h6 className="fw-bold text-muted">Pro</h6>
                    <h4 className="display-5 fw-bold mb-4">$38</h4>
                    <ul className="list-unstyled">
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2"><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icon-tabler-check fs-5 text-primary">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                          <path d="M5 12l5 5l10 -10"></path></svg></span><span>Lectus ut nibh quam, felis porttitor.</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2"><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icon-tabler-check fs-5 text-primary">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                          <path d="M5 12l5 5l10 -10"></path></svg></span><span>Ante nec venenatis etiam lacinia.</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary">
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path></svg></span><span>Porta suscipit netus ad ac.</span>
                      </li>
                    </ul>
                  </div>
                  <Link className="btn btn-warning" role="button" href="#">Button</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 h-100">
                <div
                  className="card-body d-flex flex-column justify-content-between p-4">
                  <div className="pb-4">
                    <h6 className="fw-bold text-muted">Enterprise</h6>
                    <h4 className="display-5 fw-bold mb-4">$70</h4>
                    <ul className="list-unstyled">
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2"><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icon-tabler-check fs-5 text-primary">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                          <path d="M5 12l5 5l10 -10"></path></svg></span><span>Lectus ut nibh quam, felis porttitor.</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2"><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icon-tabler-check fs-5 text-primary">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                          <path d="M5 12l5 5l10 -10"></path></svg></span><span>Ante nec venenatis etiam lacinia.</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2"><svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icon-tabler-check fs-5 text-primary">
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"></path>
                          <path d="M5 12l5 5l10 -10"></path></svg></span><span>Porta suscipit netus ad ac.</span>
                      </li>
                      <li className="d-flex mb-2">
                        <span className="bs-icon-xs bs-icon-rounded bs-icon me-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icon-tabler-check fs-5 text-primary">
                            <path
                              stroke="none"
                              d="M0 0h24v24H0z"
                              fill="none"></path>
                            <path d="M5 12l5 5l10 -10"></path></svg></span><span>Morbi praesent aptent integer.</span>
                      </li>
                    </ul>
                  </div>
                  <a className="btn btn-primary" role="button" href="#">Button</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-4 py-xl-5 mb-5">
        <div className="container">
          <div className="row mb-2">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h2 className="display-6 fw-bold mb-5">
                <span className="pb-3 underline">FAQ<br /></span>
              </h2>
              <p className="text-muted mb-5">
                Curae hendrerit donec commodo hendrerit egestas tempus, turpis
                facilisis nostra nunc. Vestibulum dui eget ultrices.
              </p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-md-8 mx-auto">
              <div className="accordion text-muted" role="tablist" id="accordion-1">
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-1"
                      aria-expanded="true"
                      aria-controls="accordion-1 .item-1">
                      Aenean arcu euismod aliquam, volutpat consequat?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse show item-1"
                    role="tabpanel"
                    data-bs-parent="#accordion-1">
                    <div className="accordion-body">
                      <p>
                        Maecenas diam volutpat, erat quis enim cras lobortis
                        vivamus donec tempor. Congue ultrices donec turpis
                        vivamus. Laoreet aenean metus, mi nunc massa feugiat duis.
                        Pharetra erat consequat purus curae quisque, etiam
                        accumsan className.
                      </p>
                      <p className="mb-0">
                        Commodo rutrum quisque curabitur habitasse, suspendisse
                        etiam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-2"
                      aria-expanded="false"
                      aria-controls="accordion-1 .item-2">
                      Lorem quam erat placerat mollis, rhoncus senectus?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse item-2"
                    role="tabpanel"
                    data-bs-parent="#accordion-1">
                    <div className="accordion-body">
                      <p className="mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit non mi porta gravida at eget metus.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" role="tab">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#accordion-1 .item-3"
                      aria-expanded="false"
                      aria-controls="accordion-1 .item-3">
                      Iaculis accumsan id, facilisis proin ipsum velit neque?
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse item-3"
                    role="tabpanel"
                    data-bs-parent="#accordion-1">
                    <div className="accordion-body">
                      <p className="mb-0">
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit non mi porta gravida at eget metus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 py-xl-5">
        <div className="container">
          <div
            className="text-white bg-primary border rounded border-0 border-primary d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5">
            <div className="pb-2 pb-lg-1">
              <h2 className="fw-bold text-warning mb-2">
                Not sure which plan suits you?
              </h2>
              <p className="mb-0">
                Imperdiet consectetur dolor, tristique himenaeos ultrices
                tristique neque.
              </p>
            </div>
            <div className="my-2">
              <Link
                className="btn btn-light fs-5 py-2 px-4"
                role="button"
                href="contacts.html">Contact us</Link>
            </div>
          </div>
        </div>
      </section>


       <footer>
      <div className="container py-4 py-lg-5">
        <div className="row row-cols-2 row-cols-md-4">
          <div className="col-12 col-md-3">
            <div className="fw-bold d-flex align-items-center mb-2">
              <span>SIA PD IPM</span>
            </div>
            <p className="text-muted">
              Sem eleifend donec molestie, integer quisque orci aliquam.
            </p>
          </div>
          <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column">
            <h3 className="fs-6 fw-bold">Services</h3>
            <ul className="list-unstyled">
              <li><a href="#">Web design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Hosting</a></li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column">
            <h3 className="fs-6 fw-bold">About</h3>
            <ul className="list-unstyled">
              <li><a href="#">Company</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Legacy</a></li>
            </ul>
          </div>
          <div className="col-sm-4 col-md-3 text-lg-start d-flex flex-column">
            <h3 className="fs-6 fw-bold">Careers</h3>
            <ul className="list-unstyled">
              <li><a href="#">Job openings</a></li>
              <li><a href="#">Employee success</a></li>
              <li><a href="#">Benefits</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div
          className="text-muted d-flex justify-content-between align-items-center pt-3"
        >
          <p className="mb-0">Copyright © 2023 SIA PD IPM</p>
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-facebook"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                ></path>
              </svg>
            </li>
            <li className="list-inline-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-twitter"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                ></path>
              </svg>
            </li>
            <li className="list-inline-item">
              <Link href="https://www.instagram.com/pdipmpekanbaru/" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-instagram"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                ></path>
              </svg></Link>

            </li>
          </ul>
        </div>
      </div>
    </footer>

    </>
  );
}



