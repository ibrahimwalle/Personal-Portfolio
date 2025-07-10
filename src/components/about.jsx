
const About = () => {

    return (
        <div className="flex items-center justify-center h-full w-5xl mx-auto gap-3 min-h-screen p-6"> 
            <div className="flex flex-col items-center justify-center w-full">
                <img src="./src/assets/ava.jpg" alt="Profile" className="rounded-full mb-6 w-2xs" />
                <span className="font-bold text-center text-sm">Software Engineer <br /> AI Specialist</span>
            </div>
            <div className="text-center w-full">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg w-full">
                    Hi, I’m Ibrahim Al Wali a software engineer who’s just as comfortable in the outdoors as I am behind a screen. When I’m not coding, I’m out capturing landscapes through my lens, setting up camp under the stars, or enjoying a quiet moment fishing. These hobbies keep me grounded and constantly remind me to approach my work with creativity, patience, and a fresh perspective.
                </p>
            </div>
        </div>
    );

 
}

export default About;