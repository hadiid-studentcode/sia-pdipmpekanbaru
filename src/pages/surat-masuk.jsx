import Head from 'next/head'

export default function SuratMasuk() {

    
    
    return (
        <>
            <Head>
                <title>Surat Masuk - SIA PD IPM Pekanbaru</title>
            </Head>    
        </>
    );
}


export async function getServerSideProps(context) {
    return {
        props: {
            title: "Surat Masuk"
        }, // will be passed to the page component as props
    };
}