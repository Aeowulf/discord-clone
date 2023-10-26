'use client'

import useMounter from '@/wulf_tools/useMounter'

import { CreateServerModal } 	from '@/components/modals/CreateServerModal'
import { InviteModal } 				from '@/components/modals/InviteModal'

export const ModalProvider = () => {
	const isMounted = useMounter()

	if (!isMounted) return null

	return (
		<>
			<CreateServerModal />

			<InviteModal />
		</>
	)
}