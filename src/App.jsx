import React, { useState } from 'react'
import styles from './style'
import {
	Navbar,
	Billing,
	CardDeal,
	Business,
	Clients,
	CTA,
	Stats,
	Footer,
	Testimonials,
	Hero,
} from './components/index'

const App = () => {
	const [scroll, setScroll] = useState(0)

	document.onscroll = () => {
		let scroll = window.scrollY
		setScroll(scroll)
	}

	return (
		<div className="bg-primary w-full overflow-hidden">
			<div
				className={`${styles.paddingX} ${styles.flexCenter} ${
					scroll > 80 && 'navbar'
				}`}
			>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
				</div>
			</div>

			<div
				className={`bg-primary ${styles.flexStart} ${
					scroll > 80 && 'mt-20'
				}`}
			>
				<div className={`${styles.boxWidth}`}>
					<Hero />
				</div>
			</div>

			<div
				className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
			>
				<div className={`${styles.boxWidth}`}>
					<Stats />
					<Business />
					<Billing />
					<CardDeal />
					<Testimonials />
					<Clients />
					<CTA />
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default App
