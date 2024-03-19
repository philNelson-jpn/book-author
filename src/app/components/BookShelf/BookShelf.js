'use client'

import React from 'react'
import books from '../../books'
import style from './BookShelf.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Books = () => {
	const [bookIndex, setBookIndex] = React.useState(-1)

	const width = 55
	const height = 400

	const spineWidth = `${width}px`
	const coverWidth = `${width * 5.5}px`
	const bookWidth = `${width * 6}px`
	const bookHeight = `${height}px`

	return (
		<>
			<svg
				style={{
					position: 'absolute',
					inset: 0,
					visibility: 'hidden',
				}}
			>
				<defs>
					<filter id='paper' x='0%' y='0%' width='100%' height='100%'>
						<feTurbulence
							type='fractalNoise'
							baseFrequency='0.9'
							numOctaves='8'
							result='noise'
						/>
						<feDiffuseLighting
							in='noise'
							lightingColor='white'
							surfaceScale='1'
							result='diffLight'
						>
							<feDistantLight azimuth='45' elevation='35' />
						</feDiffuseLighting>
					</filter>
				</defs>
			</svg>
			<div className={style.flexWrapper}>
				{books.map((book, index) => (
					<button
						key={index}
						onClick={() => {
							if (index === bookIndex) {
								setBookIndex(-1)
								
							} else {
								setBookIndex(index)
							}
							
						}}
						style={{
							border: 'none',
							backgroundColor: 'transparent',
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'flex-start',
							outline: 'none',
							flexShrink: 0,
							transform: `translateX(0px)`,
							width: bookIndex === index ? bookWidth : spineWidth,
							perspective: '1000px',
							WebkitPerspective: '1000px',
							gap: '0px',
							transition: `width 500ms ease, transform 500ms ease`,
							willChange: 'auto',
						}}
					>
						<div
							className={style.flex}
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								placeItems: 'center',
								width: spineWidth,
								height: bookHeight,
								flexShrink: 0,
								transformOrigin: 'right',
								backgroundColor: book.spineBackgroundColor,
								color: book.spineForegroundColor,
								transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
									bookIndex === index ? '-60deg' : '0deg'
								}) rotateZ(0deg) skew(0deg, 0deg) translateY(-3px)`,
								transition: 'all 500ms ease',
								willChange: 'auto',
								filter: 'brightness(0.8) contrast(2)',
								transformStyle: 'preserve-3d',
								// without this border the layout breaks on tablet for some reason
								border: `0.01px solid ${book.spineBackgroundColor}`,
							}}
						>
							<Link
								href={`/books/${book.id}`}
								style={{ position: 'fixed', inset: 0 }}
							>
								<span
									style={{
										pointerEvents: 'none',
										position: 'fixed',
										top: 0,
										left: 0,
										zIndex: 50,
										height: bookHeight,
										width: spineWidth,
										opacity: 0.4,
										filter: 'url(#paper)',
									}}
								/>
							</Link>
							<div
								className={style.heading}
								style={{
									as: 'h2',
									writingMode: 'vertical-lr',
									fontSize: book.fontSize,
									fontFamily: book.spineFontFamily,
									userSelect: 'none',
									color: book.spineTextColor,
									textTransform: 'uppercase',
								}}
							>
								{book.title}
							</div>
						</div>
						<div
							className={style.box}
							style={{
								position: 'relative',
								flexShrink: 0,
								overflow: 'hidden',
								transformOrigin: 'left',
								transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
									bookIndex === index ? '30deg' : '88.4deg'
								}) rotateZ(0deg) skew(0deg, 0deg)`,
								transition: 'all 500ms ease',
								willChange: 'auto',
								filter: 'brightness(0.8) contrast(2)',
								transformStyle: 'preserve-3d',
							}}
						>
							<span
								style={{
									pointerEvents: 'none',
									position: 'fixed',
									top: 0,
									right: 0,
									zIndex: 50,
									height: bookHeight,
									width: coverWidth,
									opacity: 0.4,
									filter: 'url(#paper)',
								}}
							/>

							<span
								style={{
									pointerEvents: 'none',
									position: 'absolute',
									top: 0,
									left: 0,
									zIndex: 50,
									height: bookHeight,
									width: coverWidth,
									background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,
								}}
							/>

							<Image
								className={style.coverImage}
								src={book.coverUrl}
								alt={book.title}
								width={width * 5.5}
								height={height}
								style={{
									transition: 'all 500ms ease',
									willChange: 'auto',
								}}
							/>
						</div>
					</button>
				))}
			</div>
		</>
	)
}

export default Books
