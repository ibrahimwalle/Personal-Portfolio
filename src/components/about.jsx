
const About = () => {

    return (
        <div className="md:flex items-center justify-center mx-auto my-7 p-6 gap-3 h-full min-h-fit md:w-5xl"> 
            <div className="flex flex-col items-center justify-center w-full">
                <img src="/ava.jpg" alt="Profile" className="rounded-full mb-6 w-2xs" />
                <span className="font-bold text-center text-2xl mb-4">Software Engineer <br /> AI Specialist</span>
            </div>
            <div className="text-center w-full">
                <h1 className="text-2xl font-bold mb-4 hidden md:block lg:block">About Me</h1>
                <p className="text-lg w-full">
                    Hi, I’m Ibrahim Al Wali a software engineer who’s just as comfortable in the outdoors as I am behind a screen. When I’m not coding, I’m out capturing landscapes through my lens, setting up camp under the stars, or enjoying a quiet moment fishing. 
                </p>
                {/* These hobbies keep me grounded and constantly remind me to approach my work with creativity, patience, and a fresh perspective. */}
            </div>
        </div>
    );

 
}

export default About;