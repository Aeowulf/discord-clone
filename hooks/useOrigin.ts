import useMounter from "@/wulf_tools/useMounter"

export const useOrigin = () => {
	const mounted = useMounter()

	const origin = typeof window !== 'undefined' && window.location.origin 
		? window.location.origin 
		: ''

	if (!mounted) {
		return ''
	}

	return origin
}