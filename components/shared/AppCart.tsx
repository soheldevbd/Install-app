import { IApp } from '@/types/app.type'
import Link from 'next/link'
import React from 'react'
interface IAppProps {
    app: IApp

}
const AppCart = ({ app }: IAppProps) => {
    return (
        <div>
            <div
                key={app.id}
                className="rounded-xl border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
                <img
                    src={app.image}
                    alt={app.title}
                    className="h-48 w-full rounded-lg object-cover"
                />

                <div className="mt-4">
                    <h3 className="text-xl font-bold">{app.title}</h3>

                    <p className="text-sm text-gray-500">
                        {app.companyName}
                    </p>

                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                        {app.description}
                    </p>

                    <div className="mt-4 flex justify-between text-sm">
                        <span>⭐ {app.ratingAvg}</span>
                        <span>⬇️ {app.downloads}</span>
                    </div>

                    <div className="mt-2 text-sm text-gray-500">
                        {app.reviews} reviews • {app.size} MB
                    </div>

                    <Link
                        href={`/Apps/${app.id}`}
                        className="mt-4 block w-full rounded-lg bg-black px-4 py-2 text-center text-white transition hover:bg-gray-800"
                    >
                        View Details
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default AppCart