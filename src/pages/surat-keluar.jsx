export default function SuratKeluar() {
    return (
        <>
            <h1>surat keluar</h1>
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