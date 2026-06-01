import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx"
import WindowControls from "#components/WindowControls.jsx"
import { socials } from "#constants/index.js"

const Contact = () => {
	return (
		<>
			<div id="window-header" className="flex items-center justify-between p-3 bg-[#2c2c2e] border-b border-white/5">
				<WindowControls target="contact" />
				<h2>Contact Me!</h2>
			</div>
			<div className="p-5 space-y-5">
				<img src="/images/vishesh.jpg" alt="Vishesh" className="w-20 h-20 object-cover rounded-full mx-auto" />
				<h3>Let's connect</h3>
				<p>Got an idea? Or just wanna talk tech? I'm in.</p>
				<ul>
					{socials.map(({ id, bg, link, icon, text }) => (
						<li key={id} style={{ backgroundColor: bg}}>
							<a href={link} target="_blank" rel="noreferrer" title={text}>
								<img src={icon} alt={text} className="size-5" />
								<p>{text}</p>
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

const ContactWindow = WindowWrapper(Contact, 'contact');
export default ContactWindow;