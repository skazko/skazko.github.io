import React from 'react';
import Layout from '../components/Layout';

export default () => {

  return (
    <Layout>
      <section style={{width: '100%', maxWidth: '640px', margin: '0 auto'}}>
        <h1>Обо мне</h1>
        <p>Привет, я Вячеслав!</p>
        <p>С начала 2019 года я увлекся фронтенд разработкой. До этого я был <span>инженером</span>, <span>менеджером проектов</span>, бизнесменом.</p>
        <p>Я предпочитаю использовать React и его инфраструктуру. При написании компонентов использую методологию БЭМ. Последнее время я заинтересовался JAM стеком, в частности Gatsby, который основан на React. Этот сайт - на Gatsby.</p>
        <h2>Стек технологий</h2>
        <ul>
          <li>React, Redux, Gatsby</li>
          <li>ES6 и более современные возможности языка</li>
          <li>CSS, SCSS, PostCSS, StyledComponents</li>
          <li>БЭМ</li>
          <li>HTML, pug</li>
          <li>Gulp, Rollup, Webpack</li>
          <li>Git</li>
        </ul>
        <p>Сейчас осваиваю Typescript, планирую познакомиться с Vue.</p>
        <p>Буду рад общению, вы всегда можете написать мне на почту или в телеграм, исходники можно посмотреть на гитхабе.</p>
      </section>
    </Layout>
  );
}
