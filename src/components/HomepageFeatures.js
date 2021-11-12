import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Überall erreichbar',
    Svg: require('../../static/img/undraw_progressive_app_m-9-ms.svg').default,
    description: (
      <>
        Durch Discord bist du mit deinen Mobilen Geräten immer auf ProgrammChest erreichbar. 
        Wenn du grad im Zug sitzt und eine Frage hast musst du nur Discord öffnen!
      </>
    ),
  },
  {
    title: 'Themen und Programmiersprachen',
    Svg: require('../../static/img/undraw_code_thinking_re_gka2.svg').default,
    description: (
      <>
        Da wir eine große Community aus verschiedenen Leuten haben, wird sich sicher jemand finden, der genau für deine Frage eine Antwort hat!
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('../../static/img/undraw_community_re_cyrm.svg').default,
    description: (
      <>
        Erlebe die große Community von Programm Chest.
        Finde Leute mit dem selben Interesse hier!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
