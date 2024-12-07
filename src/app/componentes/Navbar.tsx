// "use client";
// import { useState } from "react";
// import { cn } from "@/lib/utils"; // ShadCN utility for handling classNames
// import { Button } from "@/components/ui/button"; // ShadCN button component
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white border-b shadow-md">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo Section */}
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <span className="text-xl font-bold text-blue-600">MyLogo</span>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <Link href="/home" className="text-gray-800 hover:text-blue-600">
//               Home
//             </Link>
//             <Link href="/about" className="text-gray-800 hover:text-blue-600">
//               About
//             </Link>
//             <Link href="/services" className="text-gray-800 hover:text-blue-600">
//               Services
//             </Link>
//             <Link href="/contact" className="text-gray-800 hover:text-blue-600">
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <Button
//               variant="outline"
//               onClick={() => setIsOpen(!isOpen)}
//               aria-label="Toggle navigation"
//             >
//               <span className="text-xl">☰</span>
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="space-y-4 py-4">
//               <Link href="/home" className="block text-gray-800 hover:text-blue-600">
//                 Home
//               </Link>
//               <Link href="/about" className="block text-gray-800 hover:text-blue-600">
//                 About
//               </Link>
//               <Link href="/services" className="block text-gray-800 hover:text-blue-600">
//                 Services
//               </Link>
//               <Link href="/contact" className="block text-gray-800 hover:text-blue-600">
//                 Contact
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
