import React from 'react'
import { navLinks, navIcons } from "#constants/index.js"
import dayjs from "dayjs"
import useWindowStore from "#store/window.js";

const Navbar = () => {
	const { openWindow } = useWindowStore();
	return (
		<nav className="flex items-center justify-between">
			<div className="flex items-center gap-8">
				<div className="flex items-center gap-2">
					<img src="/images/logo.svg" alt="logo"/>
					<p className="font-bold">Vishesh's Portfolio</p>
				</div>
				<ul className="flex items-center gap-6 cursor-pointer">
					{navLinks.map(({ id, name, type }) => (
						<li key={id} onClick={() => openWindow(type)}>
							<p>{name}</p>
						</li>
					))}
					
				</ul>
			</div>
			<div className="flex items-center gap-6">
				<ul className="flex items-center gap-4">
					{navIcons.map(({ id, img }) => (
						<li key={id} className="cursor-pointer">
							<img src={img} alt={`icon-${id}`} className="icon-hover" />
						</li> 
					))}
				</ul>
				<time>{dayjs().format("ddd MMM D h:mm A")}</time>
			</div>
		</nav>
	)
}

export default Navbar