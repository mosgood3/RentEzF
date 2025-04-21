export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Contact Us
        </h2>
        <div className="flex flex-col items-center">
          <p className="text-slate-800 mb-4">
            Have questions or need support? Reach out to our team.
          </p>
          <a
            href="mailto:support@rentez.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            support@rentez.com
          </a>
        </div>
      </div>
    </section>
  );
}
