import Head from "next/head";
import Header from "../components/Header";

export default function SuratMasuk() {
  const data = [
    {
      id: 1,
      No: "pr/100/2023",
      Perihal: "undangan",
      Dari: "IPM Jakarta",
      Sifat: "umum",
      Tanggal: "30 maret 2023",
      Penerima: "hadiid",
      Lampiran: "tidak ada",
      Keterangan: "tidak ada",
      Timestamp: "40 maret 2023",
    },
  ];

  return (
    <>
      <Head>
        <title>Surat Masuk - SIA PD IPM Pekanbaru</title>
      </Head>

      <Header />

      <section>
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
              <tbody className="table-group-divider">
                {data.map((d) => (
                  <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.No}</td>
                    <td>{d.Perihal}</td>
                    <td>{d.Sifat}</td>
                    <td>{d.Tanggal}</td>
                    <td>{d.Penerima}</td>
                    <td>{d.Lampiran}</td>
                    <td>{d.Keterangan}</td>
                    <td>{d.Timestamp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      title: "Surat Masuk",
    }, // will be passed to the page component as props
  };
}
