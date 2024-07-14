import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-6">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-center text-blue-900 mb-4">Thejas Shetty</h1>
      <p className="text-xl text-center text-gray-700 mb-6">CSE Undergraduate Student</p>
      <div className="text-lg text-gray-800">
        <h2 className="text-2xl font-semibold mb-2">Things I Have Learned:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Setting up a Next.js project</li>
          <li>Dynamic Routes in Next.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  </main>
  )
}

export default page
