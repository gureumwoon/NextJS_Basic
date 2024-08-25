import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchCodeCountry } from "../api";
import style from "./Country.module.css";

export default function Country() {
    const params = useParams();
    const [country, setCountry] = useState();

    const setInitData = async () => {
        const data = await fetchCodeCountry(params.code);
        setCountry(data);
    };

    useEffect(() => {
        setInitData();
    }, [params.code]);

    if (!country) {
        return <div>Loading ...</div>
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>{country.flagEmoji}&nbsp;{country.commonName}</h1>
                <p>{country.officialName}</p>
            </div>
            <div>
                <img src={country.flagImg} alt={`${country.commonName}의 국가 이미지 입니다.`} />
                <div>
                    <p>
                        <b>코드 :</b>&nbsp;{country.code}
                    </p>
                    <p>
                        <b>수도 :</b>&nbsp;{country.capital.join(", ")}
                    </p>
                    <p>
                        <b>지역 :</b>&nbsp;{country.region}
                    </p>
                    <p>
                        <b>인구 :</b>&nbsp;{country.population}
                    </p>
                    <p>
                        <b>지도 :</b>&nbsp;
                        <a target="_blank" href={country.googleMapURL}>
                            {country.googleMapURL}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
