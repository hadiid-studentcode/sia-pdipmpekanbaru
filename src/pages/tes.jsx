import { supabase } from './../../lib/supabaseClient';

import Header from "@/components/Header";

export default function Tes({ countries }) {
    return (
    <>
        <Header />

            <form action="/api/suratMasuk" method="post">
                <label htmlFor="first">First Name</label>
                <input type="text" id="first" name="first" required />

                <label htmlFor="last">Last Name</label>
                <input type="text" id="last" name="last" required />

                <button type="submit">Submit</button>
            </form>
            )
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
