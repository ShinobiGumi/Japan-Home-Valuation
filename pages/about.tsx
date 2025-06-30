import Head from "next/head";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Japan Home Advisor</title>
        <meta
          name="description"
          content="Learn more about Japan Home Advisor and our experience helping buyers and sellers navigate the Japanese property market."
        />
      </Head>

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Guidance You Can Trust in the Japanese Property Market
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Navigating the Japanese property market can be overwhelming—especially
          if you’re buying or selling from abroad or trying to understand a system
          that works differently from what you may be used to.
        </p>
        <p className="text-gray-700 mb-4">
          I’ve spent years working in financial services and real estate operations in Japan.
          Beyond my professional experience, I’ve also personally purchased,
          renovated, and sold property in Japan, giving me a first-hand understanding
          of the details that matter most.
        </p>
        <p className="text-gray-700 mb-4">
          Along the way, I’ve developed the below skillset:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-4">
          <li>Evaluating residential real estate opportunities</li>
          <li>Assessing pricing strategies and negotiation approaches</li>
          <li>Managing complex processes under tight deadlines</li>
          <li>Bridging communication between Japanese and international perspectives</li>
        </ul>
        <p className="text-gray-700 mb-4">
          This service was created to offer independent, practical advice—without
          commissions or hidden incentives—so you can avoid overpaying, underselling,
          or missing important considerations.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Why Work with Me?</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><strong>Experience You Can Rely On:</strong> Over a decade of combined professional and personal expertise in real estate processes, fund administration, and cross-cultural communication.</li>
          <li><strong>Objective Perspective:</strong> I don’t represent any agency or developer, so my recommendations are entirely focused on your goals.</li>
          <li><strong>Actionable Insights:</strong> You’ll get clear, practical steps you can use right away, tailored to your unique situation.</li>
          <li><strong>Personal Understanding:</strong> From coordinating renovations to moving internationally, I understand the real-world challenges involved.</li>
        </ul>
        <div className="mt-8 text-center">
          <a
            href="/request"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Request Your Custom Report
          </a>
        </div>
      </section>
    </Layout>
  );
}
