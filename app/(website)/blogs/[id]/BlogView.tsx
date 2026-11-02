"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { BlogPost, posts } from "../data";

interface BlogViewProps {
  post: BlogPost;
  recentPosts: BlogPost[];
  morePosts: BlogPost[];
  categories: string[];
}

export default function BlogView({
  post,
  recentPosts,
  morePosts,
  categories,
}: BlogViewProps) {
  return (
    <div>
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${post.image}')` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-brightness-[0.7]" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block bg-[#c5a37f] text-white text-[10px] uppercase tracking-widest px-4 py-1 rounded-full font-bold mb-6">
            {post.category}
          </span>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-6 tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-1">
              <Calendar size={14} className="text-[#c5a37f]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} className="text-[#c5a37f]" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={384}
                className="w-full h-96 object-cover rounded-2xl"
              />

              <div className="space-y-6 text-gray-600 leading-relaxed">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-100">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="font-bold text-[#1a1a1a]">Tags:</span>
                  <span className="bg-[#f8f7f5] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="bg-[#f8f7f5] px-3 py-1 rounded-full">
                    Luxury
                  </span>
                  <span className="bg-[#f8f7f5] px-3 py-1 rounded-full">
                    Lifestyle
                  </span>
                </div>
              </div>
            </div>

            <aside className="space-y-10">
              <div className="bg-[#f8f7f5] p-8 rounded-2xl">
                <h3 className="text-xl font-serif text-[#1a1a1a] mb-6">
                  About the Author
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#c5a37f] text-white flex items-center justify-center text-xl font-serif">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a1a]">{post.author}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      {post.category} Writer
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f8f7f5] p-8 rounded-2xl">
                <h3 className="text-xl font-serif text-[#1a1a1a] mb-6">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link
                        href={`/blogs?category=${category}`}
                        className="flex items-center justify-between text-sm text-gray-600 hover:text-[#c5a37f] transition-colors"
                      >
                        <span>{category}</span>
                        <span className="text-xs text-gray-400">
                          {posts.filter((p) => p.category === category).length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f8f7f5] p-8 rounded-2xl">
                <h3 className="text-xl font-serif text-[#1a1a1a] mb-6">
                  Recent Posts
                </h3>
                <ul className="space-y-6">
                  {recentPosts.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/blogs/${p.id}`}
                        className="group flex gap-4"
                      >
                        <Image
                          src={p.image}
                          alt={p.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-xl shrink-0"
                        />
                        <div>
                          <h4 className="font-serif text-sm text-[#1a1a1a] group-hover:text-[#c5a37f] transition-colors leading-snug">
                            {p.title}
                          </h4>
                          <span className="text-xs text-gray-400">
                            {p.date}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8f7f5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#c5a37f]"></span>
                <p className="text-[#c5a37f] font-medium uppercase tracking-widest text-sm">
                  Keep Reading
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1a1a1a]">
                More Posts
              </h2>
            </div>
            <Link
              href="/blogs"
              className="flex items-center gap-2 text-[#1a1a1a] font-medium hover:text-[#c5a37f] transition-colors group"
            >
              View All Posts
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {morePosts.map((p) => (
              <Link
                href={`/blogs/${p.id}`}
                key={p.id}
                className="group block"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-[#c5a37f] text-white text-[10px] uppercase tracking-widest px-4 py-1 rounded-full font-bold">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#1a1a1a] mb-3 group-hover:text-[#c5a37f] transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <span className="text-xs text-gray-400">{p.date}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
