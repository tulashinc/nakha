import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
// import About from './pages/about/about'
import NotFound from './pages/not-found/not-found'
import President from './pages/messages/president'
import Messages from './pages/messages/messages'
import IndexPage from './pages/index-page/index-page'
import Events from './pages/events/events'
import History from './pages/history/history'
import Gallery from './pages/gallery/gallery'
import ContactUs from './pages/contact-us/contact-us'
import VicePresident from './pages/messages/vice-president'
import Objectives from './pages/history/objectives'
import GeneralSecretary from './pages/messages/general-secretary'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home children={<IndexPage />} />,
		errorElement: <Home children={<NotFound />} />,
	},
	{
		path: '/history',
		element: <Home children={<History />} />,
	},
	{
		path: '/history/objectives',
		element: <Home children={<Objectives />} />,
	},

	{
		path: '/events',
		element: <Home children={<Events />} />,
	},
	// {
	// 	path: '/about',
	// 	element: <Home children={<About />} />,
	// },
	{
		path: '/messages',
		element: <Home children={<Messages />} />,
	},
	{
		path: '/messages/president',
		element: <Home children={<President />} />,
	},
	{
		path: '/messages/vicepresident',
		element: <Home children={<VicePresident />} />,
	},
	{
		path: '/messages/generalsecretary',
		element: <Home children={<GeneralSecretary />} />,
	},
	{
		path: '/gallery',
		element: <Home children={<Gallery />} />,
	},
	{
		path: '/contact',
		element: <Home children={<ContactUs />} />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
