import React from 'react'
import { FaReact } from 'react-icons/fa'
import { CgWorkAlt } from 'react-icons/cg'
import { LuGraduationCap } from 'react-icons/lu'

import BlogAppImg from '@/public/blogApp.png'
import BrainwaveImg from '@/public/brainwave.png'
import WeatherImg from '@/public/weather.png'

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const

export const experiencesData = [
	{
		title: 'Jaypee Institiue of Information Technology',
		location: 'Noida, Uttar Pradesh',
		description: 'I graduated after 4 years of Btech in CSE. I immediately found a job as a front-end developer.',
		icon: React.createElement(LuGraduationCap),
		date: '2021',
	},
	{
		title: 'Front-End Developer',
		location: 'Gurgaon, Haryana',
		description:
			'I worked as a front-end developer for 1.5 years at Avizva. I also upskilled myself technically as a Software Engineer working on Portal Applications with React and Redux',
		icon: React.createElement(CgWorkAlt),
		date: '2021 - 2023',
	},
	{
		title: 'Software Engineer',
		location: 'Noida, Uttar Pradesh',
		description:
			"I'm now a front-end developer working at Brevo. My stack includes React, Next.js on Website. I'm open to full-time opportunities.",
		icon: React.createElement(FaReact),
		date: '2023 - present',
	},
] as const

export const projectsData = [
	{
		title: 'Brainwave',
		description:
			'Developed a high-performance SaaS product marketing website, optimizing the landing page for clear communication and user engagement.',
		tags: ['React', 'JavaScript', 'Tailwind'],
		imageUrl: BrainwaveImg,
		projectUrl: 'https://brain-ai-wave.netlify.app/',
	},
	{
		title: 'Weather',
		description:
			'Implemented a weather application using React Query to fetch weather data from the OpenWeatherMap API.',
		tags: ['React', 'TypeScript', 'Tanstack/React Query', 'Tailwind', 'Shadcn'],
		imageUrl: WeatherImg,
		projectUrl: 'https://weather-tanstack.netlify.app/',
	},
	{
		title: 'Blog Application',
		description: 'Developed a blog application in Next.js featuring the latest posts and articles.',
		tags: ['React', 'Next.Js', 'JavaScript', 'Tailwind'],
		imageUrl: BlogAppImg,
		projectUrl: 'https://next-blog-blue-three.vercel.app/',
	},
] as const

export const skillsData = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Git', 'Tailwind', 'Redux'] as const
