import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import ReactPlayer from 'react-player';

const features = [
  {
    title: <>美しくなったサイト</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurusは、美しさと操作性を重視して作られたサイトです。 安心安全のFaceBook社製。
      </>
    ),
  },
  {
    title: <>記事にフォーカス</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurusは記事に簡単にアクセスするのを手伝います。 コンパクトなメニューバーですぐにフォーカス。
      </>
    ),
  },
  {
    title: <>VercelとReact</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        VercelとReactを組み合わせることによって、高速なWebエクスペリエンスを提供します。 ローディングをより速く。
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('wiki/home')}>
              Go to NEXT
            </Link>
          </div>
        </div>
      </header>
      <main>
      <div>
        <ReactPlayer url="https://raw.githubusercontent.com/tabascoes/RFS-nextjs-video--ssbwiki-3/main/public/video/test/2021100620250300-C6D726972790F87F6521C61FBA400A1DX.mp4?raw=true" controls="true" width='100%' height='100%' />
      </div>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
