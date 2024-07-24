import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { Redirect } from "@docusaurus/router";

export default function Home(): JSX.Element {
  // const {siteConfig} = useDocusaurusContext();
  // title={`Hello from ${siteConfig.title}`}
  return (
    <Layout
      title={`Welcome 👋`}
      description="Description will go into a meta tag in <head />">
      <main>
          <Redirect to="/docs/introduction" />
      </main>
    </Layout>
  );
}
