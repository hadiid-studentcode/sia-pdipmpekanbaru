import Image from 'next/image';
import print from '../../public/assets/img/icon/print.svg'

export default function Bprint() {

    const test = () => {
        alert('oke');
    }

    return (
        <>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                <button className="btn btn-outline-light" type="button" onClick={test}><Image src={print} alt="surat masuk" width={30} /></button>
            </div>

        </>

    )





}