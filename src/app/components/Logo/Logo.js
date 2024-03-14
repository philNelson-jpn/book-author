import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Logo.module.css'

const Logo = () => {
	return (
		<Link href='/'>
			<Image
				className={styles.logoImage}
				src='/brianNelsonDotCom.png'
				alt='Brian Nelson Books Logo'
				width={140}
				height={30}
			/>
		</Link>
	)
}

export default Logo
