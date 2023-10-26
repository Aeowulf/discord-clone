'use client'

import {
	useEffect	,
	useState	,
} from 'react'

const useMounter = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return isMounted
}

export default useMounter