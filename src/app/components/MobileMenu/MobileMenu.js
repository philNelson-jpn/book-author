/* eslint-disable no-unused-vars */
'use client'
import React from 'react'
import Link from 'next/link'
import styles from './MobileMenu.module.css'
import styled, { keyframes } from 'styled-components'
import { DialogOverlay, DialogContent } from '@reach/dialog'

import { X } from 'react-feather'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
	return (
		<Wrapper isOpen={isOpen} onDismiss={onDismiss}>
			<Backdrop />
			<Content aria-label='Menu'>
				<InnerWrapper>
					<CloseButton onClick={onDismiss}>
						<X />
						<VisuallyHidden>Dismiss menu</VisuallyHidden>
					</CloseButton>
					<Filler />
					<Nav>
						<NavLink onClick={onDismiss} className={styles.navLink} href='/'>
							Home
						</NavLink>
						<NavLink
							onClick={onDismiss}
							className={styles.navLink}
							href='/books'
						>
							Books
						</NavLink>
						<NavLink
							onClick={onDismiss}
							className={styles.navLink}
							href='/alphonso-mayo-project'
						>
							Alphonso Mayo Project
						</NavLink>
						<NavLink
							onClick={onDismiss}
							className={styles.navLink}
							href='/tutoring'
						>
							Tutoring
						</NavLink>
						<NavLink
							onClick={onDismiss}
							className={styles.navLink}
							href='/about'
						>
							About
						</NavLink>
					</Nav>
					<Footer>
						<FooterLink
							target='_blank'
							href='https://twitter.com/Brian_A_Nelson'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='32'
								height='32'
								viewBox='4 4 40 40'
							>
								<polygon
									fill='#616161'
									points='41,6 9.929,42 6.215,42 37.287,6'
								></polygon>
								<polygon
									fill='#fff'
									fill-rule='evenodd'
									points='31.143,41 7.82,7 16.777,7 40.1,41'
									clip-rule='evenodd'
								></polygon>
								<path
									fill='#616161'
									d='M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z'
								></path>
							</svg>
						</FooterLink>
						<FooterLink
							target='_blank'
							href='https://www.facebook.com/BrianNelsonTheAuthor/'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width='32'
								height='32'
								class='main-grid-item-icon'
								fill='none'
							>
								<path
									d='m17.543 13.398.661-4.31h-4.136V6.29c0-1.18.578-2.329 2.43-2.329h1.88V.291S16.673 0 15.042 0c-3.407 0-5.633 2.064-5.633 5.802v3.285H5.622v4.311h3.786v10.42a15.015 15.015 0 0 0 4.66 0v-10.42h3.475Z'
									fill='#1877F2'
								/>
							</svg>
						</FooterLink>
						<FooterLink
							target='_blank'
							href='https://www.linkedin.com/in/briannelsonauthor'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width='32'
								height='32'
								class='main-grid-item-icon'
								fill='none'
							>
								<path
									d='M5.372 24H.396V7.976h4.976V24ZM2.882 5.79C1.29 5.79 0 4.474 0 2.883a2.882 2.882 0 1 1 5.763 0c0 1.59-1.29 2.909-2.881 2.909ZM23.995 24H19.03v-7.8c0-1.86-.038-4.243-2.587-4.243-2.587 0-2.984 2.02-2.984 4.109V24H8.49V7.976h4.772v2.186h.07c.664-1.259 2.287-2.587 4.708-2.587 5.035 0 5.961 3.316 5.961 7.623V24h-.005Z'
									fill='#0A66C2'
								/>
							</svg>
						</FooterLink>
					</Footer>
				</InnerWrapper>
			</Content>
		</Wrapper>
	)
}

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const SlideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`

const Wrapper = styled(DialogOverlay)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: transparent;
	display: flex;
	justify-content: flex-end;
`

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: var(--color-backdrop);
	animation: ${FadeIn} 500ms;
`

const Content = styled(DialogContent)`
	--overfill: 28px;
	position: relative;
	background: white;
	height: 100%;
	width: calc(400px + var(--overfill));
	margin-inline-end: calc(var(--overfill) * -1);
	padding: 32px var(--overfill);

	@media (prefers-reduced-motion: no-preference) {
		animation: ${SlideIn} 500ms both cubic-bezier(0, 0.91, 0.27, 1.22);
		animation-delay: 300ms;
	}
`

const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`

const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: var(--overfill);
	padding: 16px;
`

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

const NavLink = styled(Link)`
	text-decoration: none;
	color: var(--color-gray-900);
	font-weight: var(--weight-medium);
	font-size: 1.325rem;

	--nav-fade: ${FadeIn} 600ms both, ${SlideIn} 300ms both;

	@media (prefers-reduced-motion: no-preference) {
		&:nth-of-type(1) {
			animation: var(--nav-fade);
			animation-delay: 200ms;
		}

		&:nth-of-type(2) {
			animation: var(--nav-fade);
			animation-delay: 400ms;
		}

		&:nth-of-type(3) {
			animation: var(--nav-fade);
			animation-delay: 600ms;
		}

		&:nth-of-type(4) {
			animation: var(--nav-fade);
			animation-delay: 800ms;
		}

		&:nth-of-type(5) {
			animation: var(--nav-fade);
			animation-delay: 1000ms;
		}

		&:nth-of-type(6) {
			animation: var(--nav-fade);
			animation-delay: 1200ms;
		}
	}
`

const Footer = styled.footer`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: start;
	gap: calc(38 / 16 * 1rem);
`

const FooterLink = styled.a`
	border: 2px solid transparent;
	border-radius: 4px;
	padding: 12px;
`

const Filler = styled.div`
	flex: 1;
`

export default MobileMenu
