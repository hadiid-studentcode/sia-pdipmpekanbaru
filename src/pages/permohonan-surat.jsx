import { supabase } from './../../lib/supabaseClient';
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Image from 'next/image';
import logo from '../../public/assets/img/pdipm.png';

export default function PermohonanSurat({ noSurat }) {




  const data = `Sehubungan dengan akan akan diadakanya acara.... , yang insya Allah akan di laksanakan pada :

Hari/Tanggal          : 

Waktu                     :

Tempat                   : 

Sehubungan acara tersebut, kami memohon kepada Ipmawan/ti untuk mengirimkan perwakilan untuk menghadiri acara tersebut. Semoga mendapatkan tanggapan yang positif.

Demikian surat ini kami sampaikan atas perhatian kami ucapkan terimakasih.
  `

  const handleSubmit = async (event) => {
    event.preventDefault();


    const dataPermohonanSurat = {
      nama: "-",
      no_surat: event.target.nosurat.value,
      jenis_surat: event.target.jenisSurat.value,
      perihal_surat: event.target.perihalSurat.value,
      dikirim_ke: event.target.dikirimKe.value,
      isi_surat: event.target.isiSurat.value,
      deskripsi_surat: event.target.deskripsiSurat.value
    }

    const link = `https://api.whatsapp.com/send?phone=6289620569613&text=_assalamualaikum_%20pak%20sekum%2C%20saya%20ingin%20ajukan%20surat%20sebagai%20berikut%20%3A%0A%0A*nama*%3A%20${dataPermohonanSurat.nama}%0A*no%20surat*%20%3A%20${dataPermohonanSurat.no_surat}%0A*jenis%20surat*%20%3A%20${dataPermohonanSurat.jenis_surat}%0A*perihal%20surat*%20%3A%20${dataPermohonanSurat.perihal_surat}%0A*dikirim%20ke*%20%3A%20${dataPermohonanSurat.dikirim_ke}%0A%0A%0A*isi%20Surat*%20%3A%0A%20${dataPermohonanSurat.isi_surat}%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A*deskripsi%20surat*%20%3A%0A${dataPermohonanSurat.deskripsi_surat}%0A%0A%0A%0ATerima%20kasih%20pak%20sekum%20dan%20mohon%20segera%20di%20follow%20up%20.%0A_wassalamualaikum%20warahmatullahi%20wabarakatuh._%0A%0A%0A%0A%0Attd%20%0A%0A*${dataPermohonanSurat.nama}*%0A%0A%0A`

    window.open(link, "_blank");

    console.log(dataPermohonanSurat);
  }

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
              <form onSubmit={handleSubmit} className="form" id="form">
                <div className="mb-3">
                  <label htmlFor="nosurat" className="form-label">
                    No Surat
                  </label>
                  <input type="text" className="form-control" id="nosurat" name='nosurat' value={noSurat} disabled />
                  <div className="form-text text-danger" id="emailHelp">
                    no surat keluar yang sudah dikeluarkan terakhir dan akan berubah sesuai dengan kode klasifikasi tujuan*
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

                    <textarea
                      className='form-control'
                      name="isiSurat"
                      id="isiSurat"
                      cols="30"
                      rows="10"
                      defaultValue={data}>


                    </textarea>

                  </div>
                  <div className="mb-3 mt-3">
                    <label htmlFor="deskripsiSurat" className="form-label">
                      deskripsi surat
                    </label>

                    <textarea className='form-control' name="deskripsiSurat" id="deskripsiSurat" cols="10" rows="1" defaultValue="surat ini berisi ......"></textarea>

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
