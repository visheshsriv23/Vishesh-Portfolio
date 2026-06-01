import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx"
import WindowControls from "#components/WindowControls.jsx"
import { Search } from 'lucide-react'
import { locations } from "#constants/index.js"
import useLocationStore from "#store/location.js"
import useWindowStore from "#store/window.js";
import clsx from "clsx"

const Finder = () => {
	const { openWindow } = useWindowStore();
	const { activeLocation, setActiveLocation } = useLocationStore();

	const openItem = (item) => {
		if(item.fileType === 'pdf') return openWindow("resume");
		if(item.kind === 'folder') return setActiveLocation(item);
		if(['fig', 'url'].includes(item.fileType) && item.href)
			return window.open(item.href, "_blank");

		openWindow(`${item.fileType}${item.kind}`, item);
	}

	const renderList = (items) => items.map((item) => (
		<li key={item.id} onClick={() => setActiveLocation(item)} className={clsx(item.id === activeLocation.id ? 'active' : 'not-active' )}>
			<img src={item.icon} alt={item.name} className="w-4" />
			<p className="text-sm font-medium truncate">{item.name}</p>
								
		</li>
	))

	return (
		<>
		<div id="window-header" className="flex items-center justify-between p-3 bg-[#2c2c2e] border-b border-white/5">
			<WindowControls target="finder" />
			<Search className="icon" />
		</div>
		<div className="bg-white flex h-full">
			<div className="sidebar">
				<div>
					<h3>Favourites</h3>
					<ul>
						{renderList(Object.values(locations))}
					</ul>
				</div>
				<div>
					<h3>MY Projects</h3>
					<ul>
						{renderList(locations.work.children)}
					</ul>
				</div>
			</div>
			<ul className="content">
			{activeLocation?.children.map((item) => (
				<li key={item.id} className={item.position} onClick={() => openItem(item)}>
					<img src={item.icon} alt={item.name} />
					<p>{item.name}</p>
				</li>
			))}
		</ul>
		</div>

			
		</>
	)
}

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;