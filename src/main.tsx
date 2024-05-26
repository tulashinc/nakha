import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about/about'
import NotFound from './pages/not-found/not-found'
import President from './pages/messages/president'

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Home>
				<About />
			</Home>
		),
		errorElement: <NotFound />,
	},
	{
		path: '/about',
		element: <About />,
	},
	{
		path: '/messages/president',
		element: (
			<Home>
				<President />
			</Home>
		),
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
