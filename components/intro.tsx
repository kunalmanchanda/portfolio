'use client'

import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

export default function Intro() {
	const { ref } = useSectionInView('Home', 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id='home'>
			<div className='flex items-center justify-center'>
				<div className='relative'>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'tween',
							time: 0.25,
						}}
					>
						<Image
							alt='Kunal Potrait'
							className='w-24 h-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
							height={192}
							priority
							quality={95}
							src='https://images.unsplash.com/photo-1474031317822-f51f48735ddd?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							width={192}
						/>
					</motion.div>
					<motion.span
						className='absolute bottom-0 right-0 text-4xl'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>
			<motion.h1
				className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className='font-bold'>Hello, I&apos;m Kunal.</span> I&apos;m a{' '}
				<span className='font-bold'>front-end developer</span> with <span className='font-bold'>3 years</span>{' '}
				of experience. I enjoy building <span className='italic'>modern websites & applications</span>. My focus
				is <span className='underline'>React (Next.js)</span>.
			</motion.h1>

			<motion.div
				className='flex flex-col sm:flex-row items-center gap-2 px-4 justify-center text-lg font-medium'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href='#contact'
					className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
					onClick={() => {
						setActiveSection('Contact')
						setTimeOfLastClick(Date.now())
					}}
				>
					Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
				</Link>
				<a
					className='group bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
					href='/KUNAL_MANCHANDA_CV.pdf'
					download
				>
					Download CV <HiDownload className='opacity-60 group-hover:translate-y-1' />
				</a>
				<a
					className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
					href='https://www.linkedin.com/in/kunal-manchanda-16b666180/'
					target='_blank'
				>
					<BsLinkedin />
				</a>
				<a
					className='bg-white text-gray-700 p-4 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
					href='https://github.com/kunalmanchanda'
					target='_blank'
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	)
}
