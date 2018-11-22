import {h, Component} from 'preact';
import {OfertaBlock} from "./styled";

export default function Oferta(link = '') {
    return (
        <OfertaBlock>Совершая оплату, вы соглашаетесь с <a href={link}
                                                           target={"_blank"}
                                                           id={"oferta-link"}>офертой</a></OfertaBlock>
    )

}
