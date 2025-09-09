"use client"

import { MeshGradient } from "@paper-design/shaders-react"

export default function PortfolioPage() {
	const projects = [
		{ name: "Nexus Tower", type: "Commercial", year: "2024" },
		{ name: "Fluid Residence", type: "Residential", year: "2023" },
		{ name: "Crystal Pavilion", type: "Cultural", year: "2024" },
		{ name: "Metallic Gardens", type: "Landscape", year: "2023" },
	]

	return (
		<div className="w-full min-h-screen bg-black relative overflow-hidden">
			<MeshGradient
				className="w-full h-full absolute inset-0"
				colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
				speed={0.8}
				backgroundColor="#000000"
			/>

			<div className="absolute inset-0 flex items-center justify-center p-8">
				<div className="w-full max-w-4xl pointer-events-none">
					<div className="text-center font-mono text-xs text-white/40 mb-10">
						<div className="text-lg">PORTFOLIO</div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{projects.map((project, index) => (
							<div
								key={project.name}
								className="relative group pointer-events-auto cursor-pointer"
								style={{ animationDelay: `${index * 0.15}s` }}
							>
								<div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-[1.02]" />
								<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="relative p-5 text-left">
									<div className="text-white/80 font-medium mb-1">{project.name}</div>
									<div className="text-white/40 text-xs">{project.type} • {project.year}</div>
								</div>
								<div className="absolute bottom-0 right-0 w-10 h-px bg-gradient-to-l from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}


