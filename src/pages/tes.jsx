import { supabase } from './../../lib/supabaseClient';

import Header from "@/components/Header";

export default function Tes({ countries }) {
    return (
    <>
        <Header />

        <h1>oke</h1>
            <ul>
                {countries.map((country) => (
                    <li key={country.id}>{country.name}</li>
                ))}
            </ul>

    </>
    )
}


export async function getServerSideProps() {
    let { data } = await supabase.from('countries').select()

    return {
        props: {
            countries: data
        },
    }
}
