import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about/about'
import NotFound from './pages/not-found/not-found'
import President from './pages/messages/president'
import Messages from './pages/messages/messages'
import IndexPage from './pages/index-page/index-page'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home children={<IndexPage />} />,
		errorElement: <NotFound />,
	},
	{
		path: '/about',
		element: <Home children={<About />} />,
	},
	{
		path: '/messages',
		element: <Home children={<Messages />} />,
	},
	{
		path: '/messages/president',
		element: <Home children={<President />} />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
