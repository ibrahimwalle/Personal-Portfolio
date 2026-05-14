const Work = () => {

    return (
        <section id="experience" className="bg-white rounded-2xl shadow p-6 mb-8">
            <h2 className="text-4xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
                {/* Overview */}
                <div className="mb-6 border-b pb-7">
                    <div className="font-semibold text-lg">Overview</div>
                    <p className="text-gray-700">
                        I am an AI Systems Engineer and Software Engineer focused on building production-ready backend systems, AI workflows, integrations, and cloud infrastructure.
                        My work spans AI education platforms, legal AI systems, geospatial real estate platforms, operational automation, and client-facing systems.
                    </p>
                    <p className="text-gray-700 mt-2">
                        I specialize in translating business requirements into scalable technical systems involving APIs, retrieval systems (RAG), cloud deployments, workflow automation,
                        and frontend-backend integrations. I enjoy shipping products, solving production issues, and designing systems that balance reliability, scalability, and practical business needs.
                    </p>
                </div>

                {/* MachineFlow */}
                <div className="border-b pb-7">
                    <div className="font-semibold text-lg">AI Systems & Solutions Engineer at MachineFlow</div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 1.12 2.5-2.5 2.5z" fill="#000"/>
                            </svg>
                            Remote
                        </span>
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                        01/2025 - Present
                    </div>

                    <p className="mt-2 text-gray-700">
                        Designing and delivering AI systems, backend platforms, automation workflows, and client-facing operational systems across multiple industries.
                    </p>

                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                        <li>Designed a Zillow-style geospatial lead management platform integrating CRM systems, GeoJSON plot maps, analytics, and advanced spatial filtering workflows.</li>
                        <li>Built operational automation systems and e-commerce workflows replacing manual business processes.</li>
                        <li>Designed AI-assisted medical workflow architecture using deterministic validation and retrieval-based systems.</li>
                        <li>Created scalable frontend and backend architectures with strong focus on usability and operational reliability.</li>
                        <li>Worked directly with stakeholders to gather requirements, define workflows, and propose scalable technical solutions.</li>
                    </ul>

                    <span className="font-semibold">Tech Stack:</span> React, TypeScript, Python, FastAPI, PostgreSQL, Google Maps API, GCP, Docker, OAuth, Podio API, TailwindCSS.
                </div>

                {/* 1001Epochs */}
                <div className="border-b pb-7">
                    <div className="font-semibold text-lg">Software Engineer & Tech Lead at 1001Epochs</div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 1.12 2.5-2.5 2.5z" fill="#000"/>
                            </svg>
                            Zurich, Switzerland
                        </span>
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                        04/2023 - Present
                    </div>

                    <p className="mt-2 text-gray-700">
                        Built and delivered production AI systems spanning legal AI, educational technology, automation tooling, retrieval systems, and cloud infrastructure.
                    </p>

                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                        <li>Built production RAG systems using FAISS, OpenAI embeddings, OCR pipelines, and retrieval workflows.</li>
                        <li>Designed backend systems using FastAPI, PostgreSQL, Redis, JWT authentication, and cloud storage.</li>
                        <li>Integrated Stripe subscriptions and webhook automation into production systems.</li>
                        <li>Managed GCP deployments, Cloud Functions, Cloud Run services, CI/CD pipelines, and infrastructure workflows.</li>
                        <li>Implemented monitoring, observability, logging, and Slack-based alert systems for production debugging.</li>
                        <li>Worked directly with stakeholders and clients during demos, architecture discussions, and delivery phases.</li>
                        <li>Promoted to Tech Lead, mentoring developers and helping organize technical workflows across projects.</li>
                    </ul>

                    <span className="font-semibold">Tech Stack:</span> Python, FastAPI, Flask, PostgreSQL, Redis, Docker, GCP, LangChain, OpenAI, Stripe, FAISS, JWT, Streamlit.
                </div>

                {/* UniqLearn */}
                <div className="border-b pb-7">
                    <div className="font-semibold text-lg">Software Engineer at UniqLearn</div>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 1.12 2.5-2.5 2.5z" fill="#000"/>
                            </svg>
                            New York, United States
                        </span>
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                        01/2024 - 10/2024
                    </div>

                    <p className="mt-2 text-gray-700">
                        Worked on a production AI-powered education platform serving 11,000+ students across assignment generation, OCR workflows, automated grading, and cloud infrastructure.
                    </p>

                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                        <li>Built AI-driven assignment generation and grading workflows.</li>
                        <li>Developed OCR and computer vision pipelines using YOLO-based answer detection workflows.</li>
                        <li>Improved performance through caching, workflow optimization, and parallelized AI processing.</li>
                        <li>Integrated LangSmith observability and Slack-based production monitoring systems.</li>
                        <li>Refactored backend architecture from prototype workflows into modular cloud-based systems.</li>
                        <li>Optimized frontend-backend integration, reducing API request latency by ~60%.</li>
                        <li>Refactored frontend codebase from JavaScript to TypeScript and implemented Cypress testing workflows.</li>
                    </ul>

                    <span className="font-semibold">Tech Stack:</span> Python, React, TypeScript, GCP, Cloud Functions, Cloud Run, LangSmith, OpenAI, YOLOv8, Cypress, Firebase.
                </div>
                {/* Ayn Media */}
                <div className="pb-4">
                    <div className="font-semibold text-lg">Junior Frontend Developer at Ayn Media</div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 1.12 2.5-2.5 2.5z" fill="#000"/>
                            </svg>
                            Tripoli, Lebanon
                        </span>
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                        01/2018 - 01/2019
                    </div>

                    <p className="mt-2 text-gray-700">
                        Early frontend engineering experience focused on responsive interfaces and React Native applications.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                        <li>Built React Native interfaces for educational applications.</li>
                        <li>Integrated APIs for dynamic content delivery.</li>
                        <li>Worked on responsive UI components and frontend workflows.</li>
                    </ul>

                    <span className="font-semibold">Tech Stack:</span> React Native, JavaScript, HTML, CSS.
                </div>
            </div>
        </section>
    )

}

export default Work