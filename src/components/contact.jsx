import React from "react";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "af29e1ff-c86b-4fd9-baa2-9be69a1c045b");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
        <section id="contact" className="bg-white rounded-2xl shadow p-6 mb-8">
            <h2 className="text-4xl font-bold mb-6">Contact</h2>
            <p className="text-gray-700 mb-4">
                Don't hesitate to reach out if you have any questions, feedback, or just want to say hello!
                <br /> You can also check out my photography portfolio at <a href="https://wali-photo.netlify.app/" target="blank" className="text-sm">Wali Photo</a>
            </p>
            <div className="space-y-4">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <input type="text" name="name" required className="border border-gray-300 rounded p-2 w-full" placeholder="Your Name"/>
                    <input type="email" name="email" required className="border border-gray-300 rounded p-2 w-full" placeholder="Your Email"/>
                    <textarea name="message" required className="border border-gray-300 rounded p-2 w-full" placeholder="Your Message" rows="4"></textarea>

                    <button type="submit" className="rounded p-2 transition duration-200">
                        Send Message
                    </button>

                </form>
                <span className="font-semibold">{result}</span>
                {/* <div className="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <a href="mailto:ibrahimwalle20@gmail.com" className="text-blue-600 hover:underline">ibrahimwalle20@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path
                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <a href="https://www.linkedin.com/in/ibrahim-alwali/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ibrahim Al Wali</a>   
                </div>
                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                    <a href="https://www.github.com/ibrahimwalle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ibrahimwalle</a>
                </div> */}
            </div>
        </section>
    );
};

export default Contact;