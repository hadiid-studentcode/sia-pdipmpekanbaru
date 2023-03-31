import { supabase } from './../../lib/supabaseClient';
import Head from "next/head";
import Header from "../components/Header";
export default function SuratMasuk({ suratMasuk }) {



  const handleSubmit = async (event) => {

    event.preventDefault();


    const { data, error } = await supabase
      .from('tb_suratMasuk')
      .insert([
        {
          no: event.target.noSurat.value,
          perihal: event.target.perihal.value,
          suratDari: event.target.suratDari.value,
          sifat: event.target.sifatSurat.value,
          tanggal: event.target.tanggalSurat.value,
          penerima: event.target.penerimaSurat.value,
          lampiran: event.target.lampiraSurat.value,
          keterangan: event.target.keteranganSurat.value,
        }
      ])

    if (error) {
      alert(error)
    } else {
      alert('User created successfully!');
    }

    event.target.noSurat.value = '';
    event.target.perihal.value = '';
    event.target.suratDari.value = '';
    event.target.sifatSurat.value = '';
    event.target.tanggalSurat.value = '';
    event.target.penerimaSurat.value = '';
    event.target.lampiraSurat.value = '';
    event.target.keteranganSurat.value = '';

    window.location.reload(true);

  }

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
            <form onSubmit={handleSubmit} method="post">
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
                        name='noSurat'

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
                        name="perihal"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="suratdari" className="form-label">
                        Surat Dari *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="suratDari"
                        name='suratDari'

                      />
                    </div>
                    <div className="mb-3">
                      <div className="row g-2">
                        <div className="col-md">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="sifatSurat"
                              name='sifatSurat'


                            >
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
                              name="tanggalSurat"

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
                              id="penerimaSurat"
                              name='penerimaSurat'


                            />
                            <label htmlFor="floatingInputGrid">Penerima</label>
                          </div>
                        </div>
                        <div className="col-md">
                          <div className="form-floating">
                            <input
                              type="number"
                              className="form-control"
                              name="lampiraSurat"

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
                            id="keteranganSurat"
                            name='keteranganSurat'

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
                {suratMasuk.map((d) => (
                  <tr key={d.id}>
                    <td>{d.no}</td>
                    <td>{d.perihal}</td>
                    <td>{d.dikirimDari}</td>
                    <td>{d.sifat}</td>
                    <td>{d.tanggal}</td>
                    <td>{d.penerima}</td>
                    <td>{d.lampiran}</td>
                    <td>{d.keterangan}</td>
                    <td>{d.created_at}</td>
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

export async function getStaticProps(context) {



  let { data: tb_suratMasuk, error } = await supabase
    .from('tb_suratMasuk')
    .select('*')


  return {
    props: {
      suratMasuk: tb_suratMasuk
    }, // will be passed to the page component as props
  };
}




