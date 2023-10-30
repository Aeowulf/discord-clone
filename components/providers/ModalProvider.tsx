'use client'

import useMounter from '@/wulf_tools/useMounter'

import { CreateServerModal } 	from '@/components/modals/CreateServerModal'
import { InviteModal } 				from '@/components/modals/InviteModal'
import { EditServerModal } 		from '@/components/modals/EditServerModal'
import { MembersModal } 			from '@/components/modals/MembersModal'
import { CreateChannelModal } from '@/components/modals/CreateChannelModal'

export const ModalProvider = () => {
	const isMounted = useMounter()

	if (!isMounted) return null

	return (
		<>
			<CreateServerModal />

			<InviteModal />

			<EditServerModal />

			<MembersModal />

			<CreateChannelModal />
		</>
	)
}