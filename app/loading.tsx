import React from 'react'

const loading = () => {
  return (
      <div className="rounded-xl border bg-white p-4 shadow-sm">
      {/* Image Skeleton */}
      <div className="h-48 w-full animate-pulse rounded-lg bg-gray-200" />

      {/* Content Skeleton */}
      <div className="mt-4 animate-pulse">
        {/* Title */}
        <div className="h-6 w-3/4 rounded bg-gray-200" />

        {/* Company */}
        <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />

        {/* Description */}
        <div className="mt-4 space-y-2">
          <div className="h-3 w-full rounded bg-gray-200" />
          <div className="h-3 w-5/6 rounded bg-gray-200" />
        </div>

        {/* Rating & Downloads */}
        <div className="mt-4 flex justify-between">
          <div className="h-4 w-16 rounded bg-gray-200" />
          <div className="h-4 w-20 rounded bg-gray-200" />
        </div>

        {/* Reviews */}
        <div className="mt-3 h-4 w-32 rounded bg-gray-200" />

        {/* Button */}
        <div className="mt-4 h-10 w-full rounded-lg bg-gray-200" />
      </div>
    </div>
  )
}

export default loading