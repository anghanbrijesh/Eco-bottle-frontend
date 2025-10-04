'use client';

import { Droplet, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Droplet className="w-8 h-8 text-primary-500" />
              <span className="text-2xl font-bold">EcoBottle</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Premium eco-friendly water bottles for a sustainable lifestyle. 
              Join us in reducing plastic waste one bottle at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-primary-500 transition-colors">Features</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-primary-500 transition-colors">Products</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Warranty</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EcoBottle. All rights reserved. Built for sustainability.</p>
        </div>
      </div>
    </footer>
  );
}