import Head from "next/head";
import Layout from "../components/Layout";

export default function RequestForm() {
  return (
    <Layout>
      <Head>
        <title>Request a Home Report | Japan Home Advisor</title>
      </Head>

      <section className="max-w-2xl mx-auto px-4 py-20">
       <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Tell Me About the Property
        </h1>
        <p className="text-gray-600 mb-10 text-center">
        Please share the details below. I’ll review and follow up with a payment link and next steps.
        </p>

        <form
          action="https://formspree.io/f/xpwrlnlj"
          method="POST"
          className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"
        >
          <div>
            <label className="block mb-1 font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Are you buying or selling?</label>
            <select
              name="type"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="buyer">Buying</option>
              <option value="seller">Selling</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Property Details</label>
            <textarea
              name="details"
              rows={4}
              required
              placeholder="Location, property type, size, budget/asking price, etc."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
          >
            Submit Request
          </button>
        </form>
      </section>
    </Layout>
  );
}
