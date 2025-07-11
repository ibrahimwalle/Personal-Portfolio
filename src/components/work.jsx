

const Work = () => {

    return (
        <section id="experience" className="bg-white rounded-2xl shadow p-6 mb-8">
            <h2 className="text-4xl font-bold mb-6">Experience</h2>
            <div className="space-y-6">
                {/* Overview */}
                <div className="mb-6 border-b pb-7">
                    <div className="font-semibold text-lg">Overview</div>
                    <p className="text-gray-700">
                        I am a software engineer with over 3 years of experience in full-stack development, specializing in AI and machine learning applications. My expertise includes backend development with FastAPI and Flask, frontend development with React, and cloud infrastructure management on GCP. I have a strong background in building scalable applications, leading teams, and integrating AI/ML solutions.
                    </p>
                    <p className="text-gray-700 mt-2">
                        I have successfully led projects from inception to deployment, ensuring high performance and reliability. My experience includes building multi-agent systems, developing SDKs, and optimizing frontend-backend integration. I am passionate about leveraging AI technologies to create innovative solutions and improve user experiences.
                    </p>
                </div>

                {/* 1001Epochs Software Engineer & Tech Lead */}
                <div className="border-b pb-7">
                    <div className="font-semibold text-lg">Software Engineer & Tech Lead at 1001Epochs</div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#000"/>
                            </svg>
                            Zurich, Switzerland
                        </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">04/2023 - Present <span>(2 years 4 months)</span></div>
                    <p className="mt-2 text-gray-700">
                        As a Software Engineer and Tech Lead, I have been instrumental in developing and deploying AI-driven applications. My role involves leading a team of developers, managing project timelines, and ensuring the successful delivery of high-quality AI solutions.
                        I have worked in varuious industries in this role, including education, Legal Tech, E-commerce, and more! 
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                        <li>Led the development of a multi-agent system using LangChain, enhancing the company's AI capabilities.</li>
                        <li>Developed the company's first internal SDK for reusable modules, improving development efficiency.</li>
                        <li>Managed end-to-end project development, including backend, frontend, and DevOps tasks.</li>
                        <li>Fine-tuned and deployed deep learning models, including LLMs and computer vision applications on GCP.</li>
                        <li>Promoted to Tech Lead within 1 year, mentoring team members and conducting daily standups.</li>
                        <li>Implemented Redis caching, PostgreSQL with automated backups, and Stripe payment integration for client projects.</li>
                    </ul>
                    <span className="font-semibold">Tech Stack:</span> Python (FastAPI, Flask), JavaScript (React), Docker, GCP, PostgreSQL, Redis, Stripe, LangChain/OpenAI.
                </div>
                {/* UniqLearn */}
                <div className="border-b pb-7">
                    <div className="font-semibold text-lg">Frontend Developer at UniqLearn</div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#000"/>
                            </svg>
                            New York, United States
                        </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">01/2024 - 10/2024 <span>(10 months)</span></div>
                    <p className="mt-2 text-gray-700">
                        As a Frontend Developer, I was responsible for streamlining the backend and frontend integration of the UniqLearn platform, a long with implementing new features and improving the user experience.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                        <li>Optimized frontend-backend integration, reducing API request time by 60%.</li>
                        <li>Implemented end-to-end and unit tests using Cypress, ensuring code quality and reliability </li>
                        <li>Refactored JavaScript code into TypeScript for improved maintainability.</li>
                        <li>Collaborated with the backend team to resolve incorrect requests and UI issues.</li>
                    </ul>
                    <span className="font-semibold">Tech Stack:</span> JavaScript (React, Redux), TypeScript, Cypress, Git.
                </div>
                {/* Ayn Media */}
                <div className="pb-4">
                    <div className="font-semibold text-lg">Junior Frontend Developer at Ayn Media</div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center gap-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#000"/>
                            </svg>
                            Tripoli, Lebanon
                        </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">01/2018 - 01/2019 <span>(1 year 1 month)</span></div>
                    <p className="mt-2 text-gray-700">
                        As a Junior Frontend Developer, I contributed to the development of a React Native app for Arabic language education.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                        <li>Developed a React Native app for Arabic language education with interactive exercises.</li>
                        <li>Integrated internal APIs for dynamic content delivery.</li>
                        <li>Translated wireframes into UI components; code reviewed by senior developers.</li>
                    </ul>
                    <span className="font-semibold">Tech Stack:</span> React Native, JavaScript, CSS, HTML.
                </div>
            </div>
        </section>
    )

}

export default Work