import { supabase } from './../../lib/supabaseClient';
import React, { useState } from "react";

import Head from 'next/head'
import Header from "../components/Header";



export default function SuratKeluar({ suratKeluar, dataSurat }) {
//   const [dataSuratKeluar, setDataSuratKeluar] = useState(suratKeluar);
    const [SuratKeluar, setSuratKeluar] = useState(dataSurat);


  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.from("tb_suratKeluar").insert([
      {
        no: event.target.noSurat.value,
        perihal: event.target.perihalSurat.value,
        dikirimke: event.target.dikirimke.value,
        sifat: event.target.sifatSurat.value,
        tanggal: event.target.tanggalSurat.value,
        penerima: event.target.penerimaSurat.value,
        lampiran: event.target.lampiranSurat.value,
        keterangan: event.target.keteranganSurat.value,
      },
    ]);

    if (error) {
      alert(error);
    } else {
      alert("surat keluar berhasil ditambahkan!");
    }

    event.target.noSurat.value = "";
    event.target.perihalSurat.value = "";
    event.target.dikirimke.value = "";
    event.target.sifatSurat.value = "";
    event.target.tanggalSurat.value = "";
    event.target.penerimaSurat.value = "";
    event.target.lampiranSurat.value = "";
    event.target.keteranganSurat.value = "";

    window.location.reload(true);
  };

  const [searchValue, setSearchValue] = useState("");

  const handleCariSuratMasuk = async (e) => {
    const value = e.target.value;
    setSearchValue(value);

    try {
      let { data: tb_suratKeluar, error } = await supabase
        .from("tb_suratKeluar")
        .select("*")
        .ilike("no", `%${value}%`) // Menggunakan opsi ilike untuk pencarian yang case-insensitive dan partial matching
        .limit(10); // Batasi jumlah hasil pencarian menjadi 10

      if (error) {
        // Handle error jika terdapat error dari response database
        console.error(error);
      } else {
        setDataSuratKeluar(tb_suratKeluar);
      }
    } catch (error) {
      // Handle error jika terdapat error dalam proses pencarian data
      console.error(error);
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = 3;

  const handlePageChange = async (newPage) => {
    setCurrentPage(newPage);

    const { data: tb_suratKeluar, error } = await supabase
      .from("tb_suratKeluar")
      .select("*")
      .range((newPage - 1) * itemsPerPage, newPage * itemsPerPage - 1);
    setDataSuratKeluar(tb_suratKeluar);
  };

  return (
    <>
      <Head>
        <title>Surat Keluar - SIA PD IPM Pekanbaru</title>
      </Head>

      <Header />

      <section>
        <div className="py-4 py-xl-1">
          {/* <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Tambah Surat Keluar
          </button> */}

          {/* <div
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
                        name="noSurat"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="perihal" className="form-label">
                        Perihal *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="perihalSurat"
                        name="perihalSurat"
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
                        name="dikirimke"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="row g-2">
                        <div className="col-md">
                          <div className="form-floating">
                            <select
                              className="form-select"
                              id="sifatSurat"
                              name="sifatSurat"
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
                              id="tanggalSurat"
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
                              name="penerimaSurat"
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
                              id="lampiranSurat"
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
                            name="keteranganSurat"
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
          </div> */}

          {/* <div className="input-group mt-5">
            <span className="input-group-text" id="basic-addon1">
              Search
            </span>
            <input
              type="text"
              className="form-control "
              placeholder="cari"
              id="key"
              name="key"
              onChange={handleCariSuratMasuk}
            />
          </div> */}

          <div className="table-responsive mt-4 ">
            <table
              id="table_id"
              className="display table table-striped table-hover table-borderless align-middle table-bordered"
            >
              <thead className="table-ligh">
                <tr>
                  <td>No</td>
                  <th>Kode Surat</th>
                  <th>Perihal</th>
                  <th>Dikirim ke</th>
                  <th>Sifat</th>
                  <th>Tanggal</th>
                  <th>Penerima</th>
                  <th>Lampiran</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {/* {dataSuratKeluar.map((d, index) => (
                  <tr key={d.id}>
                    <td>{index + 1}</td>
                    <td>{d.no}</td>
                    <td>{d.perihal}</td>
                    <td>{d.dikirimke}</td>
                    <td>{d.sifat}</td>
                    <td>{d.tanggal}</td>
                    <td>{d.penerima}</td>
                    <td>{d.lampiran}</td>
                    <td>{d.keterangan}</td>
                  </tr>
                ))} */}

                {SuratKeluar.map((d, index) => (
                  <tr key={d.id}>
                    <td>{index + 1}</td>
                    <td>{d.kode}</td>
                    <td>{d.perihal}</td>
                    <td>{d.dikirimke}</td>
                    <td>{d.sifat}</td>
                    <td>{d.tanggal}</td>
                    <td>{d.penerima}</td>
                    <td>{d.lampiran}</td>
                    <td>{d.keterangan}</td>
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


export async function getServerSideProps() {


    let { data: tb_suratKeluar, error } = await supabase
        .from('tb_suratKeluar')
        .select('*')
        .range(0, 5)


         const spreadsheetId = "1AEhGqYPH5HXY9Eb4upTWHU3s0OyyFcGxc3mqs1t6GAs";
         const apiKey = "AIzaSyDb2Fl7lCdWAjzOQ0XOwuDTKE02Kgpy66Y";
         const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/?key=${apiKey}&includeGridData=true`;
         const result = await fetch(url);
         const { sheets } = await result.json();
         const eventSheet = sheets[0];
         const data = eventSheet.data[0].rowData
           .filter((_, index) => index !== 0) // Mulai dari index 1 (menghindari nama kolom)
           .map((row) => {
             const { values } = row;
             return {
               no: values[0].formattedValue || null,
               kode: values[1].formattedValue || null,
               perihal: values[2].formattedValue || null,
               dikirimke: values[3].formattedValue || null,
               sifat: values[4].formattedValue || null,
               tanggal: values[5].formattedValue || null,
               penerima: values[6].formattedValue || null,
               lampiran: values[7].formattedValue || null,
               keterangan: values[8].formattedValue || null
             };
           });
        


    return {
      props: {
        suratKeluar: tb_suratKeluar,
        dataSurat: data,
      },
    };
}