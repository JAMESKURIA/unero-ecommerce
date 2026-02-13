import { BreadCrumbs } from "components";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const Contacts = () => {
	return (
		<div className="leading-10 px-6 md:px-12 lg:px-20">
			<BreadCrumbs title={"We'd Love to hear from you"} />
			<h3 className="text-center w-full md:w-3/6 mx-auto text-gray-600 mb-20 px-4">
				If you need any help, please contact us or sen us an email or go
				to our forum. We are sure that you can receive our reply as soon
				as possible
			</h3>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 px-4">
				<div className="border border-gray-300 p-10 flex flex-col gap-3 hover:bg-gray-100">
					<BsTelephone className="text-red-400 text-4xl mb-3" />
					<h3 className="font-semibold text-2xl text-gray-700">
						Phone
					</h3>
					<div className="flex flex-col">
						<span className="text-gray-500 font-semibold">
							Phone 01: +254 700 262 226
						</span>
						<span className="text-gray-500 font-semibold">
							Phone 02: +254 775 075 755
						</span>
					</div>
				</div>
				<div className="border border-gray-300 p-10 flex flex-col gap-3 hover:bg-gray-100">
					<IoLocationOutline className="text-red-400 text-4xl mb-3" />
					<h3 className="font-semibold text-2xl text-gray-700">
						Address
					</h3>
					<div className="flex flex-col">
						<span className="text-gray-500 font-semibold">
							Kabuku, Limuru
						</span>
						<span className="text-gray-500 font-semibold">
							Kenya.
						</span>
					</div>
				</div>
				<div className="border border-gray-300 p-10 flex flex-col gap-3 hover:bg-gray-100">
					<AiOutlineMail className="text-red-400 text-4xl mb-3" />
					<h3 className="font-semibold text-2xl text-gray-700">
						Email
					</h3>
					<div className="flex flex-col">
						<span className="text-gray-500 font-semibold">
							support@nickjames.co.ke{" "}
						</span>
						<span className="text-gray-500 font-semibold">
							hello@unero.co
						</span>
					</div>
				</div>
			</div>

			<div className="flex flex-col">
				<h3 className="capitalize text-3xl font-medium text-gray-800 text-center my-6">
					Get In touch
				</h3>
				<form
					action=""
					className="my-8 grid grid-cols-1 md:grid-cols-3 gap-10 leading-6 px-4"
				>
					<div className="flex flex-col gap-3">
						<label
							htmlFor="name"
							className="text-lg font-semibold text-gray-800"
						>
							Name <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							className="border border-gray-200 p-3 outline-none"
							id="name"
							placeholder="Enter your name"
							required
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label
							htmlFor="email"
							className="text-lg font-semibold text-gray-800"
						>
							Email <span className="text-red-500">*</span>
						</label>
						<input
							type="email"
							className="border border-gray-200 p-3 outline-none"
							id="email"
							placeholder="example@domain.com"
							required
						/>
					</div>
					<div className="flex flex-col gap-3">
						<label
							htmlFor="subject"
							className="text-lg font-semibold text-gray-800"
						>
							Subject&nbsp;
							<span className="text-gray-700 font-medium">
								( Optional )
							</span>
						</label>
						<input
							type="text"
							className="border border-gray-200 p-3 outline-none"
							id="subject"
						/>
					</div>
					<div className="flex flex-col gap-3 md:col-span-3">
						<label
							htmlFor="message"
							className="text-lg font-semibold text-gray-800"
						>
							Message<span className="text-red-500">*</span>
						</label>
						<textarea
							className="border border-gray-200 p-3 outline-none px-6 "
							id="message"
							cols="30"
							rows="10"
							placeholder="I am looking for..."
							required
						></textarea>
					</div>
					<div className="md:col-span-3 items-center flex justify-center">
						<button className="flex w-fit h-fit  items-center justify-center py-3 px-14 bg-black text-white hover:text-black hover:bg-gray-100">
							<span>Submit</span>
						</button>
					</div>
				</form>
			</div>

			<div className="my-20 mb-40">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.013612825843!2d36.66607795118889!3d-1.1507669991564884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f26cf4f046e5f%3A0xe697afc266b3c846!2sKabuku%20Junction%20Stage!5e0!3m2!1sen!2ske!4v1652267541739!5m2!1sen!2ske"
					//   width="600"
					height="450"
					style={{ border: "0" }}
					//   allowfullscreen=""
					className="w-full"
					loading="lazy"
				></iframe>
			</div>
		</div>
	);
};

export default Contacts;
