
function Card({username}){
    return(
    <div className=" mt-5 ml-5 text-center  relative bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-4xl shadow-xs">
    <a href="#">
        <img className="rounded-base h-30 w-30 ml-25 border-1 rounded-4xl" src="https://images.pexels.com/photos/14248132/pexels-photo-14248132.jpeg" alt="" />
    </a>
    <a href="#">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{username.username}</h5>
    </a>
    <p className="mb-6 text-body">{username.age}</p>
    <p className="mb-6 text-body">{username.location}</p>
    <a href="#" className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        Read more
        <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
    </a>
</div>

    )
}

export default Card;