import Link from 'next/link'

export default function NotFound() {
    return (
        <div className=' flex-col text-primary h-[calc(100vh-160px)] gap-10 flex items-center justify-center'>
            <div className=' text-9xl'>404</div>
            <div className=' text-light1 text-2xl'>Requested Resource Not Found</div>

            <Link href={'/'}>
                <div className=' transition-all px-2 py-1 rounded-lg bg-darkest text-2xl cursor-pointer hover:bg-primary hover:text-darkest'>Home</div>
            </Link>

        </div>
    )
}