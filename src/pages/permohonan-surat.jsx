export default function PermohonanSurat() {
    return (
        <>
<h1>permohonan surat</h1>
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