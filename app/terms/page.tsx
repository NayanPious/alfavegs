export default function TermsOfService() {
  return (
    <main className="bg-emerald-950 min-h-screen py-24 text-white pt-40">
      <div className="max-w-3xl mx-auto px-6 font-lato">
        <h1 className="font-montserrat text-4xl font-black mb-8 text-accent-citrus">Terms of Service</h1>
        <p className="text-emerald-100/60 mb-8 italic">Last Updated: February 2026</p>

        <section className="space-y-8 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">1. Business Eligibility</h2>
            <p className="text-emerald-100/80">
              ALFAVEGS provides wholesale supply services exclusively to registered businesses, 
              hotels, restaurants, and catering facilities. By requesting a quote, you confirm 
              your status as a professional culinary entity.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white">2. Perishable Goods Policy</h2>
            <p className="text-emerald-100/80">
              Due to the nature of fresh produce, quality claims must be made at the time of 
              delivery. Once the delivery note is signed at your facility in Doha, the 
              responsibility for the storage and temperature control of the goods shifts 
              to the client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white">3. Quotations & Pricing</h2>
            <p className="text-emerald-100/80">
              Market prices for fruits and vegetables fluctuate daily. All quotes provided 
              via the website are valid for 24 hours unless stated otherwise in a formal 
              pro-forma invoice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4 text-white">4. Governing Law</h2>
            <p className="text-emerald-100/80">
              These terms are governed by the laws of the State of Qatar. Any disputes 
              shall be handled by the competent courts in Doha.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}