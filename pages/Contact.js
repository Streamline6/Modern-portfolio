

function Contact() {
	return (
	
			<div>
				<div className="w-full my-20 h-auto flex flex-col justify-center items-center">
					<p className="text-sm uppercase text-gray-400">Contact</p>
					<h1 className="text-black text-6xl font-bold text-center pb-6">
						Contact
					</h1>
                    <p className="text-xl text-neutral-800 text-center">44, Street 21, Australia</p>
                    <p className="text-xl text-neutral-800 text-center">23485278</p>
                    <p className="text-xl text-neutral-800 text-center">nik@gmail.com</p>

					<div className="flex flex-col justify-center text-center md:w-1/2 w-3/4 my-5 ">
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nik"
                    className="mt-2 pl-8 w-full rounded-tl-lg rounded-lg text-neutral-800 text-xl border-2  h-10"
                />
                        <input
							type="email"
							name="email-address"
							id="email-address"
							autoComplete="email"
							placeholder="xyz@gmail.com"
							className=" mt-2 pl-8 w-full rounded-lg rounded-bl-lg text-neutral-800 text-xl border-2  h-10"
						/>
                        <textarea
                        id="message" 
                        rows="4"
                        name="message"
                        placeholder="Message"
                        className=" mt-2 pl-8 w-full rounded-lg rounded-bl-lg text-neutral-800 text-xl border-2  h-10"
                    />
						<button className="mt-5 text-xl w-full h-10 bg-neutral-900 text-white rounded-lg hover:bg-black">
							Submit
						</button>
					</div>
				</div>
			</div>
	
	);
}

export default Contact;