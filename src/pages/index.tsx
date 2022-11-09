import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Home`}
      description="Create pixel art skies directly in Unity">
      <HomepageHeader />
      <main className="home">
        <h1>Pixel Sky Creator</h1>
        <p>Create pixel art skies directly in Unity</p>
        <figure>
          <img src="/img/pixel-sky-creator/pixel-sky-creator-screenshot.png" alt="Pixel Sky Creator" />
        </figure>
      </main>
    </Layout>
  );
}
