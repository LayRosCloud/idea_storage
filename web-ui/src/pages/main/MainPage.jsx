


function MainPage() {
    return (
        <main>
            <div className='flex row'>
                <div className='container flex column max-width-50'>
                    <h2>Создавайте идеи. Планируйте продукты. Реализуйте задуманное.</h2>
                    <h4>Добро пожаловать на <b>ProtoBin</b>— платформу для структурирования идей и четкого планирования продуктов. Здесь вы сможете:
                        <br/>🔹<i>Фиксировать мысли</i>— превращайте хаос идей в четкие концепции.
                        <br/>🔹<i>Прорабатывать продукты</i>— от первых набросков до детального плана.
                        <br/>🔹<i>Действовать эффективно</i>— с понятной структурой и продуманной стратегией.
                        Начните строить свои проекты осознанно — без потери фокуса и лишних итераций.<br/><br/><b>ProtoBin</b> поможет вам превратить замысел в результат.
                        <br/><br/>🚀<b>Создайте свой первый проект прямо сейчас!</b></h4>
                </div>
                <div className='column two max-width-50'>
                    <div className='circle'/>
                    <img className='img-main' src='main-photo.png' alt='photo chest'/>
                </div>

            </div>
        </main>
    )
}

export default MainPage;