import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">คัดกรอง ออทิซึม</h1>
        <p className="hero__subtitle">คู่มือการใช้งานแอพลิเคชันคัดกรองออทิซึม</p>
        
        {/* Use the "row-center" class here */}
        <div className={clsx('row', styles.rowCenter)}>
          <div className={styles.buttons}> {/* Remove styles.buttons class */}
            <Link
              className="button button--secondary button--lg"
              to="/docs/client/introClient">
              Autism Client
            </Link>
          </div>
          <div className={styles.buttons}> {/* Remove styles.buttons class */}
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Autism Admin
            </Link>
          </div>
          <div className={styles.buttons}> {/* Remove styles.buttons class */}
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        
      </main>
    </Layout>
  );
}