import React from 'react'

const ButonGit = ({url}) => {
  return (
    <div className="flex justify-center mt-6">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-lg text-base font-medium rounded-full text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition duration-150 ease-in-out"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12 0C5.371 0 0 5.371 0 12c0 5.304 3.438 9.8 8.207 11.387.6.111.793-.261.793-.578 0-.287-.01-1.044-.016-2.05-3.338.728-4.042-1.607-4.042-1.607-.546-1.388-1.333-1.758-1.333-1.758-1.09-.745.082-.73.082-.73 1.204.084 1.837 1.236 1.837 1.236 1.07 1.834 2.807 1.304 3.493.997.108-.774.418-1.304.762-1.605-2.665-.305-5.467-1.333-5.467-5.933 0-1.31.469-2.381 1.236-3.221-.125-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.302 1.231.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.006.404 2.292-1.553 3.298-1.231 3.298-1.231.653 1.653.243 2.876.118 3.18.769.84 1.234 1.911 1.234 3.221 0 4.609-2.806 5.625-5.478 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.902-.014 3.296 0 .319.19.694.8.576C20.565 21.796 24 17.302 24 12 24 5.371 18.627 0 12 0z"
          clipRule="evenodd"
        />
      </svg>
      GitHub
    </a>
  </div>
  )
}

export default ButonGit