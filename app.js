React.createElement('div', { className: 'container' },
    React.createElement('img', { src:  './img/react.png' }),
    React.createElement('h1', null, 'React'),
    React.createElement('p', null, 'Библиотека для создания пользовательских интерфейсов')
);

ReactDOM.render(container, document.getElementById('root'));