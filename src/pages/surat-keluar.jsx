import Head from 'next/head'

export default function SuratKeluar() {
    return (
        <>
            <Head>
                <title>SuratKeluar - SIA PD IPM Pekanbaru</title>
            </Head>
        </>
    );
}


export async function getServerSideProps(context) {
    return {
        props: {
            title: "Surat Keluar"
        }, // will be passed to the page component as props
    };
}