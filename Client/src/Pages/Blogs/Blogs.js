import React from 'react';


const posts = [
  {
    id: 1,
    title: 'Learning Node.js Development',
    href: '#',
    description:
      'A practical, project-based book that provides all the necessary information to get started as a Node.js developer.Its a vital part of any web developers toolkit.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Technical Book', href: '#' },
    author: {
      name: 'Brett McLaughlin ',
      role: 'author ',
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  },
  {
    id: 2,
    title: 'Learning Ai is the Best step',
    href: '#',
    description:
      'A practical, project-based book that provides all the necessary information to get started as a Node.js developer.Its a vital part of any web developers toolkit.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'RoadMap', href: '#' },
    author: {
      name: 'Brett McLaughlin ',
      role: 'author ',
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  },
  {
    id: 3,
    title: 'Read Books reather than Playing with Mobile',
    href: '#',
    description:
      'A practical, project-based book that provides all the necessary information to get started as a Node.js developer.Its a vital part of any web developers toolkit.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Advice', href: '#' },
    author: {
      name: 'Brett McLaughlin ',
      role: 'author ',
      href: '#',
      imageUrl:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  },

  
]

const BlogCom=()=> {
  return (
    <>


    <div className="bg-white py-24 px-1 sm:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow yourSelf By reading books.
          </p>
        </div>
        <div className=" mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-[50px] gap-y-4 border border-gray-200 p-[15px] sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4  text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

const Blogs=()=>{
  return (
  
  <>
    <div className=' mt-[30px]'>
    <BlogCom/>
    </div>
  </>
  
  )
}

export default Blogs;





    {/* // for dark mood */}
    {/* <div className="bg-slate-800 text-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the blog</h2>
      <p className="mt-2 text-lg leading-8 text-gray-200">
        Learn how to grow your business with our expert advice.
      </p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.datetime} className="text-gray-400">
              {post.date}
            </time>
            <a
              href={post.category.href}
              className="relative rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-300"
            >
              {post.category.title}
            </a>
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-300">
              <a href={post.href}>
                <span className="absolute inset-0" />
                {post.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">{post.description}</p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-200" />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-100">
                <a href={post.author.href}>
                  <span className="absolute inset-0" />
                  {post.author.name}
                </a>
              </p>
              <p className="text-gray-200">{post.author.role}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</div> */}