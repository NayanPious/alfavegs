export default function PrivacyPolicy() {
  return (
    <main className="bg-emerald-950 min-h-screen py-24 text-white pt-40">
      <div className="max-w-3xl mx-auto px-6 font-lato">
        <h1 className="font-montserrat text-4xl font-black mb-8 text-accent-citrus">Privacy Policy</h1>
        <p className="text-emerald-100/60 mb-8 italic">Last Updated: February 2026</p>

        <section className="space-y-8 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">1. Information Collection</h2>
            <p className="text-emerald-100/80">
              ALFAVEGS collects information that you provide directly to us through our inquiry forms, 
              including your kitchen/company name, contact person, mobile number, and specific produce 
              requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white">2. Use of Information</h2>
            <p className="text-emerald-100/80">
              We use your information exclusively to process wholesale quotes, manage delivery logistics 
              within Qatar, and communicate via WhatsApp/Phone regarding price lists and product availability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white">3. Data Security</h2>
            <p className="text-emerald-100/80">
              We implement industry-standard security measures to protect your business data. In accordance 
              with Qatar Law No. 13 of 2016 (Personal Data Privacy Protection Law), we do not share your 
              contact information with third-party marketing entities.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mt-12">
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p className="text-sm">For any data-related queries, email: <span className="text-accent-citrus">info@alfavegs.com</span></p>
          </div>
        </section>
      </div>
    </main>
  );
}