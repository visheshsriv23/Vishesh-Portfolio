import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx"
import WindowControls from "#components/WindowControls.jsx"
import { ChevronRight, ChevronLeft, PanelLeft, ShieldHalf, Search, Share, Copy, Plus, MoveRight } from 'lucide-react'

import { blogPosts } from "#constants/index.js"

const Safari = () => {
	return (
		<>
			<div id="window-header" className="flex items-center justify-between p-3 bg-[#2c2c2e] border-b border-white/5">
				<WindowControls target="safari" />

				<PanelLeft className="ml-10 icon" />
				<div className="flex items-center gap-1 ml-5">
					<ChevronLeft className="icon"/>
					<ChevronRight className="icon"/>
				</div>
				<div className="flex-1 flex-center gap-3">
					<ShieldHalf className="icon" />
					<div className="search">
						<Search className="icon" />
						<input type="text" placeholder="Search or enter website" className="flex-1" />
					</div>
				</div>
				<div className="flex items-center gap-5">
					<Share className="icon" />
					<Plus className="icon" />
					<Copy className="icon" />
				</div>
			</div>
			<div className="blog">
				<h2>My Project Insights</h2>
				<div className="space-y-8">
  {blogPosts.map(({ id, image, title, date, link }) => (
    <div key={id} className="blog-posts grid grid-cols-3 gap-4 items-center">
      
      <div className="col-span-1">
        <img 
          src={image} 
          alt={title} 
          className="max-w-[100px] max-h-full object-contain" 
        />
      </div>
      
      <div className="content col-span-2 space-y-1">
        <p className="text-sm text-gray-500">{date}</p>
        <h3 className="text-lg font-bold">{title}</h3>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="icon-hover text-blue-500 flex items-center gap-1"
        >
          Check out! <MoveRight className="inline" />
        </a>
      </div>

    </div>
  ))}
</div>
			</div>
		</>
	)
};

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;