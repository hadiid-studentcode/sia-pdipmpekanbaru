import { supabase } from './../../lib/supabaseClient';
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
export default function SuratMasuk({ suratMasuk }) {
  const [dataSuratMasuk, setDataSuratMasuk] = useState(suratMasuk);



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
          lampiran: event.target.lampiranSurat.value,
          keterangan: event.target.keteranganSurat.value,
        }
      ])

    if (error) {
      alert(error)
    } else {
      alert('Surat masuk berhasil ditambahkan!');
    }

    event.target.noSurat.value = '';
    event.target.perihal.value = '';
    event.target.suratDari.value = '';
    event.target.sifatSurat.value = '';
    event.target.tanggalSurat.value = '';
    event.target.penerimaSurat.value = '';
    event.target.lampiranSurat.value = '';
    event.target.keteranganSurat.value = '';

    window.location.reload(true);

  }
  const [searchValue, setSearchValue] = useState('');
  const handleCariSuratMasuk = async (e) => {
    const value = e.target.value;
    setSearchValue(value);
    try {
      let { data: tb_suratMasuk, error } = await supabase
        .from('tb_suratMasuk')
        .select('*')
        .ilike('no', `%${value}%`) 
        .limit(10);

      if (error) {
     
        console.error(error);
      } else {
        
        setDataSuratMasuk(tb_suratMasuk);
      
      }
    } catch (error) {
      console.error(error);
    }

  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5
  const totalPages = 3 

  const handlePageChange = async (newPage) => {
    setCurrentPage(newPage);

    const { data: tb_suratMasuk, error } = await supabase
      .from('tb_suratMasuk')
      .select('*')
      .range((newPage - 1) * itemsPerPage, newPage * itemsPerPage - 1);
    setDataSuratMasuk(tb_suratMasuk);

   
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
                              name="lampiranSurat"

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

          <div className="input-group mt-5">
            <span className="input-group-text" id="basic-addon1">Search</span>
            <input type="text" className="form-control " placeholder="cari" id='key' name='key' onChange={handleCariSuratMasuk} />
          </div>
          <div className="table-responsive mt-4">
            <table
              id="table_id"
              className="display table table-striped table-hover table-borderless align-middle"
            >
              <thead className="table-ligh">
                <tr>
                  <th>No</th>
                  <th>Kode Surat</th>
                  <th>Perihal</th>
                  <th>Dari</th>
                  <th>Sifat</th>
                  <th>Tanggal</th>
                  <th>Penerima</th>
                  <th>Lampiran</th>
                  <th>Keterangan</th>

                </tr>
              </thead>
              <tbody className="table-group-divider">

                {
                  // Render hasil pencarian jika data tersedia
                  dataSuratMasuk.map((d,index) => (
                    <tr key={d.id}>
                      <td>{index+1}</td>
                      <td>{d.no}</td>
                      <td>{d.perihal}</td>
                      <td>{d.suratDari}</td>
                      <td>{d.sifat}</td>
                      <td>{d.tanggal}</td>
                      <td>{d.penerima}</td>
                      <td>{d.lampiran}</td>
                      <td>{d.keterangan}</td>

                    </tr>
                ))}






              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  {/* Tombol "Previous" tidak dapat diklik ketika di halaman pertama */}
                  <a className="btn page-link" onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                  </a>
                </li>
                {/* Loop untuk membuat item halaman */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    {/* Menggunakan index + 1 sebagai nomor halaman */}
                    <a className="btn page-link" onClick={() => handlePageChange(index + 1)}>
                      {index + 1}
                    </a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  {/* Tombol "Next" tidak dapat diklik ketika di halaman terakhir */}
                  <a className="btn page-link" onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>


      </section>
    </>
  );
}

export async function getServerSideProps() {

  let { data: tb_suratMasuk, error } = await supabase
    .from('tb_suratMasuk')
    .select('*')
    .range(0,5)
    

  return {
    props: {
      suratMasuk: tb_suratMasuk
    }, // will be passed to the page component as props
  };
}





