import Head from 'next/head'
import Header from "../components/Header";

export default function PermohonanSurat() {
    return (
        <>
            <Head>
                <title>Permohonan Surat - SIA PD IPM Pekanbaru</title>
            </Head>

            <Header/>

              <section>
      
      <div className="container py-4 py-xl-5">
        <div className="card">
          <div className="card-header">Ajukan Surat</div>
          <div className="card-body">
            <form action="" className="form" id="form">
              <div className="mb-3">
                <label htmlFor="nosurat" className="form-label"
                  >No Surat</label>
                <input
                  type="text"
                  className="form-control"
                  id="nosurat"
                 
                
              
                />
                <div className="form-text" id="emailHelp">
                  Well never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label"
                  >Password</label>
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
                <label className="form-check-label" htmlFor="exampleCheck1"
                  >Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>

        </>
    );
}


export async function getServerSideProps(context) {
    return {
        props: {
            title: "Permohonan Surat"
        }, // will be passed to the page component as props
    };
}