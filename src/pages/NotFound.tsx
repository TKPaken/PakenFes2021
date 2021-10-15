import React from 'react'
import './NotFound.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

function NotFound() {
	return (
		<div>
			<Header />
			<div className="wavy">
				<span style={{ "--i": 1 } as React.CSSProperties}>P</span>
				<span style={{ "--i": 2 } as React.CSSProperties}>a</span>
				<span style={{ "--i": 3 } as React.CSSProperties}>g</span>
				<span style={{ "--i": 3 } as React.CSSProperties}>e</span>
				<span style={{ "--i": 4 } as React.CSSProperties}>&nbsp;</span>
				<span style={{ "--i": 5 } as React.CSSProperties}>N</span>
				<span style={{ "--i": 6 } as React.CSSProperties}>o</span>
				<span style={{ "--i": 7 } as React.CSSProperties}>t</span>
				<span style={{ "--i": 8 } as React.CSSProperties}>&nbsp;</span>
				<span style={{ "--i": 9 } as React.CSSProperties}>F</span>
				<span style={{ "--i": 10 } as React.CSSProperties}>o</span>
				<span style={{ "--i": 11 } as React.CSSProperties}>u</span>
				<span style={{ "--i": 12 } as React.CSSProperties}>n</span>
				<span style={{ "--i": 13 } as React.CSSProperties}>d</span>
			</div>
			<Footer />
		</div>
	);
}
export default NotFound;