import { supabase } from './../../lib/supabaseClient';
import Image from 'next/image';
import markEmail from "../../public/assets/img/icon/mark_email_unread_FILL0_wght400_GRAD0_opsz48.svg";
import forwardToInbox from "../../public/assets/img/icon/forward_to_inbox_FILL0_wght400_GRAD0_opsz48.svg";
import contactEmail from "../../public/assets/img/icon/contact_mail_FILL0_wght400_GRAD0_opsz48.svg";
import presentation from "../../public/assets/img/illustrations/presentation.svg"
import webDevelopment from "../../public/assets/img/illustrations/web-development.svg"
import Link from "next/link";
import Head from 'next/head'
import Header from "../components/Header"


export default function Home({ suratMasuk, suratKeluar }) {

  const jumlahSuratMasuk = suratMasuk.length
  const jumlahSuratKeluar = suratKeluar.length

  return (
    <>

      <Head>

        <title>
          Home - SIA-PDIPM Pekanbaruu
        </title>
      </Head>

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
                  <h1 id="jumlahsuratmasuk">0{jumlahSuratMasuk}</h1>
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
                  <h1>0{jumlahSuratKeluar}</h1>
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
                  <h1>0</h1>
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


    </>
  );
}




export async function getServerSideProps() {

  let { data: tb_suratMasuk, error: errorSuratMasuk } = await supabase
    .from('tb_suratMasuk')
    .select('id', { count: 'exact' });

  let { data: tb_suratKeluar, error: errorSuratKeluar } = await supabase
    .from('tb_suratKeluar')
    .select('id', { count: 'exact' });



  return {
    props: {
      suratMasuk: tb_suratMasuk,
      suratKeluar: tb_suratKeluar
    }, // will be passed to the page component as props
  };
}