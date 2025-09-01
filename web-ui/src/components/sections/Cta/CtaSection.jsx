import {NavLink} from "react-router-dom";
import WrapContainer from "../../list/wrap-container/WrapContainer";


function CtaSection() {

    return (
        <section className="cta">
            <WrapContainer>
                <h2>Готовы структурировать свои идеи?</h2>
                <p>Присоединяйтесь к Protobin сегодня и превратите свои концепции в хорошо организованные проекты</p>
                <NavLink className="btn btn-primary" to='/login'>Начать бесплатно</NavLink>
            </WrapContainer>
        </section>
    )
}

export default CtaSection