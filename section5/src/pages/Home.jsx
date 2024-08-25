import { useEffect, useState } from "react";
import { fetchCountries } from "../api";
import CountryList from "../componenets/CountryList";
import Searchbar from "../componenets/Searchbar";
import style from './Home.module.css';

export default function Home() {
    const [countries, setCountries] = useState([]);

    const setInitDate = async () => {
        const data = await fetchCountries();
        setCountries(data);
    }

    useEffect(() => {
        setInitDate();
    }, []);

    return (
        <div className={style.container}>
            <Searchbar />
            <CountryList countries={countries} />
        </div>
    )
}
