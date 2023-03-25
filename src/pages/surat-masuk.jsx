export default function SuratMasuk() {
    return (
        <>
     
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