'use client'

import useMounter from '@/wulf_tools/useMounter'

import { CreateServerModal } 	from '@/components/modals/CreateServerModal'
import { InviteModal } 				from '@/components/modals/InviteModal'
import { EditServerModal } 		from '@/components/modals/EditServerModal'
import { MembersModal } 			from '@/components/modals/MembersModal'

export const ModalProvider = () => {
	const isMounted = useMounter()

	if (!isMounted) return null

	return (
		<>
			<CreateServerModal />

			<InviteModal />

			<EditServerModal />

			<MembersModal />
		</>
	)
}