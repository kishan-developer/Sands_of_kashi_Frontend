"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { posts } from "../data";

export default function BlogSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link
              href={`/blogs/${post.id}`}
              key={post.id}
              className="group block"
            >
              <article className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-[#c5a37f] text-white text-[10px] uppercase tracking-widest px-4 py-1 rounded-full font-bold">
                    {post.category}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-gray-400 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-[#c5a37f]" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} className="text-[#c5a37f]" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif text-[#1a1a1a] mb-4 group-hover:text-[#c5a37f] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1a1a1a] group-hover:text-[#c5a37f] transition-colors">
                      Read More
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-2 transition-transform duration-300 text-[#c5a37f]"
                      />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/blogs"
            className="inline-block px-10 py-4 text-[#c5a37f] border border-gray-200 rounded-md text-sm font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
