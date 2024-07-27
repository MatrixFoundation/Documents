import Layout from '@theme/Layout';
import { Redirect } from "@docusaurus/router";

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Welcome 👋`}
      description="Description will go into a meta tag in <head />">
      <main>
          <Redirect to="/docs/home/introduction" />
      </main>
    </Layout>
  );
}
