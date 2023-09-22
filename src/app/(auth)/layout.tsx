import * as React from 'react'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="container grow w-full flex items-center justify-center bg-zinc-50" >
			{children}
		</main>
	)
}	
