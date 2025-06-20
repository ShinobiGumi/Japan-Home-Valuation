import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Japan Home Advisor | Buy or Sell Smarter</title>
        <meta name="description" content="Avoid overpaying or underselling your home in Japan. Get expert analysis before you make a move." />
      </Head>

      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
          Buy or Sell Your Home in Japan with Confidence
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Avoid overpaying or underselling. Get personalized insights before making your next move — from someone who's done it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">For Buyers</h2>
            <p className="text-gray-700 mb-4">¥10,000</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Price assessment & bidding strategy</li>
              <li>Red flag checklist for the home</li>
              <li>Neighborhood and disaster Analysis</li>
              <li>Communication tips for your agent</li>
            </ul>
            <a href="/request">
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-full transition">
              Request Buyer Report
            </button>
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">For Sellers</h2>
            <p className="text-gray-700 mb-4">¥10,000</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Listing strategy & price review</li>
              <li>Agent evaluation checklist</li>
              <li>Highlight missing value opportunities</li>
              <li>Positioning tips for foreign buyers</li>
            </ul>
            <a href="/request">
            <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-5 rounded-full transition">
              Request Seller Report
            </button>
            </a>
          </div>
        </div>
        
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="font-semibold text-lg mb-2">1. Submit Your Request</h3>
            <p className="text-gray-600">Choose buyer or seller, share your property details, and we’ll take it from there.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">2. Get a Custom Report</h3>
            <p className="text-gray-600">You’ll receive a clear breakdown with actionable advice, tailored to your situation.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">3. Make a Smart Move</h3>
            <p className="text-gray-600">Use your report to negotiate, avoid mistakes, and confidently move forward.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Pricing</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-6">Clear and simple pricing for both buyers and sellers.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Buyer Report</h3>
              <p className="text-gray-700 mb-4">¥5,000 / SGD 45</p>
              <ul className="text-gray-600 list-disc list-inside mb-4 text-sm">
                <li>Price & bid evaluation</li>
                <li>Neighborhood checklist</li>
                <li>Agent communication tips</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-5 rounded-full hover:bg-blue-700">
                Request Buyer Report
              </button>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Seller Review</h3>
              <p className="text-gray-700 mb-4">¥5,000 / SGD 45</p>
              <ul className="text-gray-600 list-disc list-inside mb-4 text-sm">
                <li>Listing & pricing strategy</li>
                <li>Agent and offer review</li>
                <li>Presentation feedback</li>
              </ul>
              <button className="bg-green-600 text-white py-2 px-5 rounded-full hover:bg-green-700">
                Request Seller Report
              </button>
            </div>
          </div>
        </div>
      </section>

        <p className="mt-16 text-gray-500">
          Have questions? <a href="/contact" className="text-blue-600 underline">Contact me here</a>.
        </p>
      </section>
    </Layout>
  );
}
