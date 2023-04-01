import { supabase } from './../../lib/supabaseClient';
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../public/assets/img/pdipm.png';

export default function PermohonanSurat({ noSurat }) {

  return (
    <>
      <Head>
        <title>Permohonan Surat - SIA PD IPM Pekanbaru</title>
      </Head>


      <Header />

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
                  <input type="text" className="form-control" id="nosurat" value={noSurat} disabled />
                  <div className="form-text" id="emailHelp">
                    no surat keluar yang sudah dikeluarkan terakhir*
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="jenisSurat"
                      name='jenisSurat'
                    >
                      <option defaultValue>Pilih</option>
                      <option value="pimpinan">Pimpinan</option>
                      <option value="panitia Pelaksana">Panitia Pelaksana</option>

                    </select>
                    <label htmlFor="jenisSurat">
                      jenis Surat
                    </label>
                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="perihalSurat" className="form-label">
                      Perihal
                    </label>
                    <input type="text" className="form-control" id="perihalSurat" name='perihalSurat' />

                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="dikirimKe" className="form-label">
                      dikirim ke
                    </label>
                    <input type="text" className="form-control" id="dikirimKe" name='dikirimKe' />

                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="isiSurat" className="form-label">
                      isi surat
                    </label>
                  
                    <textarea className='form-control' name="isiSurat" id="isiSurat" cols="30" rows="10"></textarea>

                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="deskripsiSurat" className="form-label">
                      deskripsi surat
                    </label>

                    <textarea className='form-control' name="deskripsiSurat" id="deskripsiSurat" cols="10" rows="1"></textarea>

                  </div>
                </div>
              
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export async function getServerSideProps(context) {


  let { data: tb_suratKeluar, error } = await supabase
    .from('tb_suratKeluar')
    .select('no')


  const lastIndex = tb_suratKeluar.length - 1;
  const nosuratKeluar = tb_suratKeluar[lastIndex];


  return {
    props: {
      noSurat: nosuratKeluar.no
    }, // will be passed to the page component as props
  };
}
