import Image from 'next/image';
import markEmail from "../../public/assets/img/icon/mark_email_unread_FILL0_wght400_GRAD0_opsz48.svg";
import forwardToInbox from "../../public/assets/img/icon/forward_to_inbox_FILL0_wght400_GRAD0_opsz48.svg";
import contactEmail from "../../public/assets/img/icon/contact_mail_FILL0_wght400_GRAD0_opsz48.svg";
import presentation from "../../public/assets/img/illustrations/presentation.svg"
import webDevelopment from "../../public/assets/img/illustrations/web-development.svg"
import Link from "next/link";
import Head from 'next/head'
import Header from "../components/Header"

export default function Home() {


  return (
    <>

      <Head>

        <title>
          Home - SIA PD IPM Pekanbaru
        </title>
      </Head>

    <Header/>


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

      {/* <section>
        <div className="container py-4 py-xl-5">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Tambah Surat Masuk
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <form action="" className="form" id="form">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Surat Masuk
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="suratno" className="form-label">
                        Surat No *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nosurat"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="perihal" className="form-label">
                        Perihal *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="perihal"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="suratdari" className="form-label">
                        Surat Dari *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="suratdari"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="row g-2">
                        <div className="col-md">
                          <div className="form-floating">
                            <select className="form-select" id="sifatsurat">
                              <option defaultValue>Pilih</option>
                              <option value="penting">Penting</option>
                              <option value="umum">Umum</option>
                              <option value="Biasa">Biasa</option>
                            </select>
                            <label htmlFor="floatingInputGrid">
                              Sifat Surat
                            </label>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="form-floating">
                            <input
                              type="date"
                              className="form-control"
                              name=""
                              id="tanggal"
                            />
                            <label htmlFor="floatingSelectGrid">
                              Tanggal Surat
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="row g-2">
                        <div className="col-md">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="penerima"
                            />
                            <label htmlFor="floatingInputGrid">Penerima</label>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              id="lampiran"
                            />
                            <label htmlFor="floatingSelectGrid">Lampiran</label>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="suratdari" className="form-label">
                            Keterangan
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="keterangan"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="input-group mb-3">
                        <a
                          href="https://drive.google.com/drive/folders/1fEZpWwxmKC4VayZx7A3tDQUXv4EOjFj4?usp=sharing"
                          className="btn btn-success"
                          target="_blank"
                        >
                          Upload Surat Masuk
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="table-responsive mt-4">
            <table
              id="table_id"
              className="display table table-striped table-hover table-borderless table-primary align-middle"
            >
              <thead className="table-ligh">
                <tr>
                  <th>No</th>
                  <th>Perihal</th>
                  <th>Dari</th>
                  <th>Sifat</th>
                  <th>Tanggal</th>
                  <th>Penerima</th>
                  <th>Lampiran</th>
                  <th>Keterangan</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody className="table-group-divider"></tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4 py-xl-5">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Tambah Surat Keluar
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <form action="" className="form" id="form">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Surat Keluar
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label htmlFor="suratno" className="form-label">
                        Surat No *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="nosurat"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="perihal" className="form-label">
                        Perihal *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="perihal"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dikirimke" className="form-label">
                        Dikirim ke *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="dikirimke"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="row g-2">
                        <div className="col-md">
                          <div className="form-floating">
                            <select className="form-select" id="sifatsurat">
                              <option defaultValue>Pilih</option>
                              <option value="penting">Penting</option>
                              <option value="umum">Umum</option>
                              <option value="Biasa">Biasa</option>
                            </select>
                            <label htmlFor="floatingInputGrid">
                              Sifat Surat
                            </label>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="form-floating">
                            <input
                              type="date"
                              className="form-control"
                              name=""
                              id="tanggal"
                            />
                            <label htmlFor="floatingSelectGrid">
                              Tanggal Surat
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="row g-2">
                        <div className="col-md">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              id="penerima"
                            />
                            <label htmlFor="floatingInputGrid">Penerima</label>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="form-floating">
                            <input
                              type="text"
                              className="form-control"
                              name=""
                              id="lampiran"
                            />
                            <label htmlFor="floatingSelectGrid">Lampiran</label>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="suratdari" className="form-label">
                            Keterangan
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="keterangan"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="input-group mb-3">
                        <a
                          href="https://drive.google.com/drive/folders/1fEZpWwxmKC4VayZx7A3tDQUXv4EOjFj4?usp=sharing"
                          className="btn btn-success"
                          target="_blank"
                        >
                          Upload Surat Keluar
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Simpan
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="table-responsive mt-4">
            <table
              id="table_id"
              className="display table table-striped table-hover table-borderless table-primary align-middle"
            >
              <thead className="table-ligh">
                <tr>
                  <th>No</th>
                  <th>Perihal</th>
                  <th>Dikirim ke</th>
                  <th>Sifat</th>
                  <th>Tanggal</th>
                  <th>Penerima</th>
                  <th>Lampiran</th>
                  <th>Keterangan</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody className="table-group-divider"></tbody>
            </table>
          </div>
        </div>
      </section>

        <section>
        <div className="container py-4 py-xl-5">
          <div className="card">
            <div className="card-header">Ajukan Surat</div>
            <div className="card-body">
              <form action="" className="form" id="form">
                <div className="mb-3">
                  <label htmlFor="nosurat" className="form-label">
                    No Surat
                  </label>
                  <input type="text" className="form-control" id="nosurat" />
                  <div className="form-text" id="emailHelp">
                    Well never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}


      

   

       


    </>
  );
}



