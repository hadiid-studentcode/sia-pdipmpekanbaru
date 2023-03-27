import Head from 'next/head'

export default function PermohonanSurat() {
    return (
        <>
            <Head>
                <title>PermohonanSurat - SIA PD IPM Pekanbaru</title>
            </Head>
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