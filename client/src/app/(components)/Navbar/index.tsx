"use client";

import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state'
import { Menu, Moon, Search, Settings, Sun } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed)
  const isDarkMode = useAppSelector(state => state.global.isDarkMode)
  console.log("isDarkMode:", isDarkMode)

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [isDarkMode])

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      <div className="flex items-center gap-8">
        {isSidebarCollapsed && (
          <button onClick={() => dispatch(setIsSidebarCollapsed(false))}>
            <Menu className="h-8 w-8 dark:text-white" />
          </button>
        )}

        <div className="relative w-50">
          <Search className="absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 dark:text-white" />
          <input
            className="w-full rounded bg-gray-100 p-2 pl-8 focus:outline-none dark:bg-gray-700 dark:text-white"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 dark:text-white" />
          ) : (
            <Moon className="h-6 w-6 dark:text-white" />
          )}
        </button>

        <Link
          href="/settings"
          className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Settings className="h-6 w-6 dark:text-white" />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
