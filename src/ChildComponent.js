import React from 'react';

function ChildComponent({ onChildData }) {
    const sendDataToParent = () => {
        // отправляем данные в родительский компонент
        onChildData('Эти данные пришли из дочернего компонента');
    };

    return (
        <div>
            <button onClick={sendDataToParent}>Отправить данные в родительский компонент</button>
        </div>
    );
}

export default ChildComponent;
