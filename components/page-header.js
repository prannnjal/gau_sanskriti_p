export default function PageHeader({ title, description }) {
  return (
    <section className="bg-green-800 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {description && <p className="text-lg md:text-xl max-w-3xl mx-auto text-green-100">{description}</p>}
      </div>
    </section>
  )
}
