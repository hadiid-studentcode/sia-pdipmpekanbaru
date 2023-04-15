import { supabase } from './../../lib/supabaseClient';
import React, { useState } from "react";

import Head from 'next/head'
import Header from "../components/Header";


export default function SuratKeluar({ suratKeluar }) {

    const handleSubmit = async (event) => {

        event.preventDefault();



        const { data, error } = await supabase
            .from('tb_suratKeluar')
            .insert([
                {
                    no: event.target.noSurat.value,
                    perihal: event.target.perihalSurat.value,
                    dikirimke: event.target.dikirimke.value,
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
            alert('surat keluar berhasil ditambahkan!');
        }

        event.target.noSurat.value = '';
        event.target.perihalSurat.value = '';
        event.target.dikirimke.value = '';
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
            let { data: tb_suratKeluar, error } = await supabase
                .from('tb_suratKeluar')
                .select('*')
                .ilike('no', `%${value}%`) // Menggunakan opsi ilike untuk pencarian yang case-insensitive dan partial matching
                .limit(10); // Batasi jumlah hasil pencarian menjadi 10


            if (error) {
                // Handle error jika terdapat error dari response database
                console.error(error);
            } else {
                // Lakukan pengolahan data tb_suratMasuk sesuai kebutuhan
                setSearchValue(tb_suratKeluar); // Simpan hasil pencarian ke dalam state searchResult
                // console.log(tb_suratMasuk)
            }
        } catch (error) {
            // Handle error jika terdapat error dalam proses pencarian data
            console.error(error);
        }

    }





    return (
        <>
            <Head>
                <title>Surat Keluar - SIA PD IPM Pekanbaru</title>
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
                        Tambah Surat Keluar
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
                                                id="perihalSurat"
                                                name='perihalSurat'
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
                                                name='dikirimke'
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <div className="row g-2">
                                                <div className="col-md">
                                                    <div className="form-floating">
                                                        <select className="form-select" id="sifatSurat" name='sifatSurat'>
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

                                {Array.isArray(searchValue) && searchValue.length > 0 ? (
                                    // Render hasil pencarian jika data tersedia
                                    searchValue.map((d) => (
                                        <tr key={d.id}>
                                            <td>{d.no}</td>
                                            <td>{d.perihal}</td>
                                            <td>{d.dikirimke}</td>
                                            <td>{d.sifat}</td>
                                            <td>{d.tanggal}</td>
                                            <td>{d.penerima}</td>
                                            <td>{d.lampiran}</td>
                                            <td>{d.keterangan}</td>

                                        </tr>
                                    ))
                                ) : suratKeluar && suratKeluar.length > 0 ? (
                                    // Render data default suratMasuk jika data pencarian kosong
                                    suratKeluar.map((d) => (
                                        <tr key={d.id}>
                                            <td>{d.no}</td>
                                            <td>{d.perihal}</td>
                                            <td>{d.dikirimke}</td>
                                            <td>{d.sifat}</td>
                                            <td>{d.tanggal}</td>
                                            <td>{d.penerima}</td>
                                            <td>{d.lampiran}</td>
                                            <td>{d.keterangan}</td>

                                        </tr>
                                    ))
                                ) : (
                                    // Render pesan "Data tidak tersedia" jika tidak ada data atau terjadi error
                                    <tr>
                                        <td colSpan={9}>Data tidak tersedia ERROR!</td>
                                    </tr>
                                )}







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


    return {
        props: {
            suratKeluar: tb_suratKeluar
        },
    }
}