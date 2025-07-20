import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import ServiceIntro from '../../components/services/ServiceIntro';



export default function ServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Design Verification & Engineering Services – Veripoint Technologies</title>
        <meta name="description" content="AI-driven hardware verification services from IP and SoC to ASIC and FPGA. Veripoint accelerates tape-outs and time-to-market with deep semiconductor expertise." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ServiceIntro />

     
    </Layout>
  );
}