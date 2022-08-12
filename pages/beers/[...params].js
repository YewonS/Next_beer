import { useRouter } from "next/router";
import Header from "../../components/Header";

// "/beers/:id"
// "/beers/name+of+the+beer/:id" ex) "/beers/tuborg+classic/175" => still land in detail page
export default function Detail({ params }) {
    const router = useRouter();
    const [name, id] = params || [];
    // const [name, id] = router.query.params || []; // Loads the page even if there is no parameter
    return (
        <div>
            <Header title="name" />
            {/* <h4>{router.query.name || "Loading the beer..."}</h4> */}
            <h4>{name}</h4>
        </div>
    );
}

// this will give server the parameters even if it's not accessed from clicking the link through queries
export function getServerSideProps({ params: {params} }) { //server side context 
    return {
        props: {
            params,
        },
    }
}