'use client'

import useMounter from '@/wulf_tools/useMounter'

import { CreateServerModal } from '@/components/modals/CreateServerModal'

export const ModalProvider = () => {
	const isMounted = useMounter()

	if (!isMounted) return null

	return (
		<>
			<CreateServerModal />
		</>
	)
}