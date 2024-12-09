"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { SignedIn } from '@clerk/nextjs'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
  
const MobileNav = () => {
    const pathname = usePathname()
  return (
    <header className="header">
        <Link href="/" className="flex-center items-center gap-2 md:py-2">
            <Image src="/assets/images/logo-text.svg" alt="Imagefy" width={180} height={28} />
        </Link>

        <nav className="flex gap-2">
            <SignedIn>
                <UserButton/>
                <Sheet>
                <SheetTrigger>
                    <Image src="/assets/icons/menu.svg" alt="menu" width={32} height={32}  className='cursor-pointer'/>
                </SheetTrigger>
                <SheetContent className='sheet-content sm:w-64'>
                    <>
                        <Image src="/assets/images/logo-text.svg" alt="Imagefy" width={152} height={23} />
                        <ul className="header-nav_elements">
                            {navLinks.slice(0, 6).map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li key={link.route} className={`${
                                        isActive && "gradient-text"} p-18 flex whitespace-nowrap text-dark-700`}>
                                        
                                        <Link href={link.route} className="sidebar-link cursor-pointer">
                                            <Image src={link.icon} alt={link.label} width={24} height={24} />
                                            {link.label}
                                        </Link>
                                        
                                    </li>
                                    
                                )
                            })}
                            </ul>
                            <ul className="header-nav_elements">
                                {navLinks.slice(6).map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route} className={`${
                                            isActive && "gradient-text"} p-18 flex whitespace-nowrap text-dark-700`}>
                                            <Link href={link.route} className="sidebar-link cursor-pointer">
                                                <Image src={link.icon} alt={link.label} width={24} height={24} />
                                                {link.label}
                                            </Link>
                                        </li>
                                    )
                                })}
                            <li className="flex-center cursor-pointer gap-2 p-4">
                                <UserButton showName/>
                            </li>
                        </ul>
                    </>
                </SheetContent>
                </Sheet>
            </SignedIn>
            <SignedOut>
                <Button asChild size="icon" className="button bg-purple-gradient bg-cover">
                    <Link href="/sign-in">
                        Login
                    </Link>
                </Button>
            </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav