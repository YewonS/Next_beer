import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/Header";
// import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";

export default function Index({ beers }) {
    // const [beers, setBeers] = useState([]);
    // useEffect(() => {
    //     (async () => {
    //         const beers = await (await fetch("/api/beers")).json();
    //         // `url?apikey=${apikey}`
    //         setBeers(beers);
    //     })(); 
        
    // }, []);

    const router = useRouter();
    const onClick = (id, name) => {
        router.push(`/beers/${name}/${id}`
            // {
            //     pathname: `/beers/${id}`,
            //     query: {
            //         id,
            //         name
            //     }
            // }, 
            // `/beers/${id}`  // This way, user will see only this. Queries will be hidden.
        );
    };

    return (
        <div className="container">
            <Header title="Home" />
            <h1>NBDB <FontAwesomeIcon icon={faBeerMugEmpty} /></h1>
            {/* {!beers && <h3>Loading...</h3>}  */}
            {beers?.map( beer => (
                    <div className="beer" key={beer.id} onClick={() => onClick(beer.id, beer.name)}> 
                        <Link href={`/beers/${beer.name}/${beer.id}`}
                            // href={{ 
                            //     pathname: `/beers/${beer.id}`,
                            //     query: {
                            //         id: beer.id,
                            //         name: beer.name
                            //     }
                            // }}
                            // as={`/beers/${beer.id}`}
                        >
                            <img src={`${beer.image_url}`} />
                        </Link>
                        <h5>{beer.name}</h5>
                    </div>
            ))}
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .beer {
                    display: grid;
                    justify-items: center;
                    cursor: pointer;
                }
                .beer img {
                    max-height: 200px;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .beer:hover img {
                    transform: scale(1.05) translateX(-10px);
                }
                .beer h5 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>    
        </div>
    );
}

// Server side rendering. The page will load when it has all data.
// pageProps on the _app.js will process this. 
// The name is not changeable. This code will be run on the server. Could be a good way to hide an API_KEY. Returns an object with the key 'props'.
export async function getServerSideProps() { 
    const beers = await (await fetch(`https://api.punkapi.com/v2/beers`)).json();
    return {
        props: {
            beers,
        },
    };
}