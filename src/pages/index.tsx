import { Redirect } from '@docusaurus/router';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Welcome 👋`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <Redirect to="/home/introduction" />
      </main>
    </Layout>
  );
}
