"use client"
import React from 'react'

const FlexBox = () => {
  return (
    <>
        <div className="flex flex-row w-auto m-4 h-96 gap-2">
        <div className="p-4 text-white bg-gray-500 rounded w-1/4">1</div>
        <div className="p-4 text-white bg-gray-500 rounded w-1/4">2</div>
        <div className="p-4 text-white bg-gray-500 rounded w-1/4">3</div>
        <div className="p-4 text-white bg-gray-500 rounded w-1/4">4</div>
        </div>
    </>
  )
}

export default FlexBox