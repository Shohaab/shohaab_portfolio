function DownloadButtons() {
  return (
    <section className=" py-10 bg-[#0f172a] flex justify-center items-center">

      <div className="flex flex-col md:flex-row gap-4">

        {/* CV Button */}
        <a
          href="/documents/Junior Software Engineer.pdf"
          download
          className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Download CV
        </a>

        {/* Research Paper Button */}
        <a
          href="/documents/Article.pdf"
          download
          className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition"
        >
          Download Research Paper
        </a>

      </div>

    </section>
  );
}

export default DownloadButtons