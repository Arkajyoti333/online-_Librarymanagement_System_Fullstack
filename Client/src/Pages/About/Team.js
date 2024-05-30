import React from 'react'



const users = [
    {
      name: ' ',
      image:
        'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      position: 'Android developer',
    },
    {
      name: ' ',
      image:
        'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      position: 'Android developer',
    },
    {
      name: '',
      image:
        'https://images.pexels.com/photos/14857538/pexels-photo-14857538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      position: 'Full-stack developer',
    },
    {
      name: 'Arka',
      image:
        'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      position: 'Back-end developer',
    },
    {
        name: '',
        image:
          'https://images.pexels.com/photos/14230741/pexels-photo-14230741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        position: 'Front-end developer',
      },
  ]

export default function Team() {
  return (
    <>
    <div className="flex  flex-wrap mt-16  ">
          <div className="space-y-6 md:w-3/4 space-x-0">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3 ">
              <p className="text-xs font-semibold text-gray-800 leading-normal md:text-sm">Join Us &rarr;</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate people and foster to do your best work.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAMborder-gray-300  md:grid-rows-2 lg:grid-rows-4 */}
        <div className=" px-3 border border-gray-300 flex flex-row flex-wrap justify-center gap-4 gap-y-6 border-b min-w-full  py-12 pb-20 ">
          {users.map((user) => (
            <div className="rounded-md border border-gray-300 min-w-[30%]" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[250px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>
    </>
  )
}
