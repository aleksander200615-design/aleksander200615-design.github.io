function createNotificationConsent()
{
    createNotification(`<h3>Согласие на участие в исследовании и обработку данных</h3>

<p>Перед началом тестирования, пожалуйста, ознакомьтесь с информацией ниже.</p>

<p>Данный тест проводится в рамках учебного исследования, посвящённого изучению
особенностей зрительного внимания при просмотре изображений. Во время прохождения
теста используется веб-камера для отслеживания направления взгляда с помощью
программного обеспечения. Запись видео не сохраняется — система анализирует только
положение взгляда на экране.</p>

<p>В ходе исследования могут автоматически регистрироваться следующие данные:</p>

<ul>
<li>положение взгляда на экране;</li>
<li>время фиксации на различных областях изображения;</li>
<li>последовательность просмотра стимулов;</li>
<li>технические параметры устройства (например, разрешение экрана и браузер).</li>
</ul>

<p><b>Все полученные данные будут использоваться исключительно в научных и учебных
целях. Результаты исследования анализируются в обезличенном виде, без возможности
идентификации личности участника.</b></p>

<p>Участие в исследовании является добровольным. Вы можете отказаться от участия в
любой момент, закрыв страницу теста.</p>

<p>Нажимая кнопку «Запустить WebGazer», вы подтверждаете, что:</p>

<ul>
<li>ознакомились с данной информацией;</li>
<li>понимаете цель исследования;</li>
<li>даёте согласие на обработку полученных данных в обезличенном виде для научных и учебных целей.</li>
</ul>
`);
}

function createNotification(text)
{
    let bg = document.createElement('div');
    bg.className = 'notification-bg';
    document.body.appendChild(bg);

    let panel = document.createElement('div');
    panel.className = 'notification-panel';
    bg.appendChild(panel);

    let outerFrame = document.createElement('div');
    outerFrame.className = 'outer-frame';
    panel.appendChild(outerFrame);

    let innerFrame = document.createElement('div');
    innerFrame.className = 'inner-frame';
    innerFrame.innerHTML = text;
    outerFrame.appendChild(innerFrame);

    let button = document.createElement('button');
    button.innerText = 'Закрыть';
    button.addEventListener('click', ()=>{bg.remove();});
    panel.appendChild(button);
}