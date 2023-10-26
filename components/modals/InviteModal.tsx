'use client'

import {
	Copy			,
	RefreshCw	,
} from 'lucide-react'

import { useModalStore } 	from '@/hooks/useModalStore'
import { useOrigin } 			from '@/hooks/useOrigin'

import {
	Dialog						,
	DialogContent			,
	DialogHeader			,
	DialogTitle				,
} from '@/components/ui/Dialog'

import { Button } from '@/components/ui/Button'
import { Input } 	from '@/components/ui/Input'
import { Label } 	from '@/components/ui/Label'
import { useState } from 'react'

export const InviteModal = () => {
	const { isOpen, onClose, type, data } = useModalStore()

	const origin = useOrigin()

	const isModalOpen = isOpen && type === 'invite'

	const { server } = data

	const [copied, setCopied] = useState(false)

	const [isLoading, setIsLoading] = useState(false)

	const inviteUrl = `${origin}/invite/${server?.inviteCode}`

	const onCopy = () => {
		navigator.clipboard.writeText(inviteUrl)
	}

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className='bg-white text-black p-0 overflow-hidden'>
				<DialogHeader className='pt-8 px-6'>
					<DialogTitle className='text-2xl text-center font-bold'>
						Invite Friends
					</DialogTitle>
				</DialogHeader>

				<div className='p-6'>
					<Label
						className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'
					>
						Server Invite Link
					</Label>

					<div className='flex items-center mt-2 gap-x-2'>
						<Input
							readOnly
							value={inviteUrl}
							className='bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0'
						/>

						<Button size='icon'>
							<Copy className='w-4 h-4' />
						</Button>
					</div>

					<Button
						variant='link'
						size='sm'
						className='text-xs text-zinc-500 mt-4'
					>
						Generate a new Link
						<RefreshCw className='w-4 h-4 ml-2' />
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}