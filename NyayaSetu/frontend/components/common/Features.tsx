const features = [
  {
    icon: "AI",
    title: "AI Legal Assistant",
    desc: "Ask legal questions in simple language.",
  },
  {
    icon: "LAW",
    title: "Case Search",
    desc: "Find Supreme Court and High Court judgments.",
  },
  {
    icon: "DOC",
    title: "Judgment Summarizer",
    desc: "Understand long judgments in minutes.",
  },
  {
    icon: "PIN",
    title: "Case Tracker",
    desc: "Track hearing dates and case progress.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <h2 className="text-center text-5xl font-bold text-blue-800">
        Why Choose NyayaSetu?
      </h2>

      <p className="mt-5 text-center text-gray-600">
        Making legal information simple for everyone.
      </p>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 px-10 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl bg-gray-50 p-8 shadow-lg transition duration-300 hover:shadow-2xl"
          >
            <div className="text-lg font-bold text-blue-700">
              {feature.icon}
            </div>

            <h3 className="mt-5 text-2xl font-bold">{feature.title}</h3>

            <p className="mt-4 text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
