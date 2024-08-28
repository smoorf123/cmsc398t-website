import Link from "next/link"

const Navbar = () => {
	return (
		<nav className="font-sans text-2xl text-black">
			<ul className="flex flex-col space-y-10">
				<li className="mr-auto relative after:content-[''] hover:after:w-full hover:after:left-0 hover:after:right-auto  after:absolute after:duration-300 after:ease-in-out after:bg-black after:h-0.5 after:w-0 after:right-0 after:-bottom-1">
					<Link href="/syllabus">
						Syllabus
					</Link>
				</li>
				<li className="mr-auto relative after:content-[''] hover:after:w-full hover:after:left-0 hover:after:right-auto  after:absolute after:duration-300 after:ease-in-out after:bg-black after:h-0.5 after:w-0 after:right-0 after:-bottom-1">
					<Link href="/content">
						Lecture Content
					</Link>
				</li>
				<li className="mr-auto relative after:content-[''] hover:after:w-full hover:after:left-0 hover:after:right-auto  after:absolute after:duration-300 after:ease-in-out after:bg-black after:h-0.5 after:w-0 after:right-0 after:-bottom-1">
					<Link href="/deliverables">
						Deliverables
					</Link>
				</li>
				<li className="mr-auto relative after:content-[''] hover:after:w-full hover:after:left-0 hover:after:right-auto  after:absolute after:duration-300 after:ease-in-out after:bg-black after:h-0.5 after:w-0 after:right-0 after:-bottom-1">
					<Link href="/staff">
						Staff
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
